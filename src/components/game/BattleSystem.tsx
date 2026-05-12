import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ELEMENTS_DATA, PeriodicElement } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Swords, Trophy, RefreshCw, ChevronRight, User, Users, Key, Hash, CircleHelp } from 'lucide-react';
import { toast } from "sonner";

// This is no longer a static list, we'll use the element's actual attributes
// but we still want to filter to only the most relevant ones if needed
// However, the user asked for all 27 points.


export const BattleSystem = () => {
  const [session, setSession] = useState<any>(null);
  const [playerCard, setPlayerCard] = useState<PeriodicElement | null>(null);
  const [cpuCard, setCpuCard] = useState<PeriodicElement | null>(null);
  const [gameState, setGameState] = useState<'selecting' | 'waiting' | 'battle' | 'result' | 'gameOver'>('selecting');
  const [winner, setWinner] = useState<'player' | 'cpu' | 'draw' | null>(null);
  const [selectedAttr, setSelectedAttr] = useState<string | null>(null);
  const [score, setScore] = useState({ player: 0, cpu: 0 });
  const [round, setRound] = useState(1);
  const [roomCode, setRoomCode] = useState("");
  const [currentMatch, setCurrentMatch] = useState<any>(null);
  const [isMultiplayer, setIsMultiplayer] = useState(false);

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

  const startNewRound = () => {
    const pCard = getRandomElement();
    const cCard = getRandomElement();
    setPlayerCard(pCard);
    setCpuCard(cCard);
    setGameState('battle');
    setWinner(null);
    setSelectedAttr(null);
  };

  const startPVE = () => {
    setScore({ player: 0, cpu: 0 });
    setRound(1);
    setIsMultiplayer(false);
    startNewRound();
  };

  const createRoom = async () => {
    if (!session) return toast.error("Faça login para criar salas!");
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const { data, error } = await supabase
      .from('matches')
      .insert({
        player1_id: session.user.id,
        room_code: code,
        status: 'waiting',
        total_rounds: 5
      })
      .select()
      .single();

    if (error) return toast.error("Erro ao criar sala.");
    setCurrentMatch(data);
    setRoomCode(code);
    setGameState('waiting');
    
    // Subscribe to join event
    supabase
      .channel(`room:${data.id}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'matches', filter: `id=eq.${data.id}` }, (payload) => {
        if (payload.new.status === 'active') {
          setIsMultiplayer(true);
          setRound(1);
          setScore({ player: 0, cpu: 0 });
          startNewRound();
        }
      })
      .subscribe();
  };

  const joinRoom = async () => {
    if (!session) return toast.error("Faça login para entrar em salas!");
    if (!roomCode) return toast.error("Insira um código.");

    const { data: match, error } = await supabase
      .from('matches')
      .select('*')
      .eq('room_code', roomCode.toUpperCase())
      .eq('status', 'waiting')
      .single();

    if (error || !match) return toast.error("Sala não encontrada ou já iniciada.");

    const { error: joinError } = await supabase
      .from('matches')
      .update({ player2_id: session.user.id, status: 'active' })
      .eq('id', match.id);

    if (joinError) return toast.error("Erro ao entrar.");
    
    setIsMultiplayer(true);
    setCurrentMatch(match);
    setRound(1);
    setScore({ player: 0, cpu: 0 });
    startNewRound();
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
    } else if (cScore > pScore) {
      result = 'cpu';
      setScore(s => ({ ...s, cpu: s.cpu + 1 }));
    } else {
      result = 'draw';
    }

    setWinner(result);
    setGameState('result');
  };

  const nextRound = async () => {
    if (round < 5) {
      setRound(r => r + 1);
      startNewRound();
    } else {
      setGameState('gameOver');
      // Update stats if ranked/multiplayer
      if (session && score.player !== score.cpu) {
        const isWin = score.player > score.cpu;
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        if (profile) {
          await supabase.from('profiles').update({
            wins: isWin ? profile.wins + 1 : profile.wins,
            losses: !isWin ? profile.losses + 1 : profile.losses,
            rank_points: isWin ? profile.rank_points + 50 : Math.max(0, profile.rank_points - 20)
          }).eq('id', session.user.id);
        }
      }
    }
  };

  if (gameState === 'selecting') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[600px] text-center">
        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <Swords className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-3xl font-black italic mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase tracking-tighter">Campo de Batalha</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <Button size="lg" onClick={startPVE} className="bg-blue-600 hover:bg-blue-700 font-bold h-16 rounded-2xl">
            VS COMPUTADOR
          </Button>
          <Button size="lg" onClick={createRoom} variant="outline" className="border-white/10 hover:bg-white/5 font-bold h-16 rounded-2xl">
            CRIAR SALA
          </Button>
          <div className="sm:col-span-2 flex gap-2">
            <Input 
              placeholder="CÓDIGO DA SALA" 
              value={roomCode}
              onChange={e => setRoomCode(e.target.value)}
              className="bg-white/5 border-white/10 h-12 rounded-xl text-center font-black"
            />
            <Button onClick={joinRoom} className="bg-purple-600 hover:bg-purple-700 font-bold h-12 px-8 rounded-xl">
              ENTRAR
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'waiting') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[600px] text-center">
        <RefreshCw className="w-16 h-16 text-blue-400 animate-spin mb-6" />
        <h2 className="text-2xl font-black italic mb-2">AGUARDANDO OPONENTE</h2>
        <p className="text-slate-400 mb-6">Compartilhe o código abaixo com um amigo:</p>
        <div className="bg-blue-600/20 border border-blue-400/30 px-12 py-6 rounded-2xl text-4xl font-black tracking-widest text-blue-400 mb-8">
          {roomCode}
        </div>
        <Button variant="ghost" onClick={() => setGameState('selecting')} className="text-slate-500">CANCELAR</Button>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[600px] text-center">
        <Trophy className={`w-24 h-24 mb-6 ${score.player > score.cpu ? 'text-yellow-400' : 'text-slate-500'}`} />
        <h2 className="text-4xl font-black italic mb-2">PARTIDA FINALIZADA</h2>
        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          {score.player} - {score.cpu}
        </div>
        <p className="text-2xl font-black italic mb-8 uppercase">
          {score.player > score.cpu ? 'VOCÊ VENCEU!' : score.player < score.cpu ? 'DERROTA!' : 'EMPATE!'}
        </p>
        <Button onClick={() => setGameState('selecting')} size="lg" className="bg-white text-black font-black px-12 py-6 text-xl rounded-2xl">
          VOLTAR AO INÍCIO
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto p-4 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-slate-900/80 p-6 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-b-xl text-[10px] font-black tracking-widest uppercase">
          RODADA {round}/5
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">VOCÊ</div>
            <div className="text-3xl font-black">{score.player}</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-black italic opacity-20">VS</div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest">{isMultiplayer ? "OPONENTE" : "CPU"}</div>
            <div className="text-3xl font-black">{score.cpu}</div>
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            {isMultiplayer ? <Users className="w-6 h-6" /> : <RefreshCw className="w-6 h-6" />}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Player Card */}
        <div className="relative group transition-all duration-500 hover:scale-[1.01]">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative p-6 rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[750px]">
             <div className="flex justify-between items-start mb-4 flex-shrink-0">
                <div>
                  <h3 className="text-3xl font-black italic uppercase text-white leading-none">{playerCard?.name}</h3>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{playerCard?.heroName}</span>
                </div>
                <div className="text-4xl font-black text-blue-500">{playerCard?.symbol}</div>
             </div>
             
             <div className="h-80 rounded-2xl bg-slate-950 overflow-hidden mb-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group/img relative flex-shrink-0">
                {playerCard?.heroImage?.endsWith('.mp4') ? (
                  <video 
                    src={playerCard.heroImage} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                ) : (
                  <img src={playerCard?.heroImage} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" alt="" />
                )}
                <div className="absolute top-2 right-2">
                  <Badge className="bg-blue-600 text-white border-white/20 font-black italic shadow-lg">PLAYER</Badge>
                </div>
             </div>

             <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
               {playerCard?.attributes.map(attr => (
                 <div key={attr.id} className="space-y-1">
                   <button
                     disabled={gameState !== 'battle'}
                     onClick={() => handleBattle(attr.label)}
                     className={`w-full flex justify-between items-center p-3 rounded-xl border transition-all ${
                       selectedAttr === attr.label 
                         ? 'bg-blue-600 border-white shadow-[0_0_20px_rgba(37,99,235,0.6)] scale-[1.02] z-10' 
                         : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                     }`}
                   >
                     <div className="flex items-center gap-3">
                        <CircleHelp className={`w-4 h-4 ${selectedAttr === attr.label ? 'text-white' : 'text-blue-400/50'}`} />
                        <div className="flex flex-col items-start text-left">
                           <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/70">{attr.label}</span>
                           <span className="text-xs font-bold uppercase tracking-tight line-clamp-1">{attr.value}</span>
                        </div>
                     </div>
                     <span className="text-sm font-black text-blue-300 ml-2">
                       {gameState === 'result' || selectedAttr === attr.label ? attr.score.toFixed(1) : '???'}
                     </span>
                   </button>
                   {(gameState === 'result' && selectedAttr === attr.label) && (
                     <div className="p-4 rounded-xl bg-blue-600/20 border-2 border-blue-400/30 text-xs leading-relaxed text-blue-100 animate-in slide-in-from-top-4 duration-500 shadow-xl">
                       <div className="flex items-center gap-2 mb-2">
                          <CircleHelp className="w-4 h-4 text-blue-400" />
                          <span className="font-black uppercase tracking-tighter text-blue-400">Poder Analisado:</span>
                       </div>
                       <p className="italic font-medium">{attr.justification}</p>
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* CPU/Opponent Card */}
        <div className="relative transition-all duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-500 rounded-[2.5rem] blur opacity-25"></div>
          <div className="relative p-6 rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[750px]">
             <div className="flex justify-between items-start mb-4 flex-shrink-0">
                <div className="opacity-40">
                  <h3 className="text-3xl font-black italic uppercase text-white leading-none">{gameState === 'result' ? cpuCard?.name : '??????'}</h3>
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">OPONENTE MISTERIOSO</span>
                </div>
                <div className="text-4xl font-black text-slate-700">{gameState === 'result' ? cpuCard?.symbol : '?'}</div>
             </div>

             <div className="h-80 rounded-2xl bg-slate-950 overflow-hidden mb-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] flex-shrink-0 relative">
                {gameState === 'result' ? (
                  cpuCard?.heroImage?.endsWith('.mp4') ? (
                    <video src={cpuCard.heroImage} autoPlay loop muted playsInline className="w-full h-full object-cover animate-in fade-in duration-500" />
                  ) : (
                    <img src={cpuCard?.heroImage} className="w-full h-full object-cover animate-in fade-in duration-500" alt="" />
                  )
                ) : (
                  <div className="flex flex-col items-center">
                    <RefreshCw className="w-16 h-16 text-slate-800 animate-spin-slow mb-4" />
                    <span className="text-xs font-black italic text-slate-700 uppercase tracking-widest animate-pulse">Aguardando Escolha</span>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge className="bg-red-600 text-white border-white/20 font-black italic shadow-lg">OPONENTE</Badge>
                </div>
             </div>

             <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
               {(gameState === 'result' ? cpuCard?.attributes : playerCard?.attributes)?.map((attr, idx) => {
                 const isWinnerAttr = selectedAttr === attr.label && winner === 'cpu';
                 
                 return (
                   <div key={idx} className="space-y-1">
                     <div
                       className={`w-full flex justify-between items-center p-3 rounded-xl border bg-white/5 border-white/5 transition-all ${
                         isWinnerAttr ? 'border-red-500 bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : ''
                       } ${gameState === 'result' && selectedAttr === attr.label ? 'scale-[1.02] z-10' : ''}`}
                     >
                       <div className="flex items-center gap-3">
                          <CircleHelp className={`w-4 h-4 ${gameState === 'result' ? 'text-red-400/50' : 'text-slate-800'}`} />
                          <div className="flex flex-col items-start text-left">
                             <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{attr.label}</span>
                             <span className="text-xs font-bold uppercase tracking-tight text-slate-400 line-clamp-1">
                               {gameState === 'result' ? (attr.value) : '??????'}
                             </span>
                          </div>
                       </div>
                       <span className="text-sm font-black text-slate-600 ml-2">
                         {gameState === 'result' ? attr.score.toFixed(1) : '???'}
                       </span>
                     </div>
                     {(gameState === 'result' && selectedAttr === attr.label) && (
                       <div className="p-4 rounded-xl bg-red-600/20 border-2 border-red-400/30 text-xs leading-relaxed text-red-100 animate-in slide-in-from-top-4 duration-500 shadow-xl">
                         <div className="flex items-center gap-2 mb-2">
                            <CircleHelp className="w-4 h-4 text-red-400" />
                            <span className="font-black uppercase tracking-tighter text-red-400">Poder do Oponente:</span>
                         </div>
                         <p className="italic font-medium">{attr.justification}</p>
                       </div>
                     )}
                   </div>
                 );
               })}
             </div>
          </div>
        </div>
      </div>

      {gameState === 'result' && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8">
          <div className={`text-5xl font-black italic mb-6 drop-shadow-2xl ${
            winner === 'player' ? 'text-green-400' : winner === 'cpu' ? 'text-red-400' : 'text-white'
          }`}>
            {winner === 'player' ? 'VOCÊ GANHOU A RODADA!' : winner === 'cpu' ? 'DERROTA NESTA RODADA!' : 'EMPATE TÉCNICO!'}
          </div>
          <Button onClick={nextRound} size="lg" className="bg-white text-black hover:bg-slate-200 font-black rounded-2xl px-16 py-8 text-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
            {round < 5 ? 'PRÓXIMA RODADA' : 'VER RESULTADO FINAL'} <ChevronRight className="ml-2 w-8 h-8" />
          </Button>
        </div>
      )}
    </div>
  );
};
