import { describe, it, expect } from "vitest";
import { gamesFor, difficultyBand } from "./questionGames";

describe("gamesFor", () => {
  it("resposta de uma palavra entra também nos jogos de palavras", () => {
    const g = gamesFor({ question: "Gás nobre nº 2?", options: ["Hélio", "Neon"], correct_index: 0, difficulty: 1 });
    expect(g).toContain("Quiz Rápido");
    expect(g).toContain("Caça-Palavras");
  });
  it("resposta longa fica só nos jogos de múltipla escolha", () => {
    const g = gamesFor({ question: "?", options: ["Ligação covalente polar", "x"], correct_index: 0, difficulty: 1 });
    expect(g).not.toContain("Caça-Palavras");
    expect(g).toContain("Batalha Naval");
  });
  it("faixas de dificuldade", () => {
    expect([difficultyBand(1), difficultyBand(3), difficultyBand(5)]).toEqual(["facil", "medio", "dificil"]);
  });
});
