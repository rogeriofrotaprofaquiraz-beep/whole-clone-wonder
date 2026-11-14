import { useState } from "react";
import { Button } from "@/components/ui/button";
import { APPEARANCE_LABELS, APPEARANCE_GROUPS, APPEARANCE_OPTIONS } from "@/lib/heroAppearance";
import { buildAvatarDataUrl } from "@/lib/localAvatar";
import { Check } from "lucide-react";

type Props = {
  appearance: Record<string, string>;
  symbol: string;
  elementName: string;
  busy?: boolean;
  onApplyOption: (key: string, value: string) => Promise<void> | void;
  onSave: () => Promise<void> | void;
};

/** Montagem do herói por módulos: arrastar a aparência para cima do personagem. 100% local, sem IA. */
export function AvatarModuleBuilder({ appearance, symbol, elementName, busy, onApplyOption, onSave }: Props) {
  const keys = APPEARANCE_GROUPS.flatMap((g) => g.keys).filter((k) => APPEARANCE_OPTIONS[k]);
  const [cat, setCat] = useState(keys[0]);
  const [over, setOver] = useState(false);
  const preview = buildAvatarDataUrl(appearance, symbol);

  const drop = (e: React.DragEvent) => {
    e.preventDefault(); setOver(false);
    const raw = e.dataTransfer.getData("text/plain");
    const [k, v] = raw.split("::");
    if (k && v) onApplyOption(k, v);
  };

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-4 items-start">
      <div>
        <div
          onDragOver={(e) => { e.preventDefault(); setOver(true); }}
          onDragLeave={() => setOver(false)}
          onDrop={drop}
          className={`relative aspect-[2/3] rounded-2xl overflow-hidden border-4 border-dashed transition-all bg-background ${over ? "border-primary scale-[1.02]" : "border-border"}`}
        >
          <img src={preview} alt={`Herói montado de ${elementName}`} className="w-full h-full object-contain pointer-events-none" />
          {over && <div className="absolute inset-0 flex items-center justify-center bg-primary/20 text-sm font-black">Solte aqui</div>}
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-1">Começa em {elementName} e muda quando você sobe de nível.</p>
        <Button className="w-full mt-2 font-black" disabled={busy} onClick={() => onSave()}>✅ Usar este herói (grátis)</Button>
      </div>
      <div>
        <p className="text-[11px] font-bold mb-2">Escolha um módulo e <b>arraste</b> para cima do personagem (ou toque para aplicar).</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {keys.map((k) => (
            <button key={k} type="button" onClick={() => setCat(k)}
              className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase border ${cat === k ? "bg-primary text-primary-foreground border-primary" : "border-border"}`}>
              {APPEARANCE_LABELS[k] ?? k}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {APPEARANCE_OPTIONS[cat].map((o: any) => {
            const selected = appearance?.[cat] === o.v;
            const thumb = buildAvatarDataUrl({ ...appearance, [cat]: o.v }, symbol);
            return (
              <button key={o.v} type="button" draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", `${cat}::${o.v}`)}
                onClick={() => onApplyOption(cat, o.v)}
                className={`relative rounded-xl border-2 p-1 cursor-grab active:cursor-grabbing transition-all hover:scale-105 ${selected ? "border-primary ring-2 ring-primary" : "border-border"}`}>
                <img src={thumb} alt={o.l} className="w-full aspect-square object-contain pointer-events-none" />
                <span className="block text-[10px] font-black truncate">{"e" in o ? `${o.e} ` : ""}{o.l}</span>
                {selected && <Check className="absolute top-1 right-1 w-3 h-3 text-primary" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
