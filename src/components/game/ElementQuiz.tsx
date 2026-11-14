import { gameOrFilter } from "@/lib/linkedBank";
import { recordHit, recordMiss } from "@/lib/gameStats";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Trophy, Zap } from "lucide-react";
import { toast } from "sonner";
import { addCoins } from "@/lib/playerEconomy";
import { supabase } from "@/integrations/supabase/client";
import { DIFFICULTIES } from "@/lib/aula";
import { loadAnsweredQuestions, unansweredFirst, logGameQuestion } from "@/components/game/QuestionLog";
import { loadSeen, pickUnseen, quizCoins, saveSeen, summarize, ReportRow } from "@/lib/questionPicker";
import { selectGameQuestions } from "@/lib/studentQuestions";

type Q = { id: string; prompt: string; options: string[]; correct: string; difficulty: number; explanation?: string | null; image?: string | null };
const MAX_QUESTIONS = 10;
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);
const levelLabel = (d: number) => DIFFICULTIES.find((x) => x.value === d)?.label ?? `${d}`;

export const ElementQuiz = () => {
  const [state, setState] = useState<"loading" | "playing" | "end" | "empty">("loading");
  const [questions, setQuestions] = useState<Q[]>([]);
  const [idx, setIdx] = useState(0);
  const [coins, setCoins] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [report, setReport] = useState<ReportRow[]>([]);

  const start = async () => {
    setState("loading");
    let picked;
    try { picked = await selectGameQuestions({ game: "Quiz", count: MAX_QUESTIONS }); }
    catch { toast.error("Não foi possível carregar as perguntas"); setState("empty"); return; }
    if (!picked.length) { setState("empty"); return; }
    setQuestions(picked.map((r: any) => ({
      id: r.id, prompt: r.question, options: shuffle(r.options.map(String)), correct: String(r.options[r.correct_index]),
      difficulty: r.difficulty ?? 2, explanation: r.explanation, image: r.image_url,
    })));
    setIdx(0); setCoins(0); setSelected(null); setReport([]); setState("playing");
  };

  useEffect(() => { start(); }, []);

  const cur = questions[idx];

  const answer = (o: string) => {
    if (selected) return;
    setSelected(o);
    const ok = o === cur.correct;
    logGameQuestion("Quiz", cur.prompt, o, cur.correct, ok).catch(() => {});
    setReport((r) => [...r, { question: cur.prompt, difficulty: cur.difficulty, correct: ok, answer: cur.correct, chosen: o }]);
    if (ok) {
      const c = quizCoins(cur.difficulty);
      setCoins((x) => x + c);
      toast.success(`Correto! +${c} ⚛`);
      recordHit(c);
      supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, c).catch(() => {}); });
    } else {
      setCoins(x => x + 1); recordMiss();
      supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, 1).catch(() => {}); });
    }
    setTimeout(() => {
      if (idx + 1 < questions.length) { setIdx((i) => i + 1); setSelected(null); }
      else setState("end");
    }, 2200);
  };

  const shell = "relative overflow-hidden rounded-3xl border border-primary/30 bg-card/80 backdrop-blur-xl shadow-[0_0_40px_hsl(var(--primary)/0.15)]";

  if (state === "loading") return <div className={`${shell} p-12 text-center text-muted-foreground`}>Carregando perguntas…</div>;
  if (state === "empty") return <div className={`${shell} p-12 text-center`}>Não há perguntas novas nos cursos atribuídos. Peça ao professor para conferir seus cursos ou adicionar questões.</div>;

  if (state === "end") {
    const s = summarize(report);
    return (
      <div className={`${shell} p-6 md:p-8 space-y-6`}>
        <div className="text-center space-y-2">
          <Trophy className="mx-auto h-14 w-14 text-primary" />
          <h2 className="font-mono text-2xl font-black tracking-widest uppercase">Relatório da missão</h2>
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="text-base px-4 py-1">✅ {s.hit} acertos</Badge>
            <Badge variant="destructive" className="text-base px-4 py-1">❌ {s.miss} erros</Badge>
            <Badge variant="outline" className="text-base px-4 py-1">{s.percent}%</Badge>
            <Badge variant="secondary" className="text-base px-4 py-1">+{coins} ⚛</Badge>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {DIFFICULTIES.map((d) => {
            const b = s.byLevel[d.value]; if (!b) return null;
            const pct = Math.round((b.hit / (b.hit + b.miss)) * 100);
            return (
              <div key={d.value} className="rounded-xl border border-primary/20 bg-background/50 p-3 text-center">
                <div className="text-xs uppercase text-muted-foreground">{d.label}</div>
                <div className="font-mono text-xl font-black">{b.hit}/{b.hit + b.miss}</div>
                <div className="h-1.5 rounded bg-muted mt-1"><div className="h-full rounded bg-primary" style={{ width: `${pct}%` }} /></div>
              </div>
            );
          })}
        </div>
        <ol className="space-y-2">
          {report.map((r, i) => (
            <li key={i} className={`rounded-xl border p-3 text-sm ${r.correct ? "border-primary/30" : "border-destructive/40"}`}>
              <div className="flex gap-2 font-semibold">{r.correct ? <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> : <XCircle className="h-4 w-4 text-destructive shrink-0" />}{i + 1}. {r.question}</div>
              <div className="text-xs text-muted-foreground mt-1">Nível: {levelLabel(r.difficulty)} · Resposta: {r.answer}{!r.correct && ` · Você marcou: ${r.chosen}`}</div>
            </li>
          ))}
        </ol>
        <div className="text-center"><Button size="lg" onClick={start}>Nova rodada (perguntas novas)</Button></div>
      </div>
    );
  }

  return (
    <div className={`${shell} p-6 md:p-8 space-y-6 max-w-3xl mx-auto`}>
      <div className="flex justify-between items-center font-mono">
        <Badge variant="outline">Questão {idx + 1}/{questions.length}</Badge>
        <Badge variant="secondary"><Zap className="h-3 w-3 mr-1" />{levelLabel(cur.difficulty)} · {quizCoins(cur.difficulty)} ⚛</Badge>
        <Badge>{coins} ⚛</Badge>
      </div>
      <div className="h-1 rounded bg-muted"><div className="h-full rounded bg-primary transition-all" style={{ width: `${(idx / questions.length) * 100}%` }} /></div>
      {cur.image && <img src={cur.image} alt="" className="max-h-56 mx-auto rounded-xl" />}
      <h3 className="text-xl font-bold text-center">{cur.prompt}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cur.options.map((o) => (
          <Button key={o} onClick={() => answer(o)} disabled={!!selected} variant="outline"
            className={`min-h-16 h-auto whitespace-normal text-base font-semibold rounded-2xl border-2 border-primary/20
              ${selected && o === cur.correct ? "border-primary bg-primary/20" : ""}
              ${selected === o && o !== cur.correct ? "border-destructive bg-destructive/20" : ""}`}>
            {o}
          </Button>
        ))}
      </div>
      {selected && cur.explanation && <p className="text-sm text-muted-foreground text-center">{cur.explanation}</p>}
    </div>
  );
};
