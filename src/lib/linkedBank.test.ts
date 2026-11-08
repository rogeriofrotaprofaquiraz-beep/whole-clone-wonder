import { describe, it, expect } from "vitest";
import { questionsToTerms } from "./linkedBank";

describe("questionsToTerms", () => {
  it("usa a resposta correta de uma palavra como termo e a pergunta como dica", () => {
    const r = questionsToTerms([{ question: "Gás nobre mais leve?", options: ["Neônio", "Hélio"], correct_index: 1, difficulty: 2 }]);
    expect(r).toEqual([{ term: "HELIO", clue: "Gás nobre mais leve?", difficulty: 2 }]);
  });
  it("ignora respostas com várias palavras ou números", () => {
    expect(questionsToTerms([{ question: "x", options: ["Cloreto de sódio", "7"], correct_index: 0 }])).toEqual([]);
  });
});
