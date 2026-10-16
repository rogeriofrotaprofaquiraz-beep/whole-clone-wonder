import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Medal, Plus, FileUp, Sparkles, Loader2, Trash2, Play } from "lucide-react";
import { parseBulkQuestions } from "@/lib/parseBulkQuestions";

type Q = { q: string; options: string[]; correct: number; explanation?: string };
type Olympiad = { id: string; acronym: string; name: string; description: string | null };
type Exam = { id: string; olympiad_id: string; title: string; year: number | null; source: string; questions: Q[] };

const fileToBase64 = (f: File) => new Promise<string>((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(",")[1]);
  r.onerror = rej;
  r.readAsDataURL(f);
});

export default function Olimpiadas() {
  const [olympiads, setOlympiads] = useState<Olympiad[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);
  const [sel, setSel] = useState<Olympiad | null>(null);
  const [canManage, setCanManage] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [newOly, setNewOly] = useState({ acronym: "", name: "", description: "" });
  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [modelQ, setModelQ] = useState("");
  const [count, setCount] = useState(10);
  const [pasted, setPasted] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [taking, setTaking] = useState<Exam | null>(null);

  const load = async () => {
    const [{ data: o }, { data: e }] = await Promise.all([
      supabase.from("olympiads").select("*").order("created_at"),
      supabase.from("olympiad_exams").select("*").order("created_at", { ascending: false }),
    ]);
    setOlympiads((o ?? []) as any);
    setExams((e ?? []) as any);
    if (!sel && o?.length) setSel(o[0] as any);
  };

  useEffect(() => {
    load();
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      setUserId(u.user.id);
      const r = await Promise.all(["admin", "teacher", "moderator"].map((role) => supabase.rpc("has_role", { _user_id: u.user!.id, _role: role as any })));
      setCanManage(r.some((x) => x.data));
    })();
  }, []);

  const addOlympiad = async () => {
    if (!newOly.acronym || !newOly.name) return toast.error("Informe sigla e nome");
    const { error } = await supabase.from("olympiads").insert({ ...newOly, created_by: userId });
    if (error) return toast.error(error.message);
    toast.success("Olimpíada cadastrada");
    setNewOly({ acronym: "", name: "", description: "" });
    load();
  };

  const saveExam = async (questions: Q[], source: string) => {
    if (!sel) return;
    if (!questions.length) return toast.error("Nenhuma questão encontrada");
    const { error } = await supabase.from("olympiad_exams").insert({
      olympiad_id: sel.id, title: title || `${sel.acronym} ${year}`, year, source, questions: questions as any, created_by: userId,
    });
    if (error) return toast.error(error.message);
    toast.success(`Prova salva com ${questions.length} questões`);
    setTitle(""); setModelQ(""); setPasted("");
    load();
  };

  const callAi = async (body: any, kind: string) => {
    setBusy(kind);
    try {
      const { data, error } = await supabase.functions.invoke("olympiad-exam-ai", { body: { ...body, olympiad: sel?.acronym } });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      await saveExam((data as any).questions ?? [], kind);
    } catch (e: any) {
      toast.error(e.message || "Falha");
    } finally { setBusy(null); }
  };

  const importPdf = async (f?: File) => {
    if (!f) return;
    if (f.size > 15 * 1024 * 1024) return toast.error("PDF muito grande (máx. 15 MB)");
    callAi({ mode: "pdf", pdf_base64: await fileToBase64(f) }, "pdf");
  };

  const removeExam = async (id: string) => {
    if (!confirm("Excluir esta prova?")) return;
    await supabase.from("olympiad_exams").delete().eq("id", id);
    load();
  };

  if (taking) return <TakeExam exam={taking} userId={userId} onClose={() => setTaking(null)} />;

  const selExams = exams.filter((e) => e.olympiad_id === sel?.id);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <Medal className="text-primary" />
        <h1 className="text-3xl font-black">Olimpíadas do Campeonato</h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {olympiads.map((o) => (
          <Button key={o.id} variant={sel?.id === o.id ? "default" : "outline"} onClick={() => setSel(o)}>
            {o.acronym}
          </Button>
        ))}
      </div>

      {sel && (
        <Card className="p-5">
          <h2 className="text-xl font-black">{sel.acronym} — {sel.name}</h2>
          {sel.description && <p className="text-sm text-muted-foreground">{sel.description}</p>}
          <div className="mt-4 space-y-2">
            {selExams.length === 0 && <p className="text-sm text-muted-foreground">Nenhuma prova cadastrada ainda.</p>}
            {selExams.map((e) => (
              <div key={e.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-bold">{e.title}</div>
                  <div className="text-xs text-muted-foreground">{e.questions.length} questões · {e.year ?? "—"}</div>
                </div>
                <Badge variant="secondary">{e.source === "pdf" ? "PDF" : e.source === "similar" ? "Gerada por IA" : "Colada"}</Badge>
                <Button size="sm" onClick={() => setTaking(e)}><Play size={14} className="mr-1" />Fazer prova</Button>
                {canManage && <Button size="icon" variant="ghost" onClick={() => removeExam(e.id)}><Trash2 size={14} /></Button>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {canManage && sel && (
        <Card className="p-5 space-y-4">
          <h3 className="font-black text-lg">Nova prova para {sel.acronym}</h3>
          <div className="grid md:grid-cols-3 gap-2">
            <Input className="md:col-span-2" placeholder="Título (ex: OBQ 2025 — Fase 1)" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input type="number" value={year} onChange={(e) => setYear(+e.target.value)} />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2 p-3 border rounded-lg">
              <p className="font-bold flex items-center gap-2"><FileUp size={16} />Importar PDF</p>
              <p className="text-xs text-muted-foreground">A IA lê a prova e o gabarito.</p>
              <Input type="file" accept="application/pdf" disabled={!!busy} onChange={(e) => importPdf(e.target.files?.[0])} />
              {busy === "pdf" && <p className="text-xs flex items-center gap-1"><Loader2 size={12} className="animate-spin" />Lendo PDF...</p>}
            </div>
            <div className="space-y-2 p-3 border rounded-lg">
              <p className="font-bold flex items-center gap-2"><Sparkles size={16} />Gerar a partir de uma questão</p>
              <Textarea rows={4} placeholder="Cole uma questão modelo" value={modelQ} onChange={(e) => setModelQ(e.target.value)} />
              <Input type="number" min={1} max={30} value={count} onChange={(e) => setCount(+e.target.value)} />
              <Button className="w-full" disabled={!!busy} onClick={() => callAi({ mode: "similar", question: modelQ, count }, "similar")}>
                {busy === "similar" ? <Loader2 className="animate-spin" /> : `Gerar ${count} questões`}
              </Button>
            </div>
            <div className="space-y-2 p-3 border rounded-lg">
              <p className="font-bold">Colar questões</p>
              <Textarea rows={4} placeholder={"1) Enunciado\na) ...\n*b) correta\nc) ..."} value={pasted} onChange={(e) => setPasted(e.target.value)} />
              <Button className="w-full" variant="outline" onClick={() => saveExam(parseBulkQuestions(pasted), "manual")}>Salvar</Button>
            </div>
          </div>
        </Card>
      )}

      {canManage && (
        <Card className="p-5 space-y-2">
          <h3 className="font-black flex items-center gap-2"><Plus size={16} />Cadastrar nova olimpíada</h3>
          <div className="grid md:grid-cols-4 gap-2">
            <Input placeholder="Sigla (ex: OBF)" value={newOly.acronym} onChange={(e) => setNewOly({ ...newOly, acronym: e.target.value.toUpperCase() })} />
            <Input className="md:col-span-2" placeholder="Nome completo" value={newOly.name} onChange={(e) => setNewOly({ ...newOly, name: e.target.value })} />
            <Button onClick={addOlympiad}>Cadastrar</Button>
          </div>
          <Input placeholder="Descrição (opcional)" value={newOly.description} onChange={(e) => setNewOly({ ...newOly, description: e.target.value })} />
        </Card>
      )}
    </div>
  );
}

function TakeExam({ exam, userId, onClose }: { exam: Exam; userId: string | null; onClose: () => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState<null | { correct: number; score: number }>(null);

  const submit = async () => {
    const correct = exam.questions.filter((q, i) => answers[i] === q.correct).length;
    const score = Math.round((correct / exam.questions.length) * 100) / 10;
    setDone({ correct, score });
    if (userId) await supabase.from("olympiad_attempts").insert({ exam_id: exam.id, user_id: userId, score, correct, total: exam.questions.length });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onClose}><ArrowLeft /></Button>
        <h1 className="text-2xl font-black">{exam.title}</h1>
      </div>
      {done && <Card className="p-4 text-center font-black text-xl">Nota {done.score.toFixed(1)} · {done.correct}/{exam.questions.length} acertos</Card>}
      {exam.questions.map((q, i) => (
        <Card key={i} className="p-4 space-y-2">
          <p className="font-bold">{String(i + 1).padStart(2, "0")}. {q.q}</p>
          {q.options.map((o, j) => {
            const chosen = answers[i] === j;
            const cls = done ? (j === q.correct ? "border-primary bg-primary/10" : chosen ? "border-destructive bg-destructive/10" : "") : chosen ? "border-primary" : "";
            return (
              <button key={j} disabled={!!done} onClick={() => setAnswers({ ...answers, [i]: j })} className={`w-full text-left p-2 border-2 rounded-md text-sm ${cls}`}>
                {String.fromCharCode(65 + j)}) {o}
              </button>
            );
          })}
          {done && q.explanation && <p className="text-xs text-muted-foreground">{q.explanation}</p>}
        </Card>
      ))}
      {!done && <Button className="w-full" disabled={Object.keys(answers).length < exam.questions.length} onClick={submit}>Entregar prova</Button>}
    </div>
  );
}
