import { setCurrentGame, PENDING_GAME_KEY } from "@/lib/gameStats";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { ElementQuiz } from "@/components/game/ElementQuiz";
import { ForcaDuelo } from "@/components/aula/ForcaDuelo";
import { CacaPalavras } from "@/components/aula/CacaPalavras";
import { Memoria } from "@/components/aula/Memoria";
import { PalavrasCruzadas, TabuleiroQuimico, BatalhaNaval, StopQuimico, BingoQuimico, TangramMolecular } from "@/components/aula/NovosJogos";
import { AREAS, AreaValue, DIFFICULTIES } from "@/lib/aula";
import { QuestionGate } from "@/components/aula/QuestionGate";
import { useFeatureAccess } from "@/lib/featureAccess";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";

type Lvl = "fácil" | "médio" | "difícil";
// [cor normal, cor ao clicar]
const LEVEL_COLORS: Record<"todos" | Lvl, [string, string]> = {
  todos: ["", "bg-primary text-primary-foreground"],
  "fácil": ["bg-green-200 text-green-900 border-green-300 hover:bg-green-300", "bg-green-800 text-white border-green-900 hover:bg-green-800"],
  "médio": ["bg-yellow-200 text-yellow-900 border-yellow-300 hover:bg-yellow-300", "bg-yellow-600 text-white border-yellow-700 hover:bg-yellow-600"],
  "difícil": ["bg-red-200 text-red-900 border-red-300 hover:bg-red-300", "bg-red-700 text-white border-red-800 hover:bg-red-700"],
};
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
  const [assigned, setAssigned] = useState<any[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [topic, setTopic] = useState("");
  const [topicSearch, setTopicSearch] = useState("");
  const [phase, setPhase] = useState(1);
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => { setPhase(1); setUnlocked(false); }, [game, area, topic]);
  useEffect(() => {
    supabase.from("chem_questions").select("topic").not("topic", "is", null).limit(1000).then(({ data }) =>
      setTopics([...new Set((data ?? []).map((r: any) => String(r.topic).trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))));
  }, []);
  const shownTopics = topics.filter((t) => t.toLowerCase().includes(topicSearch.toLowerCase()));
  useEffect(() => { setCurrentGame(game); return () => setCurrentGame(null); }, [game]);
  useEffect(() => {
    const pend = sessionStorage.getItem(PENDING_GAME_KEY);
    if (pend) { sessionStorage.removeItem(PENDING_GAME_KEY); setGame(pend); }
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;
      const { data: a } = await (supabase as any).from("game_assignments").select("*").eq("user_id", data.user.id).is("completed_at", null).order("created_at", { ascending: false });
      setAssigned(a ?? []);
    });
  }, []);
  const openAssigned = async (a: any) => {
    await (supabase as any).from("game_assignments").update({ completed_at: new Date().toISOString() }).eq("id", a.id);
    setAssigned((x) => x.filter((y) => y.id !== a.id));
    setGame(a.game_key);
  };

  if (!mode) return (
    <div className="w-full max-w-6xl mx-auto space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-black">🎮 Modos de Jogo</h2>
        {assigned.length > 0 && (
          <div className="w-full space-y-2 rounded-xl border-2 border-primary bg-primary/10 p-3">
            <p className="text-sm font-bold">📌 Seu professor indicou:</p>
            {assigned.map((a) => { const m = GAME_MODES.find((g) => g.id === a.game_key); return (
              <div key={a.id} className="flex flex-wrap items-center gap-2">
                <span className="text-sm">{m?.emoji} {m?.label ?? a.game_key}{a.note ? ` — ${a.note}` : ""}</span>
                <Button size="sm" onClick={() => openAssigned(a)}>Jogar agora</Button>
              </div>); })}
          </div>
        )}
        <div className="flex gap-2">
          {(["todos", "fácil", "médio", "difícil"] as const).map((f) => (
            <Button key={f} size="sm" variant="outline" onClick={() => setFilter(f)}
              className={`capitalize font-bold border-2 ${LEVEL_COLORS[f][filter === f ? 1 : 0]}`}>{f}</Button>
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
      <Card className="p-3 space-y-2">
        <div className="text-sm font-bold">🔎 Assunto das perguntas (banco de questões por assunto)</div>
        <div className="flex flex-wrap gap-2">
          <input value={topicSearch} onChange={(e) => setTopicSearch(e.target.value)} placeholder="Buscar assunto…" className="border rounded-lg px-3 py-2 text-sm bg-background flex-1 min-w-[180px]" />
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className="border rounded-lg px-3 py-2 text-sm bg-background flex-1 min-w-[180px]">
            <option value="">Todos os assuntos (pela área)</option>
            {shownTopics.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </Card>
      {game === "quiz" ? <ElementQuiz /> : game === "forca" ? <ForcaDuelo area={area} level="medio" difficulty={difficulty} /> : !unlocked ? <QuestionGate area={area} topic={topic || undefined} phase={phase} onPass={() => setUnlocked(true)} /> : (<div key={phase} className="space-y-3">
      <div className="flex items-center justify-between"><span className="font-bold text-sm">🏁 Fase {phase}</span><Button size="sm" onClick={() => { setPhase((p) => p + 1); setUnlocked(false); }}>Próxima fase →</Button></div>
      {game === "caca" && <CacaPalavras area={area} topic={topic || undefined} />}
      {game === "cruzada" && <PalavrasCruzadas area={area} topic={topic || undefined} />}
      {game === "memoria" && <Memoria area={area} topic={topic || undefined} />}
      {game === "tabuleiro" && <TabuleiroQuimico area={area} topic={topic || undefined} />}
      {game === "naval" && <BatalhaNaval />}
      {game === "stop" && <StopQuimico />}
      {game === "bingo" && <BingoQuimico />}
      {game === "tangram" && <TangramMolecular />}
      </div>)}
    </div>
  );
}
