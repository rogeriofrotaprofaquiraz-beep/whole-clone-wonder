import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2, Lock, ShieldAlert, Trophy, ClipboardCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { pickQuestions } from "@/components/TopicExercise";

type Props = { slug: string; title: string; category: string; courseId?: string | null };

/**
 * Quiz avaliativo em janela travada (fullscreen).
 * - Só pode ser fechada após submissão.
 * - Alertas ao trocar de aba / redimensionar (registra "saídas" mas mantém aberto).
 * - Nota é salva em topic_exercise_attempts (conta na média final).
 */
export default function LockedQuiz({ slug, title, category, courseId }: Props) {
  const [open, setOpen] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [attemptsCount, setAttemptsCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      const { data } = await supabase
        .from("topic_exercise_attempts")
        .select("score")
        .eq("user_id", u.user.id)
        .eq("topic_slug", slug)
        .order("score", { ascending: false });
      if (data?.length) {
        setBest(Number(data[0].score));
        setAttemptsCount(data.length);
      }
    })();
  }, [slug, open]);

  return (
    <section className="rounded-xl p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <div className="flex items-center gap-2 text-amber-800 font-bold">
          <ClipboardCheck size={18} /> Quiz avaliativo (vale nota)
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-700">
          {best !== null && (
            <span className="inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded">
              <Trophy size={12} className="text-amber-600" /> Melhor: <b>{best.toFixed(1)}</b>
            </span>
          )}
          <span className="inline-flex items-center gap-1 bg-white/80 px-2 py-1 rounded">
            Tentativas: <b>{attemptsCount}</b>
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-700 mb-3">
        Ao iniciar, o quiz abre em <b>janela travada em tela cheia</b>. Você só sai depois de enviar as respostas.
        A nota vai para a sua média final do curso. Média para aprovação: <b>7,0</b>.
      </p>
      <Button
        onClick={() => setOpen(true)}
        className="bg-amber-600 hover:bg-amber-700 text-white"
      >
        <Lock size={14} className="mr-1" /> Iniciar quiz avaliativo
      </Button>

      {open && (
        <QuizWindow
          slug={slug}
          title={title}
          category={category}
          courseId={courseId ?? null}
          onFinished={() => setOpen(false)}
        />
      )}
    </section>
  );
}

