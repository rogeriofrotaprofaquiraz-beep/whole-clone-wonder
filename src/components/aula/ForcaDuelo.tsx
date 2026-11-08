import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { areaMeta, AreaValue, LevelValue } from "@/lib/aula";
import { addCoins } from "@/lib/playerEconomy";
import { recordHit, recordMiss } from "@/lib/gameStats";
import { loadSeen, pickUnseen, saveSeen } from "@/lib/questionPicker";
import { COINS_RIGHT } from "@/lib/miniGames";
import { Skull } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;
type P = 0 | 1;
const NAMES = ["Jogador 1", "Jogador 2"];
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

export function ForcaDuelo({ area, level, difficulty }: { area: AreaValue; level: LevelValue; difficulty: number }) {
  const meta = areaMeta(area);
  const [term, setTerm] = useState<any | null>(null);
  const [qPool, setQPool] = useState<any[]>([]);
  const [q, setQ] = useState<any | null>(null);
  const [locked, setLocked] = useState<P[]>([]);
  const [turn, setTurn] = useState<P | null>(null); // quem dá o palpite
  const [guessed, setGuessed] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);
  const [pot, setPot] = useState<[number, number]>([0, 0]);
  const [winner, setWinner] = useState<P | null>(null);
  const [word, setWord] = useState("");
  const [empty, setEmpty] = useState(false);

  const scope = async () => (await supabase.auth.getUser()).data.user?.id ?? "anon";

  const newRound = async () => {
    const s = await scope();
    const { data: terms } = await supabase.from("chem_terms").select("*")
      .eq("area", area).eq("school_level", level).eq("difficulty", difficulty).limit(200);
    const { data: qs } = await supabase.from("chem_questions")
      .select("id,question,options,correct_index").lte("difficulty", 2).limit(1000);
    const validQ = (qs ?? []).filter((r: any) => Array.isArray(r.options) && r.options[r.correct_index] != null);
    if (!terms?.length || !validQ.length) { setEmpty(true); return; }
    const t = pickUnseen(terms as any[], loadSeen(`forca:${s}`), 1);
    saveSeen(`forca:${s}`, t.seen);
    setTerm(t.picked[0]); setQPool(validQ);
    setGuessed([]); setErrors(0); setPot([0, 0]); setWinner(null); setTurn(null); setWord("");
    nextQuestion(validQ, s);
  };

  const nextQuestion = async (pool = qPool, s?: string) => {
    const sc = s ?? (await scope());
    const r = pickUnseen(pool, loadSeen(`q:${sc}`), 1);
    saveSeen(`q:${sc}`, r.seen);
    const raw = r.picked[0];
    setQ({ ...raw, opts: shuffle(raw.options.map(String)), correct: String(raw.options[raw.correct_index]) });
    setLocked([]); setTurn(null);
  };

  useEffect(() => { newRound(); }, [area, level, difficulty]);

  if (empty) return <Card className="p-6 text-center">Sem palavras ou perguntas para essa combinação. Peça ao professor para gerar.</Card>;
  if (!term || !q) return <Card className="p-6 text-center">Carregando…</Card>;

  const T: string = term.term;
  const set = new Set(guessed);
  const finished = winner !== null;

  const finish = (w: P, why: string) => {
    setWinner(w);
    const prize = pot[w] + COINS_RIGHT;
    toast.success(`${NAMES[w]} venceu! ${why} +${prize} ⚛`);
    recordHit(prize, "forca");
    supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, prize).catch(() => {}); });
  };

  const answer = (p: P, o: string) => {
    if (turn !== null || locked.includes(p) || finished) return;
    if (o === q.correct) { setTurn(p); toast.info(`${NAMES[p]} respondeu primeiro! Escolha uma letra.`); return; }
    const l = [...locked, p] as P[];
    setLocked(l);
    toast.error(`${NAMES[p]} errou a pergunta.`);
    if (l.length === 2) nextQuestion();
  };

  const guess = (letter: string) => {
    if (turn === null || finished || set.has(letter)) return;
    const p = turn;
    const next = [...guessed, letter];
    setGuessed(next);
    if (T.includes(letter)) {
      const np: [number, number] = [...pot] as any; np[p] += COINS_RIGHT; setPot(np);
      if ([...T].every((c) => new Set(next).has(c))) {
        setWinner(p);
        const prize = np[p] + COINS_RIGHT;
        toast.success(`${NAMES[p]} completou a palavra! +${prize} ⚛`);
        recordHit(prize, "forca");
        supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, prize).catch(() => {}); });
        return;
      }
    } else {
      const e = errors + 1; setErrors(e);
      if (e >= MAX_ERRORS) { recordMiss("forca"); finish((1 - p) as P, `${NAMES[p]} completou a forca e perdeu as moedas.`); return; }
    }
    nextQuestion();
  };

  const guessWord = () => {
    if (turn === null || finished || !word.trim()) return;
    const p = turn;
    if (word.trim().toUpperCase() === T) { setGuessed([...new Set([...guessed, ...T])]); finish(p, "Acertou a palavra!"); }
    else { recordMiss("forca"); finish((1 - p) as P, `${NAMES[p]} errou a palavra e perdeu as moedas.`); }
  };

  return (
    <div className="space-y-4">
      {/* JOGO EM CIMA */}
      <Card className="p-6 text-center space-y-4" style={{ borderTop: `6px solid ${meta.color}` }}>
        <div className="flex justify-between items-center">
          {[0, 1].map((i) => (
            <Badge key={i} variant={turn === i ? "default" : "outline"} className="text-sm px-3 py-1">
              {NAMES[i]} · {pot[i]} ⚛ {winner === i && "🏆"}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {Array.from({ length: MAX_ERRORS }).map((_, i) => <Skull key={i} size={20} className={i < errors ? "text-destructive" : "text-muted"} />)}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[...T].map((c, i) => (
            <div key={i} className="w-10 h-12 border-b-4 flex items-center justify-center text-2xl font-black" style={{ borderColor: meta.color }}>
              {set.has(c) || finished ? c : ""}
            </div>
          ))}
        </div>
        <div className="text-xs text-muted-foreground italic">Dica: {term.clue}</div>
        {finished ? (
          <div className="space-y-2">
            <div className="text-2xl font-black">🏆 {NAMES[winner!]} venceu! A palavra era {T}.</div>
            <div className="text-xs text-muted-foreground">Quem errou não ganha as moedas conquistadas.</div>
            <Button onClick={newRound}>Nova palavra</Button>
          </div>
        ) : turn !== null ? (
          <div className="space-y-3">
            <div className="font-bold">🎯 Vez de {NAMES[turn]}: escolha uma letra ou chute a palavra</div>
            <div className="grid grid-cols-7 md:grid-cols-[repeat(13,minmax(0,1fr))] gap-1 max-w-2xl mx-auto">
              {ALPHABET.map((l) => (
                <Button key={l} size="sm" variant={set.has(l) ? "secondary" : "outline"} disabled={set.has(l)} onClick={() => guess(l)}>{l}</Button>
              ))}
            </div>
            <div className="flex gap-2 max-w-sm mx-auto">
              <Input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Chutar a palavra inteira" />
              <Button variant="destructive" onClick={guessWord}>Chutar</Button>
            </div>
          </div>
        ) : <div className="text-sm text-muted-foreground">Responda a pergunta abaixo para ganhar a chance de dar o palpite.</div>}
      </Card>

      {/* PERGUNTA EMBAIXO */}
      {!finished && (
        <Card className="p-5 space-y-3">
          <div className="text-center font-bold">❓ {q.question}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {[0, 1].map((p) => (
              <div key={p} className={`space-y-2 rounded-xl border p-3 ${locked.includes(p as P) ? "opacity-40" : ""}`}>
                <div className="text-sm font-bold text-center">{NAMES[p]}</div>
                {q.opts.map((o: string) => (
                  <Button key={o} variant="outline" className="w-full h-auto whitespace-normal" disabled={turn !== null || locked.includes(p as P)}
                    onClick={() => answer(p as P, o)}>{o}</Button>
                ))}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
