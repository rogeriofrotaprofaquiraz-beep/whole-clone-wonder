// Perguntas sem repetição para o aluno + moedas por nível + relatório.
export const SEEN_KEY = "seen_questions_v1";

/** Moedas por acerto conforme a dificuldade (1 muito fácil … 5 muito difícil). */
export function quizCoins(difficulty: number): number {
  const d = Math.min(5, Math.max(1, Math.round(difficulty || 1)));
  return 4;
}

/** Nunca reinicia automaticamente o histórico do aluno. */
export function pickUnseen<T extends { id: string }>(pool: T[], seen: string[], n: number, rnd = Math.random) {
  const seenSet = new Set(seen);
  const fresh = pool.filter((q) => !seenSet.has(q.id));
  const picked = [...fresh].sort(() => rnd() - 0.5).slice(0, n);
  const nextSeen = [...seen, ...picked.map((q) => q.id)];
  return { picked, seen: nextSeen };
}

export function loadSeen(scope: string): string[] {
  try { return JSON.parse(localStorage.getItem(`${SEEN_KEY}:${scope}`) || "[]"); } catch { return []; }
}
export function saveSeen(scope: string, ids: string[]) {
  try { localStorage.setItem(`${SEEN_KEY}:${scope}`, JSON.stringify(ids.slice(-2000))); } catch { /* */ }
}

export type ReportRow = { question: string; difficulty: number; correct: boolean; answer: string; chosen: string };
export function summarize(rows: ReportRow[]) {
  const byLevel: Record<number, { hit: number; miss: number }> = {};
  for (const r of rows) {
    const b = (byLevel[r.difficulty] ??= { hit: 0, miss: 0 });
    r.correct ? b.hit++ : b.miss++;
  }
  const hit = rows.filter((r) => r.correct).length;
  return { hit, miss: rows.length - hit, percent: rows.length ? Math.round((hit / rows.length) * 100) : 0, byLevel };
}
