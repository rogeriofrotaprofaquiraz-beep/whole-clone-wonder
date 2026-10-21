import { useState } from "react";
import { ElementQuiz } from "@/components/game/ElementQuiz";
import { Forca } from "@/components/aula/Forca";
import { CacaPalavras } from "@/components/aula/CacaPalavras";
import { Memoria } from "@/components/aula/Memoria";
import { AREAS, AreaValue, DIFFICULTIES } from "@/lib/aula";
import { useFeatureAccess } from "@/lib/featureAccess";
import { Button } from "@/components/ui/button";

const GAMES = [
  { id: "quiz", label: "Quiz", emoji: "❓" },
  { id: "forca", label: "Forca", emoji: "🎯" },
  { id: "caca", label: "Caça-palavras", emoji: "🔤" },
  { id: "memoria", label: "Memória", emoji: "🧠" },
] as const;

export function CampeonatoJogos() {
  const { can } = useFeatureAccess();
  const [game, setGame] = useState<(typeof GAMES)[number]["id"]>("quiz");
  const [area, setArea] = useState<AreaValue>("geral");
  const [difficulty, setDifficulty] = useState(2);
  const games = GAMES.filter((g) => g.id === "quiz" || can(`jogo_${g.id}`));

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      <div className="text-center text-sm text-muted-foreground">Escolha o jogo e ganhe ⚛ Átomos a cada acerto</div>
      <div className="flex flex-wrap justify-center gap-2">
        {games.map((g) => (
          <Button key={g.id} variant={game === g.id ? "default" : "outline"} onClick={() => setGame(g.id)}>
            {g.emoji} {g.label}
          </Button>
        ))}
      </div>
      {game !== "quiz" && (
        <div className="flex flex-wrap justify-center gap-2">
          {AREAS.map((a) => (
            <Button key={a.value} size="sm" variant={area === a.value ? "secondary" : "ghost"} onClick={() => setArea(a.value)}>
              {a.emoji} {a.label}
            </Button>
          ))}
        </div>
      )}
      {game === "forca" && (
        <div className="flex flex-wrap justify-center gap-2">
          {DIFFICULTIES.map((d) => (
            <Button key={d.value} size="sm" variant={difficulty === d.value ? "secondary" : "ghost"} onClick={() => setDifficulty(d.value)}>
              {d.value}★ {d.label}
            </Button>
          ))}
        </div>
      )}
      {game === "quiz" && <ElementQuiz />}
      {game === "forca" && <Forca area={area} level="medio" difficulty={difficulty} />}
      {game === "caca" && <CacaPalavras area={area} />}
      {game === "memoria" && <Memoria area={area} />}
    </div>
  );
}
