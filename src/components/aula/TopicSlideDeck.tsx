import SlideCanvas, { type CanvasSlide } from "./SlideCanvas";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Lock, Star, Trophy } from "lucide-react";

type Slide = CanvasSlide;

const STOP = new Set(["porque","quando","também","através","sobre","entre","outros","outras","assim","sendo","podem","sempre","muito","maior","menor","dessa","desse","nesta","neste","cada","qual","quais","mesmo","forma","ainda","depois","antes","apenas","pelos","pelas","essas","esses","todos","todas"]);
const clean = (w: string) => w.replace(/[^\p{L}\p{N}-]/gu, "");

function pickWord(text: string): string | null {
  const words = text.split(/\s+/).map(clean).filter((w) => w.length >= 6 && !STOP.has(w.toLowerCase()) && !/^\d/.test(w));
  if (!words.length) return null;
  return words.sort((a, b) => b.length - a.length)[0];
}

const MIN_SECONDS = 6;

export function buildSlides(c: any, subtopics: any[] = [], heroImg?: string): Slide[] {
  const s: Slide[] = [];
  const arr = (v: any) => (Array.isArray(v) ? v.filter(Boolean).map(String) : []);
  if (c.simple) s.push({ title: "Ideia principal", emoji: "💡", lines: [c.simple], image: heroImg });
  if (c.formal) s.push({ title: "Definição formal", emoji: "📘", lines: [c.formal] });
  if (arr(c.key).length) s.push({ title: "Conceitos-chave", emoji: "🔑", lines: arr(c.key).slice(0, 6) });
  if (arr(c.principles).length) s.push({ title: "Princípios", emoji: "⚖️", lines: arr(c.principles).slice(0, 6) });
  if (arr(c.examples).length) s.push({ title: "Exemplos", emoji: "🧪", lines: arr(c.examples).slice(0, 5) });
  if (arr(c.daily_life).length) s.push({ title: "No dia a dia", emoji: "🏠", lines: arr(c.daily_life).slice(0, 5) });
  if (arr(c.pitfalls).length) s.push({ title: "Cuidado com os erros", emoji: "⚠️", lines: arr(c.pitfalls).slice(0, 5) });
  if (arr(c.curiosities).length) s.push({ title: "Curiosidades", emoji: "✨", lines: arr(c.curiosities).slice(0, 4) });
  for (const st of subtopics || []) {
    if (st?.title && st?.text) s.push({ title: st.title, emoji: "🌿", lines: [st.text], image: st.image_url || undefined });
  }
  return s;
}

