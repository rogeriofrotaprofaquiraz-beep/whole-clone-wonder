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
    localStorage.setItem(`${key(slug)}:at`, new Date().toISOString());
  } catch { /* ignore */ }
}

const knownResets: Record<string, string> = {};
/** Guarda as datas de "refazer do zero" lidas do servidor (slug → data). */
export function rememberResets(map: Record<string, string>) { Object.assign(knownResets, map); }

/** resetAt: data em que o professor mandou refazer do zero; notas anteriores são ignoradas. */
export function getDeckScore(slug: string, resetAt: string | null | undefined = knownResets[slug]): number | null {
  try {
    const v = localStorage.getItem(key(slug));
    if (v !== null && !isAfterReset(localStorage.getItem(`${key(slug)}:at`), resetAt)) return null;
    return v === null ? null : Number(v);
  } catch { return null; }
}

/** O primeiro tópico sempre fica liberado; os seguintes exigem 70% no anterior. */
export function isTopicUnlocked(index: number, prevScore: number | null) {
  if (index === 0) return true;
  return (prevScore ?? 0) >= PASS_PERCENT;
}

export function slugifyTopic(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

/** Tópicos (bullets) listados no conteúdo de uma aula. */
export function lessonTopics(content: string | null | undefined): string[] {
  return (content || "").split("\n").map(l => l.match(/^\s*[-•*]\s+(.+)$/)?.[1]?.replace(/\*\*/g, "").trim()).filter((x): x is string => !!x);
}

/** Média (0-100) das notas dos tópicos de uma aula; tópicos não feitos contam 0. Aula sem tópicos = null. */
export function lessonPercent(scores: (number | null)[]): number | null {
  if (!scores.length) return null;
  return Math.round(scores.reduce<number>((a, b) => a + (b ?? 0), 0) / scores.length);
}

/** Aula 1 sempre liberada; as seguintes exigem 70% na aula anterior (ou aula anterior concluída se não tiver tópicos). */
export function isLessonUnlocked(index: number, prevPct: number | null, prevDone: boolean) {
  if (index === 0) return true;
  if (prevPct === null) return prevDone;
  return prevPct >= PASS_PERCENT;
}

/** Registra a nota no histórico do aluno (servidor). */
export async function logDeckScore(slug: string, pct: number) {
  const { supabase } = await import("@/integrations/supabase/client");
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  await supabase.from("activity_logs").insert({ user_id: data.user.id, action: "deck_score", page: slug, metadata: { slug, pct } as any });
}

/** Uma nota só vale se foi feita depois do último "refazer do zero" do professor. Nota sem data = antiga. */
export function isAfterReset(at: string | null | undefined, resetAt: string | null | undefined) {
  if (!resetAt) return true;
  if (!at) return false;
  return new Date(at).getTime() > new Date(resetAt).getTime();
}

/** Apaga o progresso local do aluno num tópico (slides, nota e "concluído"). */
export function clearLocalDeck(slug: string) {
  try { ["deck-done:", "deck-progress:", "deck-score:"].forEach(p => { localStorage.removeItem(p + slug); }); localStorage.removeItem(`deck-score:${slug}:at`); } catch { /* ignore */ }
}
