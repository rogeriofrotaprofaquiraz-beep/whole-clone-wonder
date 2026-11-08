import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { areaMeta, AreaValue } from "@/lib/aula";

type Q = { id: string; topic: string | null; question: string; options: any; correct_index: number; difficulty: number };

const NO_TOPIC = "Sem assunto";

export function AreaQuestionsDialog({ area, onClose, onChanged }: { area: AreaValue | null; onClose: () => void; onChanged: () => void }) {
  const [rows, setRows] = useState<Q[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [newTopic, setNewTopic] = useState("");
  const [form, setForm] = useState({ question: "", a: "", b: "", c: "", d: "", correct: 0 });
  const [formTopic, setFormTopic] = useState<string | null>(null);

  const load = async () => {
    if (!area) return;
    setLoading(true);
    const { data, error } = await supabase.from("chem_questions")
      .select("id, topic, question, options, correct_index, difficulty").eq("area", area).order("created_at", { ascending: false }).limit(1000);
    setLoading(false);
    if (error) return toast.error(error.message);
    setRows((data as Q[]) ?? []);
  };
  useEffect(() => { setOpen(null); setFormTopic(null); load(); }, [area]);

  const groups = useMemo(() => {
    const m = new Map<string, Q[]>();
    for (const r of rows) { const k = r.topic?.trim() || NO_TOPIC; m.set(k, [...(m.get(k) ?? []), r]); }
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0], "pt"));
  }, [rows]);

  const changed = () => { load(); onChanged(); };

  const rename = async (t: string) => {
    const name = prompt("Novo nome do assunto:", t === NO_TOPIC ? "" : t)?.trim();
    if (!name || name === t) return;
    const q = supabase.from("chem_questions").update({ topic: name }).eq("area", area!);
    const { error } = t === NO_TOPIC ? await q.is("topic", null) : await q.eq("topic", t);
    if (error) return toast.error(error.message);
    toast.success("Assunto renomeado"); changed();
  };

  const removeTopic = async (t: string, n: number) => {
    if (!confirm(`Excluir o assunto "${t}" e suas ${n} questões?`)) return;
    const q = supabase.from("chem_questions").delete().eq("area", area!);
    const { error } = t === NO_TOPIC ? await q.is("topic", null) : await q.eq("topic", t);
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
    const opts = [form.a, form.b, form.c, form.d].map((s) => s.trim());
    if (!form.question.trim() || opts.some((o) => !o)) return toast.error("Preencha a pergunta e as 4 alternativas");
    const topic = formTopic === NO_TOPIC ? null : formTopic;
    const { data: u } = await supabase.auth.getUser();
    const { error } = await supabase.from("chem_questions").insert({
      area: area!, topic, question: form.question.trim(), options: opts, correct_index: form.correct,
      difficulty: 2, school_level: "medio", school_levels: ["medio"], created_by: u.user?.id,
    } as any);
    if (error) return toast.error(error.message);
    toast.success("Questão adicionada");
    setForm({ question: "", a: "", b: "", c: "", d: "", correct: 0 });
    setOpen(formTopic); setFormTopic(null); changed();
  };

  const meta = area ? areaMeta(area) : null;

  return (
    <Dialog open={!!area} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader><DialogTitle>{meta?.emoji} {meta?.label} — assuntos e questões</DialogTitle></DialogHeader>

        <div className="flex gap-2">
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
            <div className="flex gap-2"><Button onClick={addQuestion}>Salvar questão</Button><Button variant="ghost" onClick={() => setFormTopic(null)}>Cancelar</Button></div>
          </div>
        )}

        {loading ? <p className="text-sm text-muted-foreground">Carregando…</p> : groups.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhuma questão nesta área ainda.</p>
        ) : groups.map(([t, qs]) => (
          <div key={t} className="rounded-lg border">
            <div className="flex items-center gap-2 p-2">
              <button className="flex-1 text-left font-semibold" onClick={() => setOpen(open === t ? null : t)}>
                {open === t ? "▾" : "▸"} {t} <span className="text-muted-foreground font-normal">({qs.length})</span>
              </button>
              <Button size="sm" variant="ghost" onClick={() => setFormTopic(t)}>＋ Questão</Button>
              <Button size="sm" variant="ghost" onClick={() => rename(t)}>✏️ Editar</Button>
              <Button size="sm" variant="ghost" onClick={() => removeTopic(t, qs.length)}>🗑️</Button>
            </div>
            {open === t && (
              <ol className="px-4 pb-3 space-y-2 list-decimal list-inside text-sm">
                {qs.map((q) => (
                  <li key={q.id}>
                    <span>{q.question}</span>
                    <button className="ml-2 text-destructive text-xs" onClick={() => removeQuestion(q.id)}>excluir</button>
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
