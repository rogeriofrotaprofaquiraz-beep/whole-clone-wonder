import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { addCoins } from "@/lib/playerEconomy";
import { REAGENTS, REACTIONS, mix, type Reaction } from "@/lib/labReactions";

const STORE = "lab_discoveries";

export default function Laboratorio() {
  const [filter, setFilter] = useState<"todos" | "elemento" | "substancia">("todos");
  const [beaker, setBeaker] = useState<string[]>([]);
  const [result, setResult] = useState<Reaction | null | "nada">(null);
  const [found, setFound] = useState<string[]>(() => JSON.parse(localStorage.getItem(STORE) || "[]"));

  useEffect(() => localStorage.setItem(STORE, JSON.stringify(found)), [found]);

  const add = (id: string) => {
    setResult(null);
    setBeaker((b) => (b.includes(id) || b.length >= 3 ? b : [...b, id]));
  };

  const doMix = async () => {
    const r = mix(beaker);
    setResult(r ?? "nada");
    if (r && !found.includes(r.product)) {
      setFound((f) => [...f, r.product]);
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        await addCoins(data.session.user.id, 4);
        toast.success(`Novo composto descoberto! +4⚛`);
      } else toast.success("Novo composto descoberto!");
    }
  };

  const list = REAGENTS.filter((r) => filter === "todos" || r.kind === filter);
  const name = (id: string) => REAGENTS.find((r) => r.id === id);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">⚗️ Laboratório Virtual</h1>
          <Link to="/" className="text-sm text-muted-foreground underline">Voltar</Link>
        </div>
        <p className="text-muted-foreground">Escolha até 3 reagentes, coloque no béquer e misture para descobrir compostos.</p>

        <div className="grid md:grid-cols-[1fr_320px] gap-6">
          <Card className="p-4 space-y-3">
            <div className="flex gap-2">
              {(["todos", "elemento", "substancia"] as const).map((f) => (
                <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)}>
                  {f === "todos" ? "Todos" : f === "elemento" ? "Elementos da tabela" : "Misturas de laboratório"}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {list.map((r) => (
                <button key={r.id} onClick={() => add(r.id)}
                  className={`rounded-lg border p-2 text-left hover:bg-muted transition ${beaker.includes(r.id) ? "border-primary bg-muted" : "border-border"}`}>
                  <div className="text-2xl">{r.emoji}</div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.formula}</div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4 space-y-4">
            <h2 className="font-bold text-foreground">🧪 Béquer</h2>
            <div className={`h-40 rounded-b-3xl border-4 border-t-0 border-border flex flex-wrap items-end justify-center gap-2 p-3 ${result && result !== "nada" ? "animate-pulse" : ""}`}
              style={result && result !== "nada" ? { background: `hsl(var(${result.color}) / 0.25)` } : undefined}>
              {beaker.length === 0 && <span className="text-sm text-muted-foreground">vazio</span>}
              {beaker.map((id) => (
                <button key={id} onClick={() => setBeaker((b) => b.filter((x) => x !== id))} className="text-xs bg-card border rounded px-2 py-1">
                  {name(id)?.emoji} {name(id)?.formula} ✕
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" disabled={beaker.length < 2} onClick={doMix}>Misturar</Button>
              <Button variant="outline" onClick={() => { setBeaker([]); setResult(null); }}>Limpar</Button>
            </div>
            {result === "nada" && <p className="text-sm text-muted-foreground">Nada aconteceu… essa combinação não reage. Tente outra!</p>}
            {result && result !== "nada" && (
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground">{result.effect}</p>
                <p className="font-semibold text-foreground">{result.product}</p>
                <p className="font-mono text-sm text-foreground">{result.equation}</p>
                <p className="text-sm text-muted-foreground">{result.explanation}</p>
              </div>
            )}
          </Card>
        </div>

        <Card className="p-4">
          <h2 className="font-bold text-foreground mb-2">📒 Compostos descobertos: {found.length}/{REACTIONS.length}</h2>
          <div className="flex flex-wrap gap-2">
            {REACTIONS.map((r) => (
              <span key={r.product} className="text-xs rounded-full border px-2 py-1 text-foreground">
                {found.includes(r.product) ? r.product : "❓ ???"}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
