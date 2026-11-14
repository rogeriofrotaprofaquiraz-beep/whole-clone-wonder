import { describe, it, expect } from "vitest";
import { gamesFor, difficultyBand, allowsGame, gameOrFilter } from "./questionGames";

describe("gamesFor", () => {
  it("resposta de uma palavra entra também nos jogos de palavras", () => {
    const g = gamesFor({ question: "Gás nobre nº 2?", options: ["Hélio", "Neon"], correct_index: 0, difficulty: 1 });
    expect(g).toContain("quiz");
    expect(g).toContain("caca_palavras");
  });
  it("resposta longa fica só nos jogos de múltipla escolha", () => {
    const g = gamesFor({ question: "?", options: ["Ligação covalente polar", "x"], correct_index: 0, difficulty: 1 });
    expect(g).not.toContain("caca_palavras");
    expect(g).toContain("batalha_naval");
  });
  it("todas as questões compatíveis ficam disponíveis para todos os jogos", () => {
    const r = { question: "?", options: ["Hélio", "Neon"], correct_index: 0, difficulty: 1, games: ["forca"] };
    expect(gamesFor(r)).toContain("forca");
    expect(allowsGame(r, "quiz")).toBe(true);
    expect(allowsGame(r, "forca")).toBe(true);
  });
  it("filtro de consulta aceita questões sem marcação ou marcadas para o jogo", () => {
    expect(gameOrFilter("quiz")).toBe("id.not.is.null");
  });
  it("faixas de dificuldade", () => {
    expect([difficultyBand(1), difficultyBand(3), difficultyBand(5)]).toEqual(["facil", "medio", "dificil"]);
  });
});
