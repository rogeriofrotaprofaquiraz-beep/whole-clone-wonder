import { useEffect, useMemo, useState } from "react";
import { ELEMENTS_DATA } from "@/data/elements";

const TEXTS = [
  { title: "PERSONALIZE SEU AVATAR!", subtitle: "Escolha o tom de pele e o cabelo" },
  { title: "MUDE O CABELO", subtitle: "Curto, longo, cacheado ou trançado" },
  { title: "TROQUE O TRAJE", subtitle: "Jaleco de cientista, armadura e mais" },
  { title: "PODERES ÉPICOS", subtitle: "Auras, capas e símbolos do seu elemento" },
  { title: "VIRE UM HERÓI LENDÁRIO", subtitle: "Arte criada com IA só para você" },
];

export function AvatarPromo({ onCta }: { onCta: () => void }) {
  const heroes = useMemo(
    () => Object.values(ELEMENTS_DATA).filter((e: any) => e.heroImage && !String(e.heroImage).endsWith(".mp4")).slice(0, 10) as any[],
    [],
  );
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => v + 1), 2500);
    return () => clearInterval(t);
  }, []);
  if (!heroes.length) return null;
  const h = heroes[i % heroes.length];
  const t = TEXTS[i % TEXTS.length];
  return (
    <button type="button" onClick={onCta}
      className="w-full max-w-2xl rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl text-left bg-gradient-to-br from-slate-900 via-indigo-950 to-sky-900">
      <div className="flex items-center gap-5 p-5">
        <div key={`h${i}`} className="w-40 shrink-0 animate-in zoom-in-90 fade-in duration-500 rounded-2xl border-2 border-white/80 bg-slate-900 p-1.5 shadow-xl">
          <div className="relative rounded-xl overflow-hidden aspect-[2/3]">
            <img src={h.heroImage} alt={h.heroName ?? h.name} className="w-full h-full object-cover" />
            <span className="absolute top-1.5 left-1.5 text-xs font-black bg-black/70 text-white border border-white/60 rounded px-1.5">{h.symbol}</span>
            <span className="absolute top-1.5 right-1.5 text-xs font-black bg-black/70 text-white border border-white/60 rounded px-1.5">{h.number}</span>
            <span className="absolute bottom-1.5 inset-x-1.5 text-center text-[10px] font-black uppercase bg-black/75 text-white border border-white/60 rounded py-0.5 truncate">{h.heroName ?? h.name}</span>
          </div>
        </div>
        <div key={`t${i}`} className="flex-1 animate-in slide-in-from-right-8 fade-in duration-500">
          <p className="text-2xl md:text-3xl font-black italic text-white leading-tight">{t.title}</p>
          <p className="text-white/90 font-bold mt-1">{t.subtitle}</p>
          <span className="inline-block mt-3 bg-white text-slate-900 font-black text-sm px-4 py-2 rounded-xl animate-pulse">CRIAR MEU AVATAR →</span>
        </div>
      </div>
    </button>
  );
}
