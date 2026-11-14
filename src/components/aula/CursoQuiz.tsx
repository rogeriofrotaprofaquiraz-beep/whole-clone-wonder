import { loadAnsweredQuestions, unansweredFirst, logGameQuestion } from "@/components/game/QuestionLog";
import { gameOrFilter } from "@/lib/linkedBank";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DIFFICULTIES } from "@/lib/aula";
import { addCoins, COIN_SYMBOL } from "@/lib/playerEconomy";
import { toast } from "sonner";
import { SlideView, parseSlide } from "./SlideEditor";
import { selectGameQuestions } from "@/lib/studentQuestions";

type Q = { id: string; question: string; options: any; correct_index: number; explanation: string | null; image_url: string | null; difficulty: number; slide_content: string | null };

/** Átomos por acerto conforme a dificuldade (1★ → 5★). */
export const COINS_BY_DIFFICULTY = [4, 4, 4, 4, 4];

function summaryOf(content: string | null) {
  if (!content) return "";
  const txt = content.replace(/<[^>]+>/g, " ").replace(/[#*_>`]/g, "").replace(/\s+/g, " ").trim();
  return txt.length > 600 ? txt.slice(0, 600).replace(/\s\S*$/, "") + "…" : txt;
}

/** Resumo do assunto → perguntas do mais fácil ao mais difícil, valendo Átomos. */
export function CursoQuiz({ topic, content, level }: { topic: string; content?: string | null; level?: string }) {
  const [qs, setQs] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [earned, setEarned] = useState(0);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [slideSeen, setSlideSeen] = useState<string | null>(null);
  const [round, setRound] = useState(0);

  useEffect(() => {
    setLoading(true); setI(0); setPick(null); setScore(0); setEarned(0); setStarted(false);
    selectGameQuestions({ topic, level, game: "Quiz do curso", count: 10 }).then(data => {
      const list = (data as Q[]).sort((a, b) => a.difficulty - b.difficulty);
      setQs(list); setLoading(false);
    }).catch(() => { setQs([]); setLoading(false); });
  }, [topic, level, round]);

  const answer = async (k: number) => {
    if (pick !== null) return;
    setPick(k);
    const q = qs[i];
    const opts = Array.isArray(q.options) ? q.options.map(String) : [];
    logGameQuestion("Quiz do curso", q.question, opts[k] ?? "", opts[q.correct_index] ?? "", k === q.correct_index).catch(() => {});
    if (k === q.correct_index) setScore((s) => s + 1);
    const coins = k === q.correct_index ? 4 : 1;
    const { data } = await supabase.auth.getUser();
    if (data.user) { await addCoins(data.user.id, coins); setEarned((e) => e + coins); toast.success(`+${coins} ${COIN_SYMBOL}`); }
  };

  if (loading) return <Card className="p-6">Carregando questões do assunto…</Card>;
  const resumo = summaryOf(content ?? null);
  if (!started) return (
    <Card className="p-6 space-y-4">
      <div className="text-xs text-muted-foreground">📖 Resumo do assunto</div>
      <h3 className="text-xl font-black">{topic}</h3>
      <p className="text-sm leading-relaxed">{resumo || "Leia com atenção: as perguntas a seguir são sobre este assunto e vão ficando mais difíceis."}</p>
      <div className="text-xs text-muted-foreground">
        Acertos valem: {DIFFICULTIES.map((d, k) => `${d.value}★ ${COINS_BY_DIFFICULTY[k]}${COIN_SYMBOL}`).join(" · ")}
      </div>
      {qs.length
        ? <Button onClick={() => setStarted(true)}>Começar perguntas ({qs.length})</Button>
        : <p className="text-sm text-muted-foreground">Ainda não há questões no Banco para este assunto neste nível. O professor pode cadastrá-las informando o assunto no campo “aula”.</p>}
    </Card>
  );
  if (i >= qs.length) return (
    <Card className="p-6 text-center space-y-3">
      <div className="text-2xl font-black">Você acertou {score} de {qs.length}!</div>
      <div>Ganhou {earned} {COIN_SYMBOL}</div>
      <Button onClick={() => setRound(r => r + 1)}>Novas perguntas</Button>
    </Card>
  );
  const q = qs[i];
  if (q.slide_content && slideSeen !== q.id) return (
    <Card className="p-8 space-y-4 min-h-[320px] flex flex-col justify-center">
      <div className="text-xs text-muted-foreground">🖥️ Slide · Questão {i + 1}/{qs.length}</div>
      {(() => { const slide = parseSlide(q.slide_content, q.image_url); return slide ? <SlideView slide={{ ...slide, image: q.image_url }} /> : null; })()}
      <Button onClick={() => setSlideSeen(q.id)}>Ir para a questão</Button>
    </Card>
  );
  const opts: string[] = Array.isArray(q.options) ? q.options : [];
  const d = Math.max(1, Math.min(5, q.difficulty));
  return (
    <Card className="p-6 space-y-4">
      <div className="text-xs text-muted-foreground">Assunto: {topic} · Questão {i + 1}/{qs.length} · {"★".repeat(d)} {DIFFICULTIES[d - 1].label} · vale {COINS_BY_DIFFICULTY[d - 1]}{COIN_SYMBOL}</div>
      {q.image_url && <img src={q.image_url} alt="" className="max-h-56 rounded-lg mx-auto" />}
      <div className="font-bold text-lg">{q.question}</div>
      <div className="grid gap-2">
        {opts.map((o, k) => (
          <button key={k} disabled={pick !== null} onClick={() => answer(k)}
            className={`text-left px-3 py-2 rounded-lg border-2 ${pick === null ? "hover:bg-muted" : k === q.correct_index ? "border-green-600 bg-green-50" : k === pick ? "border-red-600 bg-red-50" : ""}`}>
            {o}
          </button>
        ))}
      </div>
      {pick !== null && (
        <>
          {q.explanation && <p className="text-sm text-muted-foreground">{q.explanation}</p>}
          <Button onClick={() => { setI(i + 1); setPick(null); }}>Próxima</Button>
        </>
      )}
    </Card>
  );
}
