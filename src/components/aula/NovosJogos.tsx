import { loadLinkedTerms, loadLinkedQuestions } from "@/lib/linkedBank";
import { QUESTION_COUNTS } from "@/lib/miniGames";
import { recordHit, recordMiss } from "@/lib/gameStats";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { logGameQuestion } from "@/components/game/QuestionLog";
import { RotateCcw, Trophy } from "lucide-react";
import { addCoins } from "@/lib/playerEconomy";
import { areaMeta, AreaValue } from "@/lib/aula";
import { ELEMENTS_DATA } from "@/data/elements";
import { buildCrossword, cwClean, cwLabelKey, type CwLayout } from "@/lib/crosswordLayout";

const ELEMENTS = Object.values(ELEMENTS_DATA).sort((a, b) => a.number - b.number);
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
const reward = (n: number, msg: string) => {
  toast.success(`${msg} +${n} ⚛`);
  recordHit(n);
  supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, n).catch(() => {}); });
};

function Header({ title, sub, onReset, color = "hsl(var(--primary))" }: { title: string; sub: string; onReset: () => void; color?: string }) {
  return (
    <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${color}` }}>
      <div className="flex-1"><div className="font-bold">{title}</div><div className="text-xs text-muted-foreground">{sub}</div></div>
      <Button size="sm" variant="outline" onClick={onReset}><RotateCcw size={14} /></Button>
    </Card>
  );
}
function Win({ text, onAgain }: { text: string; onAgain: () => void }) {
  return (
    <Card className="p-6 text-center bg-primary text-primary-foreground">
      <Trophy className="mx-auto mb-2" size={36} />
      <div className="text-xl font-black">{text}</div>
      <Button onClick={onAgain} className="mt-3" variant="secondary">Jogar de novo</Button>
    </Card>
  );
}
function useTerms(area: AreaValue) {
  const [terms, setTerms] = useState<{ term: string; clue: string }[] | null>(null);
  useEffect(() => {
    supabase.from("chem_terms").select("term,clue").eq("area", area).limit(80).then(({ data }) => setTerms(data ?? []));
  }, [area]);
  return terms;
}

/* ---------------- Palavras Cruzadas (grade estilo revista) ---------------- */
const CROSS_COINS = [1, 2, 4, 7, 10]; // Átomos por palavra conforme dificuldade 1★..5★
type CTerm = { term: string; clue: string; difficulty: number };
export function PalavrasCruzadas({ area, topic }: { area: AreaValue; topic?: string }) {
  const meta = areaMeta(area);
  const [terms, setTerms] = useState<CTerm[] | null>(null);
  const [size, setSize] = useState(5);
  useEffect(() => {
    setTerms(null);
    loadLinkedTerms(area, topic, "cruzada").then(setTerms);
  }, [area, topic]);
  const [layout, setLayout] = useState<CwLayout<CTerm>>({ rows: 0, cols: 0, words: [] });
  const [letters, setLetters] = useState<Record<string, string>>({});
  const [done, setDone] = useState<boolean[]>([]);
  const [active, setActive] = useState(0);
  const reset = () => {
    const pool = (terms ?? []).filter((t) => cwClean(t.term).length >= 3 && cwClean(t.term).length <= 14);
    const l = buildCrossword(pool, (t) => t.term, size);
    setLayout(l); setLetters({}); setDone(l.words.map(() => false)); setActive(0);
  };
  useEffect(() => { if (terms) reset(); /* eslint-disable-next-line */ }, [terms, size]);
  const cellsOf = (i: number) => {
    const w = layout.words[i];
    return w.answer.split("").map((_, k) => `${w.row + (w.dir === "down" ? k : 0)},${w.col + (w.dir === "across" ? k : 0)}`);
  };
  const cellMap = useMemo(() => {
    const m = new Map<string, { ch: string; words: number[] }>();
    layout.words.forEach((w, i) => {
      w.answer.split("").forEach((ch, k) => {
        const key = `${w.row + (w.dir === "down" ? k : 0)},${w.col + (w.dir === "across" ? k : 0)}`;
        const c = m.get(key) ?? { ch, words: [] };
        c.words.push(i); m.set(key, c);
      });
    });
    return m;
  }, [layout]);
  const labels = useMemo(() => {
    const m = new Map<string, { n: number; dir: string }[]>();
    layout.words.forEach((w) => { const k = cwLabelKey(w); m.set(k, [...(m.get(k) ?? []), { n: w.number, dir: w.dir }]); });
    return m;
  }, [layout]);
  if (terms === null) return <Card className="p-6">Carregando…</Card>;
  if (!layout.words.length) return <Card className="p-6 text-center">Sem termos para esta área. Gere no painel do professor.</Card>;

  const solvedCells = new Set(layout.words.flatMap((_, i) => (done[i] ? cellsOf(i) : [])));
  const checkWord = (i: number, lt = letters) => {
    if (done[i]) return;
    const keys = cellsOf(i);
    if (keys.some((k) => !lt[k])) return;
    const w = layout.words[i];
    if (keys.map((k) => lt[k]).join("") === w.answer) {
      const d = Math.max(1, Math.min(5, w.item.difficulty ?? 1));
      setDone((x) => x.map((v, k) => (k === i ? true : v)));
      reward(CROSS_COINS[d - 1], `${w.number} ${w.dir === "across" ? "horizontal" : "vertical"} correta! (${"★".repeat(d)})`);
    } else toast.error(`${w.number} ${w.dir === "across" ? "horizontal" : "vertical"}: ainda não…`);
  };
  const focusCell = (key: string) => (document.getElementById(`cw-${key}`) as HTMLInputElement | null)?.focus();
  const onType = (key: string, val: string) => {
    const ch = cwClean(val).slice(-1);
    const next = { ...letters, [key]: ch };
    setLetters(next);
    const cell = cellMap.get(key)!;
    const wi = cell.words.includes(active) ? active : cell.words[0];
    if (ch) {
      const keys = cellsOf(wi);
      const pos = keys.indexOf(key);
      const nxt = keys.slice(pos + 1).find((k) => !solvedCells.has(k));
      if (nxt) focusCell(nxt);
      cell.words.forEach((w) => checkWord(w, next));
    }
  };
  const onKey = (key: string, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !letters[key]) {
      const keys = cellsOf(active); const pos = keys.indexOf(key);
      if (pos > 0) focusCell(keys[pos - 1]);
    }
  };
  const across = layout.words.map((w, i) => ({ w, i })).filter((x) => x.w.dir === "across").sort((a, b) => a.w.number - b.w.number);
  const down = layout.words.map((w, i) => ({ w, i })).filter((x) => x.w.dir === "down").sort((a, b) => a.w.number - b.w.number);
  const activeCells = new Set(layout.words[active] ? cellsOf(active) : []);
  const Clues = ({ title, list }: { title: string; list: typeof across }) => (
    <div className="space-y-1">
      <div className="font-black text-sm uppercase tracking-wide">{title}</div>
      {list.map(({ w, i }) => (
        <button key={i} type="button" onClick={() => { setActive(i); focusCell(cellsOf(i)[0]); }}
          className={`block w-full text-left text-sm rounded px-2 py-1 ${active === i ? "bg-accent" : ""} ${done[i] ? "line-through text-muted-foreground" : ""}`}>
          <b>{w.number}.</b> {w.item.clue} <span className="text-muted-foreground">({w.answer.length})</span>
        </button>
      ))}
    </div>
  );
  return (
    <div className="space-y-4">
      <Header title={`Palavras Cruzadas · ${meta.label}`} sub={`${done.filter(Boolean).length}/${layout.words.length} resolvidas · 1★=1⚛ 2★=2⚛ 3★=4⚛ 4★=7⚛ 5★=10⚛`} onReset={reset} color={meta.color} />
      <Card className="p-3 flex flex-wrap gap-2 items-center">
        <span className="text-sm font-bold">Palavras por rodada:</span>
        {QUESTION_COUNTS.map((n) => (
          <Button key={n} size="sm" variant={size === n ? "default" : "outline"} onClick={() => setSize(n)}>{n}</Button>
        ))}
        {layout.words.length < size && <span className="text-xs text-muted-foreground">Só {layout.words.length} palavras se cruzaram nesta rodada.</span>}
      </Card>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Card className="p-3 overflow-auto">
          <div className="grid mx-auto w-max" style={{ gridTemplateColumns: `repeat(${layout.cols}, 2.25rem)` }}>
            {Array.from({ length: layout.rows * layout.cols }, (_, n) => {
              const key = `${Math.floor(n / layout.cols)},${n % layout.cols}`;
              const cell = cellMap.get(key);
              if (!cell) {
                const lb = labels.get(key);
                return <div key={key} className="w-9 h-9 flex flex-col text-[11px] font-bold leading-tight text-muted-foreground">
                  {lb?.map((l) => <span key={l.n} className={l.dir === "across" ? "mt-auto mb-auto text-right pr-1" : "mt-auto text-center"}>{l.n}</span>)}
                </div>;
              }
              const solved = solvedCells.has(key);
              return (
                <div key={key} className={`relative w-9 h-9 border border-foreground/60 ${solved ? "bg-primary text-primary-foreground" : activeCells.has(key) ? "bg-accent" : "bg-card"}`}>
                  <input id={`cw-${key}`} aria-label={`Casa ${key}`} value={solved ? cell.ch : letters[key] ?? ""} readOnly={solved}
                    onFocus={() => { if (!cell.words.includes(active)) setActive(cell.words[0]); }}
                    onClick={() => { if (cell.words.length > 1 && cell.words.includes(active)) setActive(cell.words.find((w) => w !== active)!); }}
                    onChange={(e) => onType(key, e.target.value)} onKeyDown={(e) => onKey(key, e)}
                    className="w-full h-full bg-transparent text-center font-black uppercase outline-none caret-transparent" />
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="p-4 space-y-4">
          <Clues title="➡️ Horizontais" list={across} />
          <Clues title="⬇️ Verticais" list={down} />
        </Card>
      </div>
      {done.length > 0 && done.every(Boolean) && <Win text="Cruzadinha completa!" onAgain={reset} />}
    </div>
  );
}

/* ---------------- Tabuleiro Químico ---------------- */
type Q = { question: string; options: any; correct_index: number };
export function TabuleiroQuimico({ area = "geral", topic }: { area?: AreaValue; topic?: string }) {
  const SIZE = 20;
  const [qs, setQs] = useState<Q[]>([]);
  const [pos, setPos] = useState(0);
  const [q, setQ] = useState<Q | null>(null);
  const [dice, setDice] = useState<number | null>(null);
  const [turns, setTurns] = useState(0);
  useEffect(() => {
    loadLinkedQuestions(area, topic, "tabuleiro").then((d) => setQs(d as Q[]));
  }, [area, topic]);
  const reset = () => { setPos(0); setQ(null); setDice(null); setTurns(0); };
  const roll = () => {
    if (!qs.length) return;
    setDice(1 + Math.floor(Math.random() * 6));
    setQ(qs[Math.floor(Math.random() * qs.length)]);
  };
  const answer = (k: number) => {
    if (!q || dice === null) return;
    setTurns((t) => t + 1);
    if (k === q.correct_index) {
      const np = Math.min(SIZE - 1, pos + dice);
      setPos(np); toast.success(`Acertou! Avançou ${dice} casas`);
      if (np === SIZE - 1) reward(10, "Chegou ao fim!");
    } else { setPos((p) => Math.max(0, p - 1)); toast.error("Errou! Volta 1 casa"); }
    setQ(null); setDice(null);
  };
  const won = pos === SIZE - 1;
  return (
    <div className="space-y-4">
      <Header title="Tabuleiro Químico" sub={`Casa ${pos + 1}/${SIZE} · ${turns} rodadas`} onReset={reset} />
      <Card className="p-4">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-1">
          {Array.from({ length: SIZE }, (_, i) => (
            <div key={i} className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold border-2 ${i === pos ? "bg-primary text-primary-foreground border-primary" : "bg-muted"}`}>
              <span>{ELEMENTS[i]?.symbol}</span>{i === pos && <span>🧑‍🔬</span>}{i === SIZE - 1 && i !== pos && <span>🏁</span>}
            </div>
          ))}
        </div>
      </Card>
      {!qs.length && <Card className="p-6 text-center">Sem questões no Banco ainda.</Card>}
      {!won && qs.length > 0 && !q && <div className="text-center"><Button size="lg" onClick={roll}>🎲 Jogar dado</Button></div>}
      {q && (
        <Card className="p-4 space-y-3">
          <div className="text-sm text-muted-foreground">Dado: {dice} — acerte para avançar</div>
          <div className="font-bold">{q.question}</div>
          <div className="grid gap-2">
            {(Array.isArray(q.options) ? q.options : []).map((o: string, k: number) => (
              <Button key={k} variant="outline" className="justify-start whitespace-normal h-auto py-2 text-left" onClick={() => answer(k)}>{o}</Button>
            ))}
          </div>
        </Card>
      )}
      {won && <Win text={`Chegou ao fim em ${turns} rodadas!`} onAgain={reset} />}
    </div>
  );
}

