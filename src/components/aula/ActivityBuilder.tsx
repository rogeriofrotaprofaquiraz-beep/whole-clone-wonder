import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ACTIVITY_TYPES, blanksOf, grade, isGraded, newQuestion, type Activity, type ActivityType, type Question } from "@/lib/activities";

/** Grade de tipos de pergunta (estilo Wayground). */
export function ActivityTypePicker({ onPick }: { onPick: (t: ActivityType) => void }) {
  return (
    <div className="space-y-3">
      {(["basico", "interativo"] as const).map(g => (
        <div key={g}>
          <p className="font-semibold text-slate-500 mb-1">{g === "basico" ? "Básico" : "Interativo e de ordem superior"}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {ACTIVITY_TYPES.filter(t => t.group === g).map(t => (
              <button key={t.key} type="button" disabled={!t.ready} onClick={() => onPick(t.key)}
                className="flex items-center gap-2 px-2 py-1.5 rounded text-left text-sm hover:bg-violet-100 disabled:opacity-40 disabled:cursor-not-allowed">
                <span className={`w-7 h-7 grid place-items-center rounded text-white ${g === "basico" ? "bg-pink-500" : "bg-emerald-600"}`}>{t.icon}</span>
                <span className="font-medium">{t.label}</span>{!t.ready && <span className="text-[10px] text-slate-500">em breve</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const label = (t: ActivityType) => ACTIVITY_TYPES.find(x => x.key === t)?.label || t;

/** Editor das perguntas de um slide de atividade. */
export function ActivityEditor({ activity, about, onChange }: { activity: Activity; about?: string; onChange: (a: Activity) => void }) {
  const [adding, setAdding] = useState(false);
  const qs = activity.questions;
  const set = (i: number, p: Partial<Question>) => onChange({ questions: qs.map((q, k) => k === i ? { ...q, ...p } : q) });
  const inp = "border rounded px-2 py-1 bg-white text-sm";
  return (
    <div className="space-y-3">
      {qs.map((q, i) => (
        <div key={q.id} className="border border-pink-200 rounded-lg p-3 bg-white space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-pink-700">Pergunta {i + 1} · {label(q.type)}</span>
            <button type="button" className="ml-auto" title="Excluir pergunta" onClick={() => onChange({ questions: qs.filter((_, k) => k !== i) })}>🗑️</button>
          </div>
          <input className={`${inp} w-full font-semibold`} value={q.prompt} onChange={e => set(i, { prompt: e.target.value })} placeholder="Enunciado" />
          {q.options && (
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
          {q.type === "combinar" && <div className="space-y-1">
            {q.pairs!.map((p, k) => (
              <div key={k} className="flex gap-2 items-center">
                <input className={`${inp} flex-1`} value={p.a} placeholder="Item" onChange={e => set(i, { pairs: q.pairs!.map((x, j) => j === k ? { ...x, a: e.target.value } : x) })} />🔗
                <input className={`${inp} flex-1`} value={p.b} placeholder="Par correto" onChange={e => set(i, { pairs: q.pairs!.map((x, j) => j === k ? { ...x, b: e.target.value } : x) })} />
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
          {q.type === "categorizar" && <div className="grid md:grid-cols-2 gap-2">
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
  const [r, setR] = useState<any>(q.type === "selecao" ? [] : q.type === "categorizar" ? {} : undefined);
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
      {(q.type === "multipla" || q.type === "vf" || q.type === "enquete") && <div className="grid md:grid-cols-2 gap-2">
        {q.options!.map((o, k) => <button key={k} type="button" disabled={locked} className={`${btn} ${r === k ? "border-violet-600 ring-2 ring-violet-300" : ""}`} onClick={() => { setR(k); }}>{o}</button>)}
      </div>}
      {q.type === "suspenso" && <select disabled={locked} className="border rounded px-2 py-2 bg-white" value={r ?? ""} onChange={e => setR(Number(e.target.value))}>
        <option value="" disabled>Escolha…</option>{q.options!.map((o, k) => <option key={k} value={k}>{o}</option>)}</select>}
      {q.type === "selecao" && <div className="grid md:grid-cols-2 gap-2">
        {q.options!.map((o, k) => <label key={k} className={`${btn} flex gap-2`}><input type="checkbox" disabled={locked} checked={r.includes(k)} onChange={() => setR(r.includes(k) ? r.filter((x: number) => x !== k) : [...r, k])} />{o}</label>)}
      </div>}
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
      {!locked && <Button className="bg-violet-700 hover:bg-violet-800" onClick={() => check()}>Responder</Button>}
      {res === true && isGraded(q) && <p className="text-emerald-700 font-bold">✅ Correto!</p>}
      {res !== null && !isGraded(q) && <p className="text-emerald-700 font-bold">✅ Resposta registrada!</p>}
      {res === false && isGraded(q) && <p className="text-red-600">Ops! Releia o slide anterior e tente de novo.</p>}
    </div>
  );
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
