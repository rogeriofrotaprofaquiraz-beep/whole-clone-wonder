// Centralized hero card styles: rarity frames + family-colored symbol badges.

export type Rarity = "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário";

export const RARITIES: Rarity[] = ["Comum", "Incomum", "Raro", "Épico", "Lendário"];

export const RARITY_FRAME: Record<Rarity, { ring: string; glow: string; chip: string; gradient: string }> = {
  Comum: {
    ring: "border-slate-400/60",
    glow: "shadow-[0_0_18px_rgba(148,163,184,0.35)]",
    chip: "bg-slate-500/20 text-slate-200 border-slate-400/50",
    gradient: "from-slate-700 via-slate-600 to-slate-700",
  },
  Incomum: {
    ring: "border-emerald-400/70",
    glow: "shadow-[0_0_22px_rgba(16,185,129,0.45)]",
    chip: "bg-emerald-500/20 text-emerald-200 border-emerald-400/60",
    gradient: "from-emerald-600 via-green-500 to-emerald-600",
  },
  Raro: {
    ring: "border-blue-400/70",
    glow: "shadow-[0_0_26px_rgba(59,130,246,0.55)]",
    chip: "bg-blue-500/20 text-blue-200 border-blue-400/60",
    gradient: "from-blue-600 via-cyan-500 to-blue-600",
  },
  "Épico": {
    ring: "border-fuchsia-400/80",
    glow: "shadow-[0_0_34px_rgba(217,70,239,0.65)]",
    chip: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/60",
    gradient: "from-fuchsia-600 via-purple-500 to-fuchsia-600",
  },
  "Lendário": {
    ring: "border-amber-300",
    glow: "shadow-[0_0_42px_rgba(245,158,11,0.85)] animate-pulse",
    chip: "bg-amber-400/30 text-amber-100 border-amber-300/80",
    gradient: "from-amber-400 via-yellow-300 to-amber-500",
  },
};

export type Family =
  | "Gás Nobre"
  | "Metal Alcalino"
  | "Metal Alcalino Terroso"
  | "Semimetal"
  | "Halogênio"
  | "Não Metal"
  | "Outro Metal"
  | "Lantanídeo"
  | "Actinídeo"
  | "Metal de Transição";

export function getFamily(symbol: string, number: number): Family {
  if (["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(symbol)) return "Gás Nobre";
  if (["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(symbol)) return "Metal Alcalino";
  if (["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(symbol)) return "Metal Alcalino Terroso";
  if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(symbol)) return "Semimetal";
  if (["F", "Cl", "Br", "I", "At", "Ts"].includes(symbol)) return "Halogênio";
  if (["H", "C", "N", "O", "P", "S", "Se"].includes(symbol)) return "Não Metal";
  if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(symbol)) return "Outro Metal";
  if (number >= 57 && number <= 71) return "Lantanídeo";
  if (number >= 89 && number <= 103) return "Actinídeo";
  return "Metal de Transição";
}

export const FAMILY_BADGE: Record<Family, { bg: string; text: string; border: string; glow: string }> = {
  "Gás Nobre": { bg: "bg-sky-500/25", text: "text-sky-200", border: "border-sky-400/70", glow: "shadow-[0_0_14px_rgba(14,165,233,0.6)]" },
  "Metal Alcalino": { bg: "bg-amber-500/25", text: "text-amber-100", border: "border-amber-400/70", glow: "shadow-[0_0_14px_rgba(245,158,11,0.6)]" },
  "Metal Alcalino Terroso": { bg: "bg-orange-500/25", text: "text-orange-100", border: "border-orange-400/70", glow: "shadow-[0_0_14px_rgba(249,115,22,0.6)]" },
  Semimetal: { bg: "bg-teal-500/25", text: "text-teal-100", border: "border-teal-400/70", glow: "shadow-[0_0_14px_rgba(20,184,166,0.6)]" },
  "Halogênio": { bg: "bg-lime-500/25", text: "text-lime-100", border: "border-lime-400/70", glow: "shadow-[0_0_14px_rgba(132,204,22,0.6)]" },
  "Não Metal": { bg: "bg-emerald-500/25", text: "text-emerald-100", border: "border-emerald-400/70", glow: "shadow-[0_0_14px_rgba(16,185,129,0.6)]" },
  "Outro Metal": { bg: "bg-indigo-500/25", text: "text-indigo-100", border: "border-indigo-400/70", glow: "shadow-[0_0_14px_rgba(99,102,241,0.6)]" },
  "Lantanídeo": { bg: "bg-fuchsia-500/25", text: "text-fuchsia-100", border: "border-fuchsia-400/70", glow: "shadow-[0_0_14px_rgba(217,70,239,0.6)]" },
  "Actinídeo": { bg: "bg-violet-600/25", text: "text-violet-100", border: "border-violet-500/70", glow: "shadow-[0_0_14px_rgba(124,58,237,0.6)]" },
  "Metal de Transição": { bg: "bg-blue-500/25", text: "text-blue-100", border: "border-blue-400/70", glow: "shadow-[0_0_14px_rgba(59,130,246,0.6)]" },
};

export const FAMILY_ORDER: Family[] = [
  "Não Metal",
  "Gás Nobre",
  "Halogênio",
  "Semimetal",
  "Metal Alcalino",
  "Metal Alcalino Terroso",
  "Metal de Transição",
  "Outro Metal",
  "Lantanídeo",
  "Actinídeo",
];

export function calcRarity(attributes: any[] | undefined, fallback?: string | null): Rarity {
  if (fallback && (RARITIES as string[]).includes(fallback)) return fallback as Rarity;
  const list = Array.isArray(attributes) ? attributes : [];
  if (!list.length) return "Comum";
  const avg = list.reduce((a, c) => a + (Number(c?.score) || 0), 0) / list.length;
  if (avg > 85) return "Lendário";
  if (avg > 70) return "Épico";
  if (avg > 50) return "Raro";
  if (avg > 30) return "Incomum";
  return "Comum";
}