/* ---------------- Batalha Naval ---------------- */
export function BatalhaNaval({ area = "geral", topic }: { area?: string; topic?: string } = {}) {
  const N = 8;
  const grid = ELEMENTS.slice(0, N * N);
  const make = () => {
    const ships = new Set<number>();
    for (const len of [4, 3, 3, 2]) {
      for (let t = 0; t < 100; t++) {
        const h = Math.random() < 0.5, r = Math.floor(Math.random() * N), c = Math.floor(Math.random() * N);
        const cells = Array.from({ length: len }, (_, i) => (h ? [r, c + i] : [r + i, c]));
        if (cells.some(([a, b]) => a >= N || b >= N || ships.has(a * N + b))) continue;
        cells.forEach(([a, b]) => ships.add(a * N + b)); break;
      }
    }
    return ships;
  };
  const [ships, setShips] = useState(make);
  const [shots, setShots] = useState<Map<number, boolean>>(new Map());
  const [ask, setAsk] = useState<{ idx: number; q: string; opts: string[]; right: string } | null>(null);
  const [bank, setBank] = useState<{ question: string; options: string[]; correct_index: number }[]>([]);
  useEffect(() => { loadLinkedQuestions(area, topic, "batalha_naval").then((d) => setBank(d as never)); }, [area, topic]);
  const [ammo, setAmmo] = useState(30);
  const reset = () => { setShips(make()); setShots(new Map()); setAsk(null); setAmmo(30); };
  const click = (idx: number) => {
    if (shots.has(idx) || ammo <= 0) return;
    const el = grid[idx];
    if (bank.length) {
      const b = bank[Math.floor(Math.random() * bank.length)];
      setAsk({ idx, q: b.question, opts: shuffle(b.options), right: b.options[b.correct_index] });
      return;
    }
    const opts = shuffle([el.name, ...shuffle(ELEMENTS.filter((e) => e.name !== el.name)).slice(0, 2).map((e) => e.name)]);
    setAsk({ idx, q: `Qual é o nome do elemento ${el.symbol}?`, opts, right: el.name });
  };
  const answer = (o: string) => {
    if (!ask) return;
    setAmmo((a) => a - 1);
    logGameQuestion("Batalha Naval", ask.q, o, ask.right, o === ask.right).catch(() => {});
    if (o !== ask.right) { toast.error(`Errou! A resposta certa é ${ask.right}. Tiro perdido.`); setAsk(null); return; }
    const hit = ships.has(ask.idx);
    setShots((s) => new Map(s).set(ask.idx, hit));
    if (hit) reward(2, "Acertou um navio!"); else { toast("Água 🌊"); recordMiss(); };
    setAsk(null);
  };
  const hits = [...shots.values()].filter(Boolean).length;
  const won = hits === ships.size;
  return (
    <div className="space-y-4">
      <Header title="Batalha Naval da Tabela" sub={`${hits}/${ships.size} partes de navio · ${ammo} tiros`} onReset={reset} />
      <Card className="p-3">
        <div className="grid gap-1 mx-auto" style={{ gridTemplateColumns: `repeat(${N},1fr)`, maxWidth: 480 }}>
          {grid.map((el, i) => {
            const s = shots.get(i);
            return (
              <button key={i} onClick={() => click(i)}
                className={`aspect-square rounded text-xs font-black border ${s === true ? "bg-destructive text-destructive-foreground" : s === false ? "bg-secondary text-muted-foreground" : "bg-muted hover:bg-accent"}`}>
                {s === true ? "💥" : s === false ? "🌊" : el.symbol}
              </button>
            );
          })}
        </div>
      </Card>
      {ask && (
        <Card className="p-4 space-y-2">
          <div className="text-xs text-muted-foreground">🎯 Para atirar em <b>{grid[ask.idx].symbol}</b>, responda:</div>
          <div className="font-bold">{ask.q}</div>
          <div className="flex flex-wrap gap-2">{ask.opts.map((o) => <Button key={o} variant="outline" onClick={() => answer(o)}>{o}</Button>)}</div>
        </Card>
      )}
      {won && <Win text="Frota afundada!" onAgain={reset} />}
      {!won && ammo <= 0 && <Card className="p-4 text-center">Acabaram os tiros! <Button className="ml-2" onClick={reset}>Recomeçar</Button></Card>}
    </div>
  );
}

