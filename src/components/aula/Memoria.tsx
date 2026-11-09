import { loadLinkedTerms } from "@/lib/linkedBank";
import { recordHit, recordMiss } from "@/lib/gameStats";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { areaMeta, AreaValue } from "@/lib/aula";
import { RotateCcw, Trophy } from "lucide-react";
import { toast } from "sonner";
import { addCoins } from "@/lib/playerEconomy";

type Tile = { id: number; key: string; face: string; sub?: string; flipped: boolean; matched: boolean };

export function Memoria({ area, topic }: { area: AreaValue; topic?: string }) {
  const meta = areaMeta(area);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const data = await loadLinkedTerms(area, topic, "memoria");
    const pool = (data ?? []).sort(() => Math.random() - 0.5).slice(0, 8);
    if (!pool.length) return setTiles([]);
    const pairs: Tile[] = [];
    pool.forEach((t, i) => {
      pairs.push({ id: i * 2, key: `k${i}`, face: t.term, flipped: false, matched: false });
      pairs.push({ id: i * 2 + 1, key: `k${i}`, face: "💡", sub: t.clue, flipped: false, matched: false });
    });
    setTiles(pairs.sort(() => Math.random() - 0.5));
    setFlipped([]); setMoves(0);
  };
  useEffect(() => { load(); }, [area, topic]);

  const click = (idx: number) => {
    if (busy) return;
    const t = tiles[idx];
    if (t.matched || t.flipped) return;
    const next = tiles.map((x, i) => i === idx ? { ...x, flipped: true } : x);
    const nf = [...flipped, idx];
    setTiles(next);
    setFlipped(nf);
    if (nf.length === 2) {
      setBusy(true);
      setMoves((m) => m + 1);
      const [a, b] = nf;
      if (next[a].key === next[b].key) {
        setTimeout(() => {
          setTiles((cur) => cur.map((x, i) => i === a || i === b ? { ...x, matched: true } : x));
          setFlipped([]); setBusy(false);
          toast.success("Par! +2 ⚛");
          recordHit(2, "memoria");
          supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, 2).catch(() => {}); });
        }, 350);
      } else {
        recordMiss("memoria");
        setTimeout(() => {
          setTiles((cur) => cur.map((x, i) => i === a || i === b ? { ...x, flipped: false } : x));
          setFlipped([]); setBusy(false);
        }, 900);
      }
    }
  };

  if (!tiles.length) return <Card className="p-6 text-center">Sem termos. Gere no painel do professor.</Card>;
  const won = tiles.every((t) => t.matched);

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${meta.color}` }}>
        <div className="text-3xl">{meta.emoji}</div>
        <div className="flex-1">
          <div className="font-bold">Memória · {meta.label}</div>
          <div className="text-xs text-muted-foreground">Combine termo + dica</div>
        </div>
        <Badge>{moves} jogadas</Badge>
        <Button size="sm" variant="outline" onClick={load}><RotateCcw size={14} /></Button>
      </Card>

      <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto">
        {tiles.map((t, i) => (
          <button key={t.id} onClick={() => click(i)}
            className={`aspect-[3/4] rounded-xl p-2 text-xs font-bold transition transform ${t.flipped || t.matched ? "scale-100" : "scale-100 hover:scale-105"}`}
            style={{
              background: t.flipped || t.matched ? (t.matched ? `${meta.color}30` : "#fff") : meta.color,
              color: t.flipped || t.matched ? "#1e293b" : "#fff",
              border: t.matched ? `2px solid ${meta.color}` : "2px solid transparent",
            }}>
            {t.flipped || t.matched ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-base font-black">{t.face}</div>
                {t.sub && <div className="text-[10px] mt-1 font-normal opacity-80 line-clamp-3">{t.sub}</div>}
              </div>
            ) : <div className="h-full flex items-center justify-center text-2xl">⚗️</div>}
          </button>
        ))}
      </div>

      {won && (
        <Card className="p-6 text-center bg-gradient-to-br from-[#D97706] to-[#F59E0B] text-white">
          <Trophy className="mx-auto mb-2" size={36} />
          <div className="text-xl font-black">Completo em {moves} jogadas!</div>
          <Button onClick={load} className="mt-3" variant="secondary">Jogar de novo</Button>
        </Card>
      )}
    </div>
  );
}
