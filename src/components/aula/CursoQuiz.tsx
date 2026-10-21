import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DIFFICULTIES } from "@/lib/aula";
import { addCoins, COIN_SYMBOL } from "@/lib/playerEconomy";
import { toast } from "sonner";

type Q = { id: string; question: string; options: any; correct_index: number; explanation: string | null; image_url: string | null; difficulty: number; slide_content: string | null };

/** Átomos por acerto conforme a dificuldade (1★ → 5★). */
export const COINS_BY_DIFFICULTY = [1, 2, 4, 7, 10];

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

  useEffect(() => {
    setLoading(true); setI(0); setPick(null); setScore(0); setEarned(0); setStarted(false);
    const word = topic.replace(/^\d+\.\s*/, "").split(/[\s:–-]+/).filter((w) => w.length > 4).slice(0, 2);
    const ors = [`lesson.ilike.%${topic.replace(/[%,()]/g, "")}%`, ...word.map((w) => `topic.ilike.%${w}%`), ...word.map((w) => `question.ilike.%${w}%`)].join(",");
    let q = supabase.from("chem_questions").select("id,question,options,correct_index,explanation,image_url,difficulty,slide_content").or(ors).limit(40);
    if (level) q = q.or(`school_level.eq.${level},school_levels.cs.{${level}}`);
    q.then(({ data }) => {
      const list = ((data ?? []) as Q[]).sort(() => Math.random() - 0.5).slice(0, 10).sort((a, b) => a.difficulty - b.difficulty);
      setQs(list); setLoading(false);
    });
  }, [topic, level]);

  const answer = async (k: number) => {
    setPick(k);
    const q = qs[i];
    if (k !== q.correct_index) return;
    setScore((s) => s + 1);
    const coins = COINS_BY_DIFFICULTY[Math.max(1, Math.min(5, q.difficulty)) - 1];
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
      <Button onClick={() => { setI(0); setScore(0); setEarned(0); setPick(null); setStarted(false); }}>Jogar de novo</Button>
    </Card>
  );
  const q = qs[i];
  if (q.slide_content && slideSeen !== q.id) return (
    <Card className="p-8 space-y-4 min-h-[320px] flex flex-col justify-center">
      <div className="text-xs text-muted-foreground">🖥️ Slide · Questão {i + 1}/{qs.length}</div>
      {q.image_url && <img src={q.image_url} alt="" className="max-h-56 rounded-lg mx-auto" />}
      <div className="text-lg leading-relaxed whitespace-pre-line">{q.slide_content}</div>
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
