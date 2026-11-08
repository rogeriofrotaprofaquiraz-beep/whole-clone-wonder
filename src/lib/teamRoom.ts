import { COINS_RIGHT, COINS_WRONG } from "./miniGames";

type Score = Record<string, { right: number; wrong: number }>;

/** Equipes com mais acertos (empate: todas as empatadas vencem). */
export function teamWinners(score: Score): string[] {
  const best = Math.max(...Object.values(score).map((s) => s.right));
  return Object.keys(score).filter((k) => score[k].right === best);
}

/** Moedas que cada membro da equipe vencedora recebe. */
export function teamPrize(s?: { right: number; wrong: number }): number {
  return s ? s.right * COINS_RIGHT + s.wrong * COINS_WRONG : 0;
}
