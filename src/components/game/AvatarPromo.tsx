import { useEffect, useState } from "react";

type Slide = {
  title: string; subtitle: string; skin: string; hair: string; hairStyle: "curto" | "longo" | "moicano" | "coque";
  outfit: string; bg: [string, string]; acc: "oculos" | "capacete" | "coroa" | "jaleco" | "fone";
};

const SLIDES: Slide[] = [
  { title: "PERSONALIZE SEU AVATAR!", subtitle: "Escolha o tom de pele e o cabelo", skin: "#f1c27d", hair: "#3b2314", hairStyle: "curto", outfit: "#2563eb", bg: ["#1e3a8a", "#0ea5e9"], acc: "oculos" },
  { title: "MUDE O CABELO", subtitle: "Curto, longo, moicano ou coque", skin: "#8d5524", hair: "#111827", hairStyle: "coque", outfit: "#db2777", bg: ["#831843", "#f472b6"], acc: "fone" },
  { title: "TROQUE A ROUPA", subtitle: "Jaleco de cientista, armadura e mais", skin: "#ffdbac", hair: "#f59e0b", hairStyle: "longo", outfit: "#f8fafc", bg: ["#065f46", "#34d399"], acc: "jaleco" },
  { title: "ACESSÓRIOS ÉPICOS", subtitle: "Capacetes, óculos, coroas…", skin: "#c68642", hair: "#7c3aed", hairStyle: "moicano", outfit: "#ea580c", bg: ["#7c2d12", "#fb923c"], acc: "capacete" },
  { title: "VIRE UM HERÓI LENDÁRIO", subtitle: "5 variações geradas com IA para você", skin: "#e0ac69", hair: "#dc2626", hairStyle: "curto", outfit: "#7c3aed", bg: ["#4c1d95", "#a78bfa"], acc: "coroa" },
];

function Avatar({ s }: { s: Slide }) {
  return (
    <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl">
      {/* corpo */}
      <path d="M40 220 Q40 150 100 145 Q160 150 160 220 Z" fill={s.outfit} />
      {s.acc === "jaleco" && <path d="M95 150 L100 220 L105 150 Z M60 170 h20 v12 h-20z" fill="#38bdf8" />}
      <rect x="88" y="125" width="24" height="25" fill={s.skin} />
      {/* cabelo atrás */}
      {s.hairStyle === "longo" && <path d="M45 80 Q45 165 70 160 L130 160 Q155 165 155 80 Z" fill={s.hair} />}
      {/* cabeça */}
      <circle cx="100" cy="85" r="48" fill={s.skin} />
      {/* cabelo */}
      {s.hairStyle === "curto" && <path d="M52 80 Q55 30 100 32 Q145 30 148 80 Q130 55 100 58 Q70 55 52 80Z" fill={s.hair} />}
      {s.hairStyle === "longo" && <path d="M52 85 Q50 30 100 32 Q150 30 148 85 Q140 50 100 52 Q60 50 52 85Z" fill={s.hair} />}
      {s.hairStyle === "moicano" && <path d="M88 55 L92 10 L100 30 L108 8 L112 55 Z" fill={s.hair} />}
      {s.hairStyle === "coque" && (<><circle cx="100" cy="28" r="18" fill={s.hair} /><path d="M52 78 Q58 38 100 40 Q142 38 148 78 Q125 58 100 60 Q75 58 52 78Z" fill={s.hair} /></>)}
      {/* rosto */}
      <circle cx="82" cy="88" r="6" fill="#111827" /><circle cx="118" cy="88" r="6" fill="#111827" />
      <circle cx="84" cy="86" r="2" fill="#fff" /><circle cx="120" cy="86" r="2" fill="#fff" />
      <path d="M85 108 Q100 120 115 108" stroke="#7f1d1d" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* acessórios */}
      {s.acc === "oculos" && (<g stroke="#0f172a" strokeWidth="4" fill="rgba(56,189,248,.3)"><circle cx="82" cy="88" r="13" /><circle cx="118" cy="88" r="13" /><line x1="95" y1="88" x2="105" y2="88" /></g>)}
      {s.acc === "fone" && (<g fill="#0f172a"><path d="M50 85 Q50 30 100 30 Q150 30 150 85" stroke="#0f172a" strokeWidth="7" fill="none" /><rect x="40" y="78" width="16" height="26" rx="6" /><rect x="144" y="78" width="16" height="26" rx="6" /></g>)}
      {s.acc === "capacete" && (<g><path d="M48 80 Q48 25 100 25 Q152 25 152 80 Z" fill="#94a3b8" stroke="#334155" strokeWidth="3" /><rect x="60" y="74" width="80" height="10" fill="#334155" /></g>)}
      {s.acc === "coroa" && <path d="M65 45 L72 15 L86 35 L100 8 L114 35 L128 15 L135 45 Z" fill="#facc15" stroke="#a16207" strokeWidth="3" />}
    </svg>
  );
}

export function AvatarPromo({ onCta }: { onCta: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 2000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <button
      type="button"
      onClick={onCta}
      className="w-full max-w-2xl rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transition-all duration-700 text-left"
      style={{ background: `linear-gradient(135deg, ${s.bg[0]}, ${s.bg[1]})` }}
    >
      <div className="flex items-center gap-4 p-5">
        <div key={i} className="w-36 h-40 shrink-0 animate-in zoom-in-50 fade-in duration-500">
          <Avatar s={s} />
        </div>
        <div key={`t${i}`} className="flex-1 animate-in slide-in-from-right-8 fade-in duration-500">
          <p className="text-2xl md:text-3xl font-black italic text-white leading-tight">{s.title}</p>
          <p className="text-white/90 font-bold mt-1">{s.subtitle}</p>
          <span className="inline-block mt-3 bg-white text-slate-900 font-black text-sm px-4 py-2 rounded-xl animate-pulse">
            CRIAR MEU AVATAR →
          </span>
          <div className="flex gap-1.5 mt-3">
            {SLIDES.map((_, k) => (
              <span key={k} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-white" : "w-2 bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
