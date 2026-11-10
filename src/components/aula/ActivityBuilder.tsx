import { useMemo, useRef, useState, type ChangeEvent } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { GamePlayer, GAME_TYPES } from "./ActivityGames";
import { ACTIVITY_TYPES, OPTION_TYPES, TYPE_MENU, plainWords, convertQuestion, parseChart, blanksOf, grade, isGraded, newQuestion, type Activity, type ActivityType, type Question } from "@/lib/activities";

/** Grade de tipos de pergunta (estilo Wayground). */
export function ActivityTypePicker({ onPick }: { onPick: (t: ActivityType) => void }) {
  return (
    <div className="space-y-3">
      {(["basico", "interativo", "jogo"] as const).map(g => (
        <div key={g}>
          <p className="font-semibold text-slate-500 mb-1">{g === "basico" ? "Básico" : g === "jogo" ? "🎮 Jogos e competições" : "Interativo e de ordem superior"}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {ACTIVITY_TYPES.filter(t => t.group === g).map(t => (
              <button key={t.key} type="button" disabled={!t.ready} onClick={() => onPick(t.key)}
                className="flex items-center gap-2 px-2 py-1.5 rounded text-left text-sm hover:bg-violet-100 disabled:opacity-40 disabled:cursor-not-allowed">
                <span className={`w-7 h-7 grid place-items-center rounded text-white ${g === "basico" ? "bg-pink-500" : g === "jogo" ? "bg-amber-500" : "bg-emerald-600"}`}>{t.icon}</span>
                <span className="font-medium">{t.label}</span>{!t.ready && <span className="text-[10px] text-slate-500">em breve</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Gráfico de barras simples desenhado a partir das linhas "Rótulo: valor". */
export function MiniChart({ text }: { text?: string }) {
  const d = parseChart(text);
  if (!d.length) return null;
  const max = Math.max(...d.map(x => Math.abs(x.value)), 1);
  return (
    <div className="space-y-1 p-3 rounded-lg bg-white border">
      {d.map((x, k) => (
        <div key={k} className="flex items-center gap-2 text-sm">
          <span className="w-28 truncate text-slate-700">{x.label}</span>
          <div className="flex-1 bg-slate-100 rounded h-5 overflow-hidden"><div className="h-full bg-violet-500" style={{ width: `${(Math.abs(x.value) / max) * 100}%` }} /></div>
          <span className="w-12 text-right font-semibold text-slate-800">{x.value}</span>
        </div>))}
    </div>
  );
}

function QuestionMedia({ q }: { q: Question }) {
  const chart = q.type === "graficos" ? undefined : q.chart;
  const img = q.type === "hotspot" ? undefined : q.image;
  if (!img && !chart) return null;
  return <div className="space-y-2">{img && <img src={img} alt="" className="max-h-72 w-auto mx-auto rounded-lg border object-contain" />}<MiniChart text={chart} /></div>;
}

const label = (t: ActivityType) => ACTIVITY_TYPES.find(x => x.key === t)?.label || t;
const quizColor = (k: number) => `hsl(var(--quiz-${(k % 6) + 1}))`;

/** Editor estilo Wayground: enunciado em painel e alternativas em cartões coloridos com texto ou imagem. */
function OptionCardsEditor({ q, set, upload }: { q: Question; set: (p: Partial<Question>) => void; upload: (f: File) => Promise<string | null> }) {
  const opts = q.options || [];
  const imgs = opts.map((_, k) => q.optionImages?.[k] ?? null);
  const vertical = q.layout === "vertical";
  const fixed = q.type === "vf";
  const multi = q.type === "selecao";
  const toggleCorrect = (k: number) => {
    if (q.type === "enquete") return;
    const c = q.correct || [];
    set({ correct: multi ? (c.includes(k) ? c.filter(x => x !== k) : [...c, k]) : [k] });
  };
  const remove = (k: number) => set({
    options: opts.filter((_, j) => j !== k), optionImages: imgs.filter((_, j) => j !== k),
    correct: (q.correct || []).filter(x => x !== k).map(x => x > k ? x - 1 : x),
  });
  const pickImg = (k: number) => async (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; e.target.value = ""; if (!f) return;
    const url = await upload(f); if (url) set({ optionImages: imgs.map((x, j) => j === k ? url : x) });
  };
  const iconBtn = "w-8 h-8 grid place-items-center rounded-md bg-background/20 hover:bg-background/35 text-sm cursor-pointer";
  return (
    <div className="rounded-xl bg-quiz-panel text-quiz-panel-foreground p-4 space-y-3">
      <div className="rounded-lg border border-quiz-panel-foreground/20 p-3 min-h-[130px] flex flex-col">
        <div className="flex gap-2">
          <label className={iconBtn} title={q.image ? "Trocar imagem" : "Inserir imagem"}>🖼️
            <input type="file" accept="image/*" className="hidden" onChange={async e => { const f = e.target.files?.[0]; e.target.value = ""; if (!f) return; const url = await upload(f); if (url) set({ image: url }); }} /></label>
          {q.image && <button type="button" className={iconBtn} title="Tirar imagem" onClick={() => set({ image: undefined })}>🗑️</button>}
        </div>
        {q.image && <img src={q.image} alt="" className="max-h-40 mx-auto rounded object-contain mt-2" />}
        <textarea rows={2} value={q.prompt} onChange={e => set({ prompt: e.target.value })} placeholder="Digite a pergunta aqui"
          className="flex-1 mt-2 w-full resize-none bg-transparent text-center text-lg outline-none placeholder:text-quiz-panel-foreground/50" />
      </div>
      <div className={`flex gap-2 ${vertical ? "flex-col" : "items-stretch"}`}>
        <div className={vertical ? "space-y-2" : "flex-1 grid gap-2"} style={vertical ? undefined : { gridTemplateColumns: `repeat(${Math.max(opts.length, 1)}, minmax(0, 1fr))` }}>
          {opts.map((o, k) => {
            const ok = q.correct?.includes(k);
            return (
              <div key={k} className={`relative rounded-lg p-2 flex ${vertical ? "items-center gap-2 min-h-[64px]" : "flex-col min-h-[180px]"}`} style={{ background: quizColor(k) }}>
                <div className={`flex gap-1 ${vertical ? "order-first" : ""}`}>
                  {!fixed && opts.length > 2 && <button type="button" className={iconBtn} title="Excluir alternativa" onClick={() => remove(k)}>🗑️</button>}
                  <label className={iconBtn} title={imgs[k] ? "Trocar imagem" : "Imagem na alternativa"}>🖼️<input type="file" accept="image/*" className="hidden" onChange={pickImg(k)} /></label>
                  {imgs[k] && <button type="button" className={iconBtn} title="Tirar imagem" onClick={() => set({ optionImages: imgs.map((x, j) => j === k ? null : x) })}>✕</button>}
                </div>
                {q.type !== "enquete" && (
                  <button type="button" title="Marcar como correta" onClick={() => toggleCorrect(k)}
                    className={`${vertical ? "order-last ml-auto" : "absolute top-2 right-2"} w-7 h-7 rounded-full border-2 grid place-items-center text-xs ${ok ? "bg-quiz-correct border-quiz-panel-foreground" : "border-quiz-panel-foreground/70 bg-background/10"}`}>✓</button>
                )}
                <div className={`flex-1 flex flex-col items-center justify-center gap-1 ${vertical ? "" : "mt-1"}`}>
                  {imgs[k] && <img src={imgs[k]!} alt="" className={`${vertical ? "max-h-14" : "max-h-24"} rounded object-contain`} />}
                  <textarea rows={vertical ? 1 : 3} value={o} disabled={fixed} placeholder="Digite a opção de resposta aqui"
                    onChange={e => set({ options: opts.map((x, j) => j === k ? e.target.value : x) })}
                    className="w-full resize-none bg-transparent text-center text-base outline-none placeholder:text-quiz-panel-foreground/60" />
                </div>
              </div>
            );
          })}
        </div>
        {!fixed && opts.length < 6 && <button type="button" title="Adicionar alternativa" className={`${iconBtn} ${vertical ? "w-full" : "self-center"}`}
          onClick={() => set({ options: [...opts, ""], optionImages: [...imgs, null] })}>＋</button>}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
        {(q.type === "multipla" || q.type === "selecao") && (
          <label className="flex items-center gap-2 cursor-pointer">Múltiplas respostas corretas:
            <button type="button" role="switch" aria-checked={multi} onClick={() => set(multi ? { type: "multipla", correct: [(q.correct || [0])[0] ?? 0] } : { type: "selecao" })}
              className={`w-11 h-6 rounded-full relative transition-colors ${multi ? "bg-quiz-correct" : "bg-background/25"}`}>
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-background transition-all ${multi ? "left-[22px]" : "left-0.5"}`} /></button>
          </label>)}
        <button type="button" className="ml-auto border border-quiz-panel-foreground/40 rounded px-3 py-1.5 hover:bg-background/10"
          onClick={() => set({ layout: vertical ? "horizontal" : "vertical" })}>🔄 Alternar para o layout {vertical ? "horizontal" : "vertical"}</button>
      </div>
      <p className="text-xs opacity-75">{q.type === "enquete" ? "Enquete não tem resposta certa." : "Clique no ✓ da alternativa correta."}</p>
    </div>
  );
}

const TONE: Record<string, string> = { teal: "bg-qtype-teal", green: "bg-qtype-green", blue: "bg-qtype-blue", purple: "bg-qtype-purple", game: "bg-qtype-game" };
const toneOf = (t: ActivityType) => TONE[TYPE_MENU.find(m => m.key === t)?.tone || "teal"];

/** Menu "Tipo" estilo Wayground: muda o tipo da pergunta a qualquer momento. */
function TypeSwitcher({ q, onChange }: { q: Question; onChange: (t: ActivityType) => void }) {
  const [open, setOpen] = useState(false);
  const cur = ACTIVITY_TYPES.find(t => t.key === q.type);
  const tile = (t: ActivityType, icon?: string) => <span className={`w-7 h-7 shrink-0 grid place-items-center rounded-md text-sm text-quiz-panel-foreground ${toneOf(t)}`}>{icon}</span>;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" title="Mudar o tipo de pergunta" className="flex items-center gap-2 rounded-lg border bg-background px-2 py-1.5 font-semibold text-sm hover:bg-muted min-w-[220px]">
          {tile(q.type, cur?.icon)}<span className="flex-1 text-left">{cur?.label}</span><span className="text-xs">{open ? "▲" : "▼"}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 p-1 max-h-[70vh] overflow-y-auto">
        {TYPE_MENU.map((m, i) => {
          const t = ACTIVITY_TYPES.find(x => x.key === m.key)!;
          const sel = m.key === q.type;
          const first = i === 0 || TYPE_MENU[i - 1].tone === "purple" && m.tone !== "purple" || m.tone === "game" && TYPE_MENU[i - 1].tone !== "game";
          return (
            <div key={m.key}>
              {first && i > 0 && <p className="px-2 pt-2 pb-1 text-[11px] font-semibold uppercase text-muted-foreground">{m.tone === "game" ? "Jogos e competições" : "Outros"}</p>}
              <button type="button" onClick={() => { onChange(m.key); setOpen(false); }}
                className={`w-full flex items-center gap-3 rounded-md px-2 py-2 text-left text-[15px] font-semibold hover:bg-qtype-selected ${sel ? "bg-qtype-selected text-qtype-purple" : ""}`}>
                {tile(m.key, t.icon)}<span className="truncate">{t.label}</span>
              </button>
            </div>);
        })}
      </PopoverContent>
    </Popover>
  );
}

/** Editor das perguntas de um slide de atividade. */
export function ActivityEditor({ activity, about, onChange }: { activity: Activity; about?: string; onChange: (a: Activity) => void }) {
  const [adding, setAdding] = useState(false);
  const qs = activity.questions;
  const set = (i: number, p: Partial<Question>) => onChange({ questions: qs.map((q, k) => k === i ? { ...q, ...p } : q) });
  const inp = "border rounded px-2 py-1 bg-white text-sm";
  const uploadImg = async (file: File) => {
    const path = `activities/${Date.now()}-${file.name.replace(/[^\w.]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file);
    if (error) { toast.error(error.message); return null; }
    const { data } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    return data?.signedUrl ?? null;
  };
  return (
    <div className="space-y-3">
      {qs.map((q, i) => (
        <div key={q.id} className="border border-pink-200 rounded-lg p-3 bg-white space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-pink-700">Pergunta {i + 1}</span>
            <TypeSwitcher q={q} onChange={t => onChange({ questions: qs.map((x, k) => k === i ? convertQuestion(x, t) : x) })} />
            <button type="button" className="ml-auto" title="Excluir pergunta" onClick={() => onChange({ questions: qs.filter((_, k) => k !== i) })}>🗑️</button>
          </div>
          {OPTION_TYPES.includes(q.type) && q.options ? <>
            <OptionCardsEditor q={q} set={p => set(i, p)} upload={uploadImg} />
            <button type="button" className="text-xs px-2 py-1 rounded border border-violet-300 text-violet-700 hover:bg-violet-50" onClick={() => set(i, { chart: q.chart === undefined ? "Item A: 10\nItem B: 20\nItem C: 15" : undefined })}>📊 {q.chart === undefined ? "Inserir gráfico" : "Tirar gráfico"}</button>
            {q.chart !== undefined && <div className="grid md:grid-cols-2 gap-2">
              <div><textarea className={`${inp} w-full`} rows={4} value={q.chart} onChange={e => set(i, { chart: e.target.value })} />
                <p className="text-[11px] text-slate-500">Uma barra por linha, no formato <b>Nome: valor</b>.</p></div>
              <MiniChart text={q.chart} /></div>}
          </> : <>
          <input className={`${inp} w-full font-semibold`} value={q.prompt} onChange={e => set(i, { prompt: e.target.value })} placeholder="Enunciado" />
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <label className="cursor-pointer px-2 py-1 rounded border border-violet-300 text-violet-700 hover:bg-violet-50">🖼️ {q.image ? "Trocar imagem" : "Inserir imagem"}
              <input type="file" accept="image/*" className="hidden" onChange={async e => { const f = e.target.files?.[0]; e.target.value = ""; if (!f) return; const url = await uploadImg(f); if (url) set(i, { image: url }); }} /></label>
            {q.image && <button type="button" className="px-2 py-1 rounded border text-red-600" onClick={() => set(i, { image: undefined })}>🗑️ Tirar imagem</button>}
            <button type="button" className="px-2 py-1 rounded border border-violet-300 text-violet-700 hover:bg-violet-50" onClick={() => set(i, { chart: q.chart === undefined ? "Item A: 10\nItem B: 20\nItem C: 15" : undefined })}>📊 {q.chart === undefined ? "Inserir gráfico" : "Tirar gráfico"}</button>
          </div>
          {q.chart !== undefined && <div className="grid md:grid-cols-2 gap-2">
            <div><textarea className={`${inp} w-full`} rows={4} value={q.chart} onChange={e => set(i, { chart: e.target.value })} />
              <p className="text-[11px] text-slate-500">Uma barra por linha, no formato <b>Nome: valor</b>.</p></div>
            <MiniChart text={q.chart} /></div>}
          {q.image && <img src={q.image} alt="" className="max-h-40 rounded border object-contain" />}
          </>}
          {(q.type === "arraste" || q.type === "destaque") && <>
            <textarea className={`${inp} w-full`} rows={3} value={q.text || ""} onChange={e => set(i, { text: e.target.value })} />
            <p className="text-[11px] text-slate-500">{q.type === "arraste" ? "Coloque entre [colchetes] as palavras que o aluno vai arrastar para os espaços." : "Coloque entre [colchetes] as palavras que o aluno deve destacar."} Corretas: {blanksOf(q.text).join(", ") || "nenhuma"}</p>
            {q.type === "arraste" && <input className={`${inp} w-full`} value={(q.distractors || []).join(", ")} placeholder="Palavras extras (erradas), separadas por vírgula"
              onChange={e => set(i, { distractors: e.target.value.split(",").map(x => x.trim()) })} />}
          </>}
          {q.type === "passagem" && <textarea className={`${inp} w-full`} rows={5} value={q.media || ""} placeholder="Cole aqui o texto que o aluno vai ler" onChange={e => set(i, { media: e.target.value })} />}
          {q.type === "video" && <input className={`${inp} w-full`} value={q.media || ""} placeholder="Link do vídeo (YouTube)" onChange={e => set(i, { media: e.target.value })} />}
          {q.type === "hotspot" && (q.image ? <div className="space-y-1">
            <p className="text-[11px] text-slate-500">Clique na imagem para marcar o lugar certo.</p>
            <div className="relative inline-block cursor-crosshair" onClick={e => { const b = e.currentTarget.getBoundingClientRect(); set(i, { hotspot: { r: q.hotspot?.r ?? 10, x: ((e.clientX - b.left) / b.width) * 100, y: ((e.clientY - b.top) / b.height) * 100 } }); }}>
              <img src={q.image} alt="" className="max-h-72 rounded border" />
              {q.hotspot && <span className="absolute rounded-full border-4 border-quiz-correct bg-quiz-correct/30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: `${q.hotspot.x}%`, top: `${q.hotspot.y}%`, width: `${q.hotspot.r * 2}%`, aspectRatio: "1" }} />}
            </div>
            <label className="flex items-center gap-2 text-xs">Tamanho da área: <input type="range" min={3} max={30} value={q.hotspot?.r ?? 10} onChange={e => set(i, { hotspot: { x: q.hotspot?.x ?? 50, y: q.hotspot?.y ?? 50, r: Number(e.target.value) } })} /></label>
          </div> : <p className="text-xs text-amber-700">Insira uma imagem para marcar o ponto certo.</p>)}
          {q.type === "graficos" && <p className="text-[11px] text-slate-500">O aluno verá só os nomes das barras e terá de digitar os valores.</p>}
          {q.type === "marcacao" && !q.image && <p className="text-xs text-amber-700">Insira uma imagem com as marcações numeradas.</p>}
          {["forum", "desenhar", "audio", "resposta_video", "aberta", "nuvem"].includes(q.type) && <p className="text-[11px] text-slate-500">Sem resposta certa: vale como feita quando o aluno envia.</p>}
          {q.type === "matematica" && <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">Resposta (número):</span>
            <input className={`${inp} w-40`} inputMode="decimal" value={q.answer ?? ""} placeholder="Ex: 6,02" onChange={e => set(i, { answer: e.target.value })} />
          </div>}
          {q.options && !OPTION_TYPES.includes(q.type) && (
            <div className="space-y-1">
              {q.options.map((o, k) => (
                <div key={k} className="flex items-center gap-2">
                  {q.type !== "enquete" && <input type={q.type === "selecao" ? "checkbox" : "radio"} name={q.id} checked={!!q.correct?.includes(k)} title="Resposta correta"
                    onChange={() => set(i, { correct: q.type === "selecao" ? (q.correct?.includes(k) ? q.correct.filter(x => x !== k) : [...(q.correct || []), k]) : [k] })} />}
                  <input className={`${inp} flex-1`} value={o} disabled={q.type === "vf"} onChange={e => set(i, { options: q.options!.map((x, j) => j === k ? e.target.value : x) })} placeholder={`Alternativa ${k + 1}`} />
                  {q.type !== "vf" && q.options!.length > 2 && <button type="button" onClick={() => set(i, { options: q.options!.filter((_, j) => j !== k), correct: (q.correct || []).filter(x => x !== k).map(x => x > k ? x - 1 : x) })}>✕</button>}
                </div>
              ))}
              {q.type !== "vf" && <button type="button" className="text-xs text-violet-700" onClick={() => set(i, { options: [...q.options!, ""] })}>＋ alternativa</button>}
              {q.type !== "enquete" && <p className="text-[11px] text-slate-500">Marque a bolinha/quadradinho da resposta correta.</p>}
            </div>
          )}
          {q.type === "lacunas" && <>
            <textarea className={`${inp} w-full`} rows={2} value={q.text || ""} onChange={e => set(i, { text: e.target.value })} />
            <p className="text-[11px] text-slate-500">Coloque entre [colchetes] as palavras que o aluno deve escrever. Lacunas: {blanksOf(q.text).join(", ") || "nenhuma"}</p>
          </>}
          {GAME_TYPES.includes(q.type) && <p className="text-[11px] text-slate-500">{["roleta", "domino", "memoria"].includes(q.type) ? "Cada linha: pergunta (esquerda) e resposta (direita)." : "Cada linha: dica (esquerda) e palavra-resposta (direita)."}</p>}
          {(["combinar", "tabela", "multipartes", "marcacao"].includes(q.type) || GAME_TYPES.includes(q.type)) && q.pairs && <div className="space-y-1">
            {q.pairs!.map((p, k) => (
              <div key={k} className="flex gap-2 items-center">
                <input className={`${inp} flex-1`} value={p.a} placeholder={q.type === "marcacao" ? "Nº da marcação" : q.type === "tabela" || q.type === "multipartes" ? "Pergunta / linha" : "Item"} onChange={e => set(i, { pairs: q.pairs!.map((x, j) => j === k ? { ...x, a: e.target.value } : x) })} />🔗
                <input className={`${inp} flex-1`} value={p.b} placeholder={["tabela", "multipartes", "marcacao"].includes(q.type) ? "Resposta certa" : "Par correto"} onChange={e => set(i, { pairs: q.pairs!.map((x, j) => j === k ? { ...x, b: e.target.value } : x) })} />
                <button type="button" onClick={() => set(i, { pairs: q.pairs!.filter((_, j) => j !== k) })}>✕</button>
              </div>))}
            <button type="button" className="text-xs text-violet-700" onClick={() => set(i, { pairs: [...q.pairs!, { a: "", b: "" }] })}>＋ par</button>
          </div>}
          {q.type === "reordenar" && <div className="space-y-1">
            <p className="text-[11px] text-slate-500">Escreva na ordem correta; o aluno verá embaralhado.</p>
            {q.items!.map((it, k) => (
              <div key={k} className="flex gap-2 items-center"><span className="text-xs w-5">{k + 1}.</span>
                <input className={`${inp} flex-1`} value={it} onChange={e => set(i, { items: q.items!.map((x, j) => j === k ? e.target.value : x) })} />
                <button type="button" onClick={() => set(i, { items: q.items!.filter((_, j) => j !== k) })}>✕</button>
              </div>))}
            <button type="button" className="text-xs text-violet-700" onClick={() => set(i, { items: [...q.items!, ""] })}>＋ item</button>
          </div>}
          {(q.type === "categorizar" || q.type === "correspondencia") && <div className="grid md:grid-cols-2 gap-2">
            {q.categories!.map((c, k) => (
              <div key={k} className="border rounded p-2 space-y-1">
                <input className={`${inp} w-full font-semibold`} value={c.name} onChange={e => set(i, { categories: q.categories!.map((x, j) => j === k ? { ...x, name: e.target.value } : x) })} />
                <textarea className={`${inp} w-full`} rows={3} value={c.items.join("\n")} placeholder="Um item por linha"
                  onChange={e => set(i, { categories: q.categories!.map((x, j) => j === k ? { ...x, items: e.target.value.split("\n") } : x) })} />
              </div>))}
            <button type="button" className="text-xs text-violet-700" onClick={() => set(i, { categories: [...q.categories!, { name: `Grupo ${q.categories!.length + 1}`, items: [""] }] })}>＋ categoria</button>
          </div>}
        </div>
      ))}
      {adding ? <div className="border rounded-lg p-3 bg-white"><ActivityTypePicker onPick={t => { onChange({ questions: [...qs, newQuestion(t, about)] }); setAdding(false); }} />
        <Button variant="ghost" size="sm" onClick={() => setAdding(false)}>Cancelar</Button></div>
        : <Button variant="outline" size="sm" onClick={() => setAdding(true)}>➕ Adicionar pergunta</Button>}
    </div>
  );
}

const shuffle = <T,>(a: T[]) => [...a].map(v => [Math.random(), v] as const).sort((x, y) => x[0] - y[0]).map(x => x[1]);

function QuestionPlayer({ q, onResult }: { q: Question; onResult: (ok: boolean) => void }) {
  const [r, setR] = useState<any>(["selecao", "destaque"].includes(q.type) ? [] : ["categorizar", "correspondencia"].includes(q.type) ? {} : undefined);
  const [pick, setPick] = useState<string | null>(null);
  const pool = useMemo(() => shuffle([...blanksOf(q.text), ...(q.distractors || []).filter(Boolean)]), [q]);
  const [res, setRes] = useState<boolean | null>(null);
  const [tries, setTries] = useState(0);
  const bOrder = useMemo(() => shuffle((q.pairs || []).map((_, i) => i)), [q]);
  const [order, setOrder] = useState<string[]>(() => shuffle(q.items || []));
  const allItems = useMemo(() => shuffle((q.categories || []).flatMap(c => c.items.filter(Boolean))), [q]);
  const blanks = blanksOf(q.text);
  const check = (val = r) => {
    const v = q.type === "reordenar" ? order : val;
    const ok = grade(q, v); setRes(ok);
    if (ok || !isGraded(q)) onResult(tries === 0); else setTries(t => t + 1);
  };
  const locked = res === true || (res !== null && !isGraded(q));
  const btn = "border rounded-lg px-3 py-2 text-left bg-white hover:bg-violet-50";
  return (
    <div className="space-y-3">
      <p className="font-bold text-lg text-violet-900">{q.prompt}</p>
      <QuestionMedia q={q} />
      {(q.type === "multipla" || q.type === "vf" || q.type === "enquete" || q.type === "selecao") && (
        <div className={q.layout === "vertical" ? "space-y-2" : "grid grid-cols-2 md:grid-cols-4 gap-2"}>
          {q.options!.map((o, k) => {
            const on = q.type === "selecao" ? r.includes(k) : r === k;
            const img = q.optionImages?.[k];
            return (
              <button key={k} type="button" disabled={locked} style={{ background: quizColor(k) }}
                onClick={() => setR(q.type === "selecao" ? (r.includes(k) ? r.filter((x: number) => x !== k) : [...r, k]) : k)}
                className={`relative rounded-lg p-3 text-quiz-panel-foreground font-semibold flex ${q.layout === "vertical" ? "items-center gap-3 text-left min-h-[56px]" : "flex-col items-center justify-center text-center min-h-[120px]"} transition ${on ? "ring-4 ring-quiz-correct scale-[1.02]" : "opacity-95 hover:opacity-100"}`}>
                {on && <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-quiz-correct grid place-items-center text-xs">✓</span>}
                {img && <img src={img} alt="" className={`${q.layout === "vertical" ? "max-h-12" : "max-h-24 mb-1"} rounded object-contain`} />}
                {o && <span>{o}</span>}
              </button>);
          })}
        </div>)}
      {q.type === "selecao" && <p className="text-xs text-muted-foreground">Marque todas as alternativas corretas.</p>}
      {q.type === "matematica" && <input disabled={locked} inputMode="decimal" className="border rounded p-2 w-48" placeholder="Sua resposta" value={r ?? ""} onChange={e => setR(e.target.value)} />}
      {q.type === "suspenso" && <select disabled={locked} className="border rounded px-2 py-2 bg-white" value={r ?? ""} onChange={e => setR(Number(e.target.value))}>
        <option value="" disabled>Escolha…</option>{q.options!.map((o, k) => <option key={k} value={k}>{o}</option>)}</select>}

      {q.type === "lacunas" && <p className="leading-loose">{(q.text || "").split(/\[[^\]]+\]/).map((part, k) => <span key={k}>{part}{k < blanks.length && <input disabled={locked} className="border-b-2 border-violet-500 mx-1 px-1 w-32 bg-violet-50" value={r?.[k] || ""} onChange={e => { const a = [...(r || [])]; a[k] = e.target.value; setR(a); }} />}</span>)}</p>}
      {(q.type === "aberta" || q.type === "nuvem") && (q.type === "aberta"
        ? <textarea disabled={locked} className="w-full border rounded p-2" rows={3} value={r || ""} onChange={e => setR(e.target.value)} />
        : <input disabled={locked} className="border rounded p-2 w-full" placeholder="Uma palavra" value={r || ""} onChange={e => setR(e.target.value.split(/\s+/)[0])} />)}
      {q.type === "combinar" && <div className="space-y-2">{q.pairs!.map((p, k) => (
        <div key={k} className="flex items-center gap-2"><span className="flex-1 font-medium">{p.a}</span>🔗
          <select disabled={locked} className="flex-1 border rounded px-2 py-1 bg-white" value={r?.[k] ?? ""} onChange={e => { const a = [...(r || [])]; a[k] = Number(e.target.value); setR(a); }}>
            <option value="" disabled>Escolha…</option>{bOrder.map(j => <option key={j} value={j}>{q.pairs![j].b}</option>)}</select></div>))}</div>}
      {q.type === "reordenar" && <div className="space-y-1">{order.map((it, k) => (
        <div key={k} className="flex items-center gap-2 border rounded px-3 py-2 bg-white"><span className="text-xs">{k + 1}.</span><span className="flex-1">{it}</span>
          <button type="button" disabled={locked || k === 0} onClick={() => setOrder(o => { const n = [...o]; [n[k - 1], n[k]] = [n[k], n[k - 1]]; return n; })}>▲</button>
          <button type="button" disabled={locked || k === order.length - 1} onClick={() => setOrder(o => { const n = [...o]; [n[k + 1], n[k]] = [n[k], n[k + 1]]; return n; })}>▼</button></div>))}</div>}
      {q.type === "categorizar" && <div className="space-y-1">{allItems.map(it => (
        <div key={it} className="flex items-center gap-2"><span className="flex-1">{it}</span>
          <select disabled={locked} className="border rounded px-2 py-1 bg-white" value={r?.[it] || ""} onChange={e => setR({ ...r, [it]: e.target.value })}>
            <option value="" disabled>Categoria…</option>{q.categories!.map(c => <option key={c.name}>{c.name}</option>)}</select></div>))}</div>}
      {q.type === "arraste" && <div className="space-y-3">
        <div className="flex flex-wrap gap-2">{pool.map((w, k) => { const used = (r || []).includes(w); return (
          <button key={k} type="button" draggable={!locked && !used} disabled={locked || used} onDragStart={e => e.dataTransfer.setData("text", w)} onClick={() => setPick(w)}
            className={`px-3 py-1.5 rounded-lg font-semibold text-quiz-panel-foreground bg-qtype-teal ${pick === w ? "ring-4 ring-quiz-correct" : ""} ${used ? "opacity-30" : ""}`}>{w}</button>); })}</div>
        <p className="leading-[3rem]">{(q.text || "").split(/\[[^\]]+\]/).map((part, k) => <span key={k}>{part}{k < blanks.length && (
          <span onDragOver={e => e.preventDefault()} onDrop={e => { const w = e.dataTransfer.getData("text"); const a = [...(r || [])]; a[k] = w; setR(a); }}
            onClick={() => { if (locked) return; const a = [...(r || [])]; a[k] = pick ?? undefined; setR(a); setPick(null); }}
            className="inline-block min-w-[110px] mx-1 px-2 py-1 border-2 border-dashed border-qtype-teal rounded-lg text-center align-middle leading-normal cursor-pointer bg-muted">{r?.[k] || "…"}</span>)}</span>)}</p>
        <p className="text-xs text-muted-foreground">Arraste as palavras (ou clique numa palavra e depois no espaço).</p>
      </div>}
      {q.type === "destaque" && <p className="leading-loose text-lg">{plainWords(q.text).map((w, k) => /^\s+$/.test(w) || !w ? <span key={k}>{w}</span> : (() => {
        const clean = w.replace(/[.,;:!?()]/g, ""); const on = (r || []).includes(clean);
        return <button key={k} type="button" disabled={locked} onClick={() => setR(on ? r.filter((x: string) => x !== clean) : [...(r || []), clean])}
          className={`rounded px-0.5 ${on ? "bg-quiz-3 font-semibold" : "hover:bg-muted"}`}>{w}</button>; })())}</p>}
      {["tabela", "multipartes", "marcacao"].includes(q.type) && <table className="w-full border text-sm"><tbody>{(q.pairs || []).map((p, k) => (
        <tr key={k} className="border-b"><td className="p-2 font-medium bg-muted w-1/2">{p.a}</td>
          <td className="p-1"><input disabled={locked} className="w-full border rounded p-1.5" value={r?.[k] || ""} onChange={e => { const a = [...(r || [])]; a[k] = e.target.value; setR(a); }} /></td></tr>))}</tbody></table>}
      {q.type === "correspondencia" && <table className="w-full border text-sm"><thead><tr className="bg-muted"><th />{q.categories!.map(c => <th key={c.name} className="p-2">{c.name}</th>)}</tr></thead>
        <tbody>{allItems.map(it => <tr key={it} className="border-t"><td className="p-2 font-medium">{it}</td>{q.categories!.map(c => <td key={c.name} className="text-center">
          <input type="radio" disabled={locked} name={q.id + it} checked={r?.[it] === c.name} onChange={() => setR({ ...r, [it]: c.name })} /></td>)}</tr>)}</tbody></table>}
      {q.type === "hotspot" && q.image && <div className="relative inline-block cursor-crosshair" onClick={e => { if (locked) return; const b = e.currentTarget.getBoundingClientRect(); setR({ x: ((e.clientX - b.left) / b.width) * 100, y: ((e.clientY - b.top) / b.height) * 100 }); }}>
        <img src={q.image} alt="" className="max-h-80 rounded-lg border" />
        {r && <span className="absolute w-5 h-5 rounded-full bg-quiz-4 border-2 border-background -translate-x-1/2 -translate-y-1/2" style={{ left: `${r.x}%`, top: `${r.y}%` }} />}
      </div>}
      {q.type === "graficos" && (() => { const d = parseChart(q.chart); const max = Math.max(...d.map(x => x.value), ...((r || []).map(Number).filter(Number.isFinite)), 1); return (
        <div className="space-y-2 p-3 rounded-lg bg-background border">{d.map((x, k) => { const v = Number(String(r?.[k] ?? "").replace(",", ".")) || 0; return (
          <div key={k} className="flex items-center gap-2 text-sm"><span className="w-28 truncate">{x.label}</span>
            <div className="flex-1 bg-muted rounded h-5 overflow-hidden"><div className="h-full bg-qtype-teal transition-all" style={{ width: `${Math.min(100, (Math.abs(v) / max) * 100)}%` }} /></div>
            <input disabled={locked} inputMode="decimal" className="w-20 border rounded p-1" value={r?.[k] ?? ""} onChange={e => { const a = [...(r || [])]; a[k] = e.target.value; setR(a); }} /></div>); })}</div>); })()}
      {q.type === "passagem" && <><div className="p-3 rounded-lg bg-background border whitespace-pre-wrap max-h-72 overflow-y-auto">{q.media}</div>
        <textarea disabled={locked} className="w-full border rounded p-2" rows={3} placeholder="Sua resposta" value={r || ""} onChange={e => setR(e.target.value)} /></>}
      {q.type === "video" && <>{q.media && <VideoEmbed url={q.media} />}
        <textarea disabled={locked} className="w-full border rounded p-2" rows={3} placeholder="Sua resposta" value={r || ""} onChange={e => setR(e.target.value)} /></>}
      {q.type === "forum" && <textarea disabled={locked} className="w-full border rounded p-2" rows={4} placeholder="Escreva sua opinião para a discussão" value={r || ""} onChange={e => setR(e.target.value)} />}
      {q.type === "desenhar" && <DrawPad disabled={locked} onChange={setR} />}
      {(q.type === "audio" || q.type === "resposta_video") && <Recorder video={q.type === "resposta_video"} disabled={locked} onDone={setR} />}
      {GAME_TYPES.includes(q.type) && <GamePlayer q={q} locked={locked} submit={v => check(v)} />}
      {!locked && !GAME_TYPES.includes(q.type) && <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => check()}>Responder</Button>}
      {res === true && isGraded(q) && <p className="text-emerald-700 font-bold">✅ Correto!</p>}
      {res !== null && !isGraded(q) && <p className="text-emerald-700 font-bold">✅ Resposta registrada!</p>}
      {res === false && isGraded(q) && <p className="text-red-600">Ops! Releia o slide anterior e tente de novo.</p>}
    </div>
  );
}

function VideoEmbed({ url }: { url: string }) {
  const id = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1];
  return id ? <iframe className="w-full aspect-video rounded-lg" src={`https://www.youtube.com/embed/${id}`} allowFullScreen title="Vídeo" />
    : <a href={url} target="_blank" rel="noreferrer" className="underline text-primary">Abrir o vídeo</a>;
}

function DrawPad({ disabled, onChange }: { disabled: boolean; onChange: (v: string) => void }) {
  const ref = useRef<HTMLCanvasElement>(null); const drawing = useRef(false);
  const pos = (e: React.PointerEvent<HTMLCanvasElement>) => { const b = e.currentTarget.getBoundingClientRect(); return [(e.clientX - b.left) * (600 / b.width), (e.clientY - b.top) * (300 / b.height)]; };
  return (
    <div className="space-y-1">
      <canvas ref={ref} width={600} height={300} className="w-full max-w-[600px] border-2 rounded-lg bg-background touch-none"
        onPointerDown={e => { if (disabled) return; drawing.current = true; const c = ref.current!.getContext("2d")!; const [x, y] = pos(e); c.lineWidth = 3; c.lineCap = "round"; c.strokeStyle = getComputedStyle(e.currentTarget).color; c.beginPath(); c.moveTo(x, y); }}
        onPointerMove={e => { if (!drawing.current) return; const c = ref.current!.getContext("2d")!; const [x, y] = pos(e); c.lineTo(x, y); c.stroke(); }}
        onPointerUp={() => { if (!drawing.current) return; drawing.current = false; onChange(ref.current!.toDataURL()); }} />
      {!disabled && <button type="button" className="text-xs underline" onClick={() => { ref.current!.getContext("2d")!.clearRect(0, 0, 600, 300); onChange(""); }}>Apagar desenho</button>}
    </div>);
}

function Recorder({ video, disabled, onDone }: { video: boolean; disabled: boolean; onDone: (v: boolean) => void }) {
  const [rec, setRec] = useState<MediaRecorder | null>(null); const [url, setUrl] = useState<string | null>(null);
  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(video ? { video: true, audio: true } : { audio: true });
      const mr = new MediaRecorder(stream); const chunks: Blob[] = [];
      mr.ondataavailable = e => chunks.push(e.data);
      mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); setUrl(URL.createObjectURL(new Blob(chunks))); onDone(true); };
      mr.start(); setRec(mr);
    } catch { toast.error("Não foi possível acessar o microfone/câmera."); }
  };
  return (
    <div className="space-y-2">
      {rec ? <Button variant="destructive" onClick={() => { rec.stop(); setRec(null); }}>⏹ Parar gravação</Button>
        : <Button variant="outline" disabled={disabled} onClick={start}>{video ? "📹 Gravar vídeo" : "🎙️ Gravar áudio"}</Button>}
      {url && (video ? <video src={url} controls className="max-h-60 rounded" /> : <audio src={url} controls />)}
    </div>);
}

/** Aluno responde as perguntas do slide de atividade; ao terminar devolve estrelas (1 a 3). */
export function ActivityPlayer({ activity, onDone }: { activity: Activity; onDone: (stars: number) => void }) {
  const [k, setK] = useState(0);
  const [firstTry, setFirstTry] = useState(0);
  const qs = activity.questions;
  if (!qs.length) return <p className="text-slate-500">Atividade sem perguntas.</p>;
  if (k >= qs.length) return <p className="text-emerald-700 font-bold">🎉 Atividade concluída!</p>;
  return (
    <div className="p-4 rounded-xl bg-pink-50 border border-pink-200">
      <p className="text-xs text-pink-700 font-semibold mb-2">🎯 Pergunta {k + 1} de {qs.length}</p>
      <QuestionPlayer key={qs[k].id} q={qs[k]} onResult={ok => {
        const ft = firstTry + (ok ? 1 : 0); setFirstTry(ft);
        setTimeout(() => { if (k + 1 >= qs.length) onDone(Math.max(1, Math.round((ft / qs.length) * 3))); setK(k + 1); }, 700);
      }} />
    </div>
  );
}
