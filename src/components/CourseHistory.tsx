import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { lessonTopics, slugifyTopic, PASS_PERCENT } from "@/lib/deckScore";

type Lesson = { id: string; title: string; content: string | null; order_index: number };
type Ev = { at: string; icon: string; text: string };

/** Histórico do aluno no curso: matrícula, notas dos tópicos, aulas concluídas e avaliação final. Admin escolhe o aluno. */
export default function CourseHistory({ courseId, lessons, userId, isAdmin }: { courseId: string; lessons: Lesson[]; userId: string; isAdmin: boolean }) {
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
  const [who, setWho] = useState(userId);
  const [events, setEvents] = useState<Ev[]>([]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data: en } = await supabase.from("course_enrollments").select("user_id").eq("course_id", courseId);
      const ids = [...new Set((en ?? []).map((e: any) => e.user_id))];
      if (!ids.length) return;
      const { data: ps } = await supabase.from("profiles").select("id,username,full_name").in("id", ids);
      setStudents((ps ?? []).map((p: any) => ({ id: p.id, name: p.full_name || p.username || p.id.slice(0, 8) })));
    })();
  }, [isAdmin, courseId]);

  useEffect(() => {
    (async () => {
      const topicToLesson = new Map<string, { topic: string; lesson: Lesson }>();
      lessons.forEach(l => lessonTopics(l.content).forEach(t => topicToLesson.set(slugifyTopic(t), { topic: t, lesson: l })));
      const [en, logs, lc, at] = await Promise.all([
        supabase.from("course_enrollments").select("enrolled_at").eq("course_id", courseId).eq("user_id", who),
        supabase.from("activity_logs").select("created_at,page,metadata").eq("user_id", who).eq("action", "deck_score").in("page", [...topicToLesson.keys()].slice(0, 300)),
        supabase.from("lesson_completions").select("lesson_id,completed_at").eq("user_id", who).in("lesson_id", lessons.map(l => l.id)),
        supabase.from("assessment_attempts").select("score,passed,created_at").eq("course_id", courseId).eq("user_id", who),
      ]);
      const ev: Ev[] = [];
      (en.data ?? []).forEach((e: any) => ev.push({ at: e.enrolled_at, icon: "📝", text: "Matrícula no curso" }));
      (logs.data ?? []).forEach((g: any) => {
        const m = topicToLesson.get(g.page); const pct = Number(g.metadata?.pct ?? 0);
        ev.push({ at: g.created_at, icon: pct >= PASS_PERCENT ? "✅" : "🔁", text: `Aula ${m?.lesson.order_index ?? "?"} · ${m?.topic ?? g.page}: ${pct}%` });
      });
      (lc.data ?? []).forEach((c: any) => {
        const l = lessons.find(x => x.id === c.lesson_id);
        ev.push({ at: c.completed_at, icon: "🏁", text: `Concluiu a Aula ${l?.order_index}: ${l?.title}` });
      });
      (at.data ?? []).forEach((a: any) => ev.push({ at: a.created_at, icon: a.passed ? "🎓" : "❌", text: `Avaliação final: nota ${a.score}${a.passed ? " (aprovado)" : ""}` }));
      ev.sort((a, b) => a.at.localeCompare(b.at));
      setEvents(ev);
    })();
  }, [who, courseId, lessons]);

  return (
    <Card className="p-6 mt-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 className="text-xl font-black">📜 Histórico de acesso</h2>
        {isAdmin && (
          <select className="border rounded px-2 py-1 text-sm" value={who} onChange={e => setWho(e.target.value)}>
            <option value={userId}>Eu</option>
            {students.filter(s => s.id !== userId).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        )}
      </div>
      {!events.length ? <p className="text-sm text-slate-500">Nenhum registro ainda.</p> : (
        <ol className="relative border-l-2 border-violet-200 ml-2 space-y-3">
          {events.map((e, i) => (
            <li key={i} className="ml-4">
              <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-violet-500" />
              <div className="text-xs text-slate-500">{new Date(e.at).toLocaleString("pt-BR")}</div>
              <div className="text-sm">{e.icon} {e.text}</div>
            </li>
          ))}
        </ol>
      )}
    </Card>
  );
}
