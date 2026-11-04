import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/activities";

/** Jogos usados como tipo de pergunta nos slides de atividade. Cada jogo chama `submit(resposta)`. */
type P = { q: Question; locked: boolean; submit: (r: any) => void };

const shuffle = <T,>(a: T[]) => [...a].map(v => [Math.random(), v] as const).sort((x, y) => x[0] - y[0]).map(x => x[1]);
const norm = (s: string) => (s || "").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]/g, "");
const pairsOf = (q: Question) => (q.pairs || []).filter(p => p.a.trim() && p.b.trim());

export const GAME_TYPES = ["cruzadinha", "roleta", "domino", "forca", "memoria", "cacapalavras", "anagrama"];

/* ---------- Palavra cruzada ---------- */
type Placed = { i: number; word: string; r: number; c: number; dir: "h" | "v" };
function layoutCrossword(words: string[]): Placed[] {
  const placed: Placed[] = [];
  const cell = new Map<string, string>();
  const key = (r: number, c: number) => `${r},${c}`;
  const fits = (w: string, r: number, c: number, dir: "h" | "v") => {
    const dr = dir === "v" ? 1 : 0, dc = dir === "h" ? 1 : 0;
    if (cell.has(key(r - dr, c - dc)) || cell.has(key(r + dr * w.length, c + dc * w.length))) return false;
    let cross = 0;
    for (let k = 0; k < w.length; k++) {
      const rr = r + dr * k, cc = c + dc * k, ex = cell.get(key(rr, cc));
      if (ex) { if (ex !== w[k]) return false; cross++; }
      else if (cell.has(key(rr + dc, cc + dr)) || cell.has(key(rr - dc, cc - dr))) return false;
    }
    return placed.length === 0 || cross > 0;
  };
  const put = (i: number, w: string, r: number, c: number, dir: "h" | "v") => {
    placed.push({ i, word: w, r, c, dir });
    for (let k = 0; k < w.length; k++) cell.set(key(r + (dir === "v" ? k : 0), c + (dir === "h" ? k : 0)), w[k]);
  };
  const order = words.map((w, i) => ({ w, i })).sort((a, b) => b.w.length - a.w.length);
  let row = 0;
  order.forEach(({ w, i }, n) => {
    if (n === 0) { put(i, w, 0, 0, "h"); return; }
    for (const p of placed) for (let a = 0; a < p.word.length; a++) for (let b = 0; b < w.length; b++) {
      if (p.word[a] !== w[b]) continue;
      const dir = p.dir === "h" ? "v" : "h";
      const r = p.dir === "h" ? p.r - b : p.r + a, c = p.dir === "h" ? p.c + a : p.c - b;
      if (fits(w, r, c, dir)) { put(i, w, r, c, dir); return; }
    }
    // sem cruzamento: coloca abaixo, separada
    row = Math.max(...[...cell.keys()].map(k => Number(k.split(",")[0]))) + 2;
    placed.push({ i, word: w, r: row, c: 0, dir: "h" });
    for (let k = 0; k < w.length; k++) cell.set(key(row, k), w[k]);
  });
  return placed;
}

