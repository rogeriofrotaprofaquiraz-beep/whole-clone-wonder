import React, { useState } from 'react';
import { ELEMENTS_DATA, PeriodicElement } from '../data/elements';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const ElementCard = ({ element }: { element: PeriodicElement }) => {
  return (
    <div className="p-4 bg-slate-900 border-2 border-blue-500 rounded-xl w-full max-w-sm text-white font-sans shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-2xl font-bold text-blue-400 italic uppercase">{element.name}</span>
          <p className="text-xs text-blue-300/70">{element.heroName}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">Nº {element.number}</span>
          <span className="text-xl font-black text-blue-500">{element.symbol}</span>
        </div>
      </div>
      
      <div className="h-[450px] bg-slate-800 rounded-lg mb-3 flex items-start justify-center border border-slate-700 overflow-hidden relative group shadow-inner">
        <img 
          src={element.heroImage} 
          alt={element.heroName}
          className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[11px] italic">
          "{element.heroDescription}"
        </div>
      </div>

      <ScrollArea className="h-64 pr-2">
        <div className="space-y-1.5 text-[11px]">
          {element.attributes.map((attr) => (
            <div key={attr.id} className="group border-b border-slate-800 pb-1 hover:bg-white/5 p-1 rounded transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-slate-400">{attr.label}</span>
                <span className="font-bold text-yellow-400 ml-2 text-right">{attr.value}</span>
              </div>
              <div className="flex justify-between items-center mt-0.5">
                <div className="w-full bg-slate-700 h-1 rounded-full mr-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${attr.score > 70 ? 'bg-green-500' : attr.score > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${attr.score}%` }}
                  ></div>
                </div>
                <span className="text-[9px] font-mono text-slate-500 w-4">{attr.score}</span>
              </div>
              <div className="hidden group-hover:block text-[9px] text-blue-300 mt-1 italic">
                {attr.justification}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="mt-3 flex justify-between items-center pt-2 border-t border-slate-700">
        <div className="text-[10px] text-slate-400">Poder Médio</div>
        <div className="text-lg font-black text-blue-400">
          {(element.attributes.reduce((acc, curr) => acc + curr.score, 0) / 27).toFixed(1)}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("Fe");
  const selectedElement = ELEMENTS_DATA[selectedSymbol];

  // Grade simplificada da Tabela Periódica
  const periodicTableLayout = [
    ["H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He"],
    ["Li", "Be", "", "", "", "", "", "", "", "", "", "", "B", "C", "N", "O", "F", "Ne"],
    ["Na", "Mg", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P", "S", "Cl", "Ar"],
    ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
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
                      aspect-square flex items-center justify-center text-[10px] md:text-sm font-bold rounded transition-all
                      ${!symbol ? 'invisible' : ''}
                      ${!ELEMENTS_DATA[symbol] ? 'opacity-20 cursor-not-allowed bg-slate-800' : 'bg-slate-800 hover:bg-blue-600 hover:scale-110 active:scale-95'}
                      ${selectedSymbol === symbol ? 'ring-2 ring-blue-400 bg-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}
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
