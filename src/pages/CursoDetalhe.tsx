import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, Circle, Coins, Loader2, PlayCircle, Zap } from "lucide-react";
import { toast } from "sonner";
import { areaMeta } from "@/lib/aula";
import { grantCoins } from "@/lib/playerEconomy";

type Course = { id: string; title: string; description: string | null; area: string; level: string };
type Lesson = {
  id: string; title: string; content: string | null; video_url: string | null;
  order_index: number; xp_reward: number; coin_reward: number;
};

export default function CursoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const load = async () => {
    if (!id) return;
    setLoading(true);
    const [{ data: c }, { data: ls }] = await Promise.all([
      supabase.from("courses").select("id,title,description,area,level").eq("id", id).maybeSingle(),
      supabase.from("course_lessons").select("*").eq("course_id", id).order("order_index"),
    ]);
    setCourse(c as any);
    setLessons((ls ?? []) as Lesson[]);
    if (user?.id && ls?.length) {
      const { data: cs } = await supabase
        .from("lesson_completions")
        .select("lesson_id")
        .in("lesson_id", ls.map((l: any) => l.id))
        .eq("user_id", user.id);
      setDone(new Set((cs ?? []).map((x: any) => x.lesson_id)));
    }
    setLoading(false);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [id, user?.id]);

  const complete = async (lesson: Lesson) => {
    if (!user?.id) { toast.error("Faça login"); return; }
    if (done.has(lesson.id)) { toast.info("Aula já concluída"); return; }
    setSaving(true);
    const { error } = await supabase
      .from("lesson_completions")
      .insert({ lesson_id: lesson.id, user_id: user.id });
    if (error) { toast.error(error.message); setSaving(false); return; }
    try {
      await grantCoins(user.id, lesson.coin_reward, `Aula: ${lesson.title}`);
    } catch { /* ignore */ }
    setDone(new Set([...done, lesson.id]));
    toast.success(`+${lesson.xp_reward} XP e +${lesson.coin_reward} ⚛`);
    setSaving(false);
  };

  const progress = lessons.length ? Math.round((done.size / lessons.length) * 100) : 0;
  const m = course ? areaMeta(course.area) : null;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-900"><Loader2 className="animate-spin text-white" size={32} /></div>;
  }
  if (!course) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
      <p>Curso não encontrado.</p>
      <Link to="/cursos" className="underline">Voltar</Link>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-5xl mx-auto py-6">
        <Link to="/cursos" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
          <ArrowLeft size={18} /> Cursos
        </Link>

        <Card className="p-6 mb-6" style={{ background: `linear-gradient(135deg, ${m!.color}, #1e293b)`, color: "#fff", border: 0 }}>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{m!.emoji}</div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-black">{course.title}</h1>
              {course.description && <p className="text-white/85 mt-1">{course.description}</p>}
              <div className="flex gap-2 mt-3">
                <Badge className="bg-white/20 text-white">{m!.label}</Badge>
                <Badge className="bg-white/20 text-white">{course.level}</Badge>
                <Badge className="bg-white/20 text-white">{lessons.length} aulas</Badge>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1"><span>Progresso</span><span>{progress}%</span></div>
                <Progress value={progress} className="bg-white/20" />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-4">
          <Card className="p-4">
            <h2 className="font-bold mb-3">Aulas</h2>
            <ol className="space-y-2">
              {lessons.map((l) => {
                const isDone = done.has(l.id);
                const isActive = active?.id === l.id;
                return (
                  <li key={l.id}>
                    <button
                      onClick={() => setActive(l)}
                      className={`w-full text-left p-3 rounded-lg border transition flex items-start gap-3 ${
                        isActive ? "border-[#4C1D95] bg-violet-50" : "hover:bg-slate-50"
                      }`}
                    >
                      {isDone
                        ? <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                        : <Circle className="text-slate-400 shrink-0 mt-0.5" size={20} />}
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">Aula {l.order_index}</div>
                        <div className="font-semibold text-sm leading-tight">{l.title}</div>
                        <div className="flex gap-2 mt-1 text-[11px] text-slate-500">
                          <span className="inline-flex items-center gap-0.5"><Zap size={11} />{l.xp_reward}</span>
                          <span className="inline-flex items-center gap-0.5"><Coins size={11} />{l.coin_reward}</span>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Card>

          <Card className="p-6">
            {!active ? (
              <div className="text-center text-slate-500 py-16">
                <PlayCircle className="mx-auto mb-2" size={40} />
                <p>Selecione uma aula para começar</p>
              </div>
            ) : (
              <div>
                <div className="text-xs text-slate-500 mb-1">Aula {active.order_index}</div>
                <h2 className="text-xl font-black mb-3">{active.title}</h2>
                {active.video_url && (
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-black">
                    <iframe src={active.video_url} className="w-full h-full" allowFullScreen />
                  </div>
                )}
                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-slate-700">
                  {active.content}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button
                    onClick={() => complete(active)}
                    disabled={saving || done.has(active.id)}
                    className="bg-[#059669] hover:bg-[#047857]"
                  >
                    {done.has(active.id) ? <><CheckCircle2 className="mr-2" size={16} />Concluída</> :
                      saving ? <><Loader2 className="animate-spin mr-2" size={16} />Salvando</> :
                      <>Marcar como concluída (+{active.xp_reward} XP, +{active.coin_reward} ⚛)</>}
                  </Button>
                  {active.order_index < lessons.length && (
                    <Button variant="outline" onClick={() => {
                      const next = lessons.find(l => l.order_index === active.order_index + 1);
                      if (next) setActive(next);
                    }}>Próxima →</Button>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