function Cruzadinha({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const placed = useMemo(() => layoutCrossword(ps.map(p => norm(p.b))), [q]);
  const [grid, setGrid] = useState<Record<string, string>>({});
  if (!placed.length) return <p>Sem palavras.</p>;
  const minR = Math.min(...placed.map(p => p.r)), minC = Math.min(...placed.map(p => p.c));
  const cells = new Map<string, number[]>();
  const starts = new Map<string, number>();
  placed.forEach((p, n) => { starts.set(`${p.r},${p.c}`, n + 1); for (let k = 0; k < p.word.length; k++) { const kk = `${p.r + (p.dir === "v" ? k : 0)},${p.c + (p.dir === "h" ? k : 0)}`; cells.set(kk, [...(cells.get(kk) || []), p.i]); } });
  const rows = Math.max(...[...cells.keys()].map(k => +k.split(",")[0])) - minR + 1;
  const cols = Math.max(...[...cells.keys()].map(k => +k.split(",")[1])) - minC + 1;
  const answer = () => ps.map((_, i) => { const p = placed.find(x => x.i === i)!; return [...p.word].map((_, k) => grid[`${p.r + (p.dir === "v" ? k : 0)},${p.c + (p.dir === "h" ? k : 0)}`] || "").join(""); });
  return (
    <div className="space-y-3">
      <div className="overflow-auto"><div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 2rem)` }}>
        {Array.from({ length: rows * cols }, (_, x) => {
          const r = Math.floor(x / cols) + minR, c = (x % cols) + minC, k = `${r},${c}`;
          if (!cells.has(k)) return <div key={x} className="w-8 h-8" />;
          return <div key={x} className="relative w-8 h-8">{starts.has(k) && <span className="absolute left-0.5 top-0 text-[9px] text-slate-500">{starts.get(k)}</span>}
            <input maxLength={1} disabled={locked} value={grid[k] || ""} onChange={e => setGrid({ ...grid, [k]: norm(e.target.value).slice(-1) })}
              className="w-8 h-8 border-2 border-violet-400 bg-white text-center font-bold uppercase" /></div>;
        })}
      </div></div>
      <ol className="text-sm space-y-0.5">{placed.map((p, n) => <li key={n}><b>{n + 1}.</b> {p.dir === "h" ? "➡️" : "⬇️"} {ps[p.i].a}</li>)}</ol>
      {!locked && <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => submit(answer())}>Conferir cruzadinha</Button>}
    </div>
  );
}

/* ---------- Roleta ---------- */
function Roleta({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const [ans, setAns] = useState<string[]>([]);
  const [cur, setCur] = useState<number | null>(null);
  const [rot, setRot] = useState(0);
  const [txt, setTxt] = useState("");
  const left = ps.map((_, i) => i).filter(i => ans[i] === undefined);
  const colors = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#fb923c", "#f87171", "#22d3ee"];
  const spin = () => {
    const pick = left[Math.floor(Math.random() * left.length)];
    const seg = 360 / ps.length;
    setRot(r => r + 1440 + (360 - (pick * seg + seg / 2)) - (r % 360));
    setTimeout(() => setCur(pick), 1600);
  };
  const grad = ps.map((_, i) => `${colors[i % colors.length]} ${(i * 100) / ps.length}% ${((i + 1) * 100) / ps.length}%`).join(",");
  return (
    <div className="space-y-3 text-center">
      <div className="relative w-56 h-56 mx-auto">
        <div className="absolute left-1/2 -top-2 -translate-x-1/2 z-10 text-2xl">🔻</div>
        <div className="w-56 h-56 rounded-full border-4 border-white shadow-lg transition-transform duration-[1500ms] ease-out" style={{ background: `conic-gradient(${grad})`, transform: `rotate(${rot}deg)` }}>
          {ps.map((_, i) => <span key={i} className="absolute left-1/2 top-1/2 font-bold text-white drop-shadow" style={{ transform: `rotate(${(i + 0.5) * (360 / ps.length)}deg) translateY(-90px)` }}>{ans[i] !== undefined ? "✓" : i + 1}</span>)}
        </div>
      </div>
      {cur === null && left.length > 0 && !locked && <Button onClick={spin}>🎡 Girar roleta</Button>}
      {cur !== null && <div className="space-y-2"><p className="font-semibold">{ps[cur].a}</p>
        <input autoFocus className="border rounded p-2" value={txt} onChange={e => setTxt(e.target.value)} placeholder="Sua resposta" />
        <Button className="ml-2" onClick={() => { const a = [...ans]; a[cur] = txt; setAns(a); setTxt(""); setCur(null); if (a.filter(x => x !== undefined).length === ps.length) submit(a); }}>OK</Button></div>}
      {left.length === 0 && !locked && <Button onClick={() => { setAns([]); }}>🔁 Jogar de novo</Button>}
    </div>
  );
}

/* ---------- Dominó ---------- */
function Domino({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const order = useMemo(() => shuffle(ps.map((_, i) => i)), [q]);
  const [chain, setChain] = useState<(number | null)[]>(ps.map(() => null));
  const [sel, setSel] = useState<number | null>(null);
  const used = new Set(chain.filter((x): x is number => x !== null));
  const Tile = ({ top, bottom, on, active }: { top: string; bottom: string; on?: () => void; active?: boolean }) => (
    <button type="button" onClick={on} disabled={locked} className={`w-28 rounded-lg border-2 bg-white shadow text-xs ${active ? "border-violet-600 ring-2 ring-violet-300" : "border-slate-700"}`}>
      <div className="p-2 min-h-12 grid place-items-center">{top}</div><div className="border-t-2 border-slate-700 p-2 min-h-12 grid place-items-center font-semibold">{bottom}</div></button>);
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-600">Toque numa peça de resposta e depois no espaço da pergunta certa.</p>
      <div className="flex flex-wrap gap-2 items-start">
        {ps.map((p, i) => <div key={i} className="flex items-center gap-1">
          <Tile top={p.a} bottom={chain[i] === null ? "❔" : ps[chain[i]!].b} on={() => { if (sel !== null) { const c = chain.map(x => x === sel ? null : x); c[i] = sel; setChain(c); setSel(null); } else { const c = [...chain]; c[i] = null; setChain(c); } }} />
          {i < ps.length - 1 && <span>⟷</span>}</div>)}
      </div>
      <div className="flex flex-wrap gap-2 p-2 rounded bg-slate-100">
        {order.filter(j => !used.has(j)).map(j => <Tile key={j} top="🁢" bottom={ps[j].b} active={sel === j} on={() => setSel(j)} />)}
      </div>
      {!locked && <Button className="bg-violet-700 hover:bg-violet-800" disabled={chain.some(x => x === null)} onClick={() => submit(chain)}>Conferir dominó</Button>}
    </div>
  );
}

/* ---------- Forca ---------- */
function ForcaGame({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const [w, setW] = useState(0);
  const [guess, setGuess] = useState<string[]>([]);
  const [lost, setLost] = useState(false);
  const word = norm(ps[w]?.b || "");
  const errors = guess.filter(g => !word.includes(g)).length;
  const won = [...word].every(ch => guess.includes(ch));
  const play = (L: string) => {
    const g = [...guess, L]; setGuess(g);
    if (g.filter(x => !word.includes(x)).length >= 6) setLost(true);
    else if ([...word].every(ch => g.includes(ch))) setTimeout(() => { if (w + 1 >= ps.length) submit(true); else { setW(w + 1); setGuess([]); } }, 600);
  };
  if (!ps.length) return null;
  return (
    <div className="space-y-3 text-center">
      <p className="text-sm">Palavra {w + 1} de {ps.length} · Dica: <b>{ps[w].a}</b></p>
      <p className="text-3xl">{["😀", "🙂", "😐", "😟", "😨", "😱", "💀"][errors]} <span className="text-sm text-slate-500">erros {errors}/6</span></p>
      <p className="text-2xl font-mono tracking-[0.4em]">{[...word].map(ch => guess.includes(ch) || lost ? ch : "_").join("")}</p>
      {lost ? <div><p className="text-red-600">Você perdeu esta! Tente de novo.</p><Button onClick={() => { setGuess([]); setLost(false); submit(false); }}>🔁 Tentar de novo</Button></div>
        : !won && !locked && <div className="flex flex-wrap justify-center gap-1">{"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(L =>
          <button key={L} type="button" disabled={guess.includes(L)} onClick={() => play(L)} className="w-8 h-8 rounded border bg-white font-bold disabled:opacity-30">{L}</button>)}</div>}
    </div>
  );
}

/* ---------- Memória ---------- */
function MemoriaGame({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const cards = useMemo(() => shuffle(ps.flatMap((p, i) => [{ id: i, t: p.a }, { id: i, t: p.b }])), [q]);
  const [open, setOpen] = useState<number[]>([]);
  const [found, setFound] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const flip = (k: number) => {
    if (locked || open.includes(k) || found.includes(cards[k].id) || open.length === 2) return;
    const o = [...open, k]; setOpen(o);
    if (o.length === 2) {
      setMoves(m => m + 1);
      setTimeout(() => {
        if (cards[o[0]].id === cards[o[1]].id) { const f = [...found, cards[k].id]; setFound(f); if (f.length === ps.length) submit(true); }
        setOpen([]);
      }, 800);
    }
  };
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-600">Jogadas: {moves} · Pares: {found.length}/{ps.length}</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">{cards.map((c, k) => {
        const show = open.includes(k) || found.includes(c.id);
        return <button key={k} type="button" onClick={() => flip(k)} className={`h-20 rounded-lg border-2 text-sm font-semibold p-1 ${found.includes(c.id) ? "bg-emerald-100 border-emerald-400" : show ? "bg-white border-violet-400" : "bg-violet-600 border-violet-700 text-white"}`}>{show ? c.t : "❓"}</button>;
      })}</div>
    </div>
  );
}

/* ---------- Caça-palavras ---------- */
function makeSearch(words: string[]) {
  const size = Math.max(8, ...words.map(w => w.length)) + 1;
  const g: string[][] = Array.from({ length: size }, () => Array(size).fill(""));
  const dirs = [[0, 1], [1, 0], [1, 1]];
  const pos: { w: string; cells: string[] }[] = [];
  for (const w of words) {
    for (let t = 0; t < 200; t++) {
      const [dr, dc] = dirs[Math.floor(Math.random() * 3)];
      const r = Math.floor(Math.random() * (size - dr * (w.length - 1))), c = Math.floor(Math.random() * (size - dc * (w.length - 1)));
      if ([...w].every((ch, k) => !g[r + dr * k][c + dc * k] || g[r + dr * k][c + dc * k] === ch)) {
        [...w].forEach((ch, k) => (g[r + dr * k][c + dc * k] = ch));
        pos.push({ w, cells: [...w].map((_, k) => `${r + dr * k},${c + dc * k}`) }); break;
      }
    }
  }
  const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  g.forEach(row => row.forEach((ch, k) => { if (!ch) row[k] = A[Math.floor(Math.random() * 26)]; }));
  return { g, pos };
}
function CacaGame({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const { g, pos } = useMemo(() => makeSearch(ps.map(p => norm(p.b))), [q]);
  const [start, setStart] = useState<string | null>(null);
  const [found, setFound] = useState<string[]>([]);
  const tap = (k: string) => {
    if (locked) return;
    if (!start) { setStart(k); return; }
    const hit = pos.find(p => !found.includes(p.w) && ((p.cells[0] === start && p.cells.at(-1) === k) || (p.cells[0] === k && p.cells.at(-1) === start)));
    setStart(null);
    if (hit) { const f = [...found, hit.w]; setFound(f); if (f.length === pos.length) submit(true); }
  };
  const hl = new Set(pos.filter(p => found.includes(p.w)).flatMap(p => p.cells));
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-600">Toque na primeira e na última letra de cada palavra.</p>
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${g.length}, 1.75rem)` }}>
        {g.flatMap((row, r) => row.map((ch, c) => { const k = `${r},${c}`; return <button key={k} type="button" onClick={() => tap(k)} className={`w-7 h-7 text-sm font-bold rounded ${hl.has(k) ? "bg-emerald-300" : start === k ? "bg-amber-300" : "bg-white border"}`}>{ch}</button>; }))}
      </div>
      <ul className="text-sm flex flex-wrap gap-2">{ps.map((p, i) => <li key={i} className={found.includes(norm(p.b)) ? "line-through text-emerald-700" : ""}>{p.a} ({norm(p.b).length} letras)</li>)}</ul>
    </div>
  );
}

