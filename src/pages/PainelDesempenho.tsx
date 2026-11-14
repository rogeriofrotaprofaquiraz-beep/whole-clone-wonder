import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { lessonTopics, slugifyTopic, lessonPercent, isAfterReset, PASS_PERCENT } from "@/lib/deckScore";
import { CourseQuestionBank } from "@/components/game/CourseQuestionBank";
import { StudentCourses } from "@/components/game/StudentCourses";
import { QuestionLog } from "@/components/game/QuestionLog";

type Course = { id: string; title: string };
type Lesson = { id: string; title: string; content: string | null; order_index: number };
type Student = { id: string; name: string };

/** Painel do professor: desempenho de cada aluno por módulo (aula) e botão para reiniciar o módulo. */
export default function PainelDesempenho() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseId, setCourseId] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [resets, setResets] = useState<any[]>([]);
  const [topicResets, setTopicResets] = useState<Record<string, string>>({});
  const [done, setDone] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [allStudents, setAllStudents] = useState<Student[]>([]);

  useEffect(() => {
    supabase.from("profiles").select("id,full_name,username").order("full_name").then(({ data }) => setAllStudents((data ?? []).map(p => ({ id: p.id, name: p.full_name || p.username || "Aluno" }))));
    supabase.from("courses").select("id,title").order("title").then(({ data }) => {
      setCourses((data ?? []) as Course[]);
      if (data?.length) setCourseId(data[0].id);
    });
  }, []);

  const load = async () => {
    if (!courseId) return;
    setLoading(true);
    const { data: ls } = await supabase.from("course_lessons").select("id,title,content,order_index").eq("course_id", courseId).order("order_index");
    const lessonsList = (ls ?? []) as Lesson[];
    setLessons(lessonsList);
    const { data: en } = await supabase.from("course_enrollments").select("user_id").eq("course_id", courseId);
    const ids = [...new Set((en ?? []).map((e: any) => e.user_id))];
    const slugs = lessonsList.flatMap(l => lessonTopics(l.content).map(slugifyTopic));
    const [ps, lg, lr, tr, lc] = await Promise.all([
      ids.length ? supabase.from("profiles").select("id,username,full_name").in("id", ids) : Promise.resolve({ data: [] as any[] }),
      ids.length && slugs.length ? supabase.from("activity_logs").select("user_id,page,metadata,created_at").eq("action", "deck_score").in("user_id", ids).in("page", slugs.slice(0, 300)) : Promise.resolve({ data: [] as any[] }),
      (supabase as any).from("student_lesson_resets").select("user_id,lesson_id,reset_at").eq("course_id", courseId),
      supabase.from("topic_overrides").select("slug,progress_reset_at").not("progress_reset_at", "is", null),
      ids.length && lessonsList.length ? supabase.from("lesson_completions").select("user_id,lesson_id").in("user_id", ids).in("lesson_id", lessonsList.map(l => l.id)) : Promise.resolve({ data: [] as any[] }),
    ]);
    setStudents(((ps as any).data ?? []).map((p: any) => ({ id: p.id, name: p.full_name || p.username || p.id.slice(0, 8) })).sort((a: Student, b: Student) => a.name.localeCompare(b.name)));
    setLogs((lg as any).data ?? []);
    setResets(lr.data ?? []);
    const t: Record<string, string> = {};
    ((tr as any).data ?? []).forEach((r: any) => { t[r.slug] = r.progress_reset_at; });
    setTopicResets(t);
    setDone((lc as any).data ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); /* eslint-disable-next-line */ }, [courseId]);

  const pctOf = useMemo(() => (uid: string, l: Lesson): number | null => {
    const topics = lessonTopics(l.content).map(slugifyTopic);
    const lReset = resets.find(r => r.user_id === uid && r.lesson_id === l.id)?.reset_at;
    if (!topics.length) return done.some(d => d.user_id === uid && d.lesson_id === l.id) ? 100 : null;
    return lessonPercent(topics.map(s => {
      const rs = [topicResets[s], lReset].filter(Boolean).sort().pop();
      const vals = logs.filter(g => g.user_id === uid && g.page === s && isAfterReset(g.created_at, rs)).map(g => Number(g.metadata?.pct ?? 0));
      return vals.length ? Math.max(...vals) : null;
    }));
  }, [logs, resets, topicResets, done]);

  const reset = async (s: Student, l: Lesson) => {
    if (!confirm(`Reiniciar a Aula ${l.order_index} para ${s.name}? O aluno terá que fazer este módulo novamente.`)) return;
    const { data: u } = await supabase.auth.getUser();
    const { error } = await (supabase as any).from("student_lesson_resets").upsert({ user_id: s.id, lesson_id: l.id, course_id: courseId, reset_at: new Date().toISOString(), reset_by: u.user?.id }, { onConflict: "user_id,lesson_id" });
    if (error) { toast.error(error.message); return; }
    await supabase.from("lesson_completions").delete().eq("user_id", s.id).eq("lesson_id", l.id);
    toast.success("Módulo reiniciado");
    load();
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold">📊 Desempenho dos alunos</h1>
        <select className="border rounded px-2 py-1 bg-background" value={courseId} onChange={e => setCourseId(e.target.value)}>
          {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
        <Link to="/" className="ml-auto text-sm underline">Voltar</Link>
      </div>
      {courseId && <CourseQuestionBank courseId={courseId} />}
      <section className="space-y-3 border-b pb-4">
        <h2 className="font-semibold">Cursos e dossiê do aluno</h2>
        <select aria-label="Aluno para cursos e dossiê" className="border rounded px-2 py-2 bg-background max-w-full" value={studentId} onChange={e => setStudentId(e.target.value)}>
          <option value="">Escolha o aluno</option>
          {allStudents.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        {studentId && <><StudentCourses key={studentId} userId={studentId} /><QuestionLog userId={studentId} /></>}
      </section>
      <p className="text-sm text-muted-foreground">Nota de cada aluno em cada aula (módulo). Abaixo de {PASS_PERCENT}% o próximo módulo fica travado. Use 🔄 para o aluno fazer o módulo de novo.</p>
      <Card className="p-2 overflow-auto">
        {loading ? <p className="p-4">Carregando…</p> : !students.length ? <p className="p-4">Nenhum aluno matriculado neste curso.</p> : (
          <table className="text-sm w-full">
            <thead><tr><th className="text-left p-2">Aluno</th>{lessons.map(l => <th key={l.id} className="p-2 whitespace-nowrap" title={l.title}>Aula {l.order_index}</th>)}</tr></thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id} className="border-t">
                  <td className="p-2 font-medium whitespace-nowrap">{s.name}</td>
                  {lessons.map(l => {
                    const p = pctOf(s.id, l);
                    return (
                      <td key={l.id} className="p-2 text-center whitespace-nowrap">
                        <span className={p === null ? "text-muted-foreground" : p >= PASS_PERCENT ? "text-primary font-semibold" : "text-destructive font-semibold"}>{p === null ? "—" : `${p}%`}</span>
                        <Button size="sm" variant="ghost" className="ml-1 h-6 px-1" title="Reiniciar módulo" onClick={() => reset(s, l)}>🔄</Button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
