import React, { useState, useMemo } from 'react';
import { ELEMENTS_DATA, PeriodicElement } from '@/data/elements';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpAZ, Hash, Pencil, Search, Trash2 } from 'lucide-react';

type SortMode = 'atomic' | 'alpha';

const getCategoryName = (symbol: string, number: number): string => {
  if (["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(symbol)) return "Gás Nobre";
  if (["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(symbol)) return "Metal Alcalino";
  if (["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(symbol)) return "Metal Alcalino Terroso";
  if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(symbol)) return "Semimetal";
  if (["F", "Cl", "Br", "I", "At", "Ts"].includes(symbol)) return "Halogênio";
  if (["H", "C", "N", "O", "P", "S", "Se"].includes(symbol)) return "Nao Metal";
  if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(symbol)) return "Outro Metal";
  if ((number >= 57 && number <= 71)) return "Lantanídeo";
  if ((number >= 89 && number <= 103)) return "Actinídeo";
  return "Metal de Transição";
};

const calcRarity = (el: PeriodicElement) => {
  if (el.rarity) return el.rarity;
  const avg = el.attributes.reduce((a, c) => a + c.score, 0) / 27;
  if (avg > 85) return 'Lendário';
  if (avg > 70) return 'Épico';
  if (avg > 50) return 'Raro';
  if (avg > 30) return 'Incomum';
  return 'Comum';
};

const calcPower = (el: PeriodicElement) =>
  Math.round(el.attributes.reduce((a, c) => a + c.score, 0) / 27);

const rarityStyle = (r: string) => {
  switch (r) {
    case 'Lendário': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
    case 'Épico': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    case 'Raro': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
    case 'Incomum': return 'bg-green-500/20 text-green-400 border-green-500/40';
    default: return 'bg-slate-500/20 text-slate-300 border-slate-500/40';
  }
};

type ElementListProps = {
  onSelect?: (symbol: string) => void;
  canManage?: boolean;
  onEdit?: (symbol: string) => void;
  onDelete?: (symbol: string) => void;
};

export const ElementList: React.FC<ElementListProps> = ({ onSelect, canManage = false, onEdit, onDelete }) => {
  const [sort, setSort] = useState<SortMode>('atomic');
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const elements = useMemo(() => {
    const list = Object.values(ELEMENTS_DATA).filter(
      (el) => el && el.symbol !== 'Element' && el.symbol !== 'Elemento' && el.name
    );
    const filtered = list.filter((el) => {
      if (categoryFilter && getCategoryName(el.symbol, el.number) !== categoryFilter) return false;
      if (query.trim() && ![el.name, el.symbol, el.heroName].some((s) => s?.toLowerCase().includes(query.toLowerCase()))) return false;
      return true;
    });
    return [...filtered].sort((a, b) =>
      sort === 'atomic'
        ? a.number - b.number
        : a.name.localeCompare(b.name, 'pt-BR')
    );
  }, [sort, query, categoryFilter]);


  return (
    <div className="w-full max-w-[1280px] mx-auto bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl p-4 md:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tight">LISTA DOS ELEMENTOS</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            Visão geral · {elements.length} elementos
          </p>
        </div>
        <div className="md:ml-auto flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar nome, símbolo, herói..."
              className="pl-9 bg-slate-950/60 border-white/10 w-64"
            />
          </div>
          <Button
            variant={sort === 'atomic' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSort('atomic')}
            className="gap-2"
          >
            <Hash className="w-4 h-4" /> Nº Atômico
          </Button>
          <Button
            variant={sort === 'alpha' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSort('alpha')}
            className="gap-2"
          >
            <ArrowUpAZ className="w-4 h-4" /> A-Z
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/5">
        <table className="w-full min-w-[1120px] text-sm">
          <thead className="bg-slate-950/60 text-slate-400 uppercase text-xs tracking-widest">
            <tr>
              <th className="py-3 px-4 text-left font-bold">#</th>
              <th className="py-3 px-4 text-left font-bold">Imagem</th>
              <th className="py-3 px-4 text-left font-bold">Símbolo</th>
              <th className="py-3 px-4 text-left font-bold">Nome</th>
              <th className="py-3 px-4 text-left font-bold">Herói</th>
              <th className="py-3 px-4 text-left font-bold">Categoria</th>
              <th className="py-3 px-4 text-left font-bold">Raridade</th>
              <th className="py-3 px-4 text-left font-bold">Poder</th>
              {canManage && <th className="py-3 px-4 text-left font-bold">Ações</th>}
            </tr>
          </thead>
          <tbody>
            {elements.map((el) => {
              const rarity = calcRarity(el);
              const power = calcPower(el);
              const category = getCategoryName(el.symbol, el.number);
              const isVideo = el.heroImage?.endsWith('.mp4');
              return (
                <tr
                  key={el.symbol}
                  onClick={() => onSelect?.(el.symbol)}
                  className="border-t border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4 text-slate-400 font-mono">{el.number}</td>
                  <td className="py-3 px-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 border border-white/10">
                      {isVideo ? (
                        <video src={el.heroImage} muted className="w-full h-full object-cover" />
                      ) : (
                        <img src={el.heroImage} alt={el.heroName} className="w-full h-full object-cover" />
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center justify-center min-w-9 h-9 px-2 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30 font-black">
                      {el.symbol}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold">{el.name}</td>
                  <td className="py-3 px-4 text-blue-300">{el.heroName}</td>
                  <td className="py-3 px-4 text-slate-300">{category}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className={`${rarityStyle(rarity)} font-bold`}>
                      {rarity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 font-black text-white">{power}</td>
                  {canManage && (
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          title="Editar carta"
                          className="h-8 w-8 text-slate-400 hover:text-blue-300 hover:bg-blue-500/10"
                          onClick={(event) => {
                            event.stopPropagation();
                            (onEdit ?? onSelect)?.(el.symbol);
                          }}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          title="Exclusão desativada para preservar a tabela periódica"
                          disabled={!onDelete}
                          className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10 disabled:opacity-70 disabled:text-red-400"
                          onClick={(event) => {
                            event.stopPropagation();
                            onDelete?.(el.symbol);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
            {elements.length === 0 && (
              <tr>
                <td colSpan={canManage ? 9 : 8} className="py-10 text-center text-slate-500 italic">
                  Nenhum elemento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
