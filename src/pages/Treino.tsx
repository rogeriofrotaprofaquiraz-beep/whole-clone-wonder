import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AREAS, AreaValue, LEVELS, LevelValue, DIFFICULTIES } from "@/lib/aula";
import { Forca } from "@/components/aula/Forca";
import { CacaPalavras } from "@/components/aula/CacaPalavras";
import { Memoria } from "@/components/aula/Memoria";
import { QuestionGate } from "@/components/aula/QuestionGate";
import { CursoQuiz } from "@/components/aula/CursoQuiz";
import { useFeatureAccess } from "@/lib/featureAccess";
import { supabase } from "@/integrations/supabase/client";

const GAMES = [
  { id: "assunto", label: "Quiz do assunto", emoji: "📚" },
  { id: "forca", label: "Forca", emoji: "🎯" },
  { id: "caca", label: "Caça-palavras", emoji: "🔤" },
  { id: "memoria", label: "Memória", emoji: "🧠" },
] as const;

type C = { id: string; title: string; area: string; level: string };
type L = { id: string; title: string; content: string | null };

export default function Treino() {
  const navigate = useNavigate();
  const [area, setArea] = useState<AreaValue>("geral");
  const [level, setLevel] = useState<LevelValue>("medio");
  const [difficulty, setDifficulty] = useState<number>(2);
  const { can } = useFeatureAccess();
  const games = GAMES.filter((g) => g.id === "assunto" || can(`jogo_${g.id}`));
  const [game, setGame] = useState<typeof GAMES[number]["id"]>("assunto");
  const [courses, setCourses] = useState<C[]>([]);
  const [courseId, setCourseId] = useState("");
  const [lessons, setLessons] = useState<L[]>([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    supabase.from("courses").select("id,title,area,level").eq("published", true)
      .then(({ data }) => setCourses(((data ?? []) as C[]).sort((a, b) => a.title.localeCompare(b.title, "pt-BR", { numeric: true }))));
  }, []);
  const levelCourses = courses.filter((c) => c.level === level);
  useEffect(() => { setCourseId(""); setTopic(""); }, [level]);
  useEffect(() => {
    setLessons([]); setTopic("");
    if (!courseId) return;
    const c = courses.find((x) => x.id === courseId);
    if (c && AREAS.some((a) => a.value === c.area)) setArea(c.area as AreaValue);
    supabase.from("course_lessons").select("id,title,content").eq("course_id", courseId).order("order_index")
      .then(({ data }) => setLessons((data ?? []) as L[]));
  }, [courseId]);

  const [phase, setPhase] = useState(1);
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => { setPhase(1); setUnlocked(false); }, [game, area, level]);
  const nextPhase = () => { setPhase((p) => p + 1); setUnlocked(false); };

  const termLevel = (level === "olimpiada" ? "fundamental" : level) as LevelValue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => navigate("/aula")} className="mb-3"><ArrowLeft size={16} className="mr-1" />Voltar</Button>

        <Card className="p-4 mb-4 space-y-4">
          <div>
            <div className="font-bold mb-2 text-sm">Nível de ensino</div>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((l) => (
                <button key={l.value} onClick={() => setLevel(l.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold border-2 transition ${level === l.value ? "bg-[#059669] text-white border-[#059669]" : "bg-white border-slate-200"}`}>
                  {l.emoji} {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <div className="font-bold mb-2 text-sm">Curso</div>
              <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm bg-background">
                <option value="">— Escolha um curso deste nível —</option>
                {levelCourses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
              {!levelCourses.length && <div className="text-xs text-muted-foreground mt-1">Nenhum curso neste nível ainda.</div>}
            </div>
            <div>
              <div className="font-bold mb-2 text-sm">Assunto</div>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!lessons.length} className="w-full border rounded-lg px-3 py-2 text-sm bg-background">
                <option value="">— Escolha o assunto —</option>
                {lessons.map((l) => <option key={l.id} value={l.title}>{l.title}</option>)}
              </select>
            </div>
          </div>

          <div>
            <div className="font-bold mb-2 text-sm">Dificuldade (quanto maior, mais pontos)</div>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map((d) => (
                <button key={d.value} onClick={() => setDifficulty(d.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold border-2 transition ${difficulty === d.value ? "bg-[#D97706] text-white border-[#D97706]" : "bg-white border-slate-200"}`}>
                  {d.value}★ {d.label} <span className="opacity-70 text-xs">({d.base}pt)</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold mb-2 text-sm">Área</div>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <button key={a.value} onClick={() => setArea(a.value)}
                  className="px-3 py-2 rounded-lg text-white text-sm font-bold transition"
                  style={{ background: a.color, opacity: area === a.value ? 1 : 0.4 }}>
                  {a.emoji} {a.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold mb-2 text-sm">Jogo</div>
            <div className="flex flex-wrap gap-2">
              {games.map((g) => (
                <button key={g.id} onClick={() => setGame(g.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold border-2 transition ${game === g.id ? "bg-[#4C1D95] text-white border-[#4C1D95]" : "bg-white border-slate-200"}`}>
                  {g.emoji} {g.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {!unlocked ? <QuestionGate area={area} level={level} phase={phase} onPass={() => setUnlocked(true)} /> : (
          <div key={phase} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm">🏁 Fase {phase}</span>
              <Button size="sm" onClick={nextPhase}>Próxima fase →</Button>
            </div>
        {game === "assunto" && (topic ? <CursoQuiz topic={topic} level={level} content={lessons.find((l) => l.title === topic)?.content} /> : <Card className="p-6 text-sm text-muted-foreground">Escolha um curso e um assunto acima para jogar com as questões dele.</Card>)}
        {game === "forca" && can("jogo_forca") && <Forca area={area} level={termLevel} difficulty={difficulty} />}
        {game === "caca" && can("jogo_caca") && <CacaPalavras area={area} />}
        {game === "memoria" && can("jogo_memoria") && <Memoria area={area} />}
          </div>
        )}
      </div>
    </div>
  );
}
