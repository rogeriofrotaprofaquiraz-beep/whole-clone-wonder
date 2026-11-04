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
import { addCoins } from "@/lib/playerEconomy";
import TopicExercise from "@/components/TopicExercise";
import CourseChecklist from "@/components/CourseChecklist";

function reviewCategoryFor(course: { title: string; area: string }): string {
  const t = (course.title + " " + course.area).toLowerCase();
  const rules: [RegExp, string][] = [
    [/org[âa]nic/, "organica"],
    [/[áa]cido|base|p[hH]|sal|hidr[óo]lise/, "acidobase"],
    [/termo|entalp|entrop|gibbs/, "termo"],
    [/cin[ée]tic|velocidade|catalis/, "cinetica"],
    [/equil[íi]brio|le chatelier/, "equilibrio"],
    [/solu[çc][ãa]o|colig|molarid|dilui/, "solucoes"],
    [/eletro|pilha|nox|redox|oxidorredu/, "eletro"],
    [/nuclear|radioativ|f[íi]ssão|fusão/, "nuclear"],
    [/g[áa]s|gases|clapeyron/, "gases"],
    [/mat[ée]ria|mistura|estado f[íi]sico/, "materia"],
    [/cotidian|ambient|farmac|droga|aliment/, "cotidiano"],
    [/peri[óo]dic|tabela|fam[íi]lia/, "periodica"],
    [/liga[çc]|geometr|vsepr|polar/, "ligacoes"],
    [/rea[çc][ãa]o|estequio|balance/, "reacoes"],
    [/[áa]tom|modelo at|is[óo]top/, "atomo"],
  ];
  for (const [re, cat] of rules) if (re.test(t)) return cat;
  return "geral";
}

type Course = { id: string; title: string; description: string | null; area: string; level: string; hours: number; image_url?: string | null; slide_url?: string | null };
type Lesson = {
  id: string; title: string; content: string | null; video_url: string | null;
  order_index: number; xp_reward: number; coin_reward: number;
  image_url?: string | null; slide_url?: string | null;
};