/* ---------------- Stop Químico ---------------- */
const STOP_CATS = ["Elemento químico", "Substância/composto", "Vidraria/equipamento", "Cientista", "Fenômeno/processo"];
const LETTERS = "ABCDEFGHILMNOPRSTUVZ";
export function StopQuimico() {
  const [letter, setLetter] = useState("");
  const [vals, setVals] = useState<string[]>(STOP_CATS.map(() => ""));
  const [time, setTime] = useState(0);
  const [result, setResult] = useState<boolean[] | null>(null);
  const start = () => { setLetter(LETTERS[Math.floor(Math.random() * LETTERS.length)]); setVals(STOP_CATS.map(() => "")); setResult(null); setTime(60); };
  const stop = () => {
    const r = vals.map((v, i) => {
      const n = norm(v);
      if (!n.startsWith(letter) || n.length < 2) return false;
      if (i === 0) return ELEMENTS.some((e) => norm(e.name) === n);
      return true;
    });
    setResult(r); setTime(0);
    const pts = r.filter(Boolean).length;
    if (pts) reward(pts * 2, `${pts} respostas válidas!`);
  };
  useEffect(() => {
    if (time <= 0 || result) return;
    const t = setTimeout(() => (time === 1 ? stop() : setTime(time - 1)), 1000);
    return () => clearTimeout(t);
  }, [time, result]);
  return (
    <div className="space-y-4">
      <Header title="Stop Químico" sub="Uma palavra por categoria com a letra sorteada, contra o tempo" onReset={start} />
      {!letter ? <div className="text-center"><Button size="lg" onClick={start}>Sortear letra</Button></div> : (
        <Card className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-5xl font-black text-primary">{letter}</div>
            <Badge variant={time <= 10 ? "destructive" : "secondary"} className="text-lg">{time}s</Badge>
          </div>
          {STOP_CATS.map((c, i) => (
            <div key={c} className="grid md:grid-cols-3 gap-2 items-center">
              <div className="text-sm font-bold">{c}</div>
              <Input className="md:col-span-2" disabled={!!result} value={vals[i]} onChange={(e) => setVals((v) => v.map((x, k) => (k === i ? e.target.value : x)))} />
              {result && <div className="md:col-start-2 text-xs">{result[i] ? "✅ válida" : "❌ inválida"}</div>}
            </div>
          ))}
          {!result ? <Button className="w-full" onClick={stop}>✋ STOP!</Button> : <Button className="w-full" onClick={start}>Nova rodada</Button>}
          <div className="text-xs text-muted-foreground">Elementos são conferidos pela tabela; as demais categorias valem se começarem com a letra (o professor pode revisar).</div>
        </Card>
      )}
    </div>
  );
}

