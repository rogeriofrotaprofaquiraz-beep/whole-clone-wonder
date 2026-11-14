import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { accuracy, freshQuestions, submitGameAnswer } from "@/lib/studentQuestions";

type Row = { id: string; game: string; question: string; answer: string | null; correct_answer: string | null; is_correct: boolean; created_at: string };

export async function logGameQuestion(game: string, question: string, answer: string, correct: string, isCorrect: boolean) {
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  const { data: history, error } = await supabase.from("student_question_history").select("question_id,answered_at").eq("user_id", data.user.id).eq("question_text", question).maybeSingle();
  if (error) throw error;
  if (history?.answered_at) return;
  if (history) { await submitGameAnswer(history.question_id, answer); return; }
  const { error: insertError } = await supabase.from("game_question_log").insert({ user_id: data.user.id, game, question, answer, correct_answer: correct, is_correct: isCorrect });
  if (insertError) throw insertError;
}

/** Textos das perguntas já respondidas pelo aluno logado (em qualquer aparelho). */
export async function loadAnsweredQuestions(): Promise<Set<string>> {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) return new Set();
  const { data } = await supabase.from("game_question_log").select("question").eq("user_id", u.user.id).limit(5000);
  return new Set((data ?? []).map((r) => r.question.trim().toLowerCase()));
}

/** Coloca primeiro as perguntas ainda não vistas pelo aluno (embaralhadas); as já vistas só entram se faltar. */
export function unansweredFirst<T extends { question: string }>(pool: T[], answered: Set<string>): T[] {
  const mix = <X,>(a: X[]) => [...a].sort(() => Math.random() - 0.5);
  return mix(freshQuestions(pool, answered));
}

/** Lista das perguntas respondidas pelo aluno nos jogos. */
export function QuestionLog({ userId }: { userId: string }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [shown, setShown] = useState(0);
  const [total, setTotal] = useState(0);
  const [right, setRight] = useState(0);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    (async () => {
      const all: Row[] = [];
      for (let offset = 0; ; offset += 500) {
        const { data, error } = await supabase.from("game_question_log").select("*").eq("user_id", userId).order("created_at", { ascending: false }).range(offset, offset + 499);
        if (error) break;
        all.push(...(data ?? []));
        if (!data || data.length < 500) break;
      }
      setRows(all); const stats = accuracy(all); setTotal(stats.answered); setRight(stats.right);
      const { count } = await supabase.from("student_question_history").select("question_id", { count: "exact", head: true }).eq("user_id", userId).is("answered_at", null);
      setShown(count ?? 0); setPoints(all.reduce((sum, r) => sum + (r.is_correct ? 4 : 1), 0));
    })();
  }, [userId]);
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">📝 Dossiê de questões</h3>
      <p className="text-sm text-muted-foreground">{right}/{total} acertos · {total ? Math.round(right * 100 / total) : 0}% de acerto · {points} pontos · {shown} apresentadas sem resposta</p>
      {!rows.length ? <p className="text-sm text-muted-foreground">Nenhuma pergunta respondida ainda.</p> : (
        <div className="max-h-64 overflow-auto rounded-lg border divide-y">
          {rows.map((r) => (
            <div key={r.id} className="p-2 text-sm">
              <div className="flex justify-between gap-2 text-[10px] text-muted-foreground"><span>{r.game}</span><span>{new Date(r.created_at).toLocaleString("pt-BR")}</span></div>
              <div className="font-medium">{r.is_correct ? "✅" : "❌"} {r.question}</div>
              <div className="text-xs text-muted-foreground">Resposta: {r.answer}{!r.is_correct && r.correct_answer ? ` · Certa: ${r.correct_answer}` : ""}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
