import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ELEMENTS_DATA, PeriodicElement } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Swords, Trophy, RefreshCw, ChevronRight, User, Users, CircleHelp } from 'lucide-react';
import { toast } from "sonner";
import { addCoins, COIN_SYMBOL } from "@/lib/playerEconomy";

const ROUND_WIN_COINS = 10;
const ROUND_DRAW_COINS = 5;
const MATCH_WIN_BONUS = 30;

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
    setRoomCode(code);
    setGameState('waiting');
    
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
    setRound(1);
    setScore({ player: 0, cpu: 0 });
    startNewRound();
  };

  const getAttrScore = (element: PeriodicElement, attrLabel: string) => {
    const attr = element.attributes.find(a => a.label === attrLabel);
    return attr ? attr.score : 0;
  };

  const handleBattle = async (attrLabel: string) => {
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

    if (session?.user?.id) {
      if (result === 'player') {
        await addCoins(session.user.id, ROUND_WIN_COINS);
        toast.success(`+${ROUND_WIN_COINS}${COIN_SYMBOL} pela vitória na rodada!`);
      } else if (result === 'draw') {
        await addCoins(session.user.id, ROUND_DRAW_COINS);
        toast.info(`Empate técnico: +${ROUND_DRAW_COINS}${COIN_SYMBOL}`);
      }
    }
  };

  const nextRound = async () => {
    if (round < 5) {
      setRound(r => r + 1);
      startNewRound();
    } else {
        setGameState('gameOver');
      if (session && score.player !== score.cpu) {
        const isWin = score.player > score.cpu;
        if (isWin) {
          await addCoins(session.user.id, MATCH_WIN_BONUS);
          toast.success(`Bônus de vitória da partida: +${MATCH_WIN_BONUS}${COIN_SYMBOL}`);
        }
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
          <Button size="lg" onClick={startPVE} className="bg-blue-600 hover:bg-blue-700 font-bold h-16 rounded-2xl">VS COMPUTADOR</Button>
          <Button size="lg" onClick={createRoom} variant="outline" className="border-white/10 hover:bg-white/5 font-bold h-16 rounded-2xl">CRIAR SALA</Button>
          <div className="sm:col-span-2 flex gap-2">
            <Input placeholder="CÓDIGO DA SALA" value={roomCode} onChange={e => setRoomCode(e.target.value)} className="bg-white/5 border-white/10 h-12 rounded-xl text-center font-black" />
            <Button onClick={joinRoom} className="bg-purple-600 hover:bg-purple-700 font-bold h-12 px-8 rounded-xl">ENTRAR</Button>
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
        <div className="bg-blue-600/20 border border-blue-400/30 px-12 py-6 rounded-2xl text-4xl font-black tracking-widest text-blue-400 mb-8">{roomCode}</div>
        <Button variant="ghost" onClick={() => setGameState('selecting')} className="text-slate-500">CANCELAR</Button>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl h-[600px] text-center">
        <Trophy className={`w-24 h-24 mb-6 ${score.player > score.cpu ? 'text-yellow-400' : 'text-slate-500'}`} />
        <h2 className="text-4xl font-black italic mb-2">PARTIDA FINALIZADA</h2>
        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">{score.player} - {score.cpu}</div>
        <p className="text-2xl font-black italic mb-8 uppercase">{score.player > score.cpu ? 'VOCÊ VENCEU!' : score.player < score.cpu ? 'DERROTA!' : 'EMPATE!'}</p>
        <Button onClick={() => setGameState('selecting')} size="lg" className="bg-white text-black font-black px-12 py-6 text-xl rounded-2xl">VOLTAR AO INÍCIO</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1440px] mx-auto p-4 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-slate-900/80 p-6 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden mb-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-1 rounded-b-xl text-[10px] font-black tracking-[0.3em] uppercase">RODADA {round}/5</div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"><User className="w-8 h-8" /></div>
          <div>
            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">VOCÊ</div>
            <div className="text-4xl font-black italic">{score.player}</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-black italic opacity-10 animate-pulse">VS</div>
        </div>
        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-[10px] font-black text-red-400 uppercase tracking-widest">{isMultiplayer ? "OPONENTE" : "CPU"}</div>
            <div className="text-4xl font-black italic">{score.cpu}</div>
          </div>
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">{isMultiplayer ? <Users className="w-8 h-8" /> : <RefreshCw className="w-8 h-8" />}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center max-w-7xl mx-auto w-full">
        {/* Player Card */}
        <div className="relative group w-full max-w-[420px] mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] blur opacity-20"></div>
          <div className="relative rounded-[3rem] bg-slate-900 border-2 border-white/10 overflow-hidden shadow-2xl flex flex-col h-[1100px]">
             <div className="p-8 pb-4 flex justify-between items-start z-10 bg-gradient-to-b from-slate-900 to-transparent">
                <div className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                  <h3 className="text-3xl font-black italic uppercase text-white leading-none tracking-tighter">{playerCard?.name}</h3>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mt-2 block">{playerCard?.heroName}</span>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-2xl transform rotate-3">
                  <span className="text-3xl font-black italic text-white drop-shadow-md">{playerCard?.symbol}</span>
                </div>
             </div>
             
             <div className="px-8 flex-shrink-0">
               <div className="aspect-[2/3] w-full rounded-[2rem] bg-slate-950 overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative group/img">
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                  {playerCard?.heroImage?.endsWith('.mp4') ? (
                    <video src={playerCard.heroImage} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={playerCard?.heroImage} className="w-full h-full object-cover" alt="" />
                  )}
                  <div className="absolute bottom-6 left-6 z-20">
                    <Badge className="bg-blue-600 text-white border-white/20 font-black italic px-4 py-2 text-[10px] tracking-widest">PLAYER HERO</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               </div>
             </div>

             <div className="flex-1 overflow-y-auto mt-6 px-8 custom-scrollbar pb-10">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Matriz de Atributos</span>
                 <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
               </div>

               <div className="space-y-3">
                 {playerCard?.attributes.map(attr => (
                   <div key={attr.id} className="space-y-2">
                     <button
                       disabled={gameState !== 'battle'}
                       onClick={() => handleBattle(attr.label)}
                       className={`w-full group/btn relative overflow-hidden flex justify-between items-center p-5 rounded-2xl border-2 transition-all duration-300 ${
                         selectedAttr === attr.label 
                           ? 'bg-blue-600 border-white shadow-[0_0_40px_rgba(37,99,235,0.5)] scale-[1.03] z-10' 
                           : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                       }`}
                     >
                       <div className="flex items-center gap-4 z-10">
                          <div className={`p-2.5 rounded-xl border ${selectedAttr === attr.label ? 'bg-white/20 border-white/30' : 'bg-blue-500/10 border-blue-500/20'}`}>
                             <CircleHelp className={`w-5 h-5 ${selectedAttr === attr.label ? 'text-white' : 'text-blue-400'}`} />
                          </div>
                          <div className="flex flex-col items-start text-left">
                             <span className={`text-[9px] font-black uppercase tracking-[0.1em] mb-1 ${selectedAttr === attr.label ? 'text-white/70' : 'text-blue-400/60'}`}>{attr.label}</span>
                             <span className="text-[13px] font-black uppercase tracking-tight text-white leading-none">{attr.value}</span>
                          </div>
                       </div>
                       <span className={`text-2xl font-black italic z-10 tracking-tighter ${selectedAttr === attr.label ? 'text-white' : 'text-blue-300'}`}>
                         {gameState === 'result' || selectedAttr === attr.label ? attr.score.toFixed(0) : '??'}
                       </span>
                     </button>
                     
                     {(gameState === 'result' && selectedAttr === attr.label) && (
                       <div className="p-5 rounded-2xl bg-slate-800/90 border-2 border-blue-500/30 text-[12px] leading-relaxed text-blue-100 animate-in zoom-in-95 slide-in-from-top-4 duration-500 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                          <div className="flex items-center gap-3 mb-3">
                             <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
                             <span className="font-black uppercase tracking-[0.1em] text-blue-400 text-[10px]">Justificativa Elemental:</span>
                          </div>
                          <p className="italic font-medium opacity-90 border-l-2 border-blue-500/20 pl-4 py-1">{attr.justification}</p>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* CPU/Opponent Card */}
        <div className="relative group w-full max-w-[420px] mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-500 rounded-[3rem] blur opacity-20"></div>
          <div className="relative rounded-[3rem] bg-slate-900 border-2 border-white/10 overflow-hidden shadow-2xl flex flex-col h-[1100px]">
             <div className="p-8 pb-4 flex justify-between items-start z-10 bg-gradient-to-b from-slate-900 to-transparent">
                <div className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl min-w-[180px]">
                  <h3 className="text-3xl font-black italic uppercase text-white leading-none tracking-tighter">
                    {gameState === 'result' ? cpuCard?.name : '??????'}
                  </h3>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] mt-2 block">
                    {gameState === 'result' ? cpuCard?.heroName : 'OPONENTE OCULTO'}
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-2xl transform -rotate-3">
                  <span className="text-3xl font-black italic text-slate-500">
                    {gameState === 'result' ? cpuCard?.symbol : '?'}
                  </span>
                </div>
             </div>

             <div className="px-8 flex-shrink-0">
               <div className="aspect-[2/3] w-full rounded-[2rem] bg-slate-950 overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative group/img">
                  {gameState === 'result' ? (
                    <>
                      <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay"></div>
                      {cpuCard?.heroImage?.endsWith('.mp4') ? (
                        <video src={cpuCard.heroImage} autoPlay loop muted playsInline className="w-full h-full object-cover animate-in fade-in duration-700" />
                      ) : (
                        <img src={cpuCard?.heroImage} className="w-full h-full object-cover animate-in fade-in duration-700" alt="" />
                      )}
                      <div className="absolute bottom-6 right-6 z-20">
                        <Badge className="bg-red-600 text-white border-white/20 font-black italic px-4 py-2 text-[10px] tracking-widest uppercase">{isMultiplayer ? "ENEMY" : "CPU"}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <RefreshCw className="w-20 h-20 text-slate-800 animate-spin-slow mb-6" />
                      <span className="text-[11px] font-black italic text-slate-700 uppercase tracking-[0.3em] animate-pulse">Scanning Opponent...</span>
                    </div>
                  )}
               </div>
             </div>

             <div className="flex-1 overflow-y-auto mt-6 px-8 custom-scrollbar pb-10">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Matriz de Atributos</span>
                 <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
               </div>

               <div className="space-y-3">
                 {(gameState === 'result' ? cpuCard?.attributes : playerCard?.attributes)?.map((attr, idx) => {
                   const cpuAttr = cpuCard?.attributes.find(a => a.label === attr.label);
                   return (
                     <div key={idx} className="space-y-2">
                       <div
                         className={`w-full flex justify-between items-center p-5 rounded-2xl border-2 transition-all duration-300 ${
                           selectedAttr === attr.label 
                             ? 'bg-red-900/40 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]' 
                             : 'bg-white/5 border-white/5 opacity-50'
                         }`}
                       >
                         <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl border ${selectedAttr === attr.label ? 'bg-red-500/20 border-red-500/30' : 'bg-slate-500/10 border-slate-500/20'}`}>
                               <CircleHelp className={`w-5 h-5 ${selectedAttr === attr.label ? 'text-red-400' : 'text-slate-700'}`} />
                            </div>
                            <div className="flex flex-col items-start text-left">
                               <span className={`text-[9px] font-black uppercase tracking-[0.1em] mb-1 ${selectedAttr === attr.label ? 'text-red-400/60' : 'text-slate-700'}`}>{attr.label}</span>
                               <span className="text-[13px] font-black uppercase tracking-tight text-white/40 leading-none">
                                 {gameState === 'result' ? cpuAttr?.value : '??????'}
                               </span>
                            </div>
                         </div>
                         <span className={`text-2xl font-black italic tracking-tighter ${selectedAttr === attr.label ? 'text-red-400' : 'text-slate-800'}`}>
                           {gameState === 'result' ? cpuAttr?.score.toFixed(0) : '??'}
                         </span>
                       </div>

                       {(gameState === 'result' && selectedAttr === attr.label) && (
                         <div className="p-5 rounded-2xl bg-slate-800/90 border-2 border-red-500/30 text-[12px] leading-relaxed text-red-100 animate-in zoom-in-95 slide-in-from-top-4 duration-500 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1 h-full bg-red-500"></div>
                            <div className="flex items-center gap-3 mb-3">
                               <div className="w-2 h-2 rounded-full bg-red-400 animate-ping"></div>
                               <span className="font-black uppercase tracking-[0.1em] text-red-400 text-[10px]">Análise do Oponente:</span>
                            </div>
                            <p className="italic font-medium opacity-90 border-r-2 border-red-500/20 pr-4 py-1 text-right">{cpuAttr?.justification}</p>
                         </div>
                       )}
                     </div>
                   );
                 })}
               </div>
             </div>
          </div>
        </div>
      </div>

      {gameState === 'result' && (
        <div className="flex flex-col items-center animate-in zoom-in duration-500 mt-12 mb-32">
          <div className={`
            px-16 py-8 rounded-[2rem] border-4 shadow-[0_0_80px_rgba(0,0,0,0.6)] mb-8
            ${winner === 'player' ? 'bg-blue-600 border-white text-white' : 
              winner === 'cpu' ? 'bg-red-600 border-white text-white' : 
              'bg-slate-700 border-white text-white'}
          `}>
            <span className="text-5xl font-black italic tracking-tighter uppercase block text-center">
              {winner === 'player' ? 'VITÓRIA TÁTICA!' : winner === 'cpu' ? 'DERROTA CRÍTICA!' : 'EMPATE ELEMENTAL!'}
            </span>
          </div>
          <Button 
            onClick={nextRound} 
            size="lg" 
            className="bg-white text-black hover:bg-slate-200 font-black px-16 py-10 text-3xl rounded-[1.5rem] shadow-2xl transition-transform hover:scale-105 group"
          >
            {round < 5 ? 'PRÓXIMA RODADA' : 'RESULTADO FINAL'} <ChevronRight className="w-10 h-10 ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
};