// Monta uma cruzadinha "de revista": palavras horizontais e verticais que se cruzam.
export type CwDir = "across" | "down";
export type CwPlaced<T> = { item: T; answer: string; row: number; col: number; dir: CwDir; number: number };
export type CwLayout<T> = { rows: number; cols: number; words: CwPlaced<T>[] };

export const cwClean = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, "");

type P = { answer: string; row: number; col: number; dir: CwDir; idx: number };

function canPlace(grid: Map<string, string>, w: string, r: number, c: number, dir: CwDir) {
  const dr = dir === "down" ? 1 : 0, dc = dir === "across" ? 1 : 0;
  // células antes e depois devem estar vazias
  if (grid.has(`${r - dr},${c - dc}`) || grid.has(`${r + dr * w.length},${c + dc * w.length}`)) return -1;
  let crosses = 0;
  for (let i = 0; i < w.length; i++) {
    const rr = r + dr * i, cc = c + dc * i;
    const cur = grid.get(`${rr},${cc}`);
    if (cur) { if (cur !== w[i]) return -1; crosses++; continue; }
    // vizinhos laterais não podem estar ocupados (evita palavras coladas)
    if (grid.has(`${rr + dc},${cc + dr}`) || grid.has(`${rr - dc},${cc - dr}`)) return -1;
  }
  return crosses === w.length ? -1 : crosses;
}

function attempt(answers: string[], order: number[]): P[] {
  const grid = new Map<string, string>();
  const placed: P[] = [];
  const put = (p: P) => {
    placed.push(p);
    for (let i = 0; i < p.answer.length; i++)
      grid.set(`${p.row + (p.dir === "down" ? i : 0)},${p.col + (p.dir === "across" ? i : 0)}`, p.answer[i]);
  };
  const [first, ...rest] = order;
  put({ answer: answers[first], row: 0, col: 0, dir: "across", idx: first });
  let pending = rest;
  for (let pass = 0; pass < 2; pass++) {
    const left: number[] = [];
    for (const idx of pending) {
      const w = answers[idx];
      let best: { p: P; score: number } | null = null;
      for (const q of placed) {
        for (let i = 0; i < q.answer.length; i++) for (let j = 0; j < w.length; j++) {
          if (q.answer[i] !== w[j]) continue;
          const dir: CwDir = q.dir === "across" ? "down" : "across";
          const qr = q.row + (q.dir === "down" ? i : 0), qc = q.col + (q.dir === "across" ? i : 0);
          const r = qr - (dir === "down" ? j : 0), c = qc - (dir === "across" ? j : 0);
          const x = canPlace(grid, w, r, c, dir);
          if (x > 0) {
            const score = x * 10 - Math.abs(r) - Math.abs(c);
            if (!best || score > best.score) best = { p: { answer: w, row: r, col: c, dir, idx }, score };
          }
        }
      }
      if (best) put(best.p); else left.push(idx);
    }
    pending = left;
  }
  return placed;
}

/** Escolhe até `size` itens do conjunto que se encaixam numa grade cruzada. */
export function buildCrossword<T>(pool: T[], getWord: (t: T) => string, size: number, tries = 40): CwLayout<T> {
  const items = pool.map((t) => ({ t, a: cwClean(getWord(t)) })).filter((x) => x.a.length >= 2);
  const seen = new Set<string>();
  const uniq = items.filter((x) => (seen.has(x.a) ? false : (seen.add(x.a), true)));
  if (!uniq.length) return { rows: 0, cols: 0, words: [] };
  let best: P[] = [];
  let bestCand: typeof uniq = [];
  for (let k = 0; k < tries; k++) {
    const cand = [...uniq].sort(() => Math.random() - 0.5).slice(0, Math.max(size * 3, size));
    const ans = cand.map((x) => x.a);
    const order = ans.map((_, i) => i).sort((a, b) => ans[b].length - ans[a].length);
    const placed = attempt(ans, order).slice(0, size);
    if (placed.length > best.length) { best = placed; bestCand = cand; }
    if (best.length >= size) break;
  }
  const minR = Math.min(...best.map((p) => p.row)), minC = Math.min(...best.map((p) => p.col));
  const norm = best.map((p) => ({ ...p, row: p.row - minR, col: p.col - minC }));
  const rows = Math.max(...norm.map((p) => p.row + (p.dir === "down" ? p.answer.length : 1)));
  const cols = Math.max(...norm.map((p) => p.col + (p.dir === "across" ? p.answer.length : 1)));
  // numeração de revista: da esquerda p/ direita, de cima p/ baixo
  const starts = [...new Set(norm.map((p) => `${p.row},${p.col}`))]
    .map((s) => s.split(",").map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const num = new Map(starts.map(([r, c], i) => [`${r},${c}`, i + 1]));
  return {
    rows, cols,
    words: norm.map((p) => ({ item: bestCand[p.idx].t, answer: p.answer, row: p.row, col: p.col, dir: p.dir, number: num.get(`${p.row},${p.col}`)! })),
  };
}
