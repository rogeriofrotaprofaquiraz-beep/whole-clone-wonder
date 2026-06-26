import React, { useMemo, useState } from "react";
import { ELEMENTS_DATA, PeriodicElement } from "@/data/elements";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpAZ, Hash, Search } from "lucide-react";
import { HeroMiniCard } from "./HeroMiniCard";
import { getFamily, FAMILY_ORDER, FAMILY_BADGE } from "@/lib/heroStyles";

type SortMode = "atomic" | "alpha";

type Props = {
  onSelect?: (symbol: string) => void;
};

export const HeroCollection: React.FC<Props> = ({ onSelect }) => {
  const [sort, setSort] = useState<SortMode>("atomic");
  const [query, setQuery] = useState("");

  const grouped = useMemo(() => {
    const list = Object.values(ELEMENTS_DATA).filter(
      (el) => el && el.symbol !== "Element" && el.symbol !== "Elemento" && el.name
    );
    const q = query.trim().toLowerCase();
    const filtered = list.filter((el) =>
      !q || [el.name, el.symbol, el.heroName].some((s) => s?.toLowerCase().includes(q))
    );
    const byFamily = new Map<string, PeriodicElement[]>();
    for (const el of filtered) {
      const fam = getFamily(el.symbol, el.number);
      if (!byFamily.has(fam)) byFamily.set(fam, []);
      byFamily.get(fam)!.push(el);
    }
    for (const arr of byFamily.values()) {
      arr.sort((a, b) =>
        sort === "atomic" ? a.number - b.number : a.name.localeCompare(b.name, "pt-BR")
      );
    }
    return FAMILY_ORDER
      .map((fam) => ({ fam, items: byFamily.get(fam) ?? [] }))
      .filter((g) => g.items.length > 0);
  }, [sort, query]);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl p-4 md:p-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tight">COLEÇÃO</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            Agrupada por classificação química
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
          <Button variant={sort === "atomic" ? "default" : "outline"} size="sm" onClick={() => setSort("atomic")} className="gap-2">
            <Hash className="w-4 h-4" /> Nº Atômico
          </Button>
          <Button variant={sort === "alpha" ? "default" : "outline"} size="sm" onClick={() => setSort("alpha")} className="gap-2">
            <ArrowUpAZ className="w-4 h-4" /> A-Z
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {grouped.map(({ fam, items }) => {
          const fb = FAMILY_BADGE[fam as keyof typeof FAMILY_BADGE];
          return (
            <section key={fam}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${fb.bg} ${fb.text} ${fb.border} ${fb.glow} mb-4`}>
                <span className="font-black uppercase tracking-widest text-sm">{fam}</span>
                <span className="text-xs opacity-70">· {items.length}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
                {items.map((el) => (
                  <HeroMiniCard key={el.symbol} element={el} onClick={() => onSelect?.(el.symbol)} />
                ))}
              </div>
            </section>
          );
        })}
        {grouped.length === 0 && (
          <div className="py-12 text-center text-slate-500 italic">Nenhum elemento encontrado.</div>
        )}
      </div>
    </div>
  );
};
