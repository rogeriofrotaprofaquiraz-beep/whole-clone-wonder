import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { GAME_MODES } from "./CampeonatoJogos";

type Stat = { correct: number; wrong: number; points: number; last: string };

export function UserGamePanel({ userId }: { userId: string }) {
  const [stats, setStats] = useState<Record<string, Stat>>({});
  const [pending, setPending] = useState<any[]>([]);
  const [game, setGame] = useState(GAME_MODES[0].id);
  const [note, setNote] = useState("");

  const load = async () => {
    const db = supabase as any;
    const [r, a] = await Promise.all([
      db.from("game_results").select("game_key,correct,wrong,points,created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(5000),
      db.from("game_assignments").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(20),
    ]);
    const m: Record<string, Stat> = {};
    (r.data ?? []).forEach((x: any) => {
      const s = (m[x.game_key] ??= { correct: 0, wrong: 0, points: 0, last: x.created_at });
      s.correct += x.correct; s.wrong += x.wrong; s.points += x.points;
    });
    setStats(m); setPending(a.data ?? []);
  };
  useEffect(() => { load(); }, [userId]);

  const assign = async () => {
    const { data: u } = await supabase.auth.getUser();
    const { error } = await (supabase as any).from("game_assignments").insert({ user_id: userId, game_key: game, note: note || null, assigned_by: u.user?.id });
    if (error) return toast.error(error.message);
    toast.success("Jogo indicado! O aluno verá o aviso em Campeonato.");
    setNote(""); load();
  };
  const remove = async (id: string) => { await (supabase as any).from("game_assignments").delete().eq("id", id); load(); };

  const sel = "h-9 rounded-md border border-input bg-background px-3 text-sm";
  const label = (k: string) => { const g = GAME_MODES.find((x) => x.id === k); return g ? `${g.emoji} ${g.label}` : k; };

  return (
    <div className="space-y-3 rounded-lg border p-3">
      <p className="text-xs font-semibold text-muted-foreground">🎯 Direcionar para um jogo</p>
      <div className="flex flex-wrap gap-2">
        <select className={sel} value={game} onChange={(e) => setGame(e.target.value)}>
          {GAME_MODES.map((g) => <option key={g.id} value={g.id}>{g.emoji} {g.label}</option>)}
        </select>
        <Input className="h-9 flex-1 min-w-[160px]" placeholder="Recado (opcional)" value={note} onChange={(e) => setNote(e.target.value)} />
        <Button size="sm" className="h-9" onClick={assign}>Indicar jogo</Button>
      </div>
      {pending.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {pending.map((a) => (
            <span key={a.id} className="flex items-center gap-1 rounded bg-muted px-2 py-1 text-xs">
              {label(a.game_key)} · {a.completed_at ? "✅ aberto" : "⏳ aguardando"}
              <button className="text-destructive" onClick={() => remove(a.id)}>✕</button>
            </span>
          ))}
        </div>
      )}

      <p className="pt-2 text-xs font-semibold text-muted-foreground">📊 Desempenho por jogo</p>
      {Object.keys(stats).length === 0 ? (
        <p className="text-xs text-muted-foreground">Ainda sem partidas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs text-muted-foreground">
              <th className="py-1">Jogo</th><th>Pontos ⚛</th><th>Acertos</th><th>Erros</th><th>% acertos</th><th>Última vez</th>
            </tr></thead>
            <tbody>
              {Object.entries(stats).map(([k, s]) => {
                const tot = s.correct + s.wrong; const pct = tot ? Math.round((s.correct / tot) * 100) : 0;
                return (
                  <tr key={k} className="border-t">
                    <td className="py-1">{label(k)}</td><td>{s.points}</td>
                    <td className="text-primary font-semibold">{s.correct}</td>
                    <td className="text-destructive font-semibold">{s.wrong}</td>
                    <td>{pct}%</td><td className="text-xs">{new Date(s.last).toLocaleDateString("pt-BR")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
