import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CourseQuestionBank({ courseId }: { courseId: string }) {
  const [disciplines, setDisciplines] = useState<{ key: string; label: string }[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    setBusy(true);
    Promise.all([supabase.from("question_disciplines").select("key,label").order("sort"), supabase.from("course_question_disciplines").select("discipline_key").eq("course_id", courseId)])
      .then(([d, s]) => { setDisciplines(d.data ?? []); setSelected((s.data ?? []).map(r => r.discipline_key)); setBusy(false); });
  }, [courseId]);
  const save = async () => {
    setBusy(true);
    const { error } = await supabase.rpc("set_course_question_disciplines", { _course: courseId, _disciplines: selected });
    error ? toast.error(error.message) : toast.success("Banco de questões do curso salvo");
    setBusy(false);
  };
  return <section className="space-y-3 border-b pb-4">
    <h2 className="font-semibold">Disciplinas do banco de questões deste curso</h2>
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {disciplines.map(d => <label key={d.key} className="flex gap-2 items-start text-sm"><Checkbox disabled={busy} checked={selected.includes(d.key)} onCheckedChange={v => setSelected(s => v ? [...s, d.key] : s.filter(k => k !== d.key))} />{d.label}</label>)}
    </div>
    <Button onClick={save} disabled={busy} size="sm">Salvar disciplinas do curso</Button>
  </section>;
}