/* ---------------- Bingo Químico ---------------- */
export function BingoQuimico() {
  const pool = ELEMENTS.slice(0, 36);
  const make = () => shuffle(pool).slice(0, 16);
  const [card, setCard] = useState(make);
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const [calls, setCalls] = useState<string[]>([]);
  const [current, setCurrent] = useState<typeof pool[number] | null>(null);
  const reset = () => { setCard(make()); setMarked(new Set()); setCalls([]); setCurrent(null); };
  const call = () => {
    const left = pool.filter((e) => !calls.includes(e.symbol));
    if (!left.length) return;
    const e = left[Math.floor(Math.random() * left.length)];
    setCalls((c) => [...c, e.symbol]); setCurrent(e);
  };
  const mark = (sym: string) => {
    if (!calls.includes(sym)) return toast.error("Esse elemento ainda não foi chamado!");
    setMarked((m) => new Set(m).add(sym));
  };
  const lines = useMemo(() => {
    const L: number[][] = [];
    for (let i = 0; i < 4; i++) { L.push([0, 1, 2, 3].map((j) => i * 4 + j)); L.push([0, 1, 2, 3].map((j) => j * 4 + i)); }
    L.push([0, 5, 10, 15], [3, 6, 9, 12]); return L;
  }, []);
  const bingo = lines.some((l) => l.every((i) => marked.has(card[i].symbol)));
  useEffect(() => { if (bingo) reward(8, "BINGO!"); }, [bingo]);
  return (
    <div className="space-y-4">
      <Header title="Bingo Químico" sub={`${calls.length} chamados · marque o símbolo do elemento chamado`} onReset={reset} />
      <Card className="p-4 text-center space-y-2">
        <div className="text-sm text-muted-foreground">Elemento chamado</div>
        <div className="text-2xl font-black">{current ? `${current.name} (Z=${current.number})` : "—"}</div>
        {!bingo && <Button onClick={call}>Chamar próximo</Button>}
      </Card>
      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
        {card.map((e) => (
          <button key={e.symbol} onClick={() => mark(e.symbol)}
            className={`aspect-square rounded-xl text-2xl font-black border-2 ${marked.has(e.symbol) ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-accent"}`}>
            {e.symbol}
          </button>
        ))}
      </div>
      {bingo && <Win text="BINGO!" onAgain={reset} />}
    </div>
  );
}

