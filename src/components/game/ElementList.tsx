import React, { useState, useMemo } from 'react';
import { ELEMENTS_DATA, PeriodicElement } from '@/data/elements';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowUpAZ, Hash, Pencil, Search, Trash2 } from 'lucide-react';
import { HeroMiniCard } from './HeroMiniCard';
import { getFamily, FAMILY_ORDER } from '@/lib/heroStyles';

type SortMode = 'atomic' | 'alpha';

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
      if (categoryFilter && getFamily(el.symbol, el.number) !== categoryFilter) return false;
      if (query.trim() && ![el.name, el.symbol, el.heroName].some((s) => s?.toLowerCase().includes(query.toLowerCase()))) return false;
      return true;
    });
    return [...filtered].sort((a, b) =>
      sort === 'atomic' ? a.number - b.number : a.name.localeCompare(b.name, 'pt-BR')
    );
  }, [sort, query, categoryFilter]);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl p-4 md:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tight">GALERIA DE HERÓIS</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            {elements.length} elementos
            {categoryFilter && (
              <button
                type="button"
                onClick={() => setCategoryFilter(null)}
                className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 normal-case tracking-normal hover:bg-purple-500/30"
              >
                {categoryFilter} ✕
              </button>
            )}
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
          <Button variant={sort === 'atomic' ? 'default' : 'outline'} size="sm" onClick={() => setSort('atomic')} className="gap-2">
            <Hash className="w-4 h-4" /> Nº Atômico
          </Button>
          <Button variant={sort === 'alpha' ? 'default' : 'outline'} size="sm" onClick={() => setSort('alpha')} className="gap-2">
            <ArrowUpAZ className="w-4 h-4" /> A-Z
          </Button>
        </div>
      </div>

      {/* Family filter chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {FAMILY_ORDER.map((fam) => (
          <button
            key={fam}
            type="button"
            onClick={() => setCategoryFilter((c) => (c === fam ? null : fam))}
            className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border transition-colors ${
              categoryFilter === fam
                ? 'bg-purple-500/30 text-purple-100 border-purple-400/60'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            {fam}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
        {elements.map((el) => (
          <div key={el.symbol} className="flex flex-col items-center gap-2">
            <HeroMiniCard element={el} onClick={() => onSelect?.(el.symbol)} />
            {canManage && (
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  title="Editar carta"
                  className="h-7 w-7 text-slate-400 hover:text-blue-300 hover:bg-blue-500/10"
                  onClick={(event) => {
                    event.stopPropagation();
                    (onEdit ?? onSelect)?.(el.symbol);
                  }}
                >
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  title="Exclusão desativada"
                  disabled={!onDelete}
                  className="h-7 w-7 text-red-400 hover:text-red-300 hover:bg-red-500/10 disabled:opacity-70"
                  onClick={(event) => {
                    event.stopPropagation();
                    onDelete?.(el.symbol);
                  }}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            )}
          </div>
        ))}
        {elements.length === 0 && (
          <div className="col-span-full py-10 text-center text-slate-500 italic">Nenhum elemento encontrado.</div>
        )}
      </div>
    </div>
  );
};
