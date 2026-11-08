import { questionsToTerms } from "./linkedBank";

export type BankRow = {
  question: string;
  options: unknown;
  correct_index: number;
  difficulty: number | null;
  answer_text?: string | null;
};

/** Jogos que usam a pergunta (múltipla escolha sempre; jogos de palavras só se a resposta for uma palavra). */
export const MC_GAMES = ["Quiz Rápido", "Duelo da Forca", "Campeonato (fase)", "Sala de Equipes", "Tabuleiro Químico", "Batalha Naval"];
export const WORD_GAMES = ["Caça-Palavras", "Palavras Cruzadas", "Jogo da Memória"];

export function gamesFor(r: BankRow): string[] {
  const opts = Array.isArray(r.options) ? r.options : [];
  const games = opts.length >= 2 ? [...MC_GAMES] : [];
  if (questionsToTerms([r as never]).length) games.push(...WORD_GAMES);
  return games;
}

export function difficultyBand(d: number | null | undefined): "facil" | "medio" | "dificil" {
  const n = d ?? 1;
  return n <= 2 ? "facil" : n === 3 ? "medio" : "dificil";
}
