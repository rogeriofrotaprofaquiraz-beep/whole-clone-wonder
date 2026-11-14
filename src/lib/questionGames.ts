import { questionsToTerms, gameOrFilter } from "./linkedBank";
export { gameOrFilter };

export type BankRow = {
  question: string;
  options: unknown;
  correct_index: number;
  difficulty: number | null;
  answer_text?: string | null;
  games?: string[] | null;
};

export type GameKind = "mc" | "word";

/** Todos os tipos de jogo do app que podem receber questões do banco. */
export const GAME_TYPES: { key: string; label: string; kind: GameKind }[] = [
  { key: "quiz", label: "Quiz", kind: "mc" },
  { key: "forca", label: "Forca", kind: "mc" },
  { key: "caca_palavras", label: "Caça-Palavras", kind: "word" },
  { key: "cruzada", label: "Palavras Cruzadas", kind: "word" },
  { key: "memoria", label: "Memória", kind: "word" },
  { key: "stop", label: "Stop", kind: "word" },
  { key: "bingo", label: "Bingo", kind: "mc" },
  { key: "tabuleiro", label: "Tabuleiro", kind: "mc" },
  { key: "batalha_naval", label: "Batalha Naval", kind: "mc" },
  { key: "domino", label: "Dominó", kind: "word" },
  { key: "roleta", label: "Roleta", kind: "mc" },
  { key: "anagrama", label: "Anagrama", kind: "word" },
  { key: "tangram", label: "Tangram Molecular", kind: "mc" },
  { key: "verdadeiro_falso", label: "Verdadeiro ou Falso", kind: "mc" },
  { key: "campeonato", label: "Campeonato (pergunta da fase)", kind: "mc" },
  { key: "sala_equipes", label: "Sala de Equipes", kind: "mc" },
  { key: "partida_ao_vivo", label: "Partida ao vivo", kind: "mc" },
  { key: "quiz_curso", label: "Quiz dos cursos", kind: "mc" },
];

export const gameLabel = (k: string) => GAME_TYPES.find((g) => g.key === k)?.label ?? k;

/** Jogos escolhidos automaticamente pelo formato da questão. */
export function autoGames(r: BankRow): string[] {
  const opts = Array.isArray(r.options) ? r.options : [];
  const word = questionsToTerms([r as never]).length > 0;
  return GAME_TYPES.filter((g) => (g.kind === "mc" ? opts.length >= 2 : word)).map((g) => g.key);
}

/** Jogos marcados pelo professor; sem marcação, vale a escolha automática. */
export function gamesFor(r: BankRow): string[] {
  return autoGames(r);
}

export function allowsGame(r: BankRow, key: string) {
  return gamesFor(r).includes(key);
}

export function difficultyBand(d: number | null | undefined): "facil" | "medio" | "dificil" {
  const n = d ?? 1;
  return n <= 2 ? "facil" : n === 3 ? "medio" : "dificil";
}

/** Pontos exibidos no cartão da questão. */
export const questionPoints = (d: number | null | undefined) => Math.max(1, d ?? 1) * 5 + 5;
