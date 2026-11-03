import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type SlideStatus = "editando" | "concluido" | "revisado" | "postado";
export type DeckSlide = { title: string; emoji: string; lines: string[]; image?: string; status?: SlideStatus };
export const SLIDE_STATUS: { key: SlideStatus; label: string; cls: string }[] = [
  { key: "editando", label: "✏️ Editando", cls: "bg-amber-100 text-amber-800 border-amber-300" },
  { key: "concluido", label: "✅ Concluído", cls: "bg-sky-100 text-sky-800 border-sky-300" },
  { key: "revisado", label: "🔍 Revisado", cls: "bg-violet-100 text-violet-800 border-violet-300" },
  { key: "postado", label: "🚀 Postado", cls: "bg-emerald-100 text-emerald-800 border-emerald-300" },
];
export const norm = (t: string) => (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
/** Slides que o aluno pode ver: postados (slides antigos sem status continuam visíveis). */
export const visibleToStudent = (s: DeckSlide) => !s.status || s.status === "postado";

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
    if (idx < 0) { idx = slides.length; setSlides(a => [...a, { title: focusTitle, emoji: "📌", lines: [""], status: "editando" }]); }
    setFocusIdx(idx);
    setTimeout(() => refs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusTitle]);
  const [busy, setBusy] = useState<number | null>(null);
  const upd = (i: number, p: Partial<DeckSlide>) => setSlides(a => a.map((s, k) => (k === i ? { ...s, ...p } : s)));
  const move = (i: number, d: number) => setSlides(a => { const n = [...a]; const j = i + d; if (j < 0 || j >= n.length) return a; [n[i], n[j]] = [n[j], n[i]]; return n; });

  const upload = async (i: number, file: File) => {
    setBusy(i);
    const path = `topicos/${slug}/slide-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file);
    if (error) { setBusy(null); toast.error(error.message); return; }
    const { data } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    upd(i, { image: data?.signedUrl || "" });
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
        <Button variant="outline" onClick={() => { if (confirm("Descartar edições e voltar aos slides automáticos?")) save(null); }}>Restaurar automático</Button>
        <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => save(slides)}>Salvar slides</Button>
      </div>
      {(() => {
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
                className={`px-2 py-0.5 rounded-full border ${(s.status || "postado") === st.key ? st.cls + " font-bold" : "bg-white text-slate-500 border-slate-200"}`}>{st.label}</button>
            ))}
            <span className="ml-auto text-slate-500">{(s.status || "postado") === "postado" ? "Visível para o aluno" : "Oculto do aluno"}</span>
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
          <button type="button" className="text-xs text-violet-700" onClick={() => setSlides(a => [...a.slice(0, i + 1), { title: "Novo slide", emoji: "📌", lines: [""], status: "editando" as SlideStatus }, ...a.slice(i + 1)])}>➕ Inserir slide abaixo</button>
        </div>
            ); })}
            </div>
          </details>
        ));
      })()}
      <Button variant="outline" onClick={() => setSlides(a => [...a, { title: "Novo slide", emoji: "📌", lines: [""], status: "editando" as SlideStatus }])}>➕ Adicionar slide</Button>
    </div>
  );
}
