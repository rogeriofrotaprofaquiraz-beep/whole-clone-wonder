import { describe, it, expect } from "vitest";
import { grade, newQuestion } from "./activities";

describe("correção das atividades", () => {
  it("múltipla escolha só aceita a alternativa correta", () => {
    const q = { ...newQuestion("multipla"), correct: [2] };
    expect(grade(q, 2)).toBe(true);
    expect(grade(q, 1)).toBe(false);
  });
  it("lacunas ignora maiúsculas e acentos", () => {
    const q = { ...newQuestion("lacunas"), text: "A [Química] estuda a [matéria]." };
    expect(grade(q, ["quimica", "Materia"])).toBe(true);
    expect(grade(q, ["quimica", "energia"])).toBe(false);
  });
  it("reordenar exige a ordem exata", () => {
    const q = { ...newQuestion("reordenar"), items: ["a", "b", "c"] };
    expect(grade(q, ["a", "b", "c"])).toBe(true);
    expect(grade(q, ["b", "a", "c"])).toBe(false);
  });
});
