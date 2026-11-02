import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Wand2, Save, BookOpen, ListChecks, Pencil, Trash2, ChevronDown, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

type GenQ = { question: string; options: string[]; correct_index: number; explanation?: string; difficulty?: number };

type SavedPlan = {
  id: string; title: string; subject: string | null; grade_year: number | null; content: string;
  class_id: string | null; school_id: string | null; discipline: string | null;
  lesson_date: string | null; bimestre: string | null; contents_topics: string | null;
  slides_material: string | null; bncc_codes: string | null; objective: string | null;
  methodology: string | null; curricular_components: string | null;
  competencies_codes: string | null; competencies_text: string | null;
  skills_codes: string | null; skills_text: string | null;
  descriptors_codes: string | null; descriptors_text: string | null;
  updated_at: string;
};

const BIMESTRES = ["1º Bimestre", "2º Bimestre", "3º Bimestre", "4º Bimestre"];
const DISCIPLINAS = [
  "Ciências", "Química", "Física", "Biologia", "Matemática",
  "Português", "História", "Geografia", "Inglês", "Artes", "Educação Física",
];

const emptyForm = {
  school_id: "",
  class_id: "",
  discipline: "",
  lesson_date: new Date().toISOString().slice(0, 10),
  bimestre: "1º Bimestre",
  title: "",
  contents_topics: "",
  slides_material: "",
  bncc_codes: "",
  objective: "",
  methodology: "",
  curricular_components: "",
  competencies_codes: "",
  competencies_text: "",
  skills_codes: "",
  skills_text: "",
  descriptors_codes: "",
  descriptors_text: "",
};

