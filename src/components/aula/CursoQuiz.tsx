import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Q = { id: string; question: string; options: any; correct_index: number; explanation: string | null; image_url: string | null };

/** Quiz com questões do Banco ligadas ao assunto (aula) escolhido do curso. */
export function CursoQuiz({ topic }: { topic: string }) {
  const [qs, setQs] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); setI(0); setPick(null); setScore(0);
    const word = topic.replace(/^\d+\.\s*/, "").split(/[\s:–-]+/).filter((w) => w.length > 4).slice(0, 2);
    const ors = [`lesson.ilike.%${topic.replace(/[%,()]/g, "")}%`, ...word.map((w) => `topic.ilike.%${w}%`), ...word.map((w) => `question.ilike.%${w}%`)].join(",");
    supabase.from("chem_questions").select("id,question,options,correct_index,explanation,image_url").or(ors).limit(30)
      .then(({ data }) => { setQs(((data ?? []) as Q[]).sort(() => Math.random() - 0.5).slice(0, 10)); setLoading(false); });
  }, [topic]);

  if (loading) return <Card className="p-6">Carregando questões do assunto…</Card>;
  if (!qs.length) return <Card className="p-6 text-sm text-muted-foreground">Ainda não há questões no Banco para “{topic}”. O professor pode cadastrá-las informando esse assunto no campo “aula”.</Card>;
  if (i >= qs.length) return (
    <Card className="p-6 text-center space-y-3">
      <div className="text-2xl font-black">Você acertou {score} de {qs.length}!</div>
      <Button onClick={() => { setI(0); setScore(0); setPick(null); }}>Jogar de novo</Button>
    </Card>
  );
  const q = qs[i];
  const opts: string[] = Array.isArray(q.options) ? q.options : [];
  return (
    <Card className="p-6 space-y-4">
      <div className="text-xs text-muted-foreground">Assunto: {topic} · Questão {i + 1}/{qs.length}</div>
      {q.image_url && <img src={q.image_url} alt="" className="max-h-56 rounded-lg mx-auto" />}
      <div className="font-bold text-lg">{q.question}</div>
      <div className="grid gap-2">
        {opts.map((o, k) => (
          <button key={k} disabled={pick !== null}
            onClick={() => { setPick(k); if (k === q.correct_index) setScore((s) => s + 1); }}
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
