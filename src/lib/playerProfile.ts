import { ELEMENTS_DATA } from "@/data/elements";

/** Sistema de níveis: 1 nível por elemento da tabela (1..118). */
export const XP_PER_LEVEL = 100;
export const MAX_LEVEL = 118;

export function levelFromLifetime(lifetimeCoins: number): number {
  return Math.min(MAX_LEVEL, Math.floor((lifetimeCoins ?? 0) / XP_PER_LEVEL) + 1);
}

export function xpProgress(lifetimeCoins: number) {
  const lvl = levelFromLifetime(lifetimeCoins);
  const inLevel = (lifetimeCoins ?? 0) - (lvl - 1) * XP_PER_LEVEL;
  return { level: lvl, current: inLevel, needed: XP_PER_LEVEL, percent: Math.min(100, (inLevel / XP_PER_LEVEL) * 100) };
}

/** Cada nível libera 1 carta nova (número atômico == nível). */
export function maxAtomicForLevel(level: number) {
  return Math.min(MAX_LEVEL, Math.max(1, level));
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

/** Multiplicador de créditos por nível: nível 1 = 1x, nível 118 ≈ 7.85x. */
export function coinsLevelMultiplier(level: number) {
  const lvl = Math.max(1, Math.min(MAX_LEVEL, level || 1));
  return 1 + (lvl - 1) * 0.06;
}

/** Todas as cartas existentes ordenadas por número atômico. */
export function listAllCards() {
  return Object.values(ELEMENTS_DATA)
    .filter((e) => e && e.symbol && e.symbol !== "Element" && e.symbol !== "Elemento")
    .sort((a, b) => a.number - b.number);
}
