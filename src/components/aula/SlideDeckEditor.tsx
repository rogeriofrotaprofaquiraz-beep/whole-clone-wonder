import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import SlideCanvas, { type CanvasSlide, type SlideHeader, type SlideObject } from "./SlideCanvas";

export type SlideStatus = "nao_editado" | "editando" | "postado" | "concluido" | "revisado";
export type DeckSlide = CanvasSlide & { status?: SlideStatus };
export const SLIDE_STATUS: { key: SlideStatus; label: string; cls: string }[] = [
  { key: "nao_editado", label: "⏸️ Não editado", cls: "bg-orange-700 text-white border-orange-800" },
  { key: "editando", label: "✏️ Editando", cls: "bg-yellow-300 text-yellow-900 border-yellow-500" },
  { key: "postado", label: "🚀 Postado", cls: "bg-green-600 text-white border-green-700" },
];
/** Status normalizado (antigos "concluído/revisado" contam como editando; sem status = postado). */
export const statusOf = (s?: { status?: SlideStatus }): SlideStatus => {
  const v = s?.status || "postado"; return v === "concluido" || v === "revisado" ? "editando" : v;
};
export const norm = (t: string) => (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
/** Slides que o aluno pode ver: postados (slides antigos sem status continuam visíveis). */
export const visibleToStudent = (s: DeckSlide) => statusOf(s) === "postado";

/** Editor dos slides do tópico (professor/admin): texto, imagem, ordem, inserir e excluir. */
export default function SlideDeckEditor({ slug, title, lesson, initial, onSaved, onClose, focusTitle }: {
  slug: string; title: string; lesson?: string; initial: DeckSlide[]; focusTitle?: string | null;
  onSaved: (slides: DeckSlide[] | null) => void; onClose: () => void;
}) {
  const [slides, setSlides] = useState<DeckSlide[]>(() => initial.map(s => ({ ...s, lines: [...s.lines] })));
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [focusIdx, setFocusIdx] = useState<number | null>(null);
  useEffect(() => {
    if (!focusTitle) return;
    const f = norm(focusTitle);
    let idx = slides.findIndex(s => norm(s.title) === f || (norm(s.title) && (norm(s.title).includes(f) || f.includes(norm(s.title)))));
    if (idx < 0) { idx = slides.length; setSlides(a => [...a, { title: focusTitle, emoji: "📌", lines: [""], status: "nao_editado" }]); }
    setFocusIdx(idx);
    setTimeout(() => refs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusTitle]);
  const [busy, setBusy] = useState<number | null>(null);
  const [preview, setPreview] = useState(false);
  const [pv, setPv] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const addObject = (i: number, src: string) => setSlides(a => a.map((s, k) => k === i ? { ...s, objects: [...(s.objects || []), { id: crypto.randomUUID(), src, x: 55, y: 30, w: 30 }] } : s));
  const upd = (i: number, p: Partial<DeckSlide>) => setSlides(a => a.map((s, k) => (k === i ? { ...s, ...p } : s)));
  const move = (i: number, d: number) => setSlides(a => { const n = [...a]; const j = i + d; if (j < 0 || j >= n.length) return a; [n[i], n[j]] = [n[j], n[i]]; return n; });

  const upload = async (i: number, file: File, free = false) => {
    setBusy(i);
    const path = `topicos/${slug}/slide-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file);
    if (error) { setBusy(null); toast.error(error.message); return; }
    const { data } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    if (free) addObject(i, data?.signedUrl || ""); else upd(i, { image: data?.signedUrl || "" });
    setBusy(null);
  };

  const save = async (value: DeckSlide[] | null) => {
    const clean = value?.map(s => ({ ...s, lines: s.lines.map(l => l.trim()).filter(Boolean) })).filter(s => s.title.trim() || s.lines.length) ?? null;
    const { error } = await supabase.from("topic_overrides").upsert({ slug, title, lesson, slide_deck: clean as any } as any, { onConflict: "slug" });
    if (error) { toast.error(error.message); return; }
    toast.success(value ? "Slides salvos" : "Slides voltaram ao automático");
    onSaved(clean);
  };

  return (
    <div className="rounded-2xl bg-white text-slate-900 shadow-2xl mb-6 p-5 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-black mr-auto">✏️ Editar slides</h2>
        <Button variant={preview ? "default" : "outline"} onClick={() => { setPreview(p => !p); setSel(null); }}>{preview ? "🧩 Voltar à edição" : "👁️ Visualização final"}</Button>
        <Button variant="outline" onClick={() => { if (confirm("Descartar edições e voltar aos slides automáticos?")) save(null); }}>Restaurar automático</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => save(slides)}>Salvar slides</Button>
      </div>
      {preview && slides.length > 0 && (() => { const i = Math.min(pv, slides.length - 1); const s = slides[i]; return (
        <div className="space-y-3">
          <p className="text-xs text-slate-500">Versão final. Clique no título, subtítulo ou texto para editar direto; arraste as imagens e use o quadradinho do canto para mudar o tamanho.</p>
          <SlideCanvas slide={s} editable selected={sel} onSelect={setSel} onChange={p => upd(i, p)} />
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" disabled={i === 0} onClick={() => setPv(i - 1)}>◀</Button>
            <span className="text-sm font-semibold">Slide {i + 1} de {slides.length}</span>
            <Button variant="outline" disabled={i === slides.length - 1} onClick={() => setPv(i + 1)}>▶</Button>
            <label className="cursor-pointer px-3 py-1 rounded border border-violet-300 text-violet-700 bg-white text-sm">
              {busy === i ? "Enviando..." : "🖼️ Inserir imagem no slide"}
              <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) upload(i, f, true); e.target.value = ""; }} />
            </label>
            <span className="ml-auto flex gap-1">{SLIDE_STATUS.map(st => (
              <button type="button" key={st.key} onClick={() => upd(i, { status: st.key })}
                className={`px-2 py-0.5 text-xs rounded-full border ${statusOf(s) === st.key ? st.cls + " font-bold" : "bg-white text-slate-500 border-slate-200"}`}>{st.label}</button>
            ))}</span>
          </div>
        </div>); })()}
      {!preview && (() => {
        const groups: { key: string; label: string; idx: number[] }[] = [];
        slides.forEach((s, i) => {
          const m = s.title.trim().match(/^(\d+)(?:[.)\s]|$)/);
          const isHead = m && !/^\d+\.\d/.test(s.title.trim());
          const last = groups[groups.length - 1];
          if (m && (!last || last.key !== m[1])) groups.push({ key: m[1], label: isHead ? s.title.trim() : `Módulo ${m[1]}`, idx: [i] });
          else if (last) last.idx.push(i);
          else groups.push({ key: "geral", label: "Geral", idx: [i] });
        });
        return groups.map((g, gi) => (
          <details key={gi} open className="border border-violet-200 rounded-2xl p-3 bg-violet-50/40">
            <summary className="cursor-pointer font-black text-violet-800">
              {g.key === "geral" ? "📁 Geral" : `📦 Módulo ${g.key}`} — {g.label} <span className="text-xs font-normal text-slate-500">({g.idx.length} slide{g.idx.length > 1 ? "s" : ""})</span>
            </summary>
            <div className="space-y-3 mt-3">
            {g.idx.map(i => { const s = slides[i]; return (
        <div key={i} ref={el => (refs.current[i] = el)} className={`border rounded-xl p-3 space-y-2 bg-slate-50 ${focusIdx === i ? "border-violet-500 ring-2 ring-violet-300" : "border-slate-200"}`}>
          <div className="flex flex-wrap gap-1 items-center text-xs">
            <span className="font-semibold text-slate-600 mr-1">Status:</span>
            {SLIDE_STATUS.map(st => (
              <button type="button" key={st.key} onClick={() => upd(i, { status: st.key })}
                className={`px-2 py-0.5 rounded-full border ${statusOf(s) === st.key ? st.cls + " font-bold" : "bg-white text-slate-500 border-slate-200"}`}>{st.label}</button>
            ))}
            <span className="ml-auto text-slate-500">{statusOf(s) === "postado" ? "Visível para o aluno" : "Oculto do aluno"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs font-bold text-slate-500 w-14">Slide {i + 1}</span>
            <input className="w-14 border rounded px-2 py-1 text-center bg-white" value={s.emoji} onChange={e => upd(i, { emoji: e.target.value })} aria-label="Emoji" />
            <input className="flex-1 border rounded px-2 py-1 font-semibold bg-white" value={s.title} onChange={e => upd(i, { title: e.target.value })} placeholder="Título do slide" />
            <button type="button" className="px-1" onClick={() => move(i, -1)} disabled={i === 0}>▲</button>
            <button type="button" className="px-1" onClick={() => move(i, 1)} disabled={i === slides.length - 1}>▼</button>
            <button type="button" className="px-1" title="Excluir" onClick={() => setSlides(a => a.filter((_, k) => k !== i))}>🗑️</button>
          </div>
          <textarea className="w-full border rounded px-2 py-1 bg-white text-sm" rows={4} value={s.lines.join("\n")}
            onChange={e => upd(i, { lines: e.target.value.split("\n") })} placeholder="Texto do slide (cada linha vira um tópico)" />
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <input className="flex-1 min-w-[200px] border rounded px-2 py-1 bg-white" value={s.image || ""} onChange={e => upd(i, { image: e.target.value })} placeholder="Link da imagem (opcional)" />
            <label className="cursor-pointer px-3 py-1 rounded border border-violet-300 text-violet-700 bg-white">
              {busy === i ? "Enviando..." : "📤 Enviar imagem"}
              <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) upload(i, f); e.target.value = ""; }} />
            </label>
            {s.image && <><img src={s.image} alt="" className="h-12 w-20 object-cover rounded" /><button type="button" className="text-red-600 text-xs" onClick={() => upd(i, { image: "" })}>remover</button></>}
          </div>
          <details className="text-sm">
            <summary className="cursor-pointer font-semibold text-violet-700">🎨 Cabeçalho, cores e imagens soltas</summary>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <label className="flex items-center gap-1"><input type="checkbox" checked={s.header?.show !== false} onChange={e => upd(i, { header: { ...s.header, show: e.target.checked } })} /> Mostrar cabeçalho</label>
              <label className="flex items-center gap-1">Fundo do cabeçalho <input type="color" value={s.header?.bg || "#5b21b6"} onChange={e => upd(i, { header: { ...s.header, bg: e.target.value } })} /></label>
              <label className="flex items-center gap-1">Cor do título <input type="color" value={s.header?.color || "#ffffff"} onChange={e => upd(i, { header: { ...s.header, color: e.target.value } })} /></label>
              <select className="border rounded px-1 bg-white" value={s.header?.align || "left"} onChange={e => upd(i, { header: { ...s.header, align: e.target.value as any } })}>
                <option value="left">Título à esquerda</option><option value="center">Centralizado</option><option value="right">À direita</option>
              </select>
              <label className="flex items-center gap-1">Tamanho <input type="number" min={16} max={60} className="w-16 border rounded px-1 bg-white" value={s.header?.size || 28} onChange={e => upd(i, { header: { ...s.header, size: Number(e.target.value) } })} /></label>
              <input className="flex-1 min-w-[180px] border rounded px-2 py-1 bg-white" value={s.header?.subtitle || ""} onChange={e => upd(i, { header: { ...s.header, subtitle: e.target.value } })} placeholder="Subtítulo do cabeçalho (opcional)" />
              <label className="flex items-center gap-1">Fundo do slide <input type="color" value={s.bg || "#ffffff"} onChange={e => upd(i, { bg: e.target.value })} /></label>
              <label className="flex items-center gap-1">Cor do texto <input type="color" value={s.textColor || "#0f172a"} onChange={e => upd(i, { textColor: e.target.value })} /></label>
              <label className="cursor-pointer px-3 py-1 rounded border border-violet-300 text-violet-700 bg-white">
                {busy === i ? "Enviando..." : "🖼️ Imagem em qualquer lugar"}
                <input type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) upload(i, f, true); e.target.value = ""; }} />
              </label>
              <button type="button" className="px-3 py-1 rounded border bg-white" onClick={() => { const u = prompt("Link da imagem"); if (u) addObject(i, u); }}>🔗 Imagem por link</button>
            </div>
            <div className="mt-2 max-w-2xl"><SlideCanvas slide={s} editable selected={sel} onSelect={setSel} onChange={p => upd(i, p)} /></div>
          </details>
          <button type="button" className="text-xs text-violet-700" onClick={() => setSlides(a => [...a.slice(0, i + 1), { title: "Novo slide", emoji: "📌", lines: [""], status: "nao_editado" as SlideStatus }, ...a.slice(i + 1)])}>➕ Inserir slide abaixo</button>
        </div>
            ); })}
            </div>
          </details>
        ));
      })()}
      <Button variant="outline" onClick={() => setSlides(a => [...a, { title: "Novo slide", emoji: "📌", lines: [""], status: "nao_editado" as SlideStatus }])}>➕ Adicionar slide</Button>
    </div>
  );
}
