import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft, Shield, Loader2, Search, BookOpen, Users, CheckCircle2,
  Eye, EyeOff, Pencil, Save, Coins, Zap, Lock, Plus, Trash2, FileUp,
  Image as ImageIcon, FileText, ClipboardCheck, X,
} from "lucide-react";
import { toast } from "sonner";
import { areaMeta } from "@/lib/aula";

type Course = {
  id: string; title: string; description: string | null;
  area: string; level: string; published: boolean; created_at: string;
  image_url?: string | null; slide_url?: string | null;
};
type Lesson = {
  id: string; course_id: string; title: string; content: string | null;
  video_url: string | null; order_index: number; xp_reward: number; coin_reward: number;
  image_url?: string | null; slide_url?: string | null;
};
type Question = {
  q: string; options: string[]; correct: number;
  context?: string; image_url?: string; explanation?: string;
};
type Assessment = {
  id: string; course_id: string; title: string;
  passing_score: number; questions: Question[];
};

const SIGNED_URL_TTL = 60 * 60 * 24 * 365; // 1 ano

async function uploadCourseFile(file: File, courseId: string): Promise<string> {
  const ext = file.name.split(".").pop() || "bin";
  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
  const path = `${courseId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safe}`;
  const { error } = await supabase.storage
    .from("course-materials")
    .upload(path, file, { contentType: file.type || undefined, upsert: false });
  if (error) throw error;
  const { data, error: sErr } = await supabase.storage
    .from("course-materials")
    .createSignedUrl(path, SIGNED_URL_TTL);
  if (sErr || !data?.signedUrl) throw sErr ?? new Error("Falha ao gerar URL");
  return data.signedUrl;
}

