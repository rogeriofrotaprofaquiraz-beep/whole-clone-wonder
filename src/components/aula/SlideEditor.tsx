import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic } from "lucide-react";

export type Slide = {
  v: 1; title: string; body: string; bg: string; color: string; size: number;
  align: "left" | "center" | "right"; bold: boolean; italic: boolean;
  layout: "top" | "left" | "right" | "none"; image: string | null;
};

const THEMES = [
  { bg: "hsl(0 0% 100%)", color: "hsl(222 47% 11%)" },
  { bg: "hsl(222 47% 11%)", color: "hsl(0 0% 100%)" },
  { bg: "hsl(210 90% 45%)", color: "hsl(0 0% 100%)" },
  { bg: "hsl(150 60% 35%)", color: "hsl(0 0% 100%)" },
  { bg: "hsl(30 95% 55%)", color: "hsl(222 47% 11%)" },
  { bg: "hsl(330 70% 50%)", color: "hsl(0 0% 100%)" },
  { bg: "hsl(48 100% 88%)", color: "hsl(222 47% 11%)" },
];

export function parseSlide(raw: string | null, image: string | null = null): Slide | null {
  if (!raw) return null;
  try { const s = JSON.parse(raw); if (s?.v === 1) return s; } catch { /* texto antigo */ }
  return { v: 1, title: "", body: raw, ...THEMES[0], size: 22, align: "left", bold: false, italic: false, layout: image ? "top" : "none", image };
}

export function SlideView({ slide }: { slide: Slide }) {
  const img = slide.image && slide.layout !== "none" ? <img src={slide.image} alt="" className="max-h-full max-w-full object-contain rounded-lg" /> : null;
  const text = (
    <div className="flex-1 min-w-0 space-y-3" style={{ textAlign: slide.align }}>
      {slide.title && <div className="font-black" style={{ fontSize: slide.size * 1.6 }}>{slide.title}</div>}
      <div className="whitespace-pre-line leading-relaxed" style={{ fontSize: slide.size, fontWeight: slide.bold ? 700 : 400, fontStyle: slide.italic ? "italic" : "normal" }}>{slide.body}</div>
    </div>
  );
  const dir = slide.layout === "top" ? "flex-col" : slide.layout === "right" ? "flex-row-reverse" : "flex-row";
  return (
    <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden p-[4%] flex items-center" style={{ background: slide.bg, color: slide.color }}>
      <div className={`flex ${dir} gap-6 items-center w-full h-full`}>
        {img && <div className={`flex items-center justify-center ${slide.layout === "top" ? "h-2/5" : "w-2/5 h-full"}`}>{img}</div>}
        {text}
      </div>
    </div>
  );
}

/** Editor de slide no estilo PowerPoint: prévia ao vivo + barra de formatação. */
export function SlideEditor({ value, image, onChange }: { value: string | null; image: string | null; onChange: (v: string | null) => void }) {
  const s: Slide = parseSlide(value, image) ?? { v: 1, title: "", body: "", ...THEMES[0], size: 22, align: "left", bold: false, italic: false, layout: image ? "top" : "none", image };
  const set = (p: Partial<Slide>) => onChange(JSON.stringify({ ...s, ...p }));
  const tog = (on: boolean): "default" | "outline" => (on ? "default" : "outline");
  return (
    <div className="space-y-2 border rounded-lg p-2">
      <div className="flex flex-wrap items-center gap-1">
        {THEMES.map((t, k) => (
          <button key={k} type="button" title="Tema" onClick={() => set(t)} className="w-6 h-6 rounded border-2" style={{ background: t.bg, borderColor: s.bg === t.bg ? t.color : "transparent" }} />
        ))}
        <span className="mx-1 text-muted-foreground">|</span>
        <Button type="button" size="icon" variant={tog(s.bold)} className="h-7 w-7" onClick={() => set({ bold: !s.bold })}><Bold size={14} /></Button>
        <Button type="button" size="icon" variant={tog(s.italic)} className="h-7 w-7" onClick={() => set({ italic: !s.italic })}><Italic size={14} /></Button>
        <Button type="button" size="icon" variant={tog(s.align === "left")} className="h-7 w-7" onClick={() => set({ align: "left" })}><AlignLeft size={14} /></Button>
        <Button type="button" size="icon" variant={tog(s.align === "center")} className="h-7 w-7" onClick={() => set({ align: "center" })}><AlignCenter size={14} /></Button>
        <Button type="button" size="icon" variant={tog(s.align === "right")} className="h-7 w-7" onClick={() => set({ align: "right" })}><AlignRight size={14} /></Button>
        <select className="border rounded h-7 text-xs bg-background" value={s.size} onChange={(e) => set({ size: +e.target.value })}>
          {[14, 16, 18, 22, 26, 32, 40].map((n) => <option key={n} value={n}>{n} pt</option>)}
        </select>
        <select className="border rounded h-7 text-xs bg-background" value={s.layout} onChange={(e) => set({ layout: e.target.value as Slide["layout"], image: image ?? s.image })}>
          <option value="none">Sem imagem</option>
          <option value="top">Imagem em cima</option>
          <option value="left">Imagem à esquerda</option>
          <option value="right">Imagem à direita</option>
        </select>
        {value && <Button type="button" size="sm" variant="ghost" className="h-7 text-xs" onClick={() => onChange(null)}>Apagar slide</Button>}
      </div>
      <Input placeholder="Título do slide" value={s.title} onChange={(e) => set({ title: e.target.value })} />
      <textarea className="w-full border rounded-md p-2 bg-background text-sm" rows={4} placeholder="Texto do slide" value={s.body} onChange={(e) => set({ body: e.target.value })} />
      <div className="text-xs text-muted-foreground">Prévia</div>
      <SlideView slide={{ ...s, image: image ?? s.image }} />
    </div>
  );
}
