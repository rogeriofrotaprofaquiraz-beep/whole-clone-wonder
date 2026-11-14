import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type StudentQuestion = Tables<"chem_questions">;
export const questionKey = (text: string) => text.trim().toLowerCase();
export const answerPoints = (correct: boolean) => correct ? 4 : 1;
export function freshQuestions<T extends { question: string }>(pool: T[], seen: Set<string>) {
  const keys = new Set(seen);
  return pool.filter(q => {
    const key = questionKey(q.question);
    if (keys.has(key)) return false;
    keys.add(key); return true;
  });
}
export function accuracy(rows: { is_correct: boolean | null }[]) {
  const answered = rows.filter(r => r.is_correct !== null);
  const right = answered.filter(r => r.is_correct).length;
  return { right, answered: answered.length, percent: answered.length ? Math.round(100 * right / answered.length) : 0 };
}
export async function gamePool(area?: string, topic?: string, level?: string) {
  const rows: StudentQuestion[] = [];
  for (let offset = 0; ; offset += 500) {
    const { data, error } = await supabase.rpc("get_game_question_pool", { _area: area, _topic: topic, _level: level }).range(offset, offset + 499);
    if (error) throw error;
    rows.push(...(data ?? []));
    if (!data || data.length < 500) break;
  }
  return freshQuestions(rows, new Set());
}
export async function claimQuestions(ids: string[], game: string) {
  if (!ids.length) return [];
  const { data, error } = await supabase.rpc("claim_game_questions", { _ids: ids, _game: game });
  if (error) throw error;
  return data ?? [];
}
export async function selectGameQuestions({ area, topic, level, count = 10, game, word = false, difficulty }: {
  area?: string; topic?: string; level?: string; count?: number; game: string; word?: boolean; difficulty?: number;
}) {
  const pool = (await gamePool(area, topic, level)).filter(q => {
    if (difficulty && q.difficulty !== difficulty) return false;
    const options = Array.isArray(q.options) ? q.options : [];
    if (word) {
      const value = String(q.answer_text || options[q.correct_index] || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return /^[a-z]{3,12}$/i.test(value);
    }
    return options.length >= 2 && options[q.correct_index] != null;
  }).sort(() => Math.random() - 0.5);
  return claimQuestions(pool.slice(0, Math.min(100, count)).map(q => q.id), game);
}
export async function submitGameAnswer(id: string, answer: string) {
  const { data, error } = await supabase.rpc("answer_game_question", { _question: id, _answer: answer });
  if (error) throw error;
  return data;
}