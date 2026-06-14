import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { areaMeta, AreaValue, computeScore, LevelValue } from "@/lib/aula";
import { addCoins, coinsFor } from "@/lib/playerEconomy";
import { ElementCardsPopup } from "@/components/aula/ElementCard";
import { RotateCcw, Skull, Trophy, Lightbulb, Timer, Coins } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;

export function Forca({ area, level, difficulty }: { area: AreaValue; level: LevelValue; difficulty: number }) {
  const [pool, setPool] = useState<any[]>([]);
  const [current, setCurrent] = useState<any | null>(null);
  const [guessed, setGuessed] = useState<string[]>([]); // ordem de tentativa
  const [errors, setErrors] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);
  const [hintRevealed, setHintRevealed] = useState(false);
  const [wins, setWins] = useState(0);
  const [score, setScore] = useState(0);
  const [startedAt, setStartedAt] = useState<number>(Date.now());
  const [now, setNow] = useState<number>(Date.now());
  const meta = areaMeta(area);

  useEffect(() => {
    supabase.from("chem_terms").select("*")
      .eq("area", area).eq("school_level", level).eq("difficulty", difficulty).limit(100)
      .then(({ data }) => { setPool(data ?? []); });
  }, [area, level, difficulty]);

  useEffect(() => { if (pool.length) pickNext(pool); }, [pool]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  const pickNext = (p: any[]) => {
    if (!p.length) return;
    setCurrent(p[Math.floor(Math.random() * p.length)]);
    setGuessed([]); setErrors(0); setConsecutiveWrong(0); setHintRevealed(false);
    setStartedAt(Date.now()); setNow(Date.now());
  };

  const wrongLetters = useMemo(
    () => current ? guessed.filter((l) => !current.term.includes(l)) : [],
    [guessed, current]
  );

  if (!pool.length) {
    return <Card className="p-6 text-center">Sem termos para essa combinação (área · nível · dificuldade). Peça ao professor para gerar.</Card>;
  }
  if (!current) return null;

  const term: string = current.term;
  const guessedSet = new Set(guessed);
  const won = [...term].every((c) => guessedSet.has(c));
  const lost = errors >= MAX_ERRORS;
  const finished = won || lost;
  const elapsed = finished ? 0 : (now - startedAt);

  const guess = (letter: string) => {
    if (finished || guessedSet.has(letter)) return;
    const next = [...guessed, letter];
    setGuessed(next);
    const isWrong = !term.includes(letter);
    if (isWrong) {
      const c = consecutiveWrong + 1;
      setConsecutiveWrong(c);
      setErrors((e) => e + 1);
      if (c >= 2 && !hintRevealed) {
        setHintRevealed(true);
        toast.info("Dica revelada! (sua pontuação será menor)");
      }
    } else {
      setConsecutiveWrong(0);
      if ([...term].every((c) => new Set(next).has(c))) {
        const elapsedMs = Date.now() - startedAt;
        const pts = computeScore({
          difficulty, elapsedMs, maxMs: 90_000,
          penalty: (hintRevealed ? 0.4 : 0) + Math.min(0.3, errors * 0.05),
          correct: true,
        });
        const coins = coinsFor(difficulty, elapsedMs);
        setScore((s) => s + pts);
        setWins((w) => w + 1);
        toast.success(`Acertou! +${pts} pts · +${coins} 🪙`);
        supabase.auth.getUser().then(({ data }) => {
          if (data.user) addCoins(data.user.id, coins).catch(() => {});
        });
      }
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${meta.color}` }}>
        <div className="text-3xl">{meta.emoji}</div>
        <div className="flex-1">
          <div className="font-bold">Forca · {meta.label}</div>
          <div className="text-xs text-muted-foreground">
            Dificuldade {difficulty}/5 · {level === "fundamental" ? "Fundamental" : "Médio"}
          </div>
        </div>
        <Badge variant="outline"><Timer size={12} className="mr-1" />{Math.floor(elapsed / 1000)}s</Badge>
        <Badge style={{ background: meta.color, color: "white" }}>{score} pts</Badge>
        <Badge><Trophy size={12} className="mr-1" />{wins}</Badge>
      </Card>

      <Card className="p-6 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: MAX_ERRORS }).map((_, i) => (
            <Skull key={i} size={20} className={i < errors ? "text-red-500" : "text-gray-200"} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {[...term].map((c, i) => (
            <div key={i} className="w-10 h-12 border-b-4 flex items-center justify-center text-2xl font-black"
                 style={{ borderColor: meta.color }}>
              {guessedSet.has(c) || finished ? c : ""}
            </div>
          ))}
        </div>

        {hintRevealed && !finished && (
          <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-center justify-center gap-2">
            <Lightbulb size={16} /> <span className="italic">{current.clue}</span>
          </div>
        )}

        <div className="mb-4">
          <div className="text-xs text-muted-foreground mb-1">Letras erradas ({wrongLetters.length})</div>
          <div className="flex flex-wrap justify-center gap-1 min-h-7">
            {wrongLetters.map((l) => (
              <span key={l} className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-sm font-mono line-through">{l}</span>
            ))}
            {wrongLetters.length === 0 && <span className="text-xs text-muted-foreground">—</span>}
          </div>
        </div>

        {finished && (
          <div className="mb-4">
            <div className={`text-2xl font-black ${won ? "text-green-600" : "text-red-600"}`}>
              {won ? "🎉 Você acertou!" : `💀 Era ${term}`}
            </div>
            {!won && <div className="text-sm text-muted-foreground mt-1 italic">{current.clue}</div>}
            <Button onClick={() => pickNext(pool)} className="mt-3" style={{ background: meta.color }}>
              <RotateCcw size={14} className="mr-2" />Próxima palavra
            </Button>
          </div>
        )}

        <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
          {ALPHABET.map((l) => {
            const used = guessedSet.has(l);
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
