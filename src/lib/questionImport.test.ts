import { describe, it, expect } from "vitest";
import { parseCsv, rowsToQuestions, TEMPLATE_CSV } from "./questionImport";

const list = [
  { key: "geral", label: "Química Geral", area: "geral", color: "#000", sort: 1 },
  { key: "ciencias6", label: "Ciências — 6º Ano", area: "ciencias", color: "#000", sort: 2 },
];

describe("importação de questões", () => {
  it("o modelo gera questões com disciplina, jogos e resposta certa", () => {
    const { ok, errors } = rowsToQuestions(parseCsv(TEMPLATE_CSV), list, "u");
    expect(errors).toEqual([]);
    expect(ok).toHaveLength(2);
    expect(ok[0]).toMatchObject({ discipline: "geral", area: "geral", games: ["quiz", "forca"], correct_index: 0 });
    expect(ok[1]).toMatchObject({ discipline: "ciencias6", area: "ciencias", games: ["caca_palavras", "memoria"] });
  });
  it("disciplina inexistente vira erro da linha", () => {
    const { ok, errors } = rowsToQuestions([{ disciplina: "Astrologia", pergunta: "?" }], list, "u");
    expect(ok).toHaveLength(0);
    expect(errors[0]).toContain("Astrologia");
  });
});