/* ---------- Anagrama ---------- */
function Anagrama({ q, locked, submit }: P) {
  const ps = pairsOf(q);
  const mixed = useMemo(() => ps.map(p => { const w = norm(p.b); let s = w; for (let t = 0; t < 5 && s === w && w.length > 1; t++) s = shuffle([...w]).join(""); return s; }), [q]);
  const [a, setA] = useState<string[]>(ps.map(() => ""));
  return (
    <div className="space-y-2">
      {ps.map((p, i) => <div key={i} className="flex flex-wrap items-center gap-2">
        <span className="font-mono font-bold tracking-widest bg-amber-100 px-2 py-1 rounded">{mixed[i]}</span>
        <span className="text-xs text-slate-600">{p.a}</span>
        <input disabled={locked} className="border rounded px-2 py-1 uppercase" value={a[i]} onChange={e => setA(a.map((x, k) => k === i ? e.target.value : x))} />
      </div>)}
      {!locked && <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => submit(a)}>Responder</Button>}
    </div>
  );
}

export function GamePlayer(p: P) {
  switch (p.q.type) {
    case "cruzadinha": return <Cruzadinha {...p} />;
    case "roleta": return <Roleta {...p} />;
    case "domino": return <Domino {...p} />;
    case "forca": return <ForcaGame {...p} />;
    case "memoria": return <MemoriaGame {...p} />;
    case "cacapalavras": return <CacaGame {...p} />;
    case "anagrama": return <Anagrama {...p} />;
    default: return null;
  }
}
