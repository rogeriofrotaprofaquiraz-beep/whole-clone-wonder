import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, GraduationCap, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { areaMeta, AREAS, LEVELS } from "@/lib/aula";
import { useFeatureAccess } from "@/lib/featureAccess";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

type Course = {
  id: string;
  title: string;
  description: string | null;
  area: string;
  level: string;
  cover_url: string | null;
  hours: number;
};

export default function Cursos() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const { can } = useFeatureAccess();
  const [isStaff, setIsStaff] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", area: "geral", level: "medio", hours: 40, base: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    supabase.from("user_roles").select("role").eq("user_id", user.id).then(({ data }) =>
      setIsStaff((data ?? []).some((r: any) => ["admin", "teacher", "moderator", "coordinator", "director"].includes(r.role))));
  }, [user?.id]);

  const createCourse = async () => {
    if (!form.title.trim()) return toast.error("Digite o nome do curso");
    setSaving(true);
    const { data: c, error } = await supabase.from("courses").insert({
      title: form.title.trim(), description: form.description || null, area: form.area, level: form.level,
      hours: form.hours || 40, author_id: user?.id, published: true,
    } as any).select("id").single();
    if (error || !c) { setSaving(false); return toast.error(error?.message ?? "Erro ao criar"); }
    if (form.base) {
      const { data: ls } = await supabase.from("course_lessons").select("title,content,order_index,xp_reward,coin_reward").eq("course_id", form.base).order("order_index");
      if (ls?.length) await supabase.from("course_lessons").insert(ls.map((l: any) => ({ ...l, course_id: c.id })));
      const { data: a } = await supabase.from("course_assessments").select("title,passing_score,questions,question_bank,questions_per_attempt").eq("course_id", form.base).maybeSingle();
      if (a) await supabase.from("course_assessments").insert({ ...(a as any), course_id: c.id });
    }
    setSaving(false); setOpen(false);
    toast.success("Curso criado!");
    navigate(`/cursos/${c.id}`);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const load = async () => {
    setLoading(true);
    const { data: cs } = await supabase
      .from("courses")
      .select("id,title,description,area,level,cover_url,hours")
      .eq("published", true);
    const sorted = ((cs ?? []) as Course[]).sort((a, b) =>
      a.title.localeCompare(b.title, "pt-BR", { sensitivity: "base" })
    );
    setAllCourses(sorted);
    setCourses(sorted);
    if (user?.id) {
      const { data: es } = await supabase
        .from("course_enrollments")
        .select("course_id")
        .eq("user_id", user.id);
      setEnrolled(new Set((es ?? []).map((e: any) => e.course_id)));
    }
    setLoading(false);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [user?.id]);

  const enroll = async (courseId: string) => {
    if (!user?.id) { toast.error("Faça login primeiro"); return; }
    const { error } = await supabase
      .from("course_enrollments")
      .insert({ course_id: courseId, user_id: user.id });
    if (error && !error.message.includes("duplicate")) { toast.error(error.message); return; }
    toast.success("Matrícula realizada!");
    setEnrolled(new Set([...enrolled, courseId]));
    navigate(`/cursos/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-5xl mx-auto py-6">
        <div className="flex items-center justify-between mb-6 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={18} /> Voltar
          </Link>
          <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2">
            <GraduationCap /> Cursos
          </h1>
          {isStaff ? (
            <Button size="sm" onClick={() => setOpen(true)}><Plus size={16} className="mr-1" />Novo curso</Button>
          ) : <div className="w-16" />}
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="animate-spin text-white" size={32} /></div>
        ) : courses.length === 0 ? (
          <Card className="p-10 text-center">
            <BookOpen className="mx-auto mb-3 text-slate-400" size={48} />
            <p className="text-slate-600">Nenhum curso publicado ainda.</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {courses.filter((c) => can("curso_" + c.id)).map((c) => {
              const m = areaMeta(c.area);
              const isEnrolled = enrolled.has(c.id);
              return (
                <Card key={c.id} className="p-5 hover:shadow-xl transition">
                  {c.cover_url && (
                    <div className="mb-3 -mx-5 -mt-5 h-32 overflow-hidden rounded-t-lg">
                      <img src={c.cover_url} alt={c.title} loading="lazy"
                        className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                      style={{ background: m.color }}
                    >
                      {m.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-lg leading-tight">{c.title}</h3>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        <Badge variant="secondary">{m.label}</Badge>
                        <Badge variant="outline">{c.level}</Badge>
                        <Badge variant="outline">{c.hours}h</Badge>
                      </div>
                    </div>
                  </div>
                  {c.description && (
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{c.description}</p>
                  )}
                  <div className="flex gap-2">
                    {isEnrolled ? (
                      <Button className="flex-1" onClick={() => navigate(`/cursos/${c.id}`)}>
                        Continuar
                      </Button>
                    ) : (
                      <Button className="flex-1 bg-[#059669] hover:bg-[#047857]" onClick={() => enroll(c.id)}>
                        Matricular-se
                      </Button>
                    )}
                    <Button variant="outline" onClick={() => navigate(`/cursos/${c.id}`)}>Ver</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Novo curso</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input placeholder="Nome do curso (ex.: 19. Química Verde)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <textarea className="w-full border rounded-md p-2 text-sm bg-background" rows={3} placeholder="Descrição" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <div className="grid grid-cols-3 gap-2">
              <select className="border rounded-md p-2 text-sm bg-background" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}>
                {AREAS.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
              </select>
              <select className="border rounded-md p-2 text-sm bg-background" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
                {LEVELS.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
              </select>
              <Input type="number" min={1} value={form.hours} onChange={(e) => setForm({ ...form, hours: Number(e.target.value) })} placeholder="Horas" />
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Copiar tópicos e avaliação de (opcional)</div>
              <select className="w-full border rounded-md p-2 text-sm bg-background" value={form.base} onChange={(e) => setForm({ ...form, base: e.target.value })}>
                <option value="">— Curso vazio —</option>
                {allCourses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </div>
            <Button className="w-full" disabled={saving} onClick={createCourse}>{saving ? "Criando..." : "Criar curso"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
