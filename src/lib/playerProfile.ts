import { ELEMENTS_DATA } from "@/data/elements";

/** Sistema de níveis com base em Átomos acumulados. */
export const XP_PER_LEVEL = 100;
export const MAX_LEVEL = 10;

export function levelFromLifetime(lifetimeCoins: number): number {
  return Math.min(MAX_LEVEL, Math.floor((lifetimeCoins ?? 0) / XP_PER_LEVEL) + 1);
}

export function xpProgress(lifetimeCoins: number) {
  const lvl = levelFromLifetime(lifetimeCoins);
  const inLevel = (lifetimeCoins ?? 0) - (lvl - 1) * XP_PER_LEVEL;
  return { level: lvl, current: inLevel, needed: XP_PER_LEVEL, percent: Math.min(100, (inLevel / XP_PER_LEVEL) * 100) };
}

/** Limite do número atômico permitido em cada nível. */
const LEVEL_MAX_ATOMIC: Record<number, number> = {
  1: 2,
  2: 10,
  3: 18,
  4: 36,
  5: 54,
  6: 86,
  7: 118,
  8: 118,
  9: 118,
  10: 118,
};

export function maxAtomicForLevel(level: number) {
  return LEVEL_MAX_ATOMIC[Math.min(MAX_LEVEL, Math.max(1, level))] ?? 2;
}

export function canUnlockCard(symbol: string, level: number) {
  const el = ELEMENTS_DATA[symbol];
  if (!el) return false;
  return el.number <= maxAtomicForLevel(level);
}

/** Custo (em Átomos) para desbloquear uma carta. */
export function cardUnlockCost(symbol: string) {
  const el = ELEMENTS_DATA[symbol];
  if (!el) return 9999;
  return Math.max(10, el.number * 20);
}

/** Todas as cartas existentes ordenadas por número atômico. */
export function listAllCards() {
  return Object.values(ELEMENTS_DATA)
    .filter((e) => e && e.symbol && e.symbol !== "Element" && e.symbol !== "Elemento")
    .sort((a, b) => a.number - b.number);
}

/**
 * Arte da carta que pode servir de referência visual para a IA gerar o avatar
 * ultrarrealista: precisa ser imagem fixa acessível por http(s).
 * Vídeos (.mp4/.mov/.webm), SVG e artes de placeholder não servem.
 */
export function usableCardReference(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (!/^https?:\/\//i.test(url)) return undefined;
  if (/\.(mp4|mov|webm|svg)(\?|$)/i.test(url)) return undefined;
  if (/fallback-/i.test(url)) return undefined;
  return url;
}
