import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wand2, Save, BookOpen } from "lucide-react";
import { toast } from "sonner";

type GenQ = { question: string; options: string[]; correct_index: number; explanation?: string; difficulty?: number };

export default function PlanoDeAula() {
  const navigate = useNavigate();
  const [role, setRole] = useState<string | null>(null);
  const [classes, setClasses] = useState<{ id: string; name: string; grade_year: number }[]>([]);
  const [form, setForm] = useState({
    class_id: "",
    grade_year: 6,
    topic: "",
    difficulty: 2,
    count: 10,
    plan: "",
  });
  const [busy, setBusy] = useState(false);
  const [questions, setQuestions] = useState<GenQ[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      const r = await ensureUserAccess(session.user);
      setRole(r);
      if (r !== "admin" && r !== "teacher") { toast.error("Acesso restrito a professores"); navigate("/"); return; }
      const { data } = await supabase.from("classes").select("id, name, grade_year").order("grade_year");
      setClasses(data ?? []);
    });
  }, [navigate]);

  const generate = async () => {
    if (!form.plan.trim()) return toast.error("Cole o plano de aula");
    setBusy(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-lesson-questions", { body: form });
      if (error || data?.error) return toast.error(data?.error ?? error?.message ?? "Falha ao gerar");
      setQuestions(data?.questions ?? []);
      toast.success(`${(data?.questions ?? []).length} questões geradas`);
    } finally { setBusy(false); }
  };

  const save = async () => {
    if (!questions.length) return;
    const rows = questions.map(q => ({
      area: "geral",
      topic: form.topic || null,
      difficulty: q.difficulty ?? form.difficulty,
      school_level: "fundamental",
      grade_year: form.grade_year,
      class_id: form.class_id || null,
      question: q.question,
      options: q.options,
      correct_index: q.correct_index,
      answer_text: q.options[q.correct_index] ?? null,
      explanation: q.explanation ?? null,
    }));
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("chem_questions").insert(rows.map(r => ({ ...r, created_by: session!.user.id })));
    if (error) return toast.error(error.message);
    toast.success(`${rows.length} questões salvas no banco`);
    setQuestions([]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-2xl md:text-3xl font-black italic uppercase">Plano de Aula → Perguntas</h1>
          <div/>
        </div>

        <Card className="bg-slate-900/60 border-white/10 mb-6">
          <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><BookOpen className="w-4 h-4"/>Configurações</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase text-white/60">Turma (opcional)</label>
              <Select value={form.class_id} onValueChange={v => setForm({ ...form, class_id: v })}>
                <SelectTrigger className="bg-slate-950 border-white/10"><SelectValue placeholder="Sem turma"/></SelectTrigger>
                <SelectContent>{classes.map(c => <SelectItem key={c.id} value={c.id}>{c.name} — {c.grade_year}º ano</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase text-white/60">Série</label>
              <Select value={String(form.grade_year)} onValueChange={v => setForm({ ...form, grade_year: Number(v) })}>
                <SelectTrigger className="bg-slate-950 border-white/10"><SelectValue/></SelectTrigger>
                <SelectContent>{[6,7,8,9].map(g => <SelectItem key={g} value={String(g)}>{g}º ano</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-[10px] uppercase text-white/60">Tema</label>
              <Input value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} placeholder="ex: Estados físicos da matéria" className="bg-slate-950 border-white/10"/>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] uppercase text-white/60">Dificuldade</label>
                <Select value={String(form.difficulty)} onValueChange={v => setForm({ ...form, difficulty: Number(v) })}>
                  <SelectTrigger className="bg-slate-950 border-white/10"><SelectValue/></SelectTrigger>
                  <SelectContent>{[1,2,3,4,5].map(d => <SelectItem key={d} value={String(d)}>{d}/5</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[10px] uppercase text-white/60">Quantidade</label>
                <Input type="number" min={1} max={20} value={form.count} onChange={e => setForm({ ...form, count: Number(e.target.value) || 10 })} className="bg-slate-950 border-white/10"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[10px] uppercase text-white/60">Plano de aula (texto completo)</label>
              <Textarea value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })} rows={8} placeholder="Cole aqui o plano de aula. A IA usará o conteúdo para gerar perguntas alinhadas ao tema e à série." className="bg-slate-950 border-white/10"/>
            </div>
            <div className="sm:col-span-2 flex gap-2">
              <Button onClick={generate} disabled={busy} className="bg-gradient-to-r from-fuchsia-600 to-violet-600">
                <Wand2 className="w-4 h-4 mr-1"/>{busy ? "Gerando…" : "Gerar com IA"}
              </Button>
              {questions.length > 0 && (
                <Button onClick={save} variant="secondary"><Save className="w-4 h-4 mr-1"/>Salvar no banco</Button>
              )}
            </div>
          </CardContent>
        </Card>

        {questions.length > 0 && (
          <Card className="bg-slate-900/60 border-white/10">
            <CardHeader><CardTitle className="text-sm">Pré-visualização ({questions.length})</CardTitle></CardHeader>
            <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
              {questions.map((q, i) => (
                <div key={i} className="bg-slate-950/60 border border-white/10 rounded-xl p-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-bold">{i + 1}. {q.question}</p>
                    <Badge variant="outline" className="text-[10px]">Dif. {q.difficulty ?? form.difficulty}</Badge>
                  </div>
                  <ul className="space-y-1 text-xs">
                    {q.options.map((o, oi) => (
                      <li key={oi} className={oi === q.correct_index ? "text-emerald-400 font-bold" : "text-white/70"}>
                        {String.fromCharCode(65 + oi)}) {o}
                      </li>
                    ))}
                  </ul>
                  {q.explanation && <p className="text-[11px] text-white/50 mt-2 italic">{q.explanation}</p>}
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
