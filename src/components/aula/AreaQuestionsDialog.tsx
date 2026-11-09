import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { areaMeta, AreaValue, LEVELS, DIFFICULTIES } from "@/lib/aula";
import { groupQuestionsByTopic } from "@/lib/questionTopics";

type Q = { id: string; area: string; topic: string | null; lesson: string | null; question: string; options: any; correct_index: number; difficulty: number };

const NO_TOPIC = "Sem assunto";

export function AreaQuestionsDialog({ area, discipline, onClose, onChanged }: { area: AreaValue | null; discipline?: { key: string; label: string } | null; onClose: () => void; onChanged: () => void }) {
  const [rows, setRows] = useState<Q[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [newTopic, setNewTopic] = useState("");
  const [form, setForm] = useState({ question: "", a: "", b: "", c: "", d: "", correct: 0 });
  const [formTopic, setFormTopic] = useState<string | null>(null);
  const [schoolLevel, setSchoolLevel] = useState("medio");
  const [difficulty, setDifficulty] = useState(2);
  const [explanation, setExplanation] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!area) return;
    setLoading(true);
    let q = supabase.from("chem_questions")
      .select("id, area, topic, lesson, question, options, correct_index, difficulty").eq("area", area);
    if (discipline) q = q.eq("discipline", discipline.key);
    const { data, error } = await q.order("created_at", { ascending: false }).limit(1000);
    setLoading(false);
    if (error) return toast.error(error.message);
    setRows((data as Q[]) ?? []);
  };
  useEffect(() => { setOpen(null); setFormTopic(null); load(); }, [area, discipline?.key]);

  const groups = useMemo(() => {
    return groupQuestionsByTopic(rows).map(g => [g.key, g.items] as const);
  }, [rows]);

  const changed = () => { load(); onChanged(); };

  const rename = async (t: string) => {
    if (!area) return;
    const name = prompt("Novo nome do assunto:", t === NO_TOPIC ? "" : t)?.trim();
    if (!name || name === t) return;
    const ids = groups.find(([name]) => name === t)?.[1].map(q => q.id) ?? [];
    const { error } = await supabase.from("chem_questions").update({ topic: name, lesson: name }).eq("area", area).in("id", ids);
    if (error) return toast.error(error.message);
    toast.success("Assunto renomeado"); changed();
  };

  const removeTopic = async (t: string, n: number) => {
    if (!area) return;
    if (!confirm(`Excluir o assunto "${t}" e suas ${n} questões?`)) return;
    const ids = groups.find(([name]) => name === t)?.[1].map(q => q.id) ?? [];
    const { error } = await supabase.from("chem_questions").delete().eq("area", area).in("id", ids);
    if (error) return toast.error(error.message);
    toast.success("Assunto excluído"); changed();
  };

  const removeQuestion = async (id: string) => {
    if (!confirm("Excluir esta questão?")) return;
    const { error } = await supabase.from("chem_questions").delete().eq("id", id);
    if (error) return toast.error(error.message);
    changed();
  };

  const addQuestion = async () => {
    if (!area || !formTopic || saving) return;
    const opts = [form.a, form.b, form.c, form.d].map((s) => s.trim());
    if (!form.question.trim() || opts.some((o) => !o)) return toast.error("Preencha a pergunta e as 4 alternativas");
    const topic = formTopic === NO_TOPIC ? null : formTopic;
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return toast.error("Entre na sua conta para adicionar questões");
    setSaving(true);
    const { error } = await supabase.from("chem_questions").insert({
      area, discipline: discipline?.key ?? null, topic, lesson: topic, question: form.question.trim(), options: opts, correct_index: form.correct,
      difficulty, explanation: explanation.trim() || null, school_level: schoolLevel, school_levels: [schoolLevel], created_by: u.user.id,
    } as any);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Questão adicionada");
    setForm({ question: "", a: "", b: "", c: "", d: "", correct: 0 });
    setExplanation("");
    setOpen(formTopic); setFormTopic(null); changed();
  };

  const meta = area ? areaMeta(area) : null;

  return (
    <Dialog open={!!area} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader><DialogTitle>{meta?.emoji} {discipline?.label ?? meta?.label} — assuntos e questões</DialogTitle></DialogHeader>

        <div className="flex flex-wrap gap-2">
          <Input value={newTopic} onChange={(e) => setNewTopic(e.target.value)} placeholder="Novo assunto (ex: Ligações químicas)" />
          <Button onClick={() => { const t = newTopic.trim(); if (!t) return; setFormTopic(t); setNewTopic(""); }}>＋ Adicionar assunto</Button>
        </div>

        {formTopic && (
          <div className="rounded-lg border p-3 space-y-2 bg-muted/40">
            <div className="font-semibold text-sm">Nova questão em “{formTopic}”</div>
            <Input value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} placeholder="Pergunta" />
            {(["a", "b", "c", "d"] as const).map((k, i) => (
              <label key={k} className="flex items-center gap-2 text-sm">
                <input type="radio" checked={form.correct === i} onChange={() => setForm({ ...form, correct: i })} />
                <Input value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder={`Alternativa ${k.toUpperCase()}${form.correct === i ? " (correta)" : ""}`} />
              </label>
            ))}
            <select aria-label="Nível de ensino da nova questão" className="w-full border rounded-md p-2 bg-background" value={schoolLevel} onChange={e => setSchoolLevel(e.target.value)}>{LEVELS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}</select>
            <select aria-label="Dificuldade da nova questão" className="w-full border rounded-md p-2 bg-background" value={difficulty} onChange={e => setDifficulty(Number(e.target.value))}>{DIFFICULTIES.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}</select>
            <Input aria-label="Explicação da resposta" placeholder="Explicação da resposta" value={explanation} onChange={e => setExplanation(e.target.value)} />
            <div className="flex gap-2"><Button disabled={saving} onClick={addQuestion}>{saving ? "Salvando…" : "Salvar questão"}</Button><Button variant="ghost" onClick={() => setFormTopic(null)}>Cancelar</Button></div>
          </div>
        )}

        {loading ? <p className="text-sm text-muted-foreground">Carregando…</p> : groups.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum assunto ainda. Adicione um assunto acima ou gere questões com IA.</p>
        ) : groups.map(([t, qs]) => (
          <div key={t} className="rounded-lg border">
            <div className="flex flex-wrap items-center gap-2 p-2">
              <Button variant="ghost" className="flex-1 h-auto whitespace-normal text-left justify-start font-semibold" onClick={() => setOpen(open === t ? null : t)}>
                {open === t ? "▾" : "▸"} {t} <span className="text-muted-foreground font-normal">({qs.length})</span>
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setFormTopic(t)}>＋ Questão</Button>
              <Button size="sm" variant="ghost" onClick={() => rename(t)}>✏️ Editar</Button>
              <Button size="sm" variant="ghost" title="Excluir assunto" onClick={() => removeTopic(t, qs.length)}>🗑️</Button>
            </div>
            {open === t && (
              <ol className="px-4 pb-3 space-y-2 list-decimal list-inside text-sm">
                {qs.map((q) => (
                  <li key={q.id}>
                    <span>{q.question}</span>
                    <Button size="sm" variant="ghost" className="ml-2 text-destructive text-xs" onClick={() => removeQuestion(q.id)}>excluir</Button>
                    <div className="text-xs text-muted-foreground ml-5">
                      ✔ {Array.isArray(q.options) ? String(q.options[q.correct_index] ?? "") : ""}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
