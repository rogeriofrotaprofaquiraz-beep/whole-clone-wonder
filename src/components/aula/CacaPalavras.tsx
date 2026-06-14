import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { areaMeta, AreaValue } from "@/lib/aula";
import { toast } from "sonner";
import { RotateCcw, Trophy } from "lucide-react";

const SIZE = 14;
const DIRS = [[1, 0], [0, 1], [1, 1], [1, -1], [-1, 0], [0, -1]];

type Grid = { letters: string[][]; placed: { term: string; cells: [number, number][] }[] };

function buildGrid(words: string[]): Grid {
  const letters: string[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(""));
  const placed: Grid["placed"] = [];
  for (const w of words) {
    for (let tries = 0; tries < 80; tries++) {
      const [dr, dc] = DIRS[Math.floor(Math.random() * DIRS.length)];
      const r0 = Math.floor(Math.random() * SIZE);
      const c0 = Math.floor(Math.random() * SIZE);
      const end_r = r0 + dr * (w.length - 1);
      const end_c = c0 + dc * (w.length - 1);
      if (end_r < 0 || end_r >= SIZE || end_c < 0 || end_c >= SIZE) continue;
      let ok = true;
      const cells: [number, number][] = [];
      for (let i = 0; i < w.length; i++) {
        const r = r0 + dr * i, c = c0 + dc * i;
        if (letters[r][c] && letters[r][c] !== w[i]) { ok = false; break; }
        cells.push([r, c]);
      }
      if (!ok) continue;
      cells.forEach(([r, c], i) => (letters[r][c] = w[i]));
      placed.push({ term: w, cells });
      break;
    }
  }
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      if (!letters[r][c]) letters[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return { letters, placed };
}

export function CacaPalavras({ area }: { area: AreaValue }) {
  const meta = areaMeta(area);
  const [terms, setTerms] = useState<any[]>([]);
  const [grid, setGrid] = useState<Grid | null>(null);
  const [found, setFound] = useState<Set<string>>(new Set());
  const [sel, setSel] = useState<[number, number][]>([]);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    supabase.from("chem_terms").select("*").eq("area", area).limit(60)
      .then(({ data }) => setTerms(data ?? []));
  }, [area]);

  useEffect(() => { if (terms.length) reset(); }, [terms]);

  const reset = () => {
    const sample = [...terms].sort(() => Math.random() - 0.5).slice(0, 8).filter((t) => t.term.length <= SIZE);
    setGrid(buildGrid(sample.map((t) => t.term)));
    setFound(new Set());
    setSel([]);
  };

  const cellsLine = (a: [number, number], b: [number, number]): [number, number][] | null => {
    const dr = Math.sign(b[0] - a[0]), dc = Math.sign(b[1] - a[1]);
    const len = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])) + 1;
    if (dr === 0 && dc === 0) return [a];
    if (dr !== 0 && dc !== 0 && Math.abs(b[0] - a[0]) !== Math.abs(b[1] - a[1])) return null;
    if (dr !== 0 && dc === 0 && b[1] !== a[1]) return null;
    if (dc !== 0 && dr === 0 && b[0] !== a[0]) return null;
    return Array.from({ length: len }, (_, i) => [a[0] + dr * i, a[1] + dc * i] as [number, number]);
  };

  const onUp = () => {
    setMouseDown(false);
    if (!grid || sel.length < 2) { setSel([]); return; }
    const word = sel.map(([r, c]) => grid.letters[r][c]).join("");
    const rev = word.split("").reverse().join("");
    const hit = grid.placed.find((p) => (p.term === word || p.term === rev) && !found.has(p.term));
    if (hit) {
      setFound((f) => new Set(f).add(hit.term));
      toast.success(`+${hit.term}`);
    }
    setSel([]);
  };

  if (!terms.length) return <Card className="p-6 text-center">Sem termos. Gere no painel do professor.</Card>;
  if (!grid) return null;

  const won = found.size === grid.placed.length && grid.placed.length > 0;
  const selSet = new Set(sel.map((s) => `${s[0]},${s[1]}`));
  const foundCells = new Set<string>();
  grid.placed.filter((p) => found.has(p.term)).forEach((p) => p.cells.forEach(([r, c]) => foundCells.add(`${r},${c}`)));

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${meta.color}` }}>
        <div className="text-3xl">{meta.emoji}</div>
        <div className="flex-1">
          <div className="font-bold">Caça-palavras · {meta.label}</div>
          <div className="text-xs text-muted-foreground">{found.size}/{grid.placed.length} encontradas</div>
        </div>
        <Button size="sm" variant="outline" onClick={reset}><RotateCcw size={14} /></Button>
      </Card>

      <Card className="p-3 select-none" onMouseLeave={onUp}>
        <div className="grid gap-0.5 mx-auto" style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)`, maxWidth: 560 }}>
          {grid.letters.map((row, r) =>
            row.map((ch, c) => {
              const k = `${r},${c}`;
              const isSel = selSet.has(k);
              const isFound = foundCells.has(k);
              return (
                <div key={k}
                  onMouseDown={() => { setMouseDown(true); setSel([[r, c]]); }}
                  onMouseEnter={() => {
                    if (!mouseDown || !sel.length) return;
                    const line = cellsLine(sel[0], [r, c]);
                    if (line) setSel(line);
                  }}
                  onMouseUp={onUp}
                  className={`aspect-square flex items-center justify-center text-sm md:text-base font-black rounded cursor-pointer transition
                    ${isFound ? "text-white" : isSel ? "text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  style={{ background: isFound ? meta.color : isSel ? `${meta.color}cc` : undefined }}>
                  {ch}
                </div>
              );
            })
          )}
        </div>
      </Card>

      <Card className="p-4">
        <div className="font-bold text-sm mb-2">Palavras:</div>
        <div className="flex flex-wrap gap-2">
          {grid.placed.map((p) => {
            const ok = found.has(p.term);
            return <Badge key={p.term} variant={ok ? "default" : "outline"} className={ok ? "line-through" : ""}
                          style={ok ? { background: meta.color } : {}}>{p.term}</Badge>;
          })}
        </div>
      </Card>

      {won && (
        <Card className="p-6 text-center bg-gradient-to-br from-[#D97706] to-[#F59E0B] text-white">
          <Trophy className="mx-auto mb-2" size={36} />
          <div className="text-xl font-black">Encontrou todas!</div>
          <Button onClick={reset} className="mt-3" variant="secondary">Jogar de novo</Button>
        </Card>
      )}
    </div>
  );
}
