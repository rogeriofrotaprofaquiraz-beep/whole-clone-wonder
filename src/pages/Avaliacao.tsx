import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Loader2,
  XCircle,
  ImageOff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

type Question = {
  q: string;
  options: string[];
  correct: number;
  context?: string;
  image_url?: string;
  explanation?: string;
};
type Assessment = {
  id: string;
  title: string;
  passing_score: number;
  questions: Question[];
  indices: number[];
};
type Course = { id: string; title: string; hours: number };

function pickRandom(total: number, n: number): number[] {
  const arr = Array.from({ length: total }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, total));
}

export default function Avaliacao() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const buildAttempt = (raw: any) => {
    const bank: Question[] = Array.isArray(raw.question_bank) && raw.question_bank.length > 0
      ? raw.question_bank
      : (raw.questions ?? []);
    const perAttempt = raw.questions_per_attempt ?? 10;
    const indices = pickRandom(bank.length, perAttempt);
    const questions = indices.map((i) => bank[i]);
    return {
      id: raw.id,
      title: raw.title,
      passing_score: raw.passing_score,
      questions,
      indices,
      _bank: bank,
      _perAttempt: perAttempt,
    } as Assessment & { _bank: Question[]; _perAttempt: number };
  };

  useEffect(() => {
    (async () => {
      if (!id) return;
      setLoading(true);
      const [{ data: c }, { data: a }] = await Promise.all([
        supabase.from("courses").select("id,title,hours").eq("id", id).maybeSingle(),
        supabase
          .from("course_assessments")
          .select("id,title,passing_score,questions,question_bank,questions_per_attempt")
          .eq("course_id", id)
          .maybeSingle(),
      ]);
      setCourse(c as any);
      if (a) setAssessment(buildAttempt(a));
      setLoading(false);
    })();
  }, [id]);

  const submit = async () => {
    if (!assessment) return;
    if (Object.keys(answers).length !== assessment.questions.length) {
      toast.error("Responda todas as questões antes de enviar");
      return;
    }
    setSubmitting(true);
    const arr = assessment.questions.map((_, i) => answers[i]);
    const { data, error } = await supabase.rpc("submit_assessment", {
      _course_id: id!,
      _answers: arr as any,
      _indices: assessment.indices as any,
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setResult(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if ((data as any)?.passed) {
      toast.success("Aprovado! Certificado emitido.");
    } else {
      toast.error("Nota insuficiente. Estude mais e tente novamente.");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="animate-spin text-white" />
      </div>
    );
  if (!course || !assessment)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
        <p>Avaliação não disponível.</p>
        <Link to={`/cursos/${id}`} className="underline">
          Voltar ao curso
        </Link>
      </div>
    );

  const r = result as any;
  const total = assessment.questions.length;
  const answeredCount = Object.keys(answers).length;
  const q = assessment.questions[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-4xl mx-auto py-6">
        <Link
          to={`/cursos/${id}`}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
        >
          <ArrowLeft size={18} /> Voltar ao curso
        </Link>

        <Card className="p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-black">{assessment.title}</h1>
              <p className="text-sm text-slate-600 mt-1">{course.title}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">CH: {course.hours}h</Badge>
              <Badge variant="secondary">
                Nota mínima: {Number(assessment.passing_score).toFixed(1)}
              </Badge>
              <Badge variant="secondary">{total} questões</Badge>
            </div>
          </div>

          {!result && (
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-slate-500">
                <span>
                  Respondidas: {answeredCount}/{total}
                </span>
                <span>Questão {current + 1} de {total}</span>
              </div>
              <Progress value={(answeredCount / total) * 100} />
            </div>
          )}
        </Card>

        {!result ? (
          <>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-[#4C1D95]">Questão {current + 1}</Badge>
                <div className="flex gap-1 flex-wrap max-w-[70%] justify-end">
                  {assessment.questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-7 h-7 text-[11px] rounded-md font-bold border transition ${
                        i === current
                          ? "bg-[#4C1D95] text-white border-[#4C1D95]"
                          : answers[i] !== undefined
                          ? "bg-emerald-100 border-emerald-400 text-emerald-800"
                          : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                      aria-label={`Ir para questão ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {q.image_url && !imgError[current] && (
                <div className="mb-4 rounded-lg overflow-hidden border bg-slate-100">
                  <img
                    src={q.image_url}
                    alt={`Ilustração da questão ${current + 1}`}
                    className="w-full max-h-72 object-cover"
                    onError={() =>
                      setImgError((prev) => ({ ...prev, [current]: true }))
                    }
                    loading="lazy"
                  />
                </div>
              )}
              {q.image_url && imgError[current] && (
                <div className="mb-4 p-4 rounded-lg border bg-slate-50 text-slate-400 flex items-center gap-2 text-xs">
                  <ImageOff size={16} /> Não foi possível carregar a imagem de apoio.
                </div>
              )}

              {q.context && (
                <div className="mb-4 p-4 rounded-lg bg-violet-50 border-l-4 border-[#4C1D95]">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[#4C1D95] mb-1">
                    Contexto
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{q.context}</p>
                </div>
              )}

              <div className="font-bold text-lg mb-4">{q.q}</div>

              <div className="space-y-2">
                {q.options.map((opt, k) => (
                  <label
                    key={k}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      answers[current] === k
                        ? "border-[#4C1D95] bg-violet-50"
                        : "hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <input
                      type="radio"
                      className="mt-1"
                      name={`q-${current}`}
                      checked={answers[current] === k}
                      onChange={() => setAnswers({ ...answers, [current]: k })}
                    />
                    <span className="text-sm flex-1">
                      <span className="font-bold mr-2">
                        {String.fromCharCode(65 + k)})
                      </span>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                >
                  <ChevronLeft size={16} className="mr-1" /> Anterior
                </Button>

                {current < total - 1 ? (
                  <Button
                    onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
                    className="bg-[#4C1D95] hover:bg-[#3B0E75]"
                  >
                    Próxima <ChevronRight size={16} className="ml-1" />
                  </Button>
                ) : (
                  <Button
                    onClick={submit}
                    disabled={submitting}
                    className="bg-[#059669] hover:bg-[#047857]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={16} />
                        Enviando
                      </>
                    ) : (
                      "Enviar avaliação"
                    )}
                  </Button>
                )}
              </div>
            </Card>
          </>
        ) : (
          <>
            <Card className="p-8 text-center mb-4">
              {r.passed ? (
                <CheckCircle2 className="mx-auto text-emerald-600 mb-3" size={64} />
              ) : (
                <XCircle className="mx-auto text-red-600 mb-3" size={64} />
              )}
              <h2 className="text-3xl font-black mb-2">
                Nota: {Number(r.score).toFixed(1)}
              </h2>
              <p className="text-slate-600 mb-1">
                {r.correct} de {r.total} corretas
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Nota mínima para aprovação: {Number(r.passing_score).toFixed(1)}
              </p>
              {r.passed ? (
                <div className="space-y-3">
                  <p className="text-emerald-700 font-bold text-lg">🎓 Aprovado!</p>
                  <Button
                    onClick={() => navigate(`/certificado/${r.certificate_code}`)}
                    className="bg-[#4C1D95] hover:bg-[#3B0E75]"
                  >
                    <Award className="mr-2" size={18} /> Ver Certificado
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-red-700 font-bold">Não aprovado</p>
                  <Button
                    variant="outline"
                    onClick={async () => {
                      const { data: a } = await supabase
                        .from("course_assessments")
                        .select("id,title,passing_score,questions,question_bank,questions_per_attempt")
                        .eq("course_id", id!)
                        .maybeSingle();
                      if (a) setAssessment(buildAttempt(a));
                      setResult(null);
                      setAnswers({});
                      setCurrent(0);
                    }}
                  >
                    Refazer avaliação
                  </Button>
                </div>
              )}
            </Card>

            <Card className="p-6">
              <h3 className="font-black text-lg mb-4">Gabarito comentado</h3>
              <div className="space-y-4">
                {assessment.questions.map((qq, i) => {
                  const chosen = answers[i];
                  const isRight = chosen === qq.correct;
                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-lg border-l-4 ${
                        isRight
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-red-500 bg-red-50"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {isRight ? (
                          <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                        ) : (
                          <XCircle className="text-red-600 shrink-0" size={18} />
                        )}
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-1">
                            {i + 1}. {qq.q}
                          </div>
                          <div className="text-xs text-slate-600">
                            Sua resposta:{" "}
                            <strong>
                              {chosen !== undefined
                                ? `${String.fromCharCode(65 + chosen)}) ${qq.options[chosen]}`
                                : "—"}
                            </strong>
                          </div>
                          {!isRight && (
                            <div className="text-xs text-emerald-700 mt-0.5">
                              Correta:{" "}
                              <strong>
                                {String.fromCharCode(65 + qq.correct)}){" "}
                                {qq.options[qq.correct]}
                              </strong>
                            </div>
                          )}
                          {qq.explanation && (
                            <div className="text-xs text-slate-700 mt-2 italic">
                              💡 {qq.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