/* ---------------- Tangram Molecular ---------------- */
const MOLECULES: { name: string; formula: Record<string, number> }[] = [
  { name: "Água", formula: { H: 2, O: 1 } }, { name: "Gás carbônico", formula: { C: 1, O: 2 } },
  { name: "Metano", formula: { C: 1, H: 4 } }, { name: "Amônia", formula: { N: 1, H: 3 } },
  { name: "Cloreto de sódio", formula: { Na: 1, Cl: 1 } }, { name: "Ácido sulfúrico", formula: { H: 2, S: 1, O: 4 } },
  { name: "Glicose", formula: { C: 6, H: 12, O: 6 } }, { name: "Etanol", formula: { C: 2, H: 6, O: 1 } },
  { name: "Ozônio", formula: { O: 3 } }, { name: "Ácido clorídrico", formula: { H: 1, Cl: 1 } },
  { name: "Carbonato de cálcio", formula: { Ca: 1, C: 1, O: 3 } }, { name: "Peróxido de hidrogênio", formula: { H: 2, O: 2 } },
];
const PIECES = ["H", "C", "N", "O", "Na", "Cl", "S", "Ca"];
export function TangramMolecular() {
  const [order, setOrder] = useState(() => shuffle(MOLECULES));
  const [i, setI] = useState(0);
  const [built, setBuilt] = useState<Record<string, number>>({});
  const reset = () => { setOrder(shuffle(MOLECULES)); setI(0); setBuilt({}); };
  const m = order[i];
  const fmt = (f: Record<string, number>) => Object.entries(f).filter(([, n]) => n > 0).map(([s, n]) => `${s}${n > 1 ? n : ""}`).join("") || "—";
  const check = () => {
    const keys = new Set([...Object.keys(m.formula), ...Object.keys(built)]);
    const ok = [...keys].every((k) => (m.formula[k] ?? 0) === (built[k] ?? 0));
    if (ok) { reward(3, `${fmt(m.formula)} montada!`); setI(i + 1); setBuilt({}); } else { toast.error("Fórmula diferente, ajuste as peças"); recordMiss(); };
  };
  if (i >= order.length) return <Win text="Todas as moléculas montadas!" onAgain={reset} />;
  return (
    <div className="space-y-4">
      <Header title="Tangram Molecular" sub={`Molécula ${i + 1}/${order.length} · monte com as peças`} onReset={reset} />
      <Card className="p-6 text-center space-y-3">
        <div className="text-sm text-muted-foreground">Monte a molécula:</div>
        <div className="text-3xl font-black">{m.name}</div>
        <div className="min-h-16 flex flex-wrap justify-center gap-1 p-3 border-2 border-dashed rounded-xl">
          {Object.entries(built).flatMap(([s, n]) => Array.from({ length: n }, (_, k) => (
            <button key={s + k} onClick={() => setBuilt((b) => ({ ...b, [s]: b[s] - 1 }))}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-black">{s}</button>
          )))}
        </div>
        <div className="font-mono text-lg">{fmt(built)}</div>
        <div className="flex flex-wrap justify-center gap-2">
          {PIECES.map((p) => <Button key={p} variant="outline" onClick={() => setBuilt((b) => ({ ...b, [p]: (b[p] ?? 0) + 1 }))}>+ {p}</Button>)}
        </div>
        <div className="flex justify-center gap-2">
          <Button variant="ghost" onClick={() => setBuilt({})}>Limpar</Button>
          <Button onClick={check}>Conferir</Button>
          <Button variant="ghost" onClick={() => { toast(`Era ${fmt(m.formula)}`); setI(i + 1); setBuilt({}); }}>Pular</Button>
        </div>
      </Card>
    </div>
  );
}
