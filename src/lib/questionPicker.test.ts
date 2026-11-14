import { describe, it, expect } from "vitest";
import { pickUnseen, quizCoins, summarize } from "./questionPicker";

const pool = Array.from({ length: 5 }, (_, i) => ({ id: `q${i}` }));

describe("questionPicker", () => {
  it("não repete perguntas já vistas", () => {
    const { picked } = pickUnseen(pool, ["q0", "q1", "q2"], 2);
    expect(picked.map((p) => p.id).sort()).toEqual(["q3", "q4"]);
  });
  it("usa apenas as perguntas novas restantes", () => {
    const r = pickUnseen(pool, ["q0", "q1", "q2", "q3"], 3);
    expect(r.picked.map(q => q.id)).toEqual(["q4"]);
    expect(r.seen).toHaveLength(5);
  });
  it("moedas sobem com a dificuldade", () => {
    expect([1, 2, 3, 4, 5].map(quizCoins)).toEqual([4, 4, 4, 4, 4]);
  });
  it("relatório conta acertos por nível", () => {
    const s = summarize([
      { question: "a", difficulty: 1, correct: true, answer: "x", chosen: "x" },
      { question: "b", difficulty: 1, correct: false, answer: "x", chosen: "y" },
    ]);
    expect(s.percent).toBe(50);
    expect(s.byLevel[1]).toEqual({ hit: 1, miss: 1 });
  });
});
