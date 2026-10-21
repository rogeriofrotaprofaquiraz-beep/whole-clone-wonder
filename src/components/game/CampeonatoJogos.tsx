import { useState } from "react";
import { ElementQuiz } from "@/components/game/ElementQuiz";
import { Forca } from "@/components/aula/Forca";
import { CacaPalavras } from "@/components/aula/CacaPalavras";
import { Memoria } from "@/components/aula/Memoria";
import { PalavrasCruzadas, TabuleiroQuimico, BatalhaNaval, StopQuimico, BingoQuimico, TangramMolecular } from "@/components/aula/NovosJogos";
import { AREAS, AreaValue, DIFFICULTIES } from "@/lib/aula";
import { useFeatureAccess } from "@/lib/featureAccess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";

type Lvl = "fácil" | "médio" | "difícil";
export const GAME_MODES: { id: string; label: string; desc: string; emoji: string; level: Lvl; time: string; tag?: "Popular" | "Novo"; area?: boolean }[] = [
  { id: "quiz", label: "Quiz Rápido", desc: "Perguntas e respostas rápidas", emoji: "❓", level: "fácil", time: "2-5 min", tag: "Popular" },
  { id: "forca", label: "Jogo da Forca", desc: "Adivinhe a palavra química", emoji: "🎯", level: "médio", time: "3-5 min", area: true },
  { id: "caca", label: "Caça-Palavras", desc: "Encontre termos químicos", emoji: "🔍", level: "fácil", time: "5-10 min", tag: "Popular", area: true },
  { id: "cruzada", label: "Palavras Cruzadas", desc: "Complete com conhecimento", emoji: "📝", level: "difícil", time: "10-15 min", area: true },
  { id: "memoria", label: "Jogo da Memória", desc: "Combine pares químicos", emoji: "🧠", level: "médio", time: "5-8 min", area: true },
  { id: "tabuleiro", label: "Tabuleiro Químico", desc: "Avance com conhecimento", emoji: "🎲", level: "médio", time: "15-20 min", tag: "Novo" },
  { id: "naval", label: "Batalha Naval", desc: "Batalha na tabela periódica", emoji: "🚢", level: "difícil", time: "10-15 min", tag: "Novo" },
  { id: "stop", label: "Stop Químico", desc: "Categorias contra o tempo", emoji: "⚡", level: "médio", time: "5-10 min", tag: "Popular" },
  { id: "bingo", label: "Bingo Químico", desc: "Marque elementos chamados", emoji: "🔢", level: "fácil", time: "10-15 min" },
  { id: "tangram", label: "Tangram Molecular", desc: "Monte estruturas moleculares", emoji: "🧩", level: "difícil", time: "10-20 min", tag: "Novo" },
];

export function CampeonatoJogos() {
  const { can } = useFeatureAccess();
  const [game, setGame] = useState<string | null>(null);
  const [filter, setFilter] = useState<"todos" | Lvl>("todos");
  const [area, setArea] = useState<AreaValue>("geral");
  const [difficulty, setDifficulty] = useState(2);
  const games = GAME_MODES.filter((g) => g.id === "quiz" || can(`jogo_${g.id}`));
  const shown = games.filter((g) => filter === "todos" || g.level === filter);
  const mode = GAME_MODES.find((g) => g.id === game);

  if (!mode) return (
    <div className="w-full max-w-6xl mx-auto space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-black">🎮 Modos de Jogo</h2>
        <div className="flex gap-2">
          {(["todos", "fácil", "médio", "difícil"] as const).map((f) => (
            <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} className="capitalize">{f}</Button>
          ))}
        </div>
      </div>
      <div className="text-sm text-muted-foreground">Ganhe ⚛ Átomos a cada acerto</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {shown.map((g) => (
          <Card key={g.id} onClick={() => setGame(g.id)} className="p-4 cursor-pointer hover:border-primary hover:-translate-y-0.5 transition relative space-y-2">
            {g.tag && <Badge variant="secondary" className="absolute top-2 right-2 text-[10px]">{g.tag === "Popular" ? "🔥" : "⭐"} {g.tag}</Badge>}
            <div className="text-3xl w-12 h-12 rounded-xl bg-muted flex items-center justify-center">{g.emoji}</div>
            <div className="font-bold">{g.label}</div>
            <div className="text-xs text-muted-foreground">{g.desc}</div>
            <div className="flex items-center gap-2 text-xs">
              <Badge variant={g.level === "difícil" ? "destructive" : "outline"}>{g.level}</Badge>
              <span className="text-muted-foreground flex items-center gap-1"><Clock size={12} />{g.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      <Button variant="ghost" onClick={() => setGame(null)}><ArrowLeft size={16} className="mr-1" />Modos de jogo</Button>
      {mode.area && (
        <div className="flex flex-wrap justify-center gap-2">
          {AREAS.map((a) => (
            <Button key={a.value} size="sm" variant={area === a.value ? "secondary" : "ghost"} onClick={() => setArea(a.value)}>{a.emoji} {a.label}</Button>
          ))}
        </div>
      )}
      {game === "forca" && (
        <div className="flex flex-wrap justify-center gap-2">
          {DIFFICULTIES.map((d) => (
            <Button key={d.value} size="sm" variant={difficulty === d.value ? "secondary" : "ghost"} onClick={() => setDifficulty(d.value)}>{d.value}★ {d.label}</Button>
          ))}
        </div>
      )}
      {game === "quiz" && <ElementQuiz />}
      {game === "forca" && <Forca area={area} level="medio" difficulty={difficulty} />}
      {game === "caca" && <CacaPalavras area={area} />}
      {game === "cruzada" && <PalavrasCruzadas area={area} />}
      {game === "memoria" && <Memoria area={area} />}
      {game === "tabuleiro" && <TabuleiroQuimico />}
      {game === "naval" && <BatalhaNaval />}
      {game === "stop" && <StopQuimico />}
      {game === "bingo" && <BingoQuimico />}
      {game === "tangram" && <TangramMolecular />}
    </div>
  );
}
