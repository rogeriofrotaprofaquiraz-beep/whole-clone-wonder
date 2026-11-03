import { useRef } from "react";

export type SlideHeader = { show?: boolean; bg?: string; color?: string; align?: "left" | "center" | "right"; subtitle?: string; size?: number };
export type SlideObject = { id: string; src: string; x: number; y: number; w: number };
export type CanvasSlide = { title: string; emoji: string; lines: string[]; image?: string; header?: SlideHeader; objects?: SlideObject[]; textColor?: string; bg?: string };

/** Slide 16:9 estilo PowerPoint: cabeçalho configurável, texto e imagens soltas posicionáveis. */
export default function SlideCanvas({ slide, editable, onChange, selected, onSelect }: {
  slide: CanvasSlide; editable?: boolean; onChange?: (p: Partial<CanvasSlide>) => void;
  selected?: string | null; onSelect?: (id: string | null) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const h = { show: true, bg: "#5b21b6", color: "#ffffff", align: "left" as const, size: 28, ...(slide.header || {}) };
  const objs = slide.objects || [];
  const setObj = (id: string, p: Partial<SlideObject>) => onChange?.({ objects: objs.map(o => (o.id === id ? { ...o, ...p } : o)) });

  const drag = (e: React.PointerEvent, o: SlideObject, mode: "move" | "resize") => {
    if (!editable || !box.current) return;
    e.preventDefault(); e.stopPropagation(); onSelect?.(o.id);
    const r = box.current.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY, ox = o.x, oy = o.y, ow = o.w;
    const mv = (ev: PointerEvent) => {
      const dx = ((ev.clientX - sx) / r.width) * 100, dy = ((ev.clientY - sy) / r.height) * 100;
      if (mode === "move") setObj(o.id, { x: Math.max(0, Math.min(100 - ow, ox + dx)), y: Math.max(0, Math.min(95, oy + dy)) });
      else setObj(o.id, { w: Math.max(5, Math.min(100 - ox, ow + dx)) });
    };
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up);
  };

  const edit = (k: "title" | "subtitle" | "lines") => editable ? {
    contentEditable: true, suppressContentEditableWarning: true,
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      const t = e.currentTarget.innerText;
      if (k === "title") onChange?.({ title: t.trim() });
      else if (k === "subtitle") onChange?.({ header: { ...h, subtitle: t.trim() } });
      else onChange?.({ lines: t.split("\n") });
    },
    className: "outline-none focus:ring-2 focus:ring-violet-400 rounded",
  } : {};

  return (
    <div ref={box} onPointerDown={() => onSelect?.(null)}
      className="relative w-full aspect-video overflow-hidden rounded-xl border border-slate-300 shadow select-none"
      style={{ background: slide.bg || "#ffffff", color: slide.textColor || "#0f172a" }}>
      {h.show && (
        <div className="px-[4%] py-[2.5%]" style={{ background: h.bg, color: h.color, textAlign: h.align }}>
          <div style={{ fontSize: `clamp(14px, ${h.size / 16}vw, ${h.size}px)` }} className="font-black leading-tight">
            <span>{slide.emoji} </span><span {...edit("title")}>{slide.title}</span>
          </div>
          {(h.subtitle || editable) && <div {...edit("subtitle")} className={`text-sm opacity-90 ${editable ? "outline-none focus:ring-2 focus:ring-violet-400 rounded min-h-[1em]" : ""}`}>{h.subtitle || (editable ? "" : "")}</div>}
        </div>
      )}
      <div className="px-[4%] py-[3%] flex gap-[3%]">
        <div {...edit("lines")} className={`flex-1 whitespace-pre-line text-[clamp(11px,1.2vw,18px)] leading-relaxed ${editable ? "outline-none focus:ring-2 focus:ring-violet-400 rounded" : ""}`}>
          {slide.lines.join("\n")}
        </div>
        {slide.image && <img src={slide.image} alt="" className="w-[38%] max-h-[60%] object-cover rounded-lg" />}
      </div>
      {objs.map(o => (
        <div key={o.id} onPointerDown={e => drag(e, o, "move")}
          className={`absolute ${editable ? "cursor-move" : ""} ${selected === o.id ? "ring-2 ring-violet-500" : ""}`}
          style={{ left: `${o.x}%`, top: `${o.y}%`, width: `${o.w}%` }}>
          <img src={o.src} alt="" draggable={false} className="w-full h-auto rounded" />
          {editable && selected === o.id && (
            <>
              <span onPointerDown={e => drag(e, o, "resize")} className="absolute -right-1.5 -bottom-1.5 w-3 h-3 bg-violet-600 rounded-sm cursor-se-resize" />
              <button type="button" onPointerDown={e => e.stopPropagation()} onClick={() => onChange?.({ objects: objs.filter(x => x.id !== o.id) })}
                className="absolute -top-3 -right-3 bg-white border rounded-full w-6 h-6 text-xs shadow">✕</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
