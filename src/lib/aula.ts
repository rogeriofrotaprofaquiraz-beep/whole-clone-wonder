export const AREAS = [
  { value: "organica", label: "Orgânica", color: "#059669", emoji: "🧬" },
  { value: "inorganica", label: "Inorgânica", color: "#4C1D95", emoji: "⚗️" },
  { value: "geral", label: "Geral", color: "#D97706", emoji: "🔬" },
  { value: "ambiental", label: "Ambiental", color: "#16A34A", emoji: "🌱" },
  { value: "ciencias", label: "Ciências (Fundamental)", color: "#0EA5E9", emoji: "🌿" },
  { value: "farmacologia", label: "Farmacologia", color: "#DB2777", emoji: "💊" },
] as const;

export type AreaValue = (typeof AREAS)[number]["value"];

export const LEVELS = [
  { value: "fundamental", label: "Ensino Fundamental", emoji: "🎒" },
  { value: "medio", label: "Ensino Médio", emoji: "🎓" },
] as const;
export type LevelValue = (typeof LEVELS)[number]["value"];

export const DIFFICULTIES = [
  { value: 1, label: "Muito fácil", base: 50 },
  { value: 2, label: "Fácil", base: 100 },
  { value: 3, label: "Médio", base: 200 },
  { value: 4, label: "Difícil", base: 350 },
  { value: 5, label: "Muito difícil", base: 500 },
] as const;

/** Score = base(difficulty) * fator_tempo (1.0 → 0.2 conforme tempo gasto) * fator_acerto. */
export function computeScore(opts: {
  difficulty: number;
  elapsedMs: number;
  maxMs?: number;
  penalty?: number; // 0..1 reduction (ex: dica usada, erros)
  correct?: boolean;
}) {
  if (opts.correct === false) return 0;
  const d = DIFFICULTIES.find((x) => x.value === opts.difficulty) ?? DIFFICULTIES[1];
  const max = opts.maxMs ?? 60_000;
  const t = Math.min(1, Math.max(0, opts.elapsedMs / max));
  const timeFactor = 1 - 0.8 * t; // 1.0 instantâneo → 0.2 no limite
  const penalty = Math.max(0, Math.min(1, opts.penalty ?? 0));
  return Math.round(d.base * timeFactor * (1 - penalty));
}

export const MODES = [
  { value: "quiz", label: "Quiz", emoji: "❓", available: true },
  { value: "forca", label: "Forca", emoji: "🎯", available: false },
  { value: "caca_palavras", label: "Caça-palavras", emoji: "🔤", available: false },
  { value: "cruzada", label: "Palavra Cruzada", emoji: "📝", available: false },
  { value: "memoria", label: "Memória", emoji: "🧠", available: false },
] as const;

export function genCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export const TEAM_COLORS = ["#4C1D95", "#059669", "#D97706", "#DB2777", "#0EA5E9", "#DC2626"];

export function areaMeta(v: string) {
  return AREAS.find((a) => a.value === v) ?? AREAS[2];
}
