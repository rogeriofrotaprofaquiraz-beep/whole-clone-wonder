import { supabase } from "@/integrations/supabase/client";
import { topicOrFilter } from "@/lib/questionTopics";

/** Filtro de consulta: questões sem jogos marcados ou marcadas para o jogo. */
export function gameOrFilter(key: string) {
  return `games.eq.{},games.cs.{${key}}`;
}

export type LinkedTerm = { term: string; clue: string; difficulty: number };
type QRow = { question: string; options: unknown; correct_index: number; difficulty?: number | null; answer_text?: string | null };

/** Converte perguntas do banco em pares palavra/dica para jogos de palavras. */
export function questionsToTerms(rows: QRow[]): LinkedTerm[] {
  const out: LinkedTerm[] = [];
  for (const r of rows) {
    const opts = Array.isArray(r.options) ? (r.options as unknown[]) : [];
    const raw = String(r.answer_text || opts[r.correct_index] || "").trim();
    const word = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    if (!/^[A-Z]{3,12}$/.test(word)) continue;
    out.push({ term: word, clue: r.question, difficulty: r.difficulty ?? 1 });
  }
  return out;
}

/** Palavras dos termos cadastrados + respostas das perguntas geradas (por área ou assunto). */
export async function loadLinkedTerms(area: string, topic?: string, game?: string): Promise<LinkedTerm[]> {
  let q = supabase.from("chem_questions").select("question,options,correct_index,difficulty,answer_text").limit(400);
  if (game) q = q.or(gameOrFilter(game));
  q = q.eq("area", area as never);
  if (topic) q = q.or(topicOrFilter(topic));
  const [{ data: t }, { data: qs }] = await Promise.all([
    topic ? Promise.resolve({ data: [] as any[] }) : supabase.from("chem_terms").select("term,clue,difficulty").eq("area", area as never).limit(400),
    q,
  ]);
  const seen = new Set<string>();
  return [...((t ?? []) as LinkedTerm[]), ...questionsToTerms((qs ?? []) as QRow[])].filter((x) => {
    const k = x.term.toUpperCase();
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
}

export async function loadLinkedQuestions(area: string, topic?: string, game?: string) {
  let q = supabase.from("chem_questions").select("question,options,correct_index").limit(200);
  if (game) q = q.or(gameOrFilter(game));
  q = q.eq("area", area as never);
  if (topic) q = q.or(topicOrFilter(topic));
  const { data } = await q;
  return data ?? [];
}
