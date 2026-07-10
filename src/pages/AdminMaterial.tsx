import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowLeft, Shield, Loader2, Search, BookOpen, Users, CheckCircle2,
  Eye, EyeOff, Pencil, Save, Coins, Zap, Lock,
} from "lucide-react";
import { toast } from "sonner";
import { areaMeta } from "@/lib/aula";

type Course = {
  id: string; title: string; description: string | null;
  area: string; level: string; published: boolean; created_at: string;
};
type Lesson = {
  id: string; course_id: string; title: string; content: string | null;
  video_url: string | null; order_index: number; xp_reward: number; coin_reward: number;
};

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

  // Gate: admin only
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
      .order("created_at", { ascending: false });
    const list = (cs ?? []) as Course[];
    setCourses(list);

    if (list.length) {
      const ids = list.map(c => c.id);
      const { data: ls } = await supabase
        .from("course_lessons")
        .select("*")
        .in("course_id", ids)
        .order("order_index");
      const grouped: Record<string, Lesson[]> = {};
      (ls ?? []).forEach((l: any) => {
        (grouped[l.course_id] ||= []).push(l as Lesson);
      });
      setLessonsByCourse(grouped);

      // Stats: enrollments and completions
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
      const arr = (prev[editing.course_id] || []).map(l => l.id === editing.id ? editing : l)
        .sort((a, b) => a.order_index - b.order_index);
      return { ...prev, [editing.course_id]: arr };
    });
    toast.success("Aula atualizada");
    setEditing(null);
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
                                <div className="flex gap-2 text-xs text-slate-500 mt-0.5">
                                  <span className="inline-flex items-center gap-0.5"><Zap size={11} />{l.xp_reward} XP</span>
                                  <span className="inline-flex items-center gap-0.5"><Coins size={11} />{l.coin_reward} ⚛</span>
                                  {l.video_url && <span>🎬 vídeo</span>}
                                </div>
                              </div>
                              <Button size="sm" variant="outline" onClick={() => setEditing(l)}>
                                <Pencil size={13} className="mr-1" /> Editar
                              </Button>
                            </div>
                            {l.content && (
                              <details className="mt-2">
                                <summary className="text-xs text-[#4C1D95] cursor-pointer font-semibold">Ver conteúdo completo</summary>
                                <div className="mt-2 p-3 bg-white border rounded whitespace-pre-wrap text-xs text-slate-700 max-h-96 overflow-auto">
                                  {l.content}
                                </div>
                              </details>
                            )}
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
              <div>
                <label className="text-xs font-semibold">Conteúdo (Markdown)</label>
                <Textarea rows={16} value={editing.content ?? ""} onChange={e => setEditing({ ...editing, content: e.target.value })} className="font-mono text-xs" />
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
    </div>
  );
}
