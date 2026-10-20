import React, { useEffect, useState } from 'react';
import { ELEMENTS_DATA } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle2, XCircle, Trophy, ArrowRight } from 'lucide-react';
import { toast } from "sonner";
import { addCoins } from "@/lib/playerEconomy";
import { supabase } from "@/integrations/supabase/client";

type Q = { prompt: string; big?: string; options: string[]; correct: string; explanation?: string | null; image?: string | null };
const MAX_QUESTIONS = 10;
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

function heroQuestions(): Q[] {
  const syms = Object.keys(ELEMENTS_DATA).filter((s) => ELEMENTS_DATA[s]?.heroName);
  return Array.from({ length: MAX_QUESTIONS }, () => {
    const c = syms[Math.floor(Math.random() * syms.length)];
    const el = ELEMENTS_DATA[c];
    const wrong = new Set<string>();
    while (wrong.size < 3) {
      const s = syms[Math.floor(Math.random() * syms.length)];
      if (s !== c) wrong.add(ELEMENTS_DATA[s].heroName);
    }
    return { prompt: `Quem é o herói do elemento ${el.name}?`, big: el.symbol, options: shuffle([...wrong, el.heroName]), correct: el.heroName };
  });
}

export const ElementQuiz = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [questions, setQuestions] = useState<Q[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [classIds, setClassIds] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      const { data: m } = await supabase.from("class_members")
        .select("class_id,status,classes(grade_year)").eq("user_id", u.user.id);
      const ok = (m ?? []).filter((x: any) => x.status !== "pending");
      setClassIds(ok.map((x: any) => x.class_id));
      const g = ok.map((x: any) => x.classes?.grade_year).find((v: any) => v != null);
      if (g != null) setGrade(g);
    })();
  }, []);

  const startQuiz = async () => {
    let qs: Q[] = [];
    if (grade != null) {
      let q = supabase.from("chem_questions").select("question,options,correct_index,explanation,image_url,class_id,grade_year");
      q = classIds.length
        ? q.or(`grade_year.eq.${grade},class_id.in.(${classIds.join(",")})`)
        : q.eq("grade_year", grade);
      const { data } = await q.limit(300);
      qs = shuffle((data ?? []).filter((r: any) => Array.isArray(r.options) && r.options[r.correct_index] != null))
        .slice(0, MAX_QUESTIONS)
        .map((r: any) => ({
          prompt: r.question, options: shuffle(r.options.map(String)), correct: String(r.options[r.correct_index]),
          explanation: r.explanation, image: r.image_url,
        }));
    }
    if (!qs.length) {
      if (grade != null) toast.info("Ainda não há questões do banco para sua série. Usando o quiz dos heróis.");
      qs = heroQuestions();
    }
    setQuestions(qs); setIdx(0); setScore(0); setAnswered(false); setSelected(null); setGameState('playing');
  };

  const cur = questions[idx];

  const handleAnswer = (option: string) => {
    if (answered) return;
    setSelected(option); setAnswered(true);
    if (option === cur.correct) {
      setScore((s) => s + 1);
      toast.success(`Correto! +5 ⚛️`);
      supabase.auth.getUser().then(({ data }) => { if (data.user) addCoins(data.user.id, 5).catch(() => {}); });
    } else {
      toast.error(`Incorreto! Resposta: ${cur.correct}`);
    }
    setTimeout(() => {
      if (idx + 1 < questions.length) { setIdx((i) => i + 1); setAnswered(false); setSelected(null); }
      else setGameState('end');
    }, 2500);
  };

  if (gameState === 'start') {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[500px] text-center">
        <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mb-6">
          <Brain className="w-10 h-10 text-purple-400" />
        </div>
        <h2 className="text-3xl font-black italic mb-4">DESAFIO DO CONHECIMENTO</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          {grade != null ? `Perguntas do banco de questões para o ${grade}º ano.` : "Teste seus conhecimentos sobre os heróis dos elementos."}
        </p>
        <Button onClick={startQuiz} size="lg" className="bg-purple-600 hover:bg-purple-700 font-bold px-12 py-6 rounded-2xl">
          COMEÇAR QUIZ
        </Button>
      </div>
    );
  }

  if (gameState === 'end') {
    const total = questions.length;
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[500px] text-center">
        <Trophy className="w-20 h-20 text-yellow-400 mb-6" />
        <h2 className="text-4xl font-black italic mb-2">FIM DO DESAFIO!</h2>
        <div className="text-6xl font-black text-yellow-400 mb-6">{score}/{total}</div>
        <Button onClick={startQuiz} size="lg" className="font-bold px-12 py-6 rounded-2xl">TENTAR NOVAMENTE</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto p-4">
      <div className="w-full flex justify-between items-center mb-4">
        <Badge variant="outline" className="px-4 py-1 text-lg font-mono">Questão {idx + 1}/{questions.length}</Badge>
        <Badge className="px-4 py-1 text-lg">Pontos: {score}</Badge>
      </div>
      <Card className="w-full bg-slate-900 border-white/10 overflow-hidden shadow-2xl">
        <CardContent className="p-8 flex flex-col items-center text-center">
          {cur.big && <div className="text-7xl font-black mb-4 text-blue-400">{cur.big}</div>}
          {cur.image && <img src={cur.image} alt="" className="max-h-56 rounded-xl mb-4" />}
          <h3 className="text-xl font-bold mb-8 text-white">{cur.prompt}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {cur.options.map((o) => (
              <Button key={o} onClick={() => handleAnswer(o)} disabled={answered} variant="outline"
                className={`min-h-20 h-auto whitespace-normal text-base font-bold rounded-2xl border-2
                  ${answered && o === cur.correct ? 'bg-green-500/20 border-green-500 text-green-400' : ''}
                  ${answered && selected === o && o !== cur.correct ? 'bg-red-500/20 border-red-500 text-red-400' : ''}`}>
                {o}
                {answered && o === cur.correct && <CheckCircle2 className="ml-2 w-6 h-6" />}
                {answered && selected === o && o !== cur.correct && <XCircle className="ml-2 w-6 h-6" />}
              </Button>
            ))}
          </div>
          {answered && cur.explanation && <p className="mt-6 text-sm text-slate-300">{cur.explanation}</p>}
        </CardContent>
      </Card>
      {answered && <div className="flex items-center gap-2 text-slate-400 italic">Preparando próxima pergunta <ArrowRight className="w-4 h-4" /></div>}
    </div>
  );
};
