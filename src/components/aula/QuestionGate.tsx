import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type Q = { id: string; question: string; options: string[]; correct_index: number; difficulty: number; explanation: string | null };

/** Uma pergunta de nível (dificuldade) aleatório que libera a fase do jogo. Errou = não passa. */
export function QuestionGate({ area, level, phase, onPass }: { area: string; level: string; phase: number; onPass: () => void }) {
  const [q, setQ] = useState<Q | null>(null);
  const [loading, setLoading] = useState(true);
  const [picked, setPicked] = useState<number | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true); setPicked(null); setQ(null);
      const difficulty = 1 + Math.floor(Math.random() * 5);
      const base = () => supabase.from("chem_questions").select("id,question,options,correct_index,difficulty,explanation").eq("area", area as never);
      let { data } = await base().eq("difficulty", difficulty).contains("school_levels", [level]).limit(50);
      if (!data?.length) ({ data } = await base().contains("school_levels", [level]).limit(50));
      if (!data?.length) ({ data } = await base().limit(50));
      if (!alive) return;
      const list = (data ?? []) as unknown as Q[];
      setQ(list.length ? list[Math.floor(Math.random() * list.length)] : null);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, [area, level, nonce]);

  if (loading) return <Card className="p-6 text-sm text-muted-foreground">Sorteando pergunta…</Card>;
  if (!q) return (
    <Card className="p-6 space-y-3">
      <div className="text-sm">Ainda não há perguntas no banco para esta área. Peça ao professor para gerar o banco de questões.</div>
      <Button onClick={onPass}>Jogar mesmo assim</Button>
    </Card>
  );

  const answered = picked !== null;
  const right = picked === q.correct_index;
  return (
    <Card className="p-6 space-y-4">
      <div className="flex justify-between text-xs font-bold text-muted-foreground">
        <span>🔐 Fase {phase} · responda para liberar o jogo</span>
        <span>{"★".repeat(q.difficulty)} nível {q.difficulty}</span>
      </div>
      <div className="text-lg font-bold">{q.question}</div>
      <div className="grid gap-2">
        {q.options.map((o, i) => {
          const cls = !answered ? "bg-card hover:bg-muted" : i === q.correct_index ? "bg-primary text-primary-foreground" : i === picked ? "bg-destructive text-destructive-foreground" : "bg-card opacity-60";
          return (
            <button key={i} disabled={answered} onClick={() => setPicked(i)} className={`text-left px-4 py-3 rounded-lg border-2 font-medium transition ${cls}`}>
              {String.fromCharCode(65 + i)}) {o}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="space-y-3">
          <div className="font-bold">{right ? "✅ Acertou! O jogo está liberado." : "❌ Errou. Você não passa para a próxima fase."}</div>
          {q.explanation && <div className="text-sm text-muted-foreground">{q.explanation}</div>}
          {right ? <Button onClick={onPass}>🎮 Jogar fase {phase}</Button> : <Button variant="outline" onClick={() => setNonce((n) => n + 1)}>🔁 Tentar outra pergunta</Button>}
        </div>
      )}
    </Card>
  );
}