export default function TopicSlideDeck({ slug, slides, onFinish }: { slug: string; slides: Slide[]; onFinish: () => void }) {
  const storeKey = `deck-progress:${slug}`;
  const [i, setI] = useState(0);
  const [done, setDone] = useState<Record<number, number>>(() => {
    try { return JSON.parse(localStorage.getItem(storeKey) || "{}"); } catch { return {}; }
  });
  const [seconds, setSeconds] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [tries, setTries] = useState(0);

  useEffect(() => { localStorage.setItem(storeKey, JSON.stringify(done)); }, [done, storeKey]);
  useEffect(() => { setSeconds(0); setPicked(null); setTries(0); }, [i]);
  useEffect(() => {
    const t = setInterval(() => setSeconds((x) => x + 1), 1000);
    return () => clearInterval(t);
  }, [i]);

  const allWords = useMemo(() => slides.flatMap((sl) => sl.lines.join(" ").split(/\s+/).map(clean)).filter((w) => w.length >= 6 && !STOP.has(w.toLowerCase())), [slides]);

  const challenge = useMemo(() => {
    const sl = slides[i];
    if (!sl) return null;
    const lineIdx = sl.lines.findIndex((l) => pickWord(l));
    if (lineIdx < 0) return null;
    const answer = pickWord(sl.lines[lineIdx])!;
    const pool = Array.from(new Set(allWords.filter((w) => w.toLowerCase() !== answer.toLowerCase())));
    const distract: string[] = [];
    while (distract.length < 2 && pool.length) distract.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    const opts = [answer, ...distract].sort(() => Math.random() - 0.5);
    return { lineIdx, answer, opts };
  }, [i, slides, allWords]);

  if (!slides.length) return null;
  const sl = slides[i];
  const solved = done[i] !== undefined;
  const readEnough = seconds >= MIN_SECONDS || solved;
  const stars = Object.values(done).reduce((a, b) => a + b, 0);
  const isLast = i === slides.length - 1;

  const answer = (o: string) => {
    if (!challenge || solved) return;
    setPicked(o);
    if (o === challenge.answer) setDone((d) => ({ ...d, [i]: Math.max(1, 3 - tries) }));
    else setTries((t) => t + 1);
  };

  const canNext = solved || (!challenge && readEnough);
  const next = () => {
    if (!canNext) return;
    if (!challenge && !solved) setDone((d) => ({ ...d, [i]: 3 }));
    if (isLast) onFinish(); else setI(i + 1);
  };

  const renderLine = (l: string, idx: number) => {
    if (challenge && idx === challenge.lineIdx && !solved) {
      const parts = l.split(challenge.answer);
      return <>{parts[0]}<span className="inline-block min-w-[6ch] border-b-4 border-amber-400 text-amber-500 font-bold mx-1">____</span>{parts.slice(1).join(challenge.answer)}</>;
    }
    return l;
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-2xl mb-6">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-100 text-slate-700 text-sm">
        <span className="font-semibold">Slide {i + 1} de {slides.length}</span>
        <span className="flex items-center gap-1 font-bold text-amber-600"><Star size={16} className="fill-amber-400 text-amber-400" /> {stars} estrelas</span>
      </div>
      <div className="h-2 bg-slate-200">
        <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all" style={{ width: `${(Object.keys(done).length / slides.length) * 100}%` }} />
      </div>

      <div className="p-6 md:p-10 min-h-[360px] text-slate-900">
        {(sl.header || sl.objects?.length || sl.bg) ? <div className="mb-4"><SlideCanvas slide={{ ...sl, lines: sl.lines.map((l, k) => k === challenge?.lineIdx && !solved ? l.replace(challenge!.answer, "_____") : l) }} /></div> : <>
        <div className="text-4xl mb-2">{sl.emoji}</div>
        <h2 className="text-2xl md:text-3xl font-black mb-4">{sl.title}</h2>
        {sl.image && <img src={sl.image} alt="" className="w-full max-h-56 object-cover rounded-xl mb-4" />}
        {sl.lines.length === 1
          ? <p className="text-lg leading-relaxed whitespace-pre-line">{renderLine(sl.lines[0], 0)}</p>
          : <ul className="space-y-2 text-lg">{sl.lines.map((l, k) => <li key={k} className="flex gap-2"><span className="text-violet-600">•</span><span>{renderLine(l, k)}</span></li>)}</ul>}
        </>}

        {challenge && (
          <div className="mt-6 p-4 rounded-xl bg-violet-50 border border-violet-200">
            {!readEnough ? (
              <p className="text-violet-800 font-medium">📖 Leia com atenção... o desafio libera em {MIN_SECONDS - seconds}s</p>
            ) : solved ? (
              <p className="text-emerald-700 font-bold">✅ Correto! Palavra: “{challenge.answer}” — +{done[i]} ⭐</p>
            ) : (
              <>
                <p className="text-violet-900 font-semibold mb-3">🎯 Complete a lacuna para avançar:</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.opts.map((o) => (
                    <Button key={o} variant="outline" onClick={() => answer(o)}
                      className={picked === o && o !== challenge.answer ? "border-red-400 bg-red-50 text-red-700 animate-pulse" : ""}>
                      {o}
                    </Button>
                  ))}
                </div>
                {tries > 0 && <p className="text-red-600 text-sm mt-2">Ops! Releia o slide e tente de novo.</p>}
              </>
            )}
          </div>
        )}
        {!challenge && !readEnough && <p className="mt-6 text-violet-800">📖 Leia com atenção... ({MIN_SECONDS - seconds}s)</p>}
      </div>

      <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-t">
        <Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)}><ChevronLeft size={18} /> Voltar</Button>
        <Button onClick={next} disabled={!canNext} className="bg-violet-700 hover:bg-violet-800">
          {!canNext && <Lock size={16} className="mr-1" />}
          {isLast ? <><Trophy size={16} className="mr-1" /> Concluir</> : <>Avançar <ChevronRight size={18} /></>}
        </Button>
      </div>
    </div>
  );
}
