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

import { parseChart } from "./activities";
describe("gráfico da atividade", () => {
  it("lê linhas Nome: valor e ignora linhas inválidas", () => {
    expect(parseChart("Água: 10\nSal: 2,5\nlixo")).toEqual([{ label: "Água", value: 10 }, { label: "Sal", value: 2.5 }]);
  });
});

describe("jogos como pergunta", () => {
  const q = { id: "1", type: "cruzadinha" as const, prompt: "", pairs: [{ a: "dica", b: "Átomo" }, { a: "d", b: "Química" }] };
  it("cruzadinha aceita palavras sem acento e maiúsculas", () => {
    expect(grade(q, ["ATOMO", "quimica"])).toBe(true);
    expect(grade(q, ["ATOMO", "quimic"])).toBe(false);
  });
  it("dominó exige cada resposta na pergunta certa", () => {
    const d = { ...q, type: "domino" as const };
    expect(grade(d, [0, 1])).toBe(true);
    expect(grade(d, [1, 0])).toBe(false);
  });
  it("forca só conta quando o aluno vence", () => {
    expect(grade({ ...q, type: "forca" }, true)).toBe(true);
    expect(grade({ ...q, type: "forca" }, false)).toBe(false);
  });
});
