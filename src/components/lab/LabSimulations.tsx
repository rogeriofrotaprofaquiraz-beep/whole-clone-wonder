import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simulações interativas PhET (Universidade do Colorado, licença CC-BY 4.0), em português.
const SIMS = [
  { id: "models-of-the-hydrogen-atom", emoji: "⚛️", name: "Modelos do Átomo de Hidrogênio" },
  { id: "build-an-atom", emoji: "🔬", name: "Monte um Átomo" },
  { id: "build-a-molecule", emoji: "🧬", name: "Monte uma Molécula" },
  { id: "molecule-shapes-basics", emoji: "🔺", name: "Forma das Moléculas" },
  { id: "states-of-matter-basics", emoji: "🧊", name: "Estados da Matéria" },
  { id: "ph-scale-basics", emoji: "🧪", name: "Escala de pH" },
  { id: "concentration", emoji: "🥤", name: "Concentração" },
];

const simUrl = (id: string) => `https://phet.colorado.edu/sims/html/${id}/latest/${id}_pt_BR.html`;

export function LabSimulations() {
  const [active, setActive] = useState<string | null>(null);
  const sim = SIMS.find((s) => s.id === active);
  return (
    <Card className="p-4 space-y-3">
      <h2 className="text-xl font-bold text-foreground">🧫 Módulos de simulação</h2>
      <div className="flex flex-wrap gap-2">
        {SIMS.map((s) => (
          <Button key={s.id} size="sm" variant={active === s.id ? "default" : "outline"} onClick={() => setActive(s.id)}>
            {s.emoji} {s.name}
          </Button>
        ))}
      </div>
      {sim ? (
        <div className="space-y-1">
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted">
            <iframe key={sim.id} src={simUrl(sim.id)} title={sim.name} className="w-full h-full" allowFullScreen />
          </div>
          <p className="text-xs text-muted-foreground">Simulação PhET Interactive Simulations, Universidade do Colorado Boulder (CC-BY 4.0).</p>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Escolha um módulo para abrir a simulação.</p>
      )}
    </Card>
  );
}
