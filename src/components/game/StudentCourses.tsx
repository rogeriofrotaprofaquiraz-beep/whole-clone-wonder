import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function StudentCourses({ userId }: { userId: string }) {
  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [all, setAll] = useState(false);
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    Promise.all([
      supabase.from("courses").select("id,title").order("title"),
      supabase.from("student_game_courses").select("course_id").eq("user_id", userId),
      supabase.from("student_game_access").select("all_courses").eq("user_id", userId).maybeSingle(),
    ]).then(([c, s, a]) => {
      const error = c.error || s.error || a.error;
      if (error) toast.error(error.message);
      setCourses(c.data ?? []); setSelected((s.data ?? []).map(r => r.course_id)); setAll(a.data?.all_courses ?? false); setBusy(false);
    });
  }, [userId]);
  const save = async () => {
    setBusy(true);
    try {
      const { error } = await supabase.rpc("set_student_game_courses", { _user: userId, _courses: selected, _all: all });
      if (error) throw error;
      toast.success("Cursos do aluno salvos");
    } catch (e) { toast.error(e instanceof Error ? e.message : "Não foi possível salvar os cursos"); }
    finally { setBusy(false); }
  };
  return <section className="space-y-3">
    <h3 className="font-semibold">Cursos para as perguntas dos jogos</h3>
    <label className="flex items-center gap-2 text-sm"><Switch checked={all} onCheckedChange={setAll} disabled={busy} />Todos os cursos</label>
    {!all && <div className="grid gap-2 sm:grid-cols-2 max-h-64 overflow-auto">
      {courses.map(c => <label key={c.id} className="flex items-start gap-2 text-sm">
        <Checkbox disabled={busy} checked={selected.includes(c.id)} onCheckedChange={v => setSelected(s => v ? [...s, c.id] : s.filter(id => id !== c.id))} />{c.title}
      </label>)}
    </div>}
    <Button size="sm" disabled={busy} onClick={save}>Salvar cursos</Button>
  </section>;
}