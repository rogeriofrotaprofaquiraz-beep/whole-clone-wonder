import { supabase } from "@/integrations/supabase/client";
import { topicOrFilter } from "@/lib/questionTopics";
import { gamePool, selectGameQuestions } from "@/lib/studentQuestions";

/** Filtro de consulta: questões sem jogos marcados ou marcadas para o jogo. */
export function gameOrFilter(key: string) {
  return "id.not.is.null";
}

export type LinkedTerm = { term: string; clue: string; difficulty: number; id?: string };
type QRow = { id?: string; question: string; options: unknown; correct_index: number; difficulty?: number | null; answer_text?: string | null };

/** Converte perguntas do banco em pares palavra/dica para jogos de palavras. */
export function questionsToTerms(rows: QRow[]): LinkedTerm[] {
  const out: LinkedTerm[] = [];
  for (const r of rows) {
    const opts = Array.isArray(r.options) ? (r.options as unknown[]) : [];
    const raw = String(r.answer_text || opts[r.correct_index] || "").trim();
    const word = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    if (!/^[A-Z]{3,12}$/.test(word)) continue;
    out.push({ term: word, clue: r.question, difficulty: r.difficulty ?? 1, ...(r.id ? { id: r.id } : {}) });
  }
  return out;
}

/** Palavras dos termos cadastrados + respostas das perguntas geradas (por área ou assunto). */
export async function loadLinkedTerms(area: string, topic?: string, game?: string): Promise<LinkedTerm[]> {
  const seen = new Set<string>();
  return questionsToTerms(await gamePool(area, topic)).filter((x) => {
    const k = x.term.toUpperCase();
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
}

export async function loadLinkedQuestions(area: string, topic?: string, game?: string) {
  return (await gamePool(area, topic)).filter(q => Array.isArray(q.options) && q.options.length >= 2);
}
