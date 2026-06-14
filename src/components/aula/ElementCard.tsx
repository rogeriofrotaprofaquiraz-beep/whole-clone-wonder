import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Element = {
  symbol: string; number: number; name: string;
  rarity: string | null; attributes: any;
};

const RARITY_COLOR: Record<string, string> = {
  comum: "#94A3B8",
  raro: "#3B82F6",
  "épico": "#A855F7",
  lendário: "#F59E0B",
};

/** Detecta nomes ou símbolos de elementos num texto. Procura símbolos com word-boundary + maiúsculas e nomes (case-insensitive, sem acento). */
export function detectElements(text: string, elements: Element[]): Element[] {
  const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const t = norm(text);
  const found = new Map<string, Element>();
  for (const el of elements) {
    if (t.includes(norm(el.name))) { found.set(el.symbol, el); continue; }
    // symbol: \b + exact case (Na, Cl etc.)
    const re = new RegExp(`(^|[^A-Za-z])${el.symbol}(?![a-z])`, "g");
    if (re.test(text)) found.set(el.symbol, el);
  }
  return [...found.values()];
}

export function ElementCardView({ element, onClose }: { element: Element; onClose?: () => void }) {
  const color = RARITY_COLOR[element.rarity ?? "comum"] ?? RARITY_COLOR.comum;
  const cat = element.attributes?.category ?? "";
  return (
    <Card className="relative p-0 overflow-hidden w-56 animate-in zoom-in-95 fade-in duration-300"
          style={{ border: `3px solid ${color}`, boxShadow: `0 8px 24px ${color}55` }}>
      {onClose && (
        <button onClick={onClose} className="absolute top-1 right-1 z-10 bg-white/80 rounded-full p-1 hover:bg-white">
          <X size={14} />
        </button>
      )}
      <div className="p-3 text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}AA)` }}>
        <div className="flex justify-between items-start">
          <div className="text-xs opacity-90">#{element.number}</div>
          <Badge variant="secondary" className="text-[10px] uppercase">{element.rarity ?? "comum"}</Badge>
        </div>
        <div className="text-5xl font-black text-center my-2">{element.symbol}</div>
        <div className="text-center text-sm font-bold">{element.name}</div>
      </div>
      <div className="p-3 bg-white text-center">
        <div className="text-xs text-muted-foreground capitalize">{cat}</div>
      </div>
    </Card>
  );
}

/** Hook que carrega elementos uma vez e detecta no texto. */
export function useDetectedElements(text: string | undefined | null) {
  const [all, setAll] = useState<Element[]>([]);
  useEffect(() => {
    supabase.from("elements").select("symbol,number,name,rarity,attributes")
      .then(({ data }) => setAll((data as any) ?? []));
  }, []);
  if (!text || !all.length) return [];
  return detectElements(text, all);
}

export function ElementCardsPopup({ text }: { text: string }) {
  const detected = useDetectedElements(text);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const visible = detected.filter((e) => !dismissed.has(e.symbol));
  if (!visible.length) return null;
  return (
    <div className="flex flex-wrap justify-center gap-3 my-3">
      {visible.map((e) => (
        <ElementCardView key={e.symbol} element={e}
          onClose={() => setDismissed((d) => new Set(d).add(e.symbol))} />
      ))}
    </div>
  );
}