export default function AdminMaterial() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessonsByCourse, setLessonsByCourse] = useState<Record<string, Lesson[]>>({});
  const [stats, setStats] = useState<Record<string, { enroll: number; done: number }>>({});
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<Lesson | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  const [assessmentCourse, setAssessmentCourse] = useState<Course | null>(null);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [savingAssessment, setSavingAssessment] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setChecking(false); return; }
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      setIsAdmin(!!data);
      setChecking(false);
    })();
  }, []);

  const loadAll = async () => {
    setLoading(true);
    const { data: cs } = await supabase
      .from("courses")
      .select("id,title,description,area,level,published,created_at")
      .order("title", { ascending: true });
    const list = (cs ?? []) as Course[];
    setCourses(list);

    if (list.length) {
      const ids = list.map(c => c.id);
      const { data: ls } = await supabase
        .from("course_lessons").select("*").in("course_id", ids).order("order_index");
      const grouped: Record<string, Lesson[]> = {};
      (ls ?? []).forEach((l: any) => { (grouped[l.course_id] ||= []).push(l as Lesson); });
      setLessonsByCourse(grouped);

      const [{ data: en }, { data: dn }] = await Promise.all([
        supabase.from("course_enrollments").select("course_id").in("course_id", ids),
        supabase.from("lesson_completions").select("lesson_id"),
      ]);
      const lessonToCourse: Record<string, string> = {};
      Object.values(grouped).flat().forEach(l => { lessonToCourse[l.id] = l.course_id; });
      const s: Record<string, { enroll: number; done: number }> = {};
      ids.forEach(id => { s[id] = { enroll: 0, done: 0 }; });
      (en ?? []).forEach((e: any) => { s[e.course_id] && s[e.course_id].enroll++; });
      (dn ?? []).forEach((d: any) => {
        const cid = lessonToCourse[d.lesson_id];
        if (cid && s[cid]) s[cid].done++;
      });
      setStats(s);
    }
    setLoading(false);
  };

  useEffect(() => { if (isAdmin) loadAll(); }, [isAdmin]);

  const togglePublished = async (c: Course) => {
    const { error } = await supabase.from("courses").update({ published: !c.published }).eq("id", c.id);
    if (error) { toast.error(error.message); return; }
    setCourses(prev => prev.map(x => x.id === c.id ? { ...x, published: !c.published } : x));
    toast.success(!c.published ? "Curso publicado" : "Curso ocultado");
  };

  const addLesson = async (courseId: string) => {
    const existing = lessonsByCourse[courseId] || [];
    const nextOrder = existing.length ? Math.max(...existing.map(l => l.order_index)) + 1 : 1;
    const { data, error } = await supabase.from("course_lessons").insert({
      course_id: courseId, title: `Nova aula ${nextOrder}`, content: "",
      order_index: nextOrder, xp_reward: 10, coin_reward: 5,
    }).select().single();
    if (error) { toast.error(error.message); return; }
    setLessonsByCourse(prev => ({
      ...prev, [courseId]: [...(prev[courseId] || []), data as Lesson],
    }));
    setEditing(data as Lesson);
  };

  const deleteLesson = async (lesson: Lesson) => {
    if (!confirm(`Excluir a aula "${lesson.title}"?`)) return;
    const { error } = await supabase.from("course_lessons").delete().eq("id", lesson.id);
    if (error) { toast.error(error.message); return; }
    setLessonsByCourse(prev => ({
      ...prev, [lesson.course_id]: (prev[lesson.course_id] || []).filter(l => l.id !== lesson.id),
    }));
    toast.success("Aula excluída");
  };

  const saveLesson = async () => {
    if (!editing) return;
    setSaving(true);
    const { error } = await supabase.from("course_lessons").update({
      title: editing.title,
      content: editing.content,
      video_url: editing.video_url,
      xp_reward: editing.xp_reward,
      coin_reward: editing.coin_reward,
      order_index: editing.order_index,
    }).eq("id", editing.id);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    setLessonsByCourse(prev => {
      const arr = (prev[editing.course_id] || [])
        .map(l => l.id === editing.id ? editing : l)
        .sort((a, b) => a.order_index - b.order_index);
      return { ...prev, [editing.course_id]: arr };
    });
    toast.success("Aula atualizada");
    setEditing(null);
  };

  const insertAtCursor = (snippet: string) => {
    if (!editing) return;
    const ta = contentRef.current;
    const current = editing.content ?? "";
    let next: string;
    if (ta) {
      const s = ta.selectionStart ?? current.length;
      const e = ta.selectionEnd ?? current.length;
      next = current.slice(0, s) + snippet + current.slice(e);
    } else {
      next = current + "\n" + snippet;
    }
    setEditing({ ...editing, content: next });
  };

  const onUploadFile = async (file: File | null, kind: "image" | "file") => {
    if (!file || !editing) return;
    setUploading(true);
    try {
      const url = await uploadCourseFile(file, editing.course_id);
      const snippet = kind === "image"
        ? `\n\n![${file.name}](${url})\n`
        : `\n\n📎 [${file.name}](${url})\n`;
      insertAtCursor(snippet);
      toast.success("Arquivo enviado e link inserido no conteúdo");
    } catch (e: any) {
      toast.error(e?.message ?? "Falha no upload");
    } finally {
      setUploading(false);
    }
  };

  // ================== Assessment editor ==================
  const openAssessment = async (course: Course) => {
    setAssessmentCourse(course);
    const { data } = await supabase
      .from("course_assessments")
      .select("id,course_id,title,passing_score,questions")
      .eq("course_id", course.id)
      .maybeSingle();
    if (data) {
      setAssessment(data as unknown as Assessment);
    } else {
      setAssessment({
        id: "", course_id: course.id, title: `Avaliação — ${course.title}`,
        passing_score: 7, questions: [],
      });
    }
  };

  const addQuestion = () => {
    if (!assessment) return;
    setAssessment({
      ...assessment,
      questions: [...assessment.questions, {
        q: "Nova questão", options: ["Opção A", "Opção B", "Opção C", "Opção D"],
        correct: 0, context: "", image_url: "", explanation: "",
      }],
    });
  };

  const updateQuestion = (i: number, patch: Partial<Question>) => {
    if (!assessment) return;
    const qs = assessment.questions.slice();
    qs[i] = { ...qs[i], ...patch };
    setAssessment({ ...assessment, questions: qs });
  };

  const deleteQuestion = (i: number) => {
    if (!assessment) return;
    if (!confirm("Excluir esta questão?")) return;
    setAssessment({ ...assessment, questions: assessment.questions.filter((_, k) => k !== i) });
  };

  const uploadQuestionImage = async (i: number, file: File | null) => {
    if (!file || !assessment) return;
    setUploading(true);
    try {
      const url = await uploadCourseFile(file, assessment.course_id);
      updateQuestion(i, { image_url: url });
      toast.success("Imagem anexada à questão");
    } catch (e: any) {
      toast.error(e?.message ?? "Falha no upload");
    } finally {
      setUploading(false);
    }
  };

  const saveAssessment = async () => {
    if (!assessment) return;
    setSavingAssessment(true);
    const payload = {
      course_id: assessment.course_id,
      title: assessment.title,
      passing_score: assessment.passing_score,
      questions: assessment.questions as any,
    };
    const { error } = assessment.id
      ? await supabase.from("course_assessments").update(payload).eq("id", assessment.id)
      : await supabase.from("course_assessments").insert(payload);
    setSavingAssessment(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Avaliação salva");
    setAssessment(null);
    setAssessmentCourse(null);
  };

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return courses;
    return courses.filter(c =>
      c.title.toLowerCase().includes(t) ||
      c.description?.toLowerCase().includes(t) ||
      c.area.toLowerCase().includes(t)
    );
  }, [q, courses]);

  const totals = useMemo(() => {
    const totalLessons = Object.values(lessonsByCourse).reduce((a, b) => a + b.length, 0);
    const totalEnroll = Object.values(stats).reduce((a, b) => a + b.enroll, 0);
    return { totalCourses: courses.length, totalLessons, totalEnroll };
  }, [courses, lessonsByCourse, stats]);

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-900"><Loader2 className="animate-spin text-white" size={32} /></div>;
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 text-white gap-3 p-6">
        <Lock size={48} />
        <h1 className="text-2xl font-black">Área restrita</h1>
        <p className="text-white/80">Este módulo é exclusivo para administradores.</p>
        <Button onClick={() => navigate("/")} variant="secondary">Voltar</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-6xl mx-auto py-6">
        <div className="flex items-center justify-between mb-6 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={18} /> Voltar
          </Link>
          <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2">
            <Shield /> Material dos Cursos <Badge className="bg-amber-500 text-black">ADMIN</Badge>
          </h1>
          <div className="w-16" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <Card className="p-4"><div className="text-xs text-slate-500">Cursos</div><div className="text-2xl font-black flex items-center gap-2"><BookOpen size={20} />{totals.totalCourses}</div></Card>
          <Card className="p-4"><div className="text-xs text-slate-500">Aulas</div><div className="text-2xl font-black">{totals.totalLessons}</div></Card>
          <Card className="p-4"><div className="text-xs text-slate-500">Matrículas</div><div className="text-2xl font-black flex items-center gap-2"><Users size={20} />{totals.totalEnroll}</div></Card>
          <Card className="p-4"><div className="text-xs text-slate-500">Publicados</div><div className="text-2xl font-black flex items-center gap-2"><Eye size={20} />{courses.filter(c => c.published).length}</div></Card>
        </div>

        <Card className="p-3 mb-4 flex items-center gap-2">
          <Search size={18} className="text-slate-400" />
          <Input placeholder="Buscar por título, descrição ou área…" value={q} onChange={e => setQ(e.target.value)} className="border-0 focus-visible:ring-0" />
        </Card>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="animate-spin text-white" size={32} /></div>
        ) : filtered.length === 0 ? (
          <Card className="p-10 text-center text-slate-500">Nenhum curso encontrado.</Card>
        ) : (
          <Accordion type="multiple" className="space-y-3">
            {filtered.map((c) => {
              const m = areaMeta(c.area);
              const ls = lessonsByCourse[c.id] || [];
              const st = stats[c.id] || { enroll: 0, done: 0 };
              return (
                <AccordionItem key={c.id} value={c.id} className="border rounded-xl bg-white overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-2 border-b bg-slate-50">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: m.color }}>{m.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black truncate">{c.title}</div>
                      <div className="flex gap-1 flex-wrap mt-1">
                        <Badge variant="secondary">{m.label}</Badge>
                        <Badge variant="outline">{c.level}</Badge>
                        <Badge variant="outline">{ls.length} aulas</Badge>
                        <Badge variant="outline"><Users size={11} className="mr-1" />{st.enroll}</Badge>
                        <Badge variant="outline"><CheckCircle2 size={11} className="mr-1" />{st.done} concluídas</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-slate-500 hidden sm:inline">{c.published ? "Publicado" : "Oculto"}</span>
                      <Switch checked={c.published} onCheckedChange={() => togglePublished(c)} />
                      {c.published ? <Eye size={16} className="text-emerald-600" /> : <EyeOff size={16} className="text-slate-400" />}
                    </div>
                    <AccordionTrigger className="py-2" />
                  </div>
                  <AccordionContent className="p-4">
                    {c.description && <p className="text-sm text-slate-600 mb-3">{c.description}</p>}

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Button size="sm" onClick={() => addLesson(c.id)} className="bg-[#059669] hover:bg-[#047857]">
                        <Plus size={14} className="mr-1" /> Nova aula
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => openAssessment(c)}>
                        <ClipboardCheck size={14} className="mr-1" /> Editar avaliação
                      </Button>
                    </div>

                    {ls.length === 0 ? (
                      <p className="text-sm text-slate-500 italic">Nenhuma aula cadastrada.</p>
                    ) : (
                      <div className="space-y-2">
                        {ls.map((l) => (
                          <div key={l.id} className="border rounded-lg p-3 bg-slate-50/60">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#4C1D95] text-white font-black flex items-center justify-center shrink-0 text-sm">{l.order_index}</div>
                              <div className="flex-1 min-w-0">
                                <div className="font-bold text-sm">{l.title}</div>
                                <div className="flex gap-2 text-xs text-slate-500 mt-0.5 flex-wrap">
                                  <span className="inline-flex items-center gap-0.5"><Zap size={11} />{l.xp_reward} XP</span>
                                  <span className="inline-flex items-center gap-0.5"><Coins size={11} />{l.coin_reward} ⚛</span>
                                  {l.video_url && <span>🎬 vídeo</span>}
                                </div>
                              </div>
                              <div className="flex gap-1 shrink-0">
                                <Button size="sm" variant="outline" onClick={() => setEditing(l)}>
                                  <Pencil size={13} className="mr-1" /> Editar
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => deleteLesson(l)}
                                  className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300">
                                  <Trash2 size={13} />
                                </Button>
                              </div>
                            </div>
                            {l.content && (() => {
                              const topics = (l.content.match(/^\s*[-•*]\s+(.+)$/gm) || [])
                                .map(s => s.replace(/^\s*[-•*]\s+/, "").replace(/\*\*/g, "").trim())
                                .filter(Boolean);
                              const slug = (s: string) => s.toLowerCase().normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")
                                .replace(/^-+|-+$/g, "").slice(0, 80);
                              return (
                                <>
                                  {topics.length > 0 && (
                                    <div className="mt-2 p-2 rounded border border-violet-200 bg-violet-50/60">
                                      <div className="text-[11px] font-bold text-[#4C1D95] uppercase mb-1.5">
                                        Tópicos desta aula — clique para editar o conteúdo
                                      </div>
                                      <div className="grid sm:grid-cols-2 gap-1.5">
                                        {topics.map((t, i) => (
                                          <Link
                                            key={i}
                                            to={`/topico/${slug(t)}?t=${encodeURIComponent(t)}&lesson=${encodeURIComponent(l.title)}&back=${encodeURIComponent("/admin/material")}&edit=1`}
                                            className="flex items-center gap-2 text-xs px-2 py-1.5 rounded bg-white border border-violet-200 hover:border-violet-500 hover:bg-violet-100 text-[#4C1D95] font-medium"
                                          >
                                            <Pencil size={11} />
                                            <span className="flex-1 truncate">{t}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  <details className="mt-2">
                                    <summary className="text-xs text-[#4C1D95] cursor-pointer font-semibold">Ver conteúdo completo</summary>
                                    <div className="mt-2 p-3 bg-white border rounded whitespace-pre-wrap text-xs text-slate-700 max-h-96 overflow-auto">
                                      {l.content}
                                    </div>
                                  </details>
                                </>
                              );
                            })()}
                          </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )}
      </div>

      {/* ===== Lesson editor ===== */}
      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          <DialogHeader><DialogTitle>Editar aula</DialogTitle></DialogHeader>
          {editing && (
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3">
                  <label className="text-xs font-semibold">Título</label>
                  <Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} />
                </div>
                <div>
                  <label className="text-xs font-semibold">Ordem</label>
                  <Input type="number" value={editing.order_index} onChange={e => setEditing({ ...editing, order_index: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold">URL do vídeo (opcional)</label>
                <Input value={editing.video_url ?? ""} onChange={e => setEditing({ ...editing, video_url: e.target.value || null })} placeholder="https://..." />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold">XP</label>
                  <Input type="number" value={editing.xp_reward} onChange={e => setEditing({ ...editing, xp_reward: parseInt(e.target.value) || 0 })} />
                </div>
                <div>
                  <label className="text-xs font-semibold">Átomos</label>
                  <Input type="number" value={editing.coin_reward} onChange={e => setEditing({ ...editing, coin_reward: parseInt(e.target.value) || 0 })} />
                </div>
              </div>

              <div className="p-3 rounded-lg border border-dashed border-violet-300 bg-violet-50/40">
                <div className="text-xs font-bold text-[#4C1D95] mb-2 flex items-center gap-1">
                  <FileUp size={13} /> Anexar arquivos ao conteúdo
                </div>
                <div className="flex flex-wrap gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-white border hover:bg-slate-50">
                    <ImageIcon size={13} /> Imagem
                    <input type="file" accept="image/*" className="hidden"
                      onChange={e => onUploadFile(e.target.files?.[0] ?? null, "image")} />
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-white border hover:bg-slate-50">
                    <FileText size={13} /> PowerPoint / PDF / DOC
                    <input type="file"
                      accept=".ppt,.pptx,.pdf,.doc,.docx,.xls,.xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf"
                      className="hidden"
                      onChange={e => onUploadFile(e.target.files?.[0] ?? null, "file")} />
                  </label>
                  {uploading && <span className="text-xs text-slate-500 inline-flex items-center gap-1"><Loader2 size={12} className="animate-spin" /> Enviando…</span>}
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  O arquivo será inserido no conteúdo abaixo como link markdown na posição do cursor.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold">Conteúdo (Markdown)</label>
                <Textarea
                  ref={contentRef}
                  rows={16}
                  value={editing.content ?? ""}
                  onChange={e => setEditing({ ...editing, content: e.target.value })}
                  className="font-mono text-xs"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button>
            <Button onClick={saveLesson} disabled={saving} className="bg-[#4C1D95] hover:bg-[#3b1477]">
              {saving ? <Loader2 className="animate-spin mr-2" size={14} /> : <Save className="mr-2" size={14} />}
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ===== Assessment editor ===== */}
      <Dialog open={!!assessment} onOpenChange={(o) => { if (!o) { setAssessment(null); setAssessmentCourse(null); } }}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Avaliação — {assessmentCourse?.title}</DialogTitle>
          </DialogHeader>
          {assessment && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold">Título</label>
                  <Input value={assessment.title}
                    onChange={e => setAssessment({ ...assessment, title: e.target.value })} />
                </div>
                <div>
                  <label className="text-xs font-semibold">Nota mínima</label>
                  <Input type="number" step="0.1" min={0} max={10}
                    value={assessment.passing_score}
                    onChange={e => setAssessment({ ...assessment, passing_score: parseFloat(e.target.value) || 0 })} />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-slate-600">
                  {assessment.questions.length} questão(ões)
                </div>
                <Button size="sm" onClick={addQuestion} className="bg-[#059669] hover:bg-[#047857]">
                  <Plus size={14} className="mr-1" /> Adicionar questão
                </Button>
              </div>

              <div className="space-y-3">
                {assessment.questions.map((qq, i) => (
                  <Card key={i} className="p-4 border-l-4 border-[#4C1D95]">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-[#4C1D95]">Questão {i + 1}</Badge>
                      <Button size="sm" variant="ghost" onClick={() => deleteQuestion(i)}
                        className="text-red-600 hover:bg-red-50">
                        <Trash2 size={14} />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <label className="text-xs font-semibold">Enunciado</label>
                        <Textarea rows={2} value={qq.q}
                          onChange={e => updateQuestion(i, { q: e.target.value })} />
                      </div>

                      <div>
                        <label className="text-xs font-semibold">Contexto (situação-problema)</label>
                        <Textarea rows={2} value={qq.context ?? ""}
                          onChange={e => updateQuestion(i, { context: e.target.value })}
                          placeholder="Descreva um cenário real onde o conceito aparece..." />
                      </div>

                      <div>
                        <label className="text-xs font-semibold">Imagem de apoio</label>
                        <div className="flex gap-2 items-start">
                          <Input value={qq.image_url ?? ""}
                            onChange={e => updateQuestion(i, { image_url: e.target.value })}
                            placeholder="https://..." />
                          <label className="cursor-pointer inline-flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-white border hover:bg-slate-50 shrink-0">
                            <ImageIcon size={13} /> Enviar
                            <input type="file" accept="image/*" className="hidden"
                              onChange={e => uploadQuestionImage(i, e.target.files?.[0] ?? null)} />
                          </label>
                        </div>
                        {qq.image_url && (
                          <div className="mt-2 relative inline-block">
                            <img src={qq.image_url} alt="" className="max-h-32 rounded border" />
                            <button type="button" onClick={() => updateQuestion(i, { image_url: "" })}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5">
                              <X size={12} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-semibold">Alternativas (marque a correta)</label>
                        <div className="space-y-1">
                          {qq.options.map((opt, k) => (
                            <div key={k} className="flex items-center gap-2">
                              <input type="radio" name={`correct-${i}`} checked={qq.correct === k}
                                onChange={() => updateQuestion(i, { correct: k })} />
                              <span className="text-xs font-bold w-5">{String.fromCharCode(65 + k)})</span>
                              <Input value={opt}
                                onChange={e => {
                                  const opts = qq.options.slice(); opts[k] = e.target.value;
                                  updateQuestion(i, { options: opts });
                                }} />
                              {qq.options.length > 2 && (
                                <Button size="sm" variant="ghost"
                                  onClick={() => updateQuestion(i, {
                                    options: qq.options.filter((_, x) => x !== k),
                                    correct: qq.correct >= k && qq.correct > 0 ? qq.correct - 1 : qq.correct,
                                  })}>
                                  <X size={12} />
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                        {qq.options.length < 6 && (
                          <Button size="sm" variant="outline" className="mt-2"
                            onClick={() => updateQuestion(i, { options: [...qq.options, `Opção ${String.fromCharCode(65 + qq.options.length)}`] })}>
                            <Plus size={12} className="mr-1" /> Alternativa
                          </Button>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-semibold">Explicação (feedback ao aluno)</label>
                        <Textarea rows={2} value={qq.explanation ?? ""}
                          onChange={e => updateQuestion(i, { explanation: e.target.value })}
                          placeholder="Por que a alternativa correta é a certa?" />
                      </div>
                    </div>
                  </Card>
                ))}
                {assessment.questions.length === 0 && (
                  <div className="text-center text-slate-500 py-8 border-2 border-dashed rounded-lg">
                    Nenhuma questão. Clique em <strong>Adicionar questão</strong> para começar.
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => { setAssessment(null); setAssessmentCourse(null); }}>
              Cancelar
            </Button>
            <Button onClick={saveAssessment} disabled={savingAssessment}
              className="bg-[#4C1D95] hover:bg-[#3b1477]">
              {savingAssessment ? <Loader2 className="animate-spin mr-2" size={14} /> : <Save className="mr-2" size={14} />}
              Salvar avaliação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