function slugify(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

/** Renderiza conteúdo em markdown-lite agrupando seções e transformando bullets em links. */
function LessonContent({ text, backTo, lessonTitle }: { text: string; backTo: string; lessonTitle?: string }) {
  // Agrupa por seções ## ; ignora H1 (duplica o título da aula) e junta bullets.
  type Section = { heading?: string; bullets: string[]; paragraphs: string[] };
  const sections: Section[] = [];
  let current: Section = { bullets: [], paragraphs: [] };
  sections.push(current);

  for (const raw of text.split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    const h1 = line.match(/^\s*#\s+(.+)$/);
    if (h1) {
      // Pula H1 se for igual ao título da aula
      if (lessonTitle && h1[1].trim().toLowerCase() === lessonTitle.trim().toLowerCase()) continue;
      current = { heading: h1[1].trim(), bullets: [], paragraphs: [] };
      sections.push(current);
      continue;
    }
    const h2 = line.match(/^\s*#{2,6}\s+(.+)$/);
    if (h2) {
      current = { heading: h2[1].trim(), bullets: [], paragraphs: [] };
      sections.push(current);
      continue;
    }
    const bullet = line.match(/^\s*[-•*]\s+(.+)$/);
    if (bullet) { current.bullets.push(bullet[1].replace(/\*\*/g, "").trim()); continue; }
    current.paragraphs.push(line);
  }

  const [adminFree, setAdminFree] = useState(false);
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: u }) => {
      if (!u.user) return;
      const { data } = await supabase.rpc("has_role", { _user_id: u.user.id, _role: "admin" });
      setAdminFree(!!data);
    });
  }, []);

  const nonEmpty = sections.filter(s => s.heading || s.bullets.length || s.paragraphs.length);

  return (
    <div className="space-y-4">
      {nonEmpty.map((s, i) => (
        <div key={i}>
          {s.heading && (
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#4C1D95] mb-2">
              {s.heading}
            </h4>
          )}
          {s.paragraphs.length > 0 && (
            <div className="space-y-1.5 mb-2">
              {s.paragraphs.map((p, k) => {
                const img = p.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                if (img) {
                  return (
                    <img key={k} src={img[2]} alt={img[1]}
                      className="rounded-lg border max-h-96 my-2" loading="lazy" />
                  );
                }
                const html = p
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
                    '<img src="$2" alt="$1" class="inline-block rounded max-h-40 mx-1" />')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" target="_blank" rel="noopener" class="text-[#4C1D95] underline font-semibold">$1</a>');
                return (
                  <p key={k} className="text-sm text-slate-700 leading-relaxed"
                     dangerouslySetInnerHTML={{ __html: html }} />
                );
              })}
            </div>
          )}
          {s.bullets.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {s.bullets.map((topic, k) => {
                const lessonParam = lessonTitle ? `&lesson=${encodeURIComponent(lessonTitle)}` : "";
                const url = `/topico/${slugify(topic)}?t=${encodeURIComponent(topic)}${lessonParam}&back=${encodeURIComponent(backTo)}`;
                const prevSlug = k > 0 ? slugify(s.bullets[k - 1]) : "";
                const prevScore = k > 0 ? getDeckScore(prevSlug) : null;
                const unlocked = adminFree || isTopicUnlocked(k, prevScore);
                if (!unlocked) return (
                  <li key={k}>
                    <div title={`Faça pelo menos ${PASS_PERCENT}% nos slides do tópico anterior para liberar`}
                      className="flex items-start gap-2 p-2 rounded-md border border-slate-200 bg-slate-100 text-sm text-slate-500 font-medium cursor-not-allowed">
                      <span className="mt-0.5 font-bold text-xs bg-slate-200 w-5 h-5 flex items-center justify-center rounded-full shrink-0">🔒</span>
                      <span className="flex-1">{topic}<span className="block text-[11px]">Precisa de {PASS_PERCENT}% no anterior{prevScore !== null ? ` (você fez ${prevScore}%)` : ""}</span></span>
                    </div>
                  </li>
                );
                return (
                  <li key={k}>
                    <Link
                      to={`${url}&idx=${k + 1}`}
                      className="flex items-start gap-2 p-2 rounded-md border border-violet-200 bg-violet-50/60 hover:bg-violet-100 hover:border-violet-400 transition text-sm text-[#4C1D95] font-medium"
                    >
                      <span className="mt-0.5 font-bold text-xs bg-violet-200 w-5 h-5 flex items-center justify-center rounded-full shrink-0">{String(k + 1).padStart(2, '0')}</span>
                      <span className="flex-1">{topic.includes('. ') ? topic : topic}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

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
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [passed, setPassed] = useState(false);


  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const load = async () => {
    if (!id) return;
    setLoading(true);
    const [{ data: c }, { data: ls }] = await Promise.all([
      supabase.from("courses").select("id,title,description,area,level,hours,image_url,slide_url").eq("id", id).maybeSingle(),
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
    if (user?.id) {
      const { data: att } = await supabase
        .from("assessment_attempts")
        .select("passed")
        .eq("course_id", id)
        .eq("user_id", user.id);
      const rows = att ?? [];
      setPassed(rows.some((r: any) => r.passed));
      setFailedAttempts(rows.filter((r: any) => !r.passed).length);
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
      await addCoins(user.id, lesson.coin_reward);
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

        <CourseChecklist courseId={course.id} lessons={lessons as any} />

        <Card className="p-6 mb-6" style={{ background: `linear-gradient(135deg, ${m!.color}, #1e293b)`, color: "#fff", border: 0 }}>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{m!.emoji}</div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-black">{course.title}</h1>
              {course.description && <p className="text-white/85 mt-1">{course.description}</p>}
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-white/20 text-white">{m!.label}</Badge>
                <Badge className="bg-white/20 text-white">{course.level}</Badge>
                <Badge className="bg-white/20 text-white">{lessons.length} aulas</Badge>
                <Badge className="bg-white/20 text-white">Carga horária: {course.hours}h</Badge>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1"><span>Progresso</span><span>{progress}%</span></div>
                <Progress value={progress} className="bg-white/20" />
              </div>
              <div className="mt-4">
                {(() => {
                  const allDone = lessons.length > 0 && done.size >= lessons.length;
                  const blocked = failedAttempts >= 3 && !passed;
                  const disabled = (!allDone && !passed) || blocked;
                  const label = passed
                    ? "🎓 Avaliação aprovada — ver certificado"
                    : blocked
                    ? "🚫 Módulo bloqueado (3 tentativas esgotadas)"
                    : !allDone
                    ? `🔒 Conclua todas as aulas para liberar (${done.size}/${lessons.length})`
                    : `🎓 Fazer avaliação final (tentativas restantes: ${3 - failedAttempts})`;
                  return (
                    <Button
                      onClick={() => navigate(`/cursos/${course.id}/avaliacao`)}
                      disabled={disabled}
                      className="bg-white text-[#4C1D95] hover:bg-white/90 font-bold disabled:opacity-60"
                    >
                      {label}
                    </Button>
                  );
                })()}
              </div>

            </div>
          </div>
        </Card>

        {(course.image_url || course.slide_url) && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {course.image_url && (
              <Card className="p-2 overflow-hidden">
                <img src={course.image_url} alt={course.title}
                  className="w-full h-56 object-cover rounded" />
                <div className="text-xs text-slate-500 mt-2 px-1">Imagem do módulo</div>
              </Card>
            )}
            {course.slide_url && (
              <Card className="p-4 flex flex-col justify-center">
                <div className="text-xs font-bold text-[#4C1D95] uppercase mb-2">Slide do módulo</div>
                {/\.pdf($|\?)/i.test(course.slide_url) ? (
                  <iframe src={course.slide_url} className="w-full h-56 rounded border" />
                ) : (
                  <a href={course.slide_url} target="_blank" rel="noopener"
                    className="inline-flex items-center gap-2 text-[#4C1D95] font-semibold underline">
                    📎 Abrir apresentação
                  </a>
                )}
              </Card>
            )}
          </div>
        )}

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
                      onClick={() => setActive(isActive ? null : l)}
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
                    {isActive && l.content && (
                      <div className="mt-2 mb-3 ml-8 p-3 rounded-lg bg-violet-50/70 border border-violet-200">
                        <div className="text-[11px] font-semibold text-[#4C1D95] uppercase tracking-wide mb-2">
                          Ementa desta aula
                        </div>
                        <LessonContent text={l.content} backTo={`/cursos/${id}`} lessonTitle={l.title} />
                      </div>
                    )}
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
                {active.image_url && (
                  <figure className="mb-4">
                    <img src={active.image_url} alt={active.title}
                      className="w-full max-h-96 object-contain rounded-lg border bg-slate-50" />
                    <figcaption className="text-xs text-slate-500 mt-1">Imagem do capítulo</figcaption>
                  </figure>
                )}
                {active.slide_url && (
                  <div className="mb-4 p-3 rounded-lg border border-violet-200 bg-violet-50/40">
                    <div className="text-xs font-bold text-[#4C1D95] uppercase mb-2">Slide do capítulo</div>
                    {/\.pdf($|\?)/i.test(active.slide_url) ? (
                      <iframe src={active.slide_url} className="w-full h-96 rounded border bg-white" />
                    ) : (
                      <a href={active.slide_url} target="_blank" rel="noopener"
                        className="inline-flex items-center gap-2 text-[#4C1D95] font-semibold underline">
                        📎 Abrir apresentação
                      </a>
                    )}
                  </div>
                )}
                <div className="prose prose-sm max-w-none text-slate-700">
                  {active.content && <LessonContent text={active.content} backTo={`/cursos/${id}`} lessonTitle={active.title} />}
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

        <div className="mt-6">
          <TopicExercise
            slug={`revisao-modulo-${course.id}`}
            title={`Revisão do módulo — ${course.title}`}
            category={reviewCategoryFor(course)}
            courseId={course.id}
          />
        </div>

        <Card className="p-6 mt-6">
          <h2 className="text-xl font-black mb-1">Ementa completa do curso</h2>
          <p className="text-sm text-slate-500 mb-4">
            Todos os assuntos abordados em cada capítulo deste módulo.
          </p>
          <div className="space-y-6">
            {lessons.map((l) => (
              <div key={`ementa-${l.id}`} className="border-l-4 border-[#4C1D95] pl-4">
                <div className="flex items-center gap-2 mb-1">
                  {done.has(l.id)
                    ? <CheckCircle2 className="text-emerald-600" size={16} />
                    : <Circle className="text-slate-400" size={16} />}
                  <span className="text-xs text-slate-500">Aula {l.order_index}</span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-[11px] inline-flex items-center gap-0.5 text-slate-500">
                    <Zap size={11} />{l.xp_reward} XP
                  </span>
                  <span className="text-[11px] inline-flex items-center gap-0.5 text-slate-500">
                    <Coins size={11} />{l.coin_reward}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2">{l.title}</h3>
                {l.content && (
                  <div className="prose prose-sm max-w-none text-slate-700">
                    <LessonContent text={l.content} backTo={`/cursos/${id}`} lessonTitle={l.title} />
                  </div>
                )}
                <div className="mt-2">
                  <Button size="sm" variant="outline" onClick={() => {
                    setActive(l);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                    Abrir aula
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
