import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AREAS, AreaValue } from "@/lib/aula";
import { Forca } from "@/components/aula/Forca";
import { CacaPalavras } from "@/components/aula/CacaPalavras";
import { Memoria } from "@/components/aula/Memoria";

const GAMES = [
  { id: "forca", label: "Forca", emoji: "🎯" },
  { id: "caca", label: "Caça-palavras", emoji: "🔤" },
  { id: "memoria", label: "Memória", emoji: "🧠" },
] as const;

export default function Treino() {
  const navigate = useNavigate();
  const [area, setArea] = useState<AreaValue>("geral");
  const [game, setGame] = useState<typeof GAMES[number]["id"]>("forca");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => navigate("/aula")} className="mb-3"><ArrowLeft size={16} className="mr-1" />Voltar</Button>

        <Card className="p-4 mb-4">
          <div className="font-bold mb-2 text-sm">Área</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {AREAS.map((a) => (
              <button key={a.value} onClick={() => setArea(a.value)}
                className="px-3 py-2 rounded-lg text-white text-sm font-bold transition"
                style={{ background: a.color, opacity: area === a.value ? 1 : 0.4 }}>
                {a.emoji} {a.label}
              </button>
            ))}
          </div>
          <div className="font-bold mb-2 text-sm">Jogo</div>
          <div className="flex flex-wrap gap-2">
            {GAMES.map((g) => (
              <button key={g.id} onClick={() => setGame(g.id)}
                className={`px-3 py-2 rounded-lg text-sm font-bold border-2 transition ${game === g.id ? "bg-[#4C1D95] text-white border-[#4C1D95]" : "bg-white border-slate-200"}`}>
                {g.emoji} {g.label}
              </button>
            ))}
          </div>
        </Card>

        {game === "forca" && <Forca area={area} />}
        {game === "caca" && <CacaPalavras area={area} />}
        {game === "memoria" && <Memoria area={area} />}
      </div>
    </div>
  );
}
