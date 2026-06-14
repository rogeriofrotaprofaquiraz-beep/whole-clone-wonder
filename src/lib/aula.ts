export const AREAS = [
  { value: "organica", label: "Orgânica", color: "#059669", emoji: "🧬" },
  { value: "inorganica", label: "Inorgânica", color: "#4C1D95", emoji: "⚗️" },
  { value: "geral", label: "Geral", color: "#D97706", emoji: "🔬" },
  { value: "ambiental", label: "Ambiental", color: "#16A34A", emoji: "🌱" },
  { value: "farmacologia", label: "Farmacologia", color: "#DB2777", emoji: "💊" },
] as const;

export type AreaValue = (typeof AREAS)[number]["value"];

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
