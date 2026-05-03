import React, { useState } from 'react';
import { ELEMENTS_DATA, PeriodicElement } from '../data/elements';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const ElementCard = ({ element }: { element: PeriodicElement }) => {
  const isGas = ["Gás", "Gás incolor", "Gás nobre"].some(type => 
    element.attributes.find(a => a.label === "Estado físico")?.value.toString().includes(type)
  );

  return (
    <div className={`
      relative p-5 rounded-3xl w-full max-w-md text-white font-sans shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
      animate-in fade-in zoom-in duration-500 border border-white/10 overflow-hidden
      ${isGas ? 'backdrop-blur-xl bg-white/5 shadow-[0_0_40px_rgba(59,130,246,0.2)]' : 'bg-slate-900/90'}
    `}>
      {/* 3D Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Decorative Glows */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-50 ${isGas ? 'bg-blue-400' : 'bg-purple-600'}`}></div>
      <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-30 ${isGas ? 'bg-cyan-300' : 'bg-blue-600'}`}></div>

      <div className="relative flex justify-between items-start mb-4">
        <div className="z-10">
          <h2 className="text-3xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 drop-shadow-sm">
            {element.name}
          </h2>
          <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400/80 uppercase">{element.heroName}</p>
        </div>
        <div className="flex flex-col items-end z-10">
          <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-black border border-white/10 mb-1">
            #{element.number}
          </span>
          <span className="text-4xl font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {element.symbol}
          </span>
        </div>
      </div>
      
      <div className={`
        h-[480px] rounded-2xl mb-4 flex items-start justify-center overflow-hidden relative group 
        border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]
        ${isGas ? 'bg-gradient-to-b from-blue-900/20 to-black/40' : 'bg-slate-950'}
      `}>
        {element.heroImage.endsWith('.mp4') ? (
          <video 
            src={element.heroImage} 
            autoPlay 
            loop 
            muted 
            playsInline
            className={`
              w-full h-full object-contain object-top transition-all duration-1000 group-hover:scale-110
              ${isGas ? 'opacity-80 blur-[1px] group-hover:blur-0' : 'opacity-100'}
            `}
          />
        ) : (
          <img 
            src={element.heroImage} 
            alt={element.heroName}
            className="w-full h-full object-contain object-top transition-transform duration-1000 group-hover:scale-110" 
          />
        )}
        
        {/* State specific overlays */}
        {isGas && (
          <div className="absolute inset-0 bg-blue-400/5 mix-blend-overlay pointer-events-none animate-pulse"></div>
        )}

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <p className="text-xs italic text-white/90 leading-relaxed font-light drop-shadow-md">
            "{element.heroDescription}"
          </p>
        </div>
      </div>

      <ScrollArea className="h-64 pr-3 custom-scrollbar">
        <div className="space-y-2">
          {element.attributes.map((attr) => (
            <div key={attr.id} className="group relative bg-white/5 border border-white/5 rounded-xl p-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">{attr.label}</span>
                <span className="text-xs font-black text-blue-300 drop-shadow-sm">{attr.value}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-black/40 h-1.5 rounded-full overflow-hidden p-[1px]">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.5)]
                      ${attr.score > 80 ? 'bg-gradient-to-r from-emerald-500 to-green-400' : 
                        attr.score > 50 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 
                        'bg-gradient-to-r from-amber-500 to-orange-400'}`}
                    style={{ width: `${attr.score}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-mono font-bold text-white/30 w-5 text-right">{attr.score}</span>
              </div>
              
              <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                <p className="text-[9px] text-blue-200/60 mt-2 italic leading-tight border-t border-white/5 pt-2">
                  {attr.justification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="mt-4 flex justify-between items-center px-2 py-3 bg-white/5 rounded-2xl border border-white/5">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Poder Total</span>
          <span className="text-xs text-blue-400/60 font-mono tracking-tighter">ESTADO: {isGas ? 'GASOSO' : 'SÓLIDO'}</span>
        </div>
        <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 drop-shadow-md">
          {(element.attributes.reduce((acc, curr) => acc + curr.score, 0) / 27).toFixed(1)}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("H");
  const selectedElement = ELEMENTS_DATA[selectedSymbol];

  // Tabela Periódica Completa (118 elementos)
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

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 flex flex-col items-center justify-start font-sans text-white overflow-hidden">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
          ELEMENTAL HEROES
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl">
          Explore os 118 elementos da Tabela Periódica como super-heróis lendários. 
          Compare seus 27 atributos e descubra o pilar da civilização.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-7xl">
        {/* Lado Esquerdo: Tabela Periódica (Mini) */}
        <div className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
          <div className="grid grid-cols-18 gap-1 md:gap-2 mb-4">
            {periodicTableLayout.map((row, rIdx) => (
              <React.Fragment key={rIdx}>
                {row.map((symbol, sIdx) => (
                  <button
                    key={`${rIdx}-${sIdx}`}
                    onClick={() => symbol && ELEMENTS_DATA[symbol] && setSelectedSymbol(symbol)}
                    className={`
                      aspect-square flex items-center justify-center text-[8px] md:text-xs font-bold rounded transition-all
                      ${!symbol ? 'invisible' : ''}
                      ${symbol && !ELEMENTS_DATA[symbol] ? 'opacity-20 cursor-default bg-slate-900' : ''}
                      ${symbol && ELEMENTS_DATA[symbol]?.heroImage === '/placeholder.svg' ? 'opacity-40 hover:opacity-100 bg-slate-800' : symbol && ELEMENTS_DATA[symbol] ? 'bg-slate-800 hover:bg-blue-600 hover:scale-110 active:scale-95 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : ''}
                      ${selectedSymbol === symbol ? 'ring-2 ring-blue-400 bg-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] opacity-100' : ''}
                    `}
                  >
                    {symbol}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="text-xs text-slate-500 mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-900 ring-1 ring-blue-400 rounded"></div>
              <span>Selecionado</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-slate-800 rounded"></div>
              <span>Disponível</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <div className="w-3 h-3 bg-slate-800 rounded"></div>
              <span>Em desenvolvimento</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Visualização da Carta */}
        <div className="lg:w-96 w-full flex justify-center sticky top-8">
          {selectedElement ? (
            <ElementCard element={selectedElement} />
          ) : (
            <div className="w-full h-96 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-600 italic">
              Selecione um elemento para ver o herói
            </div>
          )}
        </div>
      </div>

      <footer className="mt-12 text-slate-600 text-[10px] flex flex-col items-center gap-2">
        <p>© 2026 Elemental Heroes Game - Baseado em Dados Científicos Reais</p>
        <div className="flex gap-4">
          <span>118 Elementos</span>
          <span>27 Atributos por Carta</span>
          <span>Design Futurista</span>
        </div>
      </footer>

      {/* Tailwind grid config for 18 columns */}
      <style>{`
        .grid-cols-18 {
          grid-template-columns: repeat(18, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
};

export default Index;
