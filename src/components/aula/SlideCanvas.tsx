import { useRef, useState } from "react";

export type SlideHeader = { show?: boolean; bg?: string; color?: string; align?: "left" | "center" | "right"; subtitle?: string; size?: number; font?: string; bold?: boolean; italic?: boolean };
export type SlideObject = { id: string; src: string; x: number; y: number; w: number };
export type SlideTextStyle = { font?: string; size?: number; align?: "left" | "center" | "right" | "justify"; lineHeight?: number; html?: string };
export type ImagePos = { x: number; y: number; w: number };
export type CanvasSlide = {
  title: string; emoji: string; lines: string[]; image?: string; header?: SlideHeader; objects?: SlideObject[];
  textColor?: string; bg?: string; text?: SlideTextStyle; imagePos?: ImagePos | null; imageCaption?: string;
};

export const FONTS = ["Amasis MT Pro Black", "Amasis MT", "Georgia", "Arial", "Calibri", "Verdana", "Times New Roman", "Trebuchet MS", "Comic Sans MS", "Courier New"];
const SIZES = [10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 60];

/** Slide estilo PowerPoint: cabeçalho e caixa de texto com fonte, tamanho e formatação; imagem principal móvel e ajuste automático da altura. */
export default function SlideCanvas({ slide, editable, onChange, selected, onSelect }: {
  slide: CanvasSlide; editable?: boolean; onChange?: (p: Partial<CanvasSlide>) => void;
  selected?: string | null; onSelect?: (id: string | null) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState<number | null>(null);
  const h = { show: true, bg: "#5b21b6", color: "#ffffff", align: "left" as const, size: 28, font: "Amasis MT Pro Black", bold: true, ...(slide.header || {}) };
  const t: SlideTextStyle = { font: "Georgia", size: 18, align: "left", lineHeight: 1.5, ...(slide.text || {}) };
  const objs = slide.objects || [];
  const setObj = (id: string, p: Partial<SlideObject>) => onChange?.({ objects: objs.map(o => (o.id === id ? { ...o, ...p } : o)) });
  const scale = (px: number) => `clamp(${Math.max(9, px * 0.55)}px, ${px / 16}vw, ${px}px)`;

  const startDrag = (e: React.PointerEvent, cur: { x: number; y: number; w: number }, set: (p: Partial<ImagePos>) => void, mode: "move" | "resize", id: string) => {
    if (!editable || !box.current) return;
    e.preventDefault(); e.stopPropagation(); onSelect?.(id);
    const r = box.current.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY, { x: ox, y: oy, w: ow } = cur;
    const mv = (ev: PointerEvent) => {
      const dx = ((ev.clientX - sx) / r.width) * 100, dy = ((ev.clientY - sy) / r.height) * 100;
      if (mode === "move") set({ x: Math.max(0, Math.min(100 - ow, ox + dx)), y: Math.max(0, Math.min(95, oy + dy)) });
      else set({ w: Math.max(5, Math.min(100 - ox, ow + dx)) });
    };
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
  };

  const ring = editable ? "outline-none focus:ring-2 focus:ring-violet-400 rounded" : "";
  const edit = (k: "title" | "subtitle") => editable ? {
    contentEditable: true, suppressContentEditableWarning: true,
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      const v = e.currentTarget.innerText.trim();
      if (k === "title") onChange?.({ title: v }); else onChange?.({ header: { ...h, subtitle: v } });
    },
  } : {};
  const saveText = () => {
    const el = textRef.current; if (!el) return;
    onChange?.({ lines: el.innerText.split("\n"), text: { ...t, html: el.innerHTML } });
  };
  const cmd = (c: string, v?: string) => { document.execCommand(c, false, v); saveText(); };
  const setT = (p: Partial<SlideTextStyle>) => onChange?.({ text: { ...t, ...p } });
  const setH = (p: Partial<SlideHeader>) => onChange?.({ header: { ...h, ...p } });

  // Se o aluno vê texto com lacuna (lines alteradas), não usamos o html salvo.
  const htmlMatches = t.html && textRef.current == null ? true : !!t.html;
  const useHtml = !!t.html && (editable || slide.lines.join("\n") === (slide.text?.html ? htmlToText(slide.text.html) : ""));

  const pos = slide.imagePos;
  const tall = ratio !== null && ratio < 1.2; // imagem vertical/quadrada
  const imgW = tall ? "34%" : "42%";

  return (
    <div className="space-y-1">
      {editable && (
        <div className="flex flex-wrap items-center gap-1 rounded-lg border bg-slate-50 p-1.5 text-xs text-slate-800" onPointerDown={e => e.stopPropagation()}>
          <span className="font-bold px-1">Cabeçalho:</span>
          <select className="border rounded bg-white px-1 py-0.5" value={h.font} onChange={e => setH({ font: e.target.value })}>{FONTS.map(f => <option key={f} style={{ fontFamily: f }}>{f}</option>)}</select>
          <select className="border rounded bg-white px-1 py-0.5" value={h.size} onChange={e => setH({ size: Number(e.target.value) })}>{SIZES.concat([44, 52]).sort((a, b) => a - b).map(s => <option key={s}>{s}</option>)}</select>
          <Btn on={h.bold} onClick={() => setH({ bold: !h.bold })}><b>N</b></Btn>
          <Btn on={h.italic} onClick={() => setH({ italic: !h.italic })}><i>I</i></Btn>
          {(["left", "center", "right"] as const).map(a => <Btn key={a} on={h.align === a} onClick={() => setH({ align: a })}>{a === "left" ? "⯇" : a === "center" ? "≡" : "⯈"}</Btn>)}
          <label title="Fundo do cabeçalho" className="flex items-center">🎨<input type="color" value={h.bg} onChange={e => setH({ bg: e.target.value })} className="w-6 h-5" /></label>
          <label title="Cor do título" className="flex items-center"><span className="font-bold underline decoration-2">A</span><input type="color" value={h.color} onChange={e => setH({ color: e.target.value })} className="w-6 h-5" /></label>
          <span className="mx-1 h-5 w-px bg-slate-300" />
          <span className="font-bold px-1">Texto:</span>
          <select className="border rounded bg-white px-1 py-0.5" value={t.font} onChange={e => setT({ font: e.target.value })}>{FONTS.map(f => <option key={f} style={{ fontFamily: f }}>{f}</option>)}</select>
          <select className="border rounded bg-white px-1 py-0.5" value={t.size} onChange={e => setT({ size: Number(e.target.value) })}>{SIZES.map(s => <option key={s}>{s}</option>)}</select>
          <Btn onClick={() => setT({ size: Math.min(60, (t.size || 18) + 2) })}>A⁺</Btn>
          <Btn onClick={() => setT({ size: Math.max(10, (t.size || 18) - 2) })}>A⁻</Btn>
          <Btn onClick={() => cmd("bold")}><b>N</b></Btn>
          <Btn onClick={() => cmd("italic")}><i>I</i></Btn>
          <Btn onClick={() => cmd("underline")}><u>S</u></Btn>
          <Btn onClick={() => cmd("strikeThrough")}><s>ab</s></Btn>
          <label title="Marca-texto" className="flex items-center">🖍️<input type="color" defaultValue="#fde047" onChange={e => cmd("hiliteColor", e.target.value)} className="w-6 h-5" /></label>
          <label title="Cor da fonte" className="flex items-center"><span className="font-bold text-red-600">A</span><input type="color" defaultValue="#dc2626" onChange={e => cmd("foreColor", e.target.value)} className="w-6 h-5" /></label>
          <Btn onClick={() => cmd("insertUnorderedList")}>• ≡</Btn>
          <Btn onClick={() => cmd("insertOrderedList")}>1.≡</Btn>
          <Btn onClick={() => cmd("removeFormat")}>🧽</Btn>
          {(["left", "center", "right", "justify"] as const).map(a => <Btn key={a} on={t.align === a} onClick={() => setT({ align: a })}>{a === "left" ? "⯇" : a === "center" ? "≡" : a === "right" ? "⯈" : "☰"}</Btn>)}
          <select title="Espaçamento" className="border rounded bg-white px-1 py-0.5" value={t.lineHeight} onChange={e => setT({ lineHeight: Number(e.target.value) })}>{[1, 1.15, 1.5, 2].map(v => <option key={v} value={v}>↕ {v}</option>)}</select>
          {slide.image && (
            <>
              <span className="mx-1 h-5 w-px bg-slate-300" />
              {pos
                ? <Btn onClick={() => onChange?.({ imagePos: null })}>📐 Ajuste automático da imagem</Btn>
                : <Btn onClick={() => onChange?.({ imagePos: { x: 55, y: 25, w: 40 } })}>✋ Mover imagem livremente</Btn>}
            </>
          )}
        </div>
      )}
      <div ref={box} onPointerDown={() => onSelect?.(null)}
        className="relative w-full overflow-hidden rounded-xl border border-slate-300 shadow"
        style={{ background: slide.bg || "#ffffff", color: slide.textColor || "#0f172a", minHeight: 0, aspectRatio: pos || !slide.image ? "16 / 9" : undefined }}>
        {h.show && (
          <div className="px-[4%] py-[2.5%]" style={{ background: h.bg, color: h.color, textAlign: h.align, fontFamily: h.font }}>
            <div style={{ fontSize: scale(h.size), fontWeight: h.bold ? 900 : 500, fontStyle: h.italic ? "italic" : undefined }} className="leading-tight">
              <span>{slide.emoji} </span><span {...edit("title")} className={ring}>{slide.title}</span>
            </div>
            {(h.subtitle || editable) && <div {...edit("subtitle")} className={`opacity-90 min-h-[1em] ${ring}`} style={{ fontSize: scale(Math.max(12, h.size * 0.5)) }} data-placeholder="Subtítulo">{h.subtitle}</div>}
          </div>
        )}
        <div className={`px-[4%] py-[3%] flex gap-[3%] ${tall || !slide.image || pos ? "flex-row" : "flex-row"} items-start`}>
          <div ref={textRef}
            {...(editable ? { contentEditable: true, suppressContentEditableWarning: true, onBlur: saveText } : {})}
            onPointerDown={e => e.stopPropagation()}
            className={`flex-1 min-w-0 whitespace-pre-line ${editable ? "outline-none ring-1 ring-dashed ring-slate-300 focus:ring-2 focus:ring-violet-400 rounded p-1" : ""}`}
            style={{ fontFamily: t.font, fontSize: scale(t.size || 18), textAlign: t.align, lineHeight: t.lineHeight }}
            {...(useHtml ? { dangerouslySetInnerHTML: { __html: t.html! } } : { children: slide.lines.join("\n") })}
          />
          {slide.image && !pos && (
            <figure className="shrink-0 m-0" style={{ width: imgW }}>
              <img src={slide.image} alt={slide.imageCaption || slide.title} draggable={false}
                onLoad={e => setRatio(e.currentTarget.naturalWidth / Math.max(1, e.currentTarget.naturalHeight))}
                className="w-full h-auto object-contain rounded-lg" />
              {(slide.imageCaption || editable) && (
                <figcaption {...(editable ? { contentEditable: true, suppressContentEditableWarning: true, onBlur: (e: React.FocusEvent<HTMLElement>) => onChange?.({ imageCaption: e.currentTarget.innerText.trim() }) } : {})}
                  className={`mt-1 text-center italic opacity-80 min-h-[1em] ${ring}`} style={{ fontSize: scale(12) }}>
                  {slide.imageCaption || (editable ? "" : "")}
                </figcaption>
              )}
            </figure>
          )}
        </div>
        {slide.image && pos && (
          <div onPointerDown={e => startDrag(e, pos, p => onChange?.({ imagePos: { ...pos, ...p } }), "move", "__main")}
            className={`absolute ${editable ? "cursor-move" : ""} ${selected === "__main" ? "ring-2 ring-violet-500" : ""}`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: `${pos.w}%` }}>
            <img src={slide.image} alt={slide.title} draggable={false} className="w-full h-auto rounded-lg" />
            {editable && selected === "__main" && <span onPointerDown={e => startDrag(e, pos, p => onChange?.({ imagePos: { ...pos, ...p } }), "resize", "__main")} className="absolute -right-1.5 -bottom-1.5 w-3 h-3 bg-violet-600 rounded-sm cursor-se-resize" />}
          </div>
        )}
        {objs.map(o => (
          <div key={o.id} onPointerDown={e => startDrag(e, o, p => setObj(o.id, p), "move", o.id)}
            className={`absolute ${editable ? "cursor-move" : ""} ${selected === o.id ? "ring-2 ring-violet-500" : ""}`}
            style={{ left: `${o.x}%`, top: `${o.y}%`, width: `${o.w}%` }}>
            <img src={o.src} alt="" draggable={false} className="w-full h-auto rounded" />
            {editable && selected === o.id && (
              <>
                <span onPointerDown={e => startDrag(e, o, p => setObj(o.id, p), "resize", o.id)} className="absolute -right-1.5 -bottom-1.5 w-3 h-3 bg-violet-600 rounded-sm cursor-se-resize" />
                <button type="button" onPointerDown={e => e.stopPropagation()} onClick={() => onChange?.({ objects: objs.filter(x => x.id !== o.id) })}
                  className="absolute -top-3 -right-3 bg-white border rounded-full w-6 h-6 text-xs shadow">✕</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function htmlToText(html: string) {
  if (typeof document === "undefined") return "";
  const d = document.createElement("div"); d.style.whiteSpace = "pre-line"; d.innerHTML = html;
  document.body.appendChild(d); const v = d.innerText; d.remove(); return v;
}

function Btn({ on, onClick, children }: { on?: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" onMouseDown={e => e.preventDefault()} onClick={onClick}
    className={`min-w-[26px] h-6 px-1.5 rounded border ${on ? "bg-violet-100 border-violet-400" : "bg-white border-slate-300 hover:bg-slate-100"}`}>{children}</button>;
}
