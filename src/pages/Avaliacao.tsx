import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { toast } from "sonner";

type Question = { q: string; options: string[]; correct: number };
type Assessment = { id: string; title: string; passing_score: number; questions: Question[] };
type Course = { id: string; title: string; hours: number };

export default function Avaliacao() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (!id) return;
      setLoading(true);
      const [{ data: c }, { data: a }] = await Promise.all([
        supabase.from("courses").select("id,title,hours").eq("id", id).maybeSingle(),
        supabase.from("course_assessments").select("id,title,passing_score,questions").eq("course_id", id).maybeSingle(),
      ]);
      setCourse(c as any);
      setAssessment(a as any);
      setLoading(false);
    })();
  }, [id]);

  const submit = async () => {
    if (!assessment) return;
    if (Object.keys(answers).length !== assessment.questions.length) {
      toast.error("Responda todas as questões"); return;
    }
    setSubmitting(true);
    const arr = assessment.questions.map((_, i) => answers[i]);
    const { data, error } = await supabase.rpc("submit_assessment", {
      _course_id: id!, _answers: arr as any,
    });
    setSubmitting(false);
    if (error) { toast.error(error.message); return; }
    setResult(data);
    if ((data as any)?.passed) {
      toast.success("Aprovado! Certificado emitido.");
    } else {
      toast.error("Nota insuficiente. Estude mais e tente novamente.");
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900"><Loader2 className="animate-spin text-white" /></div>;
  if (!course || !assessment) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
      <p>Avaliação não disponível.</p>
      <Link to={`/cursos/${id}`} className="underline">Voltar ao curso</Link>
    </div>
  );

  const r = result as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-3xl mx-auto py-6">
        <Link to={`/cursos/${id}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
          <ArrowLeft size={18} /> Voltar ao curso
        </Link>

        <Card className="p-6 mb-4">
          <h1 className="text-2xl font-black">{assessment.title}</h1>
          <p className="text-sm text-slate-600 mt-1">{course.title}</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">Carga horária: {course.hours}h</Badge>
            <Badge variant="secondary">Nota mínima: {Number(assessment.passing_score).toFixed(1)}</Badge>
            <Badge variant="secondary">{assessment.questions.length} questões</Badge>
          </div>
        </Card>

        {!result ? (
          <>
            <div className="space-y-4">
              {assessment.questions.map((q, i) => (
                <Card key={i} className="p-5">
                  <div className="font-bold mb-3">{i + 1}. {q.q}</div>
                  <div className="space-y-2">
                    {q.options.map((opt, k) => (
                      <label key={k}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                          answers[i] === k ? "border-[#4C1D95] bg-violet-50" : "hover:bg-slate-50"
                        }`}>
                        <input type="radio" name={`q-${i}`} checked={answers[i] === k}
                          onChange={() => setAnswers({ ...answers, [i]: k })} />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={submit} disabled={submitting}
                className="bg-[#059669] hover:bg-[#047857]">
                {submitting ? <><Loader2 className="animate-spin mr-2" size={16} />Enviando</> : "Enviar avaliação"}
              </Button>
            </div>
          </>
        ) : (
          <Card className="p-8 text-center">
            {r.passed
              ? <CheckCircle2 className="mx-auto text-emerald-600 mb-3" size={64} />
              : <XCircle className="mx-auto text-red-600 mb-3" size={64} />}
            <h2 className="text-3xl font-black mb-2">Nota: {Number(r.score).toFixed(1)}</h2>
            <p className="text-slate-600 mb-1">{r.correct} de {r.total} corretas</p>
            <p className="text-sm text-slate-500 mb-6">
              Nota mínima para aprovação: {Number(r.passing_score).toFixed(1)}
            </p>
            {r.passed ? (
              <div className="space-y-3">
                <p className="text-emerald-700 font-bold text-lg">🎓 Aprovado!</p>
                <Button onClick={() => navigate(`/certificado/${r.certificate_code}`)}
                  className="bg-[#4C1D95] hover:bg-[#3B0E75]">
                  <Award className="mr-2" size={18} /> Ver Certificado
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-red-700 font-bold">Não aprovado</p>
                <Button variant="outline" onClick={() => { setResult(null); setAnswers({}); }}>
                  Refazer avaliação
                </Button>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
