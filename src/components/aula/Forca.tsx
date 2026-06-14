import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { areaMeta, AreaValue } from "@/lib/aula";
import { RotateCcw, Skull, Trophy } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;

export function Forca({ area }: { area: AreaValue }) {
  const [pool, setPool] = useState<any[]>([]);
  const [current, setCurrent] = useState<any | null>(null);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  const [wins, setWins] = useState(0);
  const meta = areaMeta(area);

  useEffect(() => {
    supabase.from("chem_terms").select("*").eq("area", area).limit(100)
      .then(({ data }) => { setPool(data ?? []); });
  }, [area]);

  useEffect(() => { if (pool.length) pickNext(pool); }, [pool]);

  const pickNext = (p: any[]) => {
    if (!p.length) return;
    setCurrent(p[Math.floor(Math.random() * p.length)]);
    setGuessed(new Set());
    setErrors(0);
  };

  if (!pool.length) {
    return <Card className="p-6 text-center">Sem termos para essa área. Peça ao professor para gerar com IA no painel.</Card>;
  }
  if (!current) return null;

  const term: string = current.term;
  const won = [...term].every((c) => guessed.has(c));
  const lost = errors >= MAX_ERRORS;
  const finished = won || lost;

  const guess = (letter: string) => {
    if (finished || guessed.has(letter)) return;
    const next = new Set(guessed); next.add(letter); setGuessed(next);
    if (!term.includes(letter)) setErrors((e) => e + 1);
    else if ([...term].every((c) => next.has(c))) {
      setWins((w) => w + 1);
      toast.success("Acertou!");
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${meta.color}` }}>
        <div className="text-3xl">{meta.emoji}</div>
        <div className="flex-1">
          <div className="font-bold">Forca · {meta.label}</div>
          <div className="text-xs text-muted-foreground italic">{current.clue}</div>
        </div>
        <Badge><Trophy size={12} className="mr-1" />{wins}</Badge>
      </Card>

      <Card className="p-6 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: MAX_ERRORS }).map((_, i) => (
            <Skull key={i} size={20} className={i < errors ? "text-red-500" : "text-gray-200"} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[...term].map((c, i) => (
            <div key={i} className="w-10 h-12 border-b-4 flex items-center justify-center text-2xl font-black"
                 style={{ borderColor: meta.color }}>
              {guessed.has(c) || finished ? c : ""}
            </div>
          ))}
        </div>
        {finished && (
          <div className="mb-4">
            <div className={`text-2xl font-black ${won ? "text-green-600" : "text-red-600"}`}>
              {won ? "🎉 Você acertou!" : `💀 Era ${term}`}
            </div>
            <Button onClick={() => pickNext(pool)} className="mt-3" style={{ background: meta.color }}>
              <RotateCcw size={14} className="mr-2" />Próxima palavra
            </Button>
          </div>
        )}
        <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
          {ALPHABET.map((l) => {
            const used = guessed.has(l);
            const inWord = term.includes(l);
            return (
              <Button key={l} size="sm" variant={used ? "secondary" : "outline"} disabled={used || finished} onClick={() => guess(l)}
                      className={used ? (inWord ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700") : ""}>
                {l}
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
