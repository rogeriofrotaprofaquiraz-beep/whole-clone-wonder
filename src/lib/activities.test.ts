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

import { convertQuestion as convQ, grade as gradeQ, newQuestion as newQ } from "./activities";
describe("mudar tipo e resposta matemática", () => {
  it("mantém enunciado, alternativas e imagens ao trocar múltipla por seleção", () => {
    const q = { ...newQ("multipla"), prompt: "Qual?", options: ["A", "B", "C"], optionImages: [null, "img.png", null], correct: [1] };
    const s = convQ(q, "selecao");
    expect(s.type).toBe("selecao"); expect(s.id).toBe(q.id); expect(s.prompt).toBe("Qual?");
    expect(s.options).toEqual(["A", "B", "C"]); expect(s.optionImages?.[1]).toBe("img.png"); expect(s.correct).toEqual([1]);
  });
  it("seleção com várias corretas vira múltipla com só a primeira", () => {
    const q = { ...newQ("selecao"), options: ["A", "B", "C"], correct: [2, 0] };
    expect(convQ(q, "multipla").correct).toEqual([2]);
  });
  it("verdadeiro ou falso mantém as opções fixas", () => {
    const q = { ...newQ("multipla"), options: ["x", "y", "z"] };
    expect(convQ(q, "vf").options).toEqual(["Verdadeiro", "Falso"]);
  });
  it("resposta matemática aceita vírgula e rejeita valor errado", () => {
    const q = { ...newQ("matematica"), answer: "6,02" };
    expect(gradeQ(q, "6.02")).toBe(true); expect(gradeQ(q, "6,02")).toBe(true); expect(gradeQ(q, "6")).toBe(false);
  });
});

describe("novos tipos estilo Wayground", () => {
  it("arraste e solte confere cada espaço", () => {
    const q = newQuestion("arraste");
    expect(grade(q, ["próton", "elétron"])).toBe(true);
    expect(grade(q, ["nêutron", "elétron"])).toBe(false);
  });
  it("destaque exige exatamente as palavras marcadas", () => {
    const q = newQuestion("destaque");
    expect(grade(q, ["sal", "água"])).toBe(true);
    expect(grade(q, ["água"])).toBe(false);
  });
  it("ponto de acesso aceita clique dentro do raio", () => {
    const q = newQuestion("hotspot");
    expect(grade(q, { x: 55, y: 52 })).toBe(true);
    expect(grade(q, { x: 90, y: 90 })).toBe(false);
  });
  it("gráficos confere os valores das barras", () => {
    const q = newQuestion("graficos");
    expect(grade(q, ["10", "20"])).toBe(true);
    expect(grade(q, ["10", "15"])).toBe(false);
  });
});
