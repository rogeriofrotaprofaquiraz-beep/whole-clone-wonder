import React, { useState } from 'react';
import { ELEMENTS_DATA } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle2, XCircle, Trophy, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

export const ElementQuiz = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [currentElement, setCurrentElement] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const allSymbols = Object.keys(ELEMENTS_DATA);
  const MAX_QUESTIONS = 10;

  const generateQuestion = () => {
    const correctSymbol = allSymbols[Math.floor(Math.random() * allSymbols.length)];
    const element = ELEMENTS_DATA[correctSymbol];
    
    // Pick 3 wrong options
    let wrongOptions: string[] = [];
    while (wrongOptions.length < 3) {
      const sym = allSymbols[Math.floor(Math.random() * allSymbols.length)];
      if (sym !== correctSymbol && !wrongOptions.includes(ELEMENTS_DATA[sym].heroName)) {
        wrongOptions.push(ELEMENTS_DATA[sym].heroName);
      }
    }

    const allOptions = [...wrongOptions, element.heroName].sort(() => Math.random() - 0.5);
    
    setCurrentElement(element);
    setOptions(allOptions);
    setAnswered(false);
    setSelectedOption(null);
    setGameState('playing');
  };

  const startQuiz = () => {
    setScore(0);
    setQuestionCount(0);
    generateQuestion();
  };

  const handleAnswer = (option: string) => {
    if (answered) return;
    
    setSelectedOption(option);
    setAnswered(true);
    
    if (option === currentElement.heroName) {
      setScore(s => s + 1);
      toast.success("Correto!");
    } else {
      toast.error(`Incorreto! O herói era ${currentElement.heroName}`);
    }

    setTimeout(() => {
      if (questionCount + 1 < MAX_QUESTIONS) {
        setQuestionCount(c => c + 1);
        generateQuestion();
      } else {
        setGameState('end');
      }
    }, 2000);
  };

  if (gameState === 'start') {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[500px] text-center">
        <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mb-6">
          <Brain className="w-10 h-10 text-purple-400" />
        </div>
        <h2 className="text-3xl font-black italic mb-4">DESAFIO DO CONHECIMENTO</h2>
        <p className="text-slate-400 mb-8 max-w-md">Você consegue identificar o herói por trás de cada elemento químico? Teste sua memória elemental.</p>
        <Button onClick={startQuiz} size="lg" className="bg-purple-600 hover:bg-purple-700 font-bold px-12 py-6 rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.3)]">
          COMEÇAR QUIZ
        </Button>
      </div>
    );
  }

  if (gameState === 'end') {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[500px] text-center">
        <Trophy className="w-20 h-20 text-yellow-400 mb-6" />
        <h2 className="text-4xl font-black italic mb-2">FIM DO DESAFIO!</h2>
        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
          {score}/{MAX_QUESTIONS}
        </div>
        <p className="text-slate-400 mb-8">
          {score === MAX_QUESTIONS ? "Perfeito! Você é um Mestre Elemental!" : 
           score > 7 ? "Excelente conhecimento!" : 
           score > 4 ? "Bom trabalho, continue estudando!" : "Continue praticando para dominar os heróis!"}
        </p>
        <Button onClick={startQuiz} size="lg" className="bg-white text-black hover:bg-slate-200 font-bold px-12 py-6 rounded-2xl">
          TENTAR NOVAMENTE
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-500">
      <div className="w-full flex justify-between items-center mb-4">
        <Badge variant="outline" className="px-4 py-1 text-lg font-mono">Questão {questionCount + 1}/{MAX_QUESTIONS}</Badge>
        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-1 text-lg">Pontos: {score}</Badge>
      </div>

      <Card className="w-full bg-slate-900 border-white/10 overflow-hidden shadow-2xl">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="text-7xl font-black mb-4 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {currentElement.symbol}
          </div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/60">
            Quem é o herói do elemento <span className="text-white">{currentElement.name}</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                variant="outline"
                className={`
                  h-20 text-lg font-bold transition-all duration-300 rounded-2xl border-2
                  ${answered && option === currentElement.heroName ? 'bg-green-500/20 border-green-500 text-green-400 scale-[1.02]' : ''}
                  ${answered && selectedOption === option && option !== currentElement.heroName ? 'bg-red-500/20 border-red-500 text-red-400' : ''}
                  ${!answered ? 'hover:bg-white/10 hover:border-white/40 border-white/5' : 'opacity-50'}
                `}
              >
                {option}
                {answered && option === currentElement.heroName && <CheckCircle2 className="ml-2 w-6 h-6" />}
                {answered && selectedOption === option && option !== currentElement.heroName && <XCircle className="ml-2 w-6 h-6" />}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {answered && (
        <div className="flex items-center gap-2 text-slate-400 animate-pulse italic">
          Preparando próxima pergunta <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};
