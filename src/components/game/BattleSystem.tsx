import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ELEMENTS_DATA, PeriodicElement } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Swords, Trophy, RefreshCw, ChevronRight, User, Users } from 'lucide-react';
import { toast } from "sonner";

const ATTRIBUTES_TO_COMPARE = [
  "Massa atômica",
  "Densidade",
  "Raio atômico",
  "Eletronegatividade",
  "Abundância no universo",
  "Poder Total"
];

export const BattleSystem = () => {
  const [session, setSession] = useState<any>(null);
  const [playerCard, setPlayerCard] = useState<PeriodicElement | null>(null);
  const [cpuCard, setCpuCard] = useState<PeriodicElement | null>(null);
  const [gameState, setGameState] = useState<'selecting' | 'battle' | 'result'>('selecting');
  const [winner, setWinner] = useState<'player' | 'cpu' | 'draw' | null>(null);
  const [selectedAttr, setSelectedAttr] = useState<string | null>(null);
  const [score, setScore] = useState({ player: 0, cpu: 0 });
  const [multiplayerMatch, setMultiplayerMatch] = useState<any>(null);
  const [opponent, setOpponent] = useState<any>(null);

  const allSymbols = Object.keys(ELEMENTS_DATA);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const getRandomElement = () => {
    const symbols = allSymbols;
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    return ELEMENTS_DATA[randomSymbol];
  };

  const startNewGame = () => {
    const pCard = getRandomElement();
    const cCard = getRandomElement();
    setPlayerCard(pCard);
    setCpuCard(cCard);
    setGameState('battle');
    setWinner(null);
    setSelectedAttr(null);
    setMultiplayerMatch(null);
    setOpponent(null);
  };

  const findMultiplayerMatch = async () => {
    if (!session) {
      toast.error("Você precisa estar logado para jogar multiplayer!");
      return;
    }

    toast.info("Procurando oponentes...");
    
    // Tenta encontrar uma partida esperando
    const { data: waitingMatch, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'waiting')
      .neq('player1_id', session.user.id)
      .limit(1)
      .single();

    if (waitingMatch) {
      // Entrar na partida
      const { data: joinedMatch, error: joinError } = await supabase
        .from('matches')
        .update({ 
          player2_id: session.user.id,
          status: 'active',
          current_turn: waitingMatch.player1_id
        })
        .eq('id', waitingMatch.id)
        .select()
        .single();

      if (joinError) {
        toast.error("Erro ao entrar na partida.");
        return;
      }

      setMultiplayerMatch(joinedMatch);
      toast.success("Partida encontrada!");
      startNewGame();
    } else {
      // Criar nova partida esperando
      const { data: newMatch, error: createError } = await supabase
        .from('matches')
        .insert({
          player1_id: session.user.id,
          status: 'waiting'
        })
        .select()
        .single();

      if (createError) {
        toast.error("Erro ao criar partida.");
        return;
      }

      setMultiplayerMatch(newMatch);
      toast.info("Aguardando oponente...");
      
      // Inscreve no Realtime para saber quando alguém entrar
      const channel = supabase
        .channel(`match:${newMatch.id}`)
        .on('postgres_changes', { 
          event: 'UPDATE', 
          schema: 'public', 
          table: 'matches',
          filter: `id=eq.${newMatch.id}`
        }, (payload) => {
          if (payload.new.status === 'active') {
            setMultiplayerMatch(payload.new);
            toast.success("Oponente entrou!");
            startNewGame();
          }
        })
        .subscribe();
    }
  };

  const calculatePowerTotal = (element: PeriodicElement) => {
    return element.attributes.reduce((acc, curr) => acc + curr.score, 0) / 27;
  };

  const getAttrScore = (element: PeriodicElement, attrLabel: string) => {
    if (attrLabel === "Poder Total") return calculatePowerTotal(element);
    const attr = element.attributes.find(a => a.label === attrLabel);
    return attr ? attr.score : 0;
  };

  const handleBattle = (attrLabel: string) => {
    if (gameState !== 'battle' || !playerCard || !cpuCard) return;

    setSelectedAttr(attrLabel);
    const pScore = getAttrScore(playerCard, attrLabel);
    const cScore = getAttrScore(cpuCard, attrLabel);

    let result: 'player' | 'cpu' | 'draw';
    if (pScore > cScore) {
      result = 'player';
      setScore(s => ({ ...s, player: s.player + 1 }));
      toast.success(`Vitória! Seu ${playerCard.name} venceu no atributo ${attrLabel}!`);
    } else if (cScore > pScore) {
      result = 'cpu';
      setScore(s => ({ ...s, cpu: s.cpu + 1 }));
      toast.error(`Derrota! O ${cpuCard.name} da CPU venceu.`);
    } else {
      result = 'draw';
      toast.info("Empate técnico!");
    }

    setWinner(result);
    setGameState('result');
  };

  if (gameState === 'selecting') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[600px] text-center">
        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <Swords className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-3xl font-black italic mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">Elemental Heroes - Batalha</h2>
        <p className="text-slate-400 mb-8 max-w-md">Escolha seu modo de jogo e prove ser o mestre dos elementos.</p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={startNewGame} className="bg-blue-600 hover:bg-blue-700 font-bold px-8 py-6 text-lg rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
            <User className="mr-2" /> VS CPU
          </Button>
          <Button size="lg" onClick={findMultiplayerMatch} variant="outline" className="border-white/10 hover:bg-white/5 font-bold px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105">
            <Users className="mr-2" /> MULTIPLAYER (BETA)
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto p-4 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-slate-900/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            {session?.user?.user_metadata?.username || "VOCÊ"}
          </span>
          <span className="text-3xl font-black">{score.player}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <Trophy className={`w-6 h-6 ${score.player > score.cpu ? 'text-yellow-400' : 'text-slate-600'}`} />
            <span className="text-xl font-black italic">VS</span>
            <Trophy className={`w-6 h-6 ${score.cpu > score.player ? 'text-yellow-400' : 'text-slate-600'}`} />
          </div>
          {multiplayerMatch && (
            <Badge variant="outline" className="mt-1 text-[8px] animate-pulse">MODO MULTIPLAYER</Badge>
          )}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
            {multiplayerMatch ? "OPONENTE" : "CPU"}
          </span>
          <span className="text-3xl font-black">{score.cpu}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Player Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25"></div>
          <div className="relative p-4 rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden">
             <div className="flex justify-between mb-2">
                <span className="text-2xl font-black">{playerCard?.symbol}</span>
                <span className="text-xs font-bold text-blue-400">{playerCard?.heroName}</span>
             </div>
             <div className="h-48 rounded-xl bg-slate-950 overflow-hidden mb-4">
                <img src={playerCard?.heroImage} className="w-full h-full object-contain object-top" alt="" />
             </div>
             <div className="space-y-2">
               {ATTRIBUTES_TO_COMPARE.map(attr => (
                 <button
                   key={attr}
                   disabled={gameState !== 'battle'}
                   onClick={() => handleBattle(attr)}
                   className={`w-full flex justify-between items-center p-3 rounded-xl border transition-all ${
                     selectedAttr === attr 
                       ? 'bg-blue-600 border-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-[1.02]' 
                       : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                   }`}
                 >
                   <span className="text-xs font-bold uppercase">{attr}</span>
                   <span className="text-sm font-black text-blue-300">
                     {gameState === 'result' || selectedAttr === attr ? getAttrScore(playerCard!, attr).toFixed(1) : '???'}
                   </span>
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* CPU/Opponent Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-500 rounded-[2.5rem] blur opacity-25"></div>
          <div className="relative p-4 rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden">
             <div className="flex justify-between mb-2">
                <span className="text-2xl font-black text-slate-500">{gameState === 'result' ? cpuCard?.symbol : '?'}</span>
                <span className="text-xs font-bold text-red-400/50">OPONENTE MISTERIOSO</span>
             </div>
             <div className="h-48 rounded-xl bg-slate-950 overflow-hidden mb-4 flex items-center justify-center">
                {gameState === 'result' ? (
                  <img src={cpuCard?.heroImage} className="w-full h-full object-contain object-top" alt="" />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                    <RefreshCw className="w-12 h-12 text-slate-800 animate-spin-slow" />
                  </div>
                )}
             </div>
             <div className="space-y-2">
               {ATTRIBUTES_TO_COMPARE.map(attr => (
                 <div
                   key={attr}
                   className={`w-full flex justify-between items-center p-3 rounded-xl border bg-white/5 border-white/5 ${
                     selectedAttr === attr && winner === 'cpu' ? 'border-red-500 bg-red-500/10' : ''
                   }`}
                 >
                   <span className="text-xs font-bold uppercase text-slate-500">{attr}</span>
                   <span className="text-sm font-black text-slate-600">
                     {gameState === 'result' ? getAttrScore(cpuCard!, attr).toFixed(1) : '???'}
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {gameState === 'result' && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className={`text-4xl font-black italic mb-6 ${
            winner === 'player' ? 'text-green-400' : winner === 'cpu' ? 'text-red-400' : 'text-white'
          }`}>
            {winner === 'player' ? 'VITÓRIA!' : winner === 'cpu' ? 'DERROTA!' : 'EMPATE!'}
          </div>
          <Button onClick={startNewGame} size="lg" className="bg-white text-black hover:bg-slate-200 font-black rounded-2xl px-12 py-6 text-xl">
            PRÓXIMA RODADA <ChevronRight className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};
