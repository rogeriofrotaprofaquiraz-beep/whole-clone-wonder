/** Pontuação dos slides de um tópico (no aparelho do aluno) e regra de liberação do próximo tópico. */
export const PASS_PERCENT = 70;

export function deckPercent(stars: number, slideCount: number) {
  if (slideCount <= 0) return 0;
  return Math.round((stars / (slideCount * 3)) * 100);
}

const key = (slug: string) => `deck-score:${slug}`;

export function saveDeckScore(slug: string, pct: number) {
  try {
    const prev = getDeckScore(slug) ?? 0;
    localStorage.setItem(key(slug), String(Math.max(prev, pct)));
  } catch { /* ignore */ }
}

export function getDeckScore(slug: string): number | null {
  try {
    const v = localStorage.getItem(key(slug));
    return v === null ? null : Number(v);
  } catch { return null; }
}

/** O primeiro tópico sempre fica liberado; os seguintes exigem 70% no anterior. */
export function isTopicUnlocked(index: number, prevScore: number | null) {
  if (index === 0) return true;
  return (prevScore ?? 0) >= PASS_PERCENT;
}