export default function PlanoDeAula() {
  const perm = usePermission("plano_aula");
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [schools, setSchools] = useState<{ id: string; name: string }[]>([]);
  const [classes, setClasses] = useState<{ id: string; name: string; grade_year: number; school_id?: string }[]>([]);
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [form, setForm] = useState({ ...emptyForm });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [activityFor, setActivityFor] = useState<SavedPlan | null>(null);
  const [activityQuestions, setActivityQuestions] = useState<GenQ[]>([]);
  const [genBusy, setGenBusy] = useState(false);
  const [filterTurma, setFilterTurma] = useState<string>("all");
  const [filterDisc, setFilterDisc] = useState<string>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const set = (k: keyof typeof emptyForm, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const classNameOf = (cid: string | null) => classes.find((c) => c.id === cid)?.name ?? "—";

  const loadPlans = async (uid: string) => {
    const { data } = await supabase.from("lesson_plans").select("*").eq("teacher_id", uid).order("updated_at", { ascending: false });
    setSavedPlans((data ?? []) as any);
  };

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      setUserId(session.user.id);
      const r = await ensureUserAccess(session.user);
      if (r !== "admin" && r !== "teacher") { toast.error("Acesso restrito a professores"); navigate("/"); return; }
      const [{ data: sc }, { data: cl }] = await Promise.all([
        supabase.from("schools").select("id, name").order("name"),
        supabase.from("classes").select("id, name, grade_year, school_id").order("grade_year"),
      ]);
      setSchools(sc ?? []);
      setClasses(cl ?? []);
      await loadPlans(session.user.id);
    });
  }, [navigate]);

  const filteredClasses = useMemo(
    () => (form.school_id ? classes.filter((c) => (c as any).school_id === form.school_id) : classes),
    [classes, form.school_id],
  );

  const canGenerateAI = form.title.trim().length > 0 && !!form.discipline && !!form.bimestre;

  const generateWithAI = async () => {
    if (!canGenerateAI) return toast.error("Informe Disciplina, Bimestre e Assunto");
    setBusy(true);
    try {
      const turma = classes.find((c) => c.id === form.class_id);
      const escola = schools.find((s) => s.id === form.school_id);
      const { data, error } = await supabase.functions.invoke("generate-topic-lesson-plan", {
        body: {
          topic: { title: form.title, description: form.contents_topics },
          title: form.title,
          discipline: form.discipline,
          bimestre: form.bimestre,
          lesson_date: form.lesson_date,
          stage: (turma?.grade_year ?? 0) >= 10 ? "Ensino Médio" : "Ensino Fundamental",
          grade_year: turma?.grade_year ?? null,
          school: escola?.name ?? null,
          class_name: turma?.name ?? null,
          // TUDO que o professor digitou vai como contexto para a IA elaborar
          user_inputs: {
            contents_topics: form.contents_topics,
            slides_material: form.slides_material,
            bncc_codes: form.bncc_codes,
            objective: form.objective,
            methodology: form.methodology,
            curricular_components: form.curricular_components,
            competencies_codes: form.competencies_codes,
            competencies_text: form.competencies_text,
            skills_codes: form.skills_codes,
            skills_text: form.skills_text,
            descriptors_codes: form.descriptors_codes,
            descriptors_text: form.descriptors_text,
          },
        },
      });
      if (error || data?.error) return toast.error(data?.error ?? error?.message ?? "Falha na IA");
      // Preenche/expande todos os campos preservando o que já foi digitado como base
      setForm((f) => ({
        ...f,
        objective: data?.objective || f.objective,
        methodology: data?.methodology || f.methodology,
        curricular_components: data?.curricular_components || f.curricular_components,
        competencies_codes: data?.competencies_codes || f.competencies_codes,
        competencies_text: data?.competencies_text || f.competencies_text,
        skills_codes: data?.skills_codes || f.skills_codes,
        skills_text: data?.skills_text || f.skills_text,
        descriptors_codes: data?.descriptors_codes || f.descriptors_codes,
        descriptors_text: data?.descriptors_text || f.descriptors_text,
        bncc_codes: data?.bncc_codes || f.bncc_codes,
        contents_topics: data?.contents_topics || f.contents_topics,
        slides_material: f.slides_material || data?.slides_material || "",
      }));
      toast.success(data?.fallback ? "Plano gerado (modo offline)" : "Plano elaborado pela IA com base nos seus dados");
    } finally { setBusy(false); }
  };


  const generateActivities = async () => {
    if (!form.title.trim()) return toast.error("Informe o assunto");
    setGenBusy(true);
    setActivityQuestions([]);
    try {
      const { data, error } = await supabase.functions.invoke("generate-lesson-questions", {
        body: {
          class_id: form.class_id || "",
          grade_year: classes.find((c) => c.id === form.class_id)?.grade_year ?? 6,
          topic: form.title,
          difficulty: 2,
          count: 10,
          plan: [form.objective, form.methodology, form.contents_topics].filter(Boolean).join("\n\n"),
        },
      });
      if (error || data?.error) return toast.error(data?.error ?? error?.message ?? "Falha ao gerar");
      setActivityQuestions(data?.questions ?? []);
      setActivityFor({ id: "current", title: form.title } as any);
      toast.success(`${(data?.questions ?? []).length} atividades geradas`);
    } finally { setGenBusy(false); }
  };

  const save = async () => {
    if (!form.title.trim() || !form.discipline || !form.bimestre) return toast.error("Preencha Disciplina, Bimestre e Assunto");
    const payload = {
      teacher_id: userId,
      title: form.title,
      subject: form.discipline,
      discipline: form.discipline,
      grade_year: classes.find((c) => c.id === form.class_id)?.grade_year ?? null,
      class_id: form.class_id || null,
      school_id: form.school_id || null,
      lesson_date: form.lesson_date || null,
      bimestre: form.bimestre,
      contents_topics: form.contents_topics || null,
      slides_material: form.slides_material || null,
      bncc_codes: form.bncc_codes || null,
      objective: form.objective || null,
      methodology: form.methodology || null,
      curricular_components: form.curricular_components || null,
      competencies_codes: form.competencies_codes || null,
      competencies_text: form.competencies_text || null,
      skills_codes: form.skills_codes || null,
      skills_text: form.skills_text || null,
      descriptors_codes: form.descriptors_codes || null,
      descriptors_text: form.descriptors_text || null,
      content: [
        `# ${form.title}`,
        `**Disciplina:** ${form.discipline}  |  **Bimestre:** ${form.bimestre}  |  **Data:** ${form.lesson_date}`,
        form.objective && `## Objetivo\n${form.objective}`,
        form.methodology && `## Metodologia\n${form.methodology}`,
        form.contents_topics && `## Conteúdos e Tópicos\n${form.contents_topics}`,
        form.bncc_codes && `**BNCC:** ${form.bncc_codes}`,
      ].filter(Boolean).join("\n\n"),
    };
    let error;
    if (editingId) {
      if (!perm.edit) return toast.error("Seu perfil não tem permissão para editar");
      ({ error } = await supabase.from("lesson_plans").update(payload).eq("id", editingId));
    } else {
      if (!perm.create) return toast.error("Seu perfil não tem permissão para adicionar");
      ({ error } = await supabase.from("lesson_plans").insert(payload));
    }
    if (error) return toast.error(error.message);
    toast.success(editingId ? "Planejamento atualizado" : "Planejamento salvo");
    setForm({ ...emptyForm });
    setEditingId(null);
    await loadPlans(userId);
  };

  const editPlan = (p: SavedPlan) => {
    setEditingId(p.id);
    setForm({
      school_id: p.school_id ?? "",
      class_id: p.class_id ?? "",
      discipline: p.discipline ?? p.subject ?? "",
      lesson_date: p.lesson_date ?? new Date().toISOString().slice(0, 10),
      bimestre: p.bimestre ?? "1º Bimestre",
      title: p.title ?? "",
      contents_topics: p.contents_topics ?? "",
      slides_material: p.slides_material ?? "",
      bncc_codes: p.bncc_codes ?? "",
      objective: p.objective ?? "",
      methodology: p.methodology ?? "",
      curricular_components: p.curricular_components ?? "",
      competencies_codes: p.competencies_codes ?? "",
      competencies_text: p.competencies_text ?? "",
      skills_codes: p.skills_codes ?? "",
      skills_text: p.skills_text ?? "",
      descriptors_codes: p.descriptors_codes ?? "",
      descriptors_text: p.descriptors_text ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deletePlan = async (id: string) => {
    if (!perm.remove) return toast.error("Seu perfil não tem permissão para excluir");
    if (!confirm("Excluir este planejamento?")) return;
    await supabase.from("lesson_plans").delete().eq("id", id);
    setSavedPlans((p) => p.filter((x) => x.id !== id));
  };

  const disciplinas = useMemo(
    () => Array.from(new Set(savedPlans.map((p) => p.discipline ?? p.subject).filter(Boolean))) as string[],
    [savedPlans],
  );
  const filtered = savedPlans.filter(
    (p) => (filterTurma === "all" || p.class_id === filterTurma) &&
           (filterDisc === "all" || (p.discipline ?? p.subject) === filterDisc),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-xl md:text-2xl font-bold">Planejamento Diário</h1>
          <div/>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* Left: form */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100">
              <CardTitle className="flex items-center gap-2 text-base">
                📝 {editingId ? "Editar Planejamento" : "Novo Planejamento Diário"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Escola *">
                  <Select value={form.school_id || undefined} onValueChange={(v) => set("school_id", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione"/></SelectTrigger>
                    <SelectContent>{schools.map((s) => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Turma *">
                  <Select value={form.class_id || undefined} onValueChange={(v) => set("class_id", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione"/></SelectTrigger>
                    <SelectContent>{filteredClasses.map((c) => <SelectItem key={c.id} value={c.id}>{c.name} — {c.grade_year}º ano</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Disciplina *">
                  <Select value={form.discipline || undefined} onValueChange={(v) => set("discipline", v)}>
                    <SelectTrigger><SelectValue placeholder="Selecione"/></SelectTrigger>
                    <SelectContent>{DISCIPLINAS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Data da Aula *">
                  <Input type="date" value={form.lesson_date} onChange={(e) => set("lesson_date", e.target.value)} />
                </Field>
                <Field label="Bimestre *">
                  <Select value={form.bimestre} onValueChange={(v) => set("bimestre", v)}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>{BIMESTRES.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
              </div>

              <div>
                <div className="flex items-end justify-between mb-1">
                  <label className="text-sm font-semibold">Assunto da Aula *</label>
                  <Button size="sm" variant="outline" onClick={generateWithAI} disabled={busy || !canGenerateAI}>
                    <Wand2 className="w-3.5 h-3.5 mr-1"/>{busy ? "Gerando…" : "Gerar com IA"}
                  </Button>
                </div>
                <Input placeholder="Ex: Equações do 2° Grau" value={form.title} onChange={(e) => set("title", e.target.value)} />
              </div>

              <Field label="Conteúdos e Tópicos">
                <Textarea rows={4} placeholder="Descreva os tópicos que serão abordados…" value={form.contents_topics} onChange={(e) => set("contents_topics", e.target.value)} />
              </Field>

              <Field label="Slides / Material">
                <Input placeholder="Link ou descrição dos slides" value={form.slides_material} onChange={(e) => set("slides_material", e.target.value)} />
              </Field>

              <Button
                className="w-full bg-emerald-400 hover:bg-emerald-500 text-white shadow-sm"
                onClick={generateActivities}
                disabled={genBusy || !form.title.trim()}
              >
                <ListChecks className="w-4 h-4 mr-2"/>{genBusy ? "Gerando atividades…" : "Gerar Lista de 10 Atividades com IA"}
              </Button>

              <Field label="Códigos BNCC">
                <Input placeholder="Ex: EF09CI01, EF09CI02, EF09CI03" value={form.bncc_codes} onChange={(e) => set("bncc_codes", e.target.value)} />
              </Field>

              <Field label="Objetivo da Aula">
                <Textarea rows={3} value={form.objective} onChange={(e) => set("objective", e.target.value)} />
              </Field>

              <Field label="Metodologia">
                <Textarea rows={3} value={form.methodology} onChange={(e) => set("methodology", e.target.value)} />
              </Field>

              <Field label="Componentes Curriculares">
                <Textarea rows={2} value={form.curricular_components} onChange={(e) => set("curricular_components", e.target.value)} />
              </Field>

              <Field label="Competências">
                <Input className="mb-2" placeholder="Códigos: CG1, CG2, CG3" value={form.competencies_codes} onChange={(e) => set("competencies_codes", e.target.value)} />
                <Textarea rows={2} placeholder="Descreva as competências desenvolvidas…" value={form.competencies_text} onChange={(e) => set("competencies_text", e.target.value)} />
              </Field>

              <Field label="Habilidades">
                <Input className="mb-2" placeholder="Códigos: EF09MA01, EF09MA02" value={form.skills_codes} onChange={(e) => set("skills_codes", e.target.value)} />
                <Textarea rows={2} placeholder="Descreva as habilidades trabalhadas…" value={form.skills_text} onChange={(e) => set("skills_text", e.target.value)} />
              </Field>

              <Field label="Descritores">
                <Input className="mb-2" placeholder="Códigos: D1, D2, D3, D4" value={form.descriptors_codes} onChange={(e) => set("descriptors_codes", e.target.value)} />
                <Textarea rows={2} placeholder="Descreva os descritores de avaliação…" value={form.descriptors_text} onChange={(e) => set("descriptors_text", e.target.value)} />
              </Field>

              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white" onClick={save}>
                <Save className="w-4 h-4 mr-2"/>{editingId ? "Atualizar Planejamento" : "Salvar Planejamento"}
              </Button>

              {editingId && (
                <Button variant="ghost" className="w-full" onClick={() => { setEditingId(null); setForm({ ...emptyForm }); }}>
                  Cancelar edição
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Right: saved plans */}
          <div className="space-y-3">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-fuchsia-50 to-pink-50 border-b border-slate-100">
                <CardTitle className="flex items-center gap-2 text-base">
                  📚 Planejamentos ({filtered.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] text-slate-500">Filtrar Turma</label>
                    <Select value={filterTurma} onValueChange={setFilterTurma}>
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {classes.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500">Filtrar Disciplina</label>
                    <Select value={filterDisc} onValueChange={setFilterDisc}>
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {disciplinas.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
                  {filtered.length === 0 && (
                    <div className="text-center text-sm text-slate-400 py-8">Nenhum planejamento.</div>
                  )}
                  {filtered.map((p) => {
                    const isOpen = !!expanded[p.id];
                    return (
                      <div key={p.id} className="border border-slate-200 rounded-xl p-3 hover:shadow-sm transition-shadow">
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"/>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm truncate">{p.title}</div>
                            <div className="text-[11px] text-slate-500">
                              {(p.discipline ?? p.subject) ?? "—"} • {classNameOf(p.class_id)}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {p.bimestre ?? ""} {p.lesson_date ? `• ${new Date(p.lesson_date + "T00:00").toLocaleDateString("pt-BR")}` : ""}
                            </div>
                          </div>
                          <button onClick={() => setExpanded((x) => ({ ...x, [p.id]: !isOpen }))} className="p-1 text-slate-400 hover:text-slate-700">
                            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}/>
                          </button>
                          <button onClick={() => editPlan(p)} className="p-1 text-slate-500 hover:text-blue-600" title="Editar">
                            <Pencil className="w-4 h-4"/>
                          </button>
                          <button onClick={() => deletePlan(p.id)} className="p-1 text-slate-500 hover:text-red-600" title="Excluir">
                            <Trash2 className="w-4 h-4"/>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                            {p.objective && <div><b>Objetivo:</b> {p.objective}</div>}
                            {p.bncc_codes && <div><b>BNCC:</b> {p.bncc_codes}</div>}
                            {p.methodology && <div><b>Metodologia:</b> {p.methodology}</div>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={!!activityFor} onOpenChange={(o) => !o && setActivityFor(null)}>
          <DialogContent className="max-w-3xl bg-white max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-500"/>
                Atividades — {activityFor?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              {activityQuestions.map((q, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-3">
                  <p className="text-sm font-semibold mb-2">{i + 1}. {q.question}</p>
                  <ul className="space-y-1 text-xs">
                    {q.options.map((o, oi) => (
                      <li key={oi} className={oi === q.correct_index ? "text-emerald-600 font-bold" : "text-slate-600"}>
                        {String.fromCharCode(65 + oi)}) {o}
                      </li>
                    ))}
                  </ul>
                  {q.explanation && <p className="text-[11px] text-slate-500 mt-2 italic">{q.explanation}</p>}
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={() => window.print()}>Imprimir</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-semibold block mb-1">{label}</label>
      {children}
    </div>
  );
}