function QuizWindow({
  slug, title, category, courseId, onFinished,
}: {
  slug: string; title: string; category: string; courseId: string | null; onFinished: () => void;
}) {
  const questions = useMemo(() => pickQuestions(category, `${slug}-${Date.now()}`), [category, slug]);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [switches, setSwitches] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  // Entra em fullscreen ao montar
  useEffect(() => {
    const el = rootRef.current;
    if (el && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
    const onFsExit = () => {
      if (!document.fullscreenElement && !submitted && el?.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      }
    };
    document.addEventListener("fullscreenchange", onFsExit);
    return () => {
      document.removeEventListener("fullscreenchange", onFsExit);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    };
  }, [submitted]);

  // Bloqueia recarregar / fechar aba
  useEffect(() => {
    if (submitted) return;
    const beforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Você não pode sair do quiz antes de enviar as respostas.";
      return e.returnValue;
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [submitted]);

  // Detecta troca de aba / minimizar
  useEffect(() => {
    if (submitted) return;
    const onVis = () => {
      if (document.hidden) {
        setSwitches((s) => s + 1);
        toast.warning("Não troque de aba durante o quiz. A tentativa continua registrada.");
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [submitted]);

  // Bloqueia teclas de fuga (Esc, F5, Ctrl+W, Ctrl+T)
  useEffect(() => {
    if (submitted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F5" || (e.ctrlKey && ["w", "r", "t", "n"].includes(e.key.toLowerCase()))) {
        e.preventDefault();
        toast.warning("Atalho bloqueado durante o quiz.");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submitted]);

  async function handleSubmit() {
    if (answers.some((a) => a === null)) {
      toast.error("Responda todas as questões antes de enviar.");
      return;
    }
    const correct = answers.reduce((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0);
    const score = Number(((correct / questions.length) * 10).toFixed(2));
    setCorrectCount(correct);
    setFinalScore(score);
    setSaving(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      toast.error("Faça login para registrar sua nota.");
      setSaving(false);
      return;
    }
    const { error } = await supabase.from("topic_exercise_attempts").insert({
      user_id: userData.user.id,
      topic_slug: slug,
      topic_title: title,
      category,
      course_id: courseId,
      score,
      correct,
      total: questions.length,
      answers,
    });
    setSaving(false);
    if (error) {
      toast.error("Erro ao salvar nota: " + error.message);
      return;
    }
    setSubmitted(true);
    toast.success(score >= 7 ? `Aprovado! Nota ${score.toFixed(1)}` : `Nota ${score.toFixed(1)} registrada`);
  }

  function handleClose() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    onFinished();
  }

  const answered = answers.filter((a) => a !== null).length;
  const passed = (finalScore ?? 0) >= 7;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] bg-slate-950 text-white overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="sticky top-0 z-10 bg-amber-600 text-white px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Lock size={16} /> Quiz travado — {title}
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="bg-white/20 px-2 py-1 rounded">Respondidas: {answered}/{questions.length}</span>
          {switches > 0 && (
            <span className="bg-red-500/80 px-2 py-1 rounded inline-flex items-center gap-1">
              <ShieldAlert size={12} /> Saídas: {switches}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 md:p-8">
        {!submitted ? (
          <>
            <div className="mb-6 rounded-lg bg-amber-500/10 border border-amber-500/40 p-4">
              <p className="text-sm">
                Esta janela <b>não pode ser fechada</b> nem alternada. Responda todas as {questions.length} questões e clique em <b>Enviar respostas</b> para finalizar e liberar o fechamento.
              </p>
            </div>

            <ol className="space-y-4">
              {questions.map((q, qi) => {
                const chosen = answers[qi];
                return (
                  <li key={qi} className="bg-slate-900 border border-white/10 rounded-lg p-4">
                    <div className="text-base font-semibold mb-3">
                      {qi + 1}. {q.q}
                    </div>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        const isChosen = chosen === oi;
                        return (
                          <button
                            key={oi}
                            onClick={() => {
                              const next = [...answers];
                              next[qi] = oi;
                              setAnswers(next);
                            }}
                            className={`w-full text-left text-sm border rounded-md px-3 py-2 flex items-center gap-2 transition ${
                              isChosen ? "border-amber-400 bg-amber-500/20" : "border-white/10 hover:bg-white/5"
                            }`}
                          >
                            <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold shrink-0">
                              {String.fromCharCode(65 + oi)}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={saving}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {saving ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
                Enviar respostas e finalizar
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                passed ? "bg-emerald-500/20" : "bg-red-500/20"
              }`}
            >
              {passed ? (
                <CheckCircle2 size={56} className="text-emerald-400" />
              ) : (
                <XCircle size={56} className="text-red-400" />
              )}
            </div>
            <h2 className="text-3xl font-black mb-2">
              {passed ? "Aprovado!" : "Reprovado"}
            </h2>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
              {finalScore?.toFixed(1)}
            </div>
            <p className="text-white/70 mb-2">
              Acertos: <b>{correctCount}</b> de <b>{questions.length}</b>
            </p>
            <p className="text-white/50 text-sm mb-6">
              Nota registrada no seu histórico e computada na média final do curso.
            </p>
            {switches > 0 && (
              <p className="text-red-400 text-xs mb-4 inline-flex items-center gap-1 justify-center">
                <ShieldAlert size={12} /> Você trocou de aba {switches}x durante o quiz.
              </p>
            )}
            <div>
              <Button onClick={handleClose} size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                Fechar janela
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
