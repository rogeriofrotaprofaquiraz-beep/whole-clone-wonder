import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ELEMENTS_DATA, PeriodicElement } from '../data/elements';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BattleSystem } from "@/components/game/BattleSystem";
import { ElementQuiz } from "@/components/game/ElementQuiz";
import { AdminPanel } from "@/components/game/AdminPanel";
import { AuthSystem } from "@/components/game/AuthSystem";
import { Ranking } from "@/components/game/Ranking";
import { Swords, Brain, LayoutGrid, Settings, LogOut, User as UserIcon, Trophy, Users } from 'lucide-react';
import { toast } from "sonner";

const ElementCard = ({ element }: { element: PeriodicElement }) => {
  const isGas = ["Gás", "Gás incolor", "Gás nobre"].some(type => 
    element.attributes.find(a => a.label === "Estado físico")?.value.toString().includes(type)
  );

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Lendário': return 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.5)]';
      case 'Épico': return 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]';
      case 'Raro': return 'bg-blue-600 text-white';
      case 'Incomum': return 'bg-green-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  const calculateRarity = (element: PeriodicElement) => {
    const avg = element.attributes.reduce((acc, curr) => acc + curr.score, 0) / 27;
    if (avg > 85) return 'Lendário';
    if (avg > 70) return 'Épico';
    if (avg > 50) return 'Raro';
    if (avg > 30) return 'Incomum';
    return 'Comum';
  };

  const rarity = element.rarity || calculateRarity(element);

  return (
    <div className={`
      relative p-6 rounded-[2rem] w-[400px] h-[1333px] text-white font-sans shadow-[0_35px_80px_rgba(0,0,0,0.8)] 
      animate-in fade-in zoom-in duration-700 border-2 border-white/20 overflow-hidden group flex flex-col
      ${isGas ? 'backdrop-blur-2xl bg-slate-900/40' : 'bg-slate-900'}
    `}>
      {/* Carbon Fiber / Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Inner Border Glow */}
      <div className="absolute inset-2 rounded-[1.5rem] border border-white/5 pointer-events-none"></div>

      {/* Symbol & Number (Style Carta MOV) */}
      <div className="relative flex justify-between items-start mb-4 z-10">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl font-black italic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{element.symbol}</span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black italic opacity-50 block leading-none">#{element.number}</span>
          <Badge className={`${getRarityColor(rarity)} mt-1 font-black italic tracking-widest text-[8px] py-0 px-2`}>
            {rarity.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="relative mb-4 z-10">
        <h2 className="text-2xl font-black tracking-tighter italic uppercase leading-none drop-shadow-2xl">
          {element.name}
        </h2>
        <p className="text-[9px] font-black tracking-[0.2em] text-blue-400 uppercase mt-0.5 opacity-80">{element.heroName}</p>
      </div>
      
      <div className={`
        aspect-[2/3] w-full rounded-[2rem] mb-6 flex items-start justify-center overflow-hidden relative group/img
        border-2 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]
        ${isGas ? 'bg-gradient-to-b from-blue-900/40 via-slate-900 to-black' : 'bg-slate-950'}
      `}>
        {/* Floating Animation for Heros */}
        <div className="w-full h-full transition-all duration-1000 group-hover/img:scale-105">
          {element.heroImage.endsWith('.mp4') ? (
            <video 
              src={element.heroImage} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100"
            />
          ) : (
            <img 
              src={element.heroImage} 
              alt={element.heroName}
              className="w-full h-full object-cover" 
              onLoad={(e) => (e.currentTarget.style.opacity = "1")}
              style={{ opacity: 0 }}
            />
          )}
        </div>
        
        {/* State specific overlays */}
        {isGas && (
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen pointer-events-none animate-pulse"></div>
        )}

        {/* QR Code Placeholder (Carta MOV Style) */}
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-white p-2 rounded-xl shadow-2xl z-20 opacity-80 group-hover:opacity-100 transition-opacity">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://lovable.dev" alt="QR Code" className="w-full h-full" />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent pr-20">
          <p className="text-[11px] italic text-white/90 leading-relaxed font-black drop-shadow-xl line-clamp-3 uppercase tracking-tight">
            "{element.heroDescription}"
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1 mb-4 custom-scrollbar bg-black/20 rounded-xl p-3 border border-white/5">
        <div className="space-y-3">
          {element.attributes.map((attr) => (
            <div key={attr.id} className="group/attr relative bg-white/5 border border-white/5 rounded-2xl p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{attr.label}</span>
                <span className="text-xs font-black text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-lg border border-blue-500/20">{attr.value}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-black/60 h-2 rounded-full overflow-hidden p-[1px] border border-white/5">
                  <div 
                    className={`h-full rounded-full transition-all duration-1500 ease-out shadow-[0_0_12px_rgba(0,0,0,0.8)]
                      ${attr.score > 80 ? 'bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300' : 
                        attr.score > 50 ? 'bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400' : 
                        'bg-gradient-to-r from-orange-600 via-amber-400 to-orange-400'}`}
                    style={{ width: `${attr.score}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono font-black text-white/50 w-6 text-right">{attr.score}</span>
              </div>
              
              <div className="max-h-0 overflow-hidden group-hover/attr:max-h-24 transition-all duration-500 ease-in-out">
                <p className="text-[10px] text-blue-200/60 mt-3 italic leading-relaxed border-t border-white/10 pt-3">
                  {attr.justification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="mt-auto flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 shadow-xl">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">Nível de Poder</span>
          <span className="text-[10px] text-blue-400 font-black italic tracking-tighter">DOMÍNIO: {isGas ? 'GASOSO' : 'SÓLIDO'}</span>
        </div>
        <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-blue-600 drop-shadow-[0_2px_8px_rgba(37,99,235,0.6)]">
          {(element.attributes.reduce((acc, curr) => acc + curr.score, 0) / 27).toFixed(1)}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("H");
  const [session, setSession] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState("collection");

  const logActivity = useCallback(async (action: string, path: string, metadata: any = {}) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    await supabase.from('activity_logs').insert({
      user_id: session.user.id,
      action,
      path,
      metadata
    });
  }, []);

  const fetchUserRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    
    if (data && !error) {
      setUserRole(data.role);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        fetchUserRole(session.user.id);
        logActivity('LOGIN', '/', { timestamp: new Date().toISOString() });
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        await fetchUserRole(session.user.id);
        setShowAuth(false);
      } else {
        setUserRole(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [logActivity]);

  useEffect(() => {
    if (session?.user) {
      logActivity('TAB_CHANGE', activeTab);
    }
  }, [activeTab, session, logActivity]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Até logo, Herói!");
  };

  const selectedElement = (ELEMENTS_DATA[selectedSymbol] && ELEMENTS_DATA[selectedSymbol].symbol !== "Element" && ELEMENTS_DATA[selectedSymbol].symbol !== "Elemento") ? ELEMENTS_DATA[selectedSymbol] : ELEMENTS_DATA["H"];

  // Tabela Periódica Completa com agrupamentos por cores e estrutura fiel ao PDF
  const periodicTableLayout = [
    ["H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He"],
    ["Li", "Be", "", "", "", "", "", "", "", "", "", "", "B", "C", "N", "O", "F", "Ne"],
    ["Na", "Mg", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P", "S", "Cl", "Ar"],
    ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
    ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
    ["Cs", "Ba", "La-Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
    ["Fr", "Ra", "Ac-Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", ""],
    ["", "", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", ""],
  ];

  const getElementCategoryColor = (symbol: string, rIdx: number, sIdx: number) => {
    // Clasificação fiel à Tabela Periódica moderna (e baseada no PDF fornecido)
    if (["H", "C", "N", "O", "P", "S", "Se"].includes(symbol)) return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"; // Não metais
    if (["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(symbol)) return "bg-sky-500/20 text-sky-400 border-sky-500/50"; // Gases Nobres
    if (["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(symbol)) return "bg-amber-500/20 text-amber-400 border-amber-500/50"; // Metais Alcalinos
    if (["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(symbol)) return "bg-orange-500/20 text-orange-400 border-orange-500/50"; // Alcalino Terrosos
    if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(symbol)) return "bg-teal-500/20 text-teal-400 border-teal-500/50"; // Semimetais
    if (["F", "Cl", "Br", "I", "At", "Ts"].includes(symbol)) return "bg-lime-500/20 text-lime-400 border-lime-500/50"; // Halogênios
    if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(symbol)) return "bg-indigo-500/20 text-indigo-400 border-indigo-500/50"; // Outros Metais (Metais do Bloco p)
    
    // Metais de Transição (Bloco d)
    if ((rIdx >= 3 && rIdx <= 6 && sIdx >= 2 && sIdx <= 11) || ["Zn", "Cd", "Hg", "Cn"].includes(symbol)) return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    
    // Lantanídeos e Actinídeos (Bloco f)
    if (rIdx === 8 || symbol === "La-Lu") return "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50";
    if (rIdx === 9 || symbol === "Ac-Lr") return "bg-violet-600/20 text-violet-400 border-violet-600/50";
    
    return "bg-slate-800/40 text-slate-400 border-slate-700/50";
  };

  const getCategoryName = (symbol: string, rIdx: number, sIdx: number) => {
    if (["H", "C", "N", "O", "P", "S", "Se"].includes(symbol)) return "Não Metal";
    if (["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(symbol)) return "Gás Nobre";
    if (["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(symbol)) return "Metal Alcalino";
    if (["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(symbol)) return "Alcalino Terroso";
    if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(symbol)) return "Semimetal";
    if (["F", "Cl", "Br", "I", "At", "Ts"].includes(symbol)) return "Halogênio";
    if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(symbol)) return "Outro Metal";
    if (rIdx >= 3 && rIdx <= 6 && sIdx >= 2 && sIdx <= 11) return "Metal de Transição";
    if (rIdx === 8) return "Lantanídeo";
    if (rIdx === 9) return "Actinídeo";
    return "Desconhecido";
  };

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 flex flex-col items-center justify-start font-sans text-white overflow-hidden">
      <div className="w-full max-w-[1440px] flex justify-end mb-4">
        {session ? (
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 px-4 rounded-2xl border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <UserIcon className="w-4 h-4" />
              </div>
              <span className="text-sm font-black italic">{session.user.user_metadata?.username || session.user.email}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Button onClick={() => setShowAuth(true)} className="bg-blue-600 hover:bg-blue-700 font-bold rounded-xl">
            ENTRAR / REGISTRAR
          </Button>
        )}
      </div>

      <header className="mb-12 text-center relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 animate-in fade-in slide-in-from-top-10 duration-1000">
          ELEMENTAL HEROES
        </h1>
        <p className="text-slate-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed opacity-80">
          A fronteira final da ciência e do entretenimento. Domine os 118 elementos da Tabela Periódica, 
          evolua suas estratégias no sistema de batalha e torne-se um Mestre Elemental.
        </p>
      </header>

        <Tabs defaultValue="collection" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-[1440px] flex flex-col items-center">
          <TabsList className="bg-slate-900/60 border border-white/10 p-1 rounded-2xl mb-12 h-auto gap-2 backdrop-blur-xl">
            <TabsTrigger value="collection" className="px-8 py-4 rounded-xl data-[state=active]:bg-blue-600 font-bold transition-all gap-2">
              <LayoutGrid className="w-5 h-5" /> COLEÇÃO
            </TabsTrigger>
            <TabsTrigger value="battle" className="px-8 py-4 rounded-xl data-[state=active]:bg-red-600 font-bold transition-all gap-2">
              <Swords className="w-5 h-5" /> BATALHA
            </TabsTrigger>
            <TabsTrigger value="quiz" className="px-8 py-4 rounded-xl data-[state=active]:bg-purple-600 font-bold transition-all gap-2">
              <Brain className="w-5 h-5" /> DESAFIO
            </TabsTrigger>
            <TabsTrigger value="ranking" className="px-8 py-4 rounded-xl data-[state=active]:bg-yellow-600 font-bold transition-all gap-2 text-white">
              <Trophy className="w-5 h-5" /> RANKING
            </TabsTrigger>
            {(userRole === 'admin' || userRole === 'teacher') && (
              <TabsTrigger value="admin" className="px-8 py-4 rounded-xl data-[state=active]:bg-slate-700 font-bold transition-all gap-2">
                <Settings className="w-5 h-5" /> {userRole === 'admin' ? 'ADMIN' : 'PROFESSOR'}
              </TabsTrigger>
            )}
          </TabsList>

        <TabsContent value="collection" className="w-full animate-in fade-in zoom-in-95 duration-500">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center w-full">
        {/* Lado Esquerdo: Tabela Periódica (Mini) */}
        <div className="flex-1 bg-slate-900/40 p-4 md:p-8 rounded-[2rem] border border-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="relative grid grid-cols-18 gap-1.5 md:gap-2 mb-8 scale-100 origin-left">
            {periodicTableLayout.map((row, rIdx) => (
              <React.Fragment key={rIdx}>
                {row.map((symbol, sIdx) => {
                  const isAvailable = symbol && ELEMENTS_DATA[symbol] && ELEMENTS_DATA[symbol].symbol !== "Element" && ELEMENTS_DATA[symbol].symbol !== "Elemento";
                  const categoryStyle = getElementCategoryColor(symbol, rIdx, sIdx);
                  const categoryName = getCategoryName(symbol, rIdx, sIdx);
                  
                  return (
                    <button
                      key={`${rIdx}-${sIdx}`}
                      onClick={() => symbol && isAvailable && setSelectedSymbol(symbol)}
                      className={`
                        relative aspect-square flex flex-col items-center justify-center rounded-lg transition-all duration-300 border-2
                        ${!symbol ? 'invisible' : 'hover:scale-150 hover:z-20 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:border-white/80'}
                        ${selectedSymbol === symbol ? 'ring-4 ring-white scale-125 z-10 shadow-[0_0_40px_rgba(255,255,255,0.5)] border-white' : ''}
                        ${!isAvailable && symbol ? 'opacity-30 grayscale cursor-not-allowed' : 'cursor-pointer shadow-lg'}
                        ${categoryStyle}
                        group/item w-10 h-10 md:w-12 md:h-12
                      `}
                    >
                      {/* Tooltip/Hover Info */}
                      {symbol && (
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl shadow-2xl opacity-0 group-hover/item:opacity-100 pointer-events-none transition-all duration-300 z-30 min-w-[120px] text-center scale-75 group-hover/item:scale-100">
                          <div className="text-[10px] text-blue-400 font-black leading-none mb-1">#{isAvailable ? ELEMENTS_DATA[symbol].number : ''}</div>
                          <div className="text-xl font-black text-white leading-tight drop-shadow-sm">{symbol.replace('-Lu', '').replace('-Lr', '')}</div>
                          <div className="text-[9px] text-white/80 truncate uppercase font-black tracking-tight">{isAvailable ? ELEMENTS_DATA[symbol].name : symbol}</div>
                          <div className="text-[7px] text-blue-300 mt-1 border-t border-white/10 pt-1 uppercase font-bold tracking-widest">{categoryName}</div>
                          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-r border-b border-white/20 rotate-45"></div>
                        </div>
                      )}

                      <span className="text-[8px] md:text-[10px] absolute top-1 left-1 font-black text-white drop-shadow-md z-10 bg-black/40 px-1 rounded-sm min-w-[14px] text-center">
                        {isAvailable ? ELEMENTS_DATA[symbol].number : ''}
                      </span>
                      <span className="text-sm md:text-lg font-black tracking-tighter drop-shadow-lg">
                        {symbol.replace('-Lu', '').replace('-Lr', '')}
                      </span>
                      {isAvailable && (
                        <div className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
                      )}
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center text-[8px] font-bold uppercase tracking-widest text-white/40 max-w-4xl mx-auto">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]"></div>
              <span>Metais Alcalinos</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></div>
              <span>Alcalino Terrosos</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
              <span>Transição</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
              <span>Outros Metais</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_#14b8a6]"></div>
              <span>Semimetais</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <span>Não Metais</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_8px_#84cc16]"></div>
              <span>Halogênios</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]"></div>
              <span>Gases Nobres</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400">
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]"></div>
              <span>Lantanídeos</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-600 shadow-[0_0_8px_#7c3aed]"></div>
              <span>Actinídeos</span>
            </div>
          </div>


        </div>

        {/* Lado Direito: Visualização da Carta */}
        <div className="lg:w-[500px] w-full flex justify-center sticky top-8">
          {selectedElement ? (
            <ElementCard element={selectedElement} />
          ) : (
            <div className="w-full h-96 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-600 italic">
              Selecione um elemento para ver o herói
            </div>
          )}
        </div>
          </div>
        </TabsContent>

        <TabsContent value="battle" className="w-full animate-in fade-in slide-in-from-right-10 duration-500">
          <BattleSystem />
        </TabsContent>

        <TabsContent value="quiz" className="w-full animate-in fade-in slide-in-from-left-10 duration-500">
          <ElementQuiz />
        </TabsContent>

        <TabsContent value="ranking" className="w-full animate-in fade-in slide-in-from-top-10 duration-500">
          <Ranking />
        </TabsContent>

        {(userRole === 'admin' || userRole === 'teacher') && (
          <TabsContent value="admin" className="w-full animate-in fade-in slide-in-from-bottom-10 duration-500">
            <AdminPanel userRole={userRole} />
          </TabsContent>
        )}
      </Tabs>

      {showAuth && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-md">
            <Button 
              variant="ghost" 
              onClick={() => setShowAuth(false)} 
              className="absolute -top-12 right-0 text-white hover:bg-white/10"
            >
              FECHAR
            </Button>
            <AuthSystem onAuthSuccess={() => setShowAuth(false)} />
          </div>
        </div>
      )}

      <footer className="mt-12 text-slate-600 text-[10px] flex flex-col items-center gap-2 pb-8">
        <p>© 2026 Elemental Heroes Game - Baseado em Dados Científicos Reais</p>
        <div className="flex gap-4">
          <span>118 Elementos</span>
          <span>27 Atributos por Carta</span>
          <span>Design Futurista</span>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .grid-cols-18 {
          grid-template-columns: repeat(18, minmax(0, 1fr));
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Index;
