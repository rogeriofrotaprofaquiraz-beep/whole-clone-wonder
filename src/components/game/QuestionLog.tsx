import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Row = { id: string; game: string; question: string; answer: string | null; correct_answer: string | null; is_correct: boolean; created_at: string };

export async function logGameQuestion(game: string, question: string, answer: string, correct: string, isCorrect: boolean) {
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  await supabase.from("game_question_log").insert({ user_id: data.user.id, game, question, answer, correct_answer: correct, is_correct: isCorrect });
}

/** Lista das perguntas respondidas pelo aluno nos jogos. */
export function QuestionLog({ userId }: { userId: string }) {
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    supabase.from("game_question_log").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(100)
      .then(({ data }) => setRows((data ?? []) as Row[]));
  }, [userId]);
  const right = rows.filter((r) => r.is_correct).length;
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-muted-foreground">📝 Perguntas respondidas nos jogos ({right}/{rows.length} certas)</p>
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
