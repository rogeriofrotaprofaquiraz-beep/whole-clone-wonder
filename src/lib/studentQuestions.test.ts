import { describe, expect, it } from "vitest";
import { accuracy, answerPoints, freshQuestions } from "./studentQuestions";

describe("seleção do aluno", () => {
  it("não repete questão mesmo quando faltam perguntas para a rodada", () => {
    expect(freshQuestions([{ question: " Já vista " }, { question: "Nova" }, { question: " NOVA " }], new Set(["já vista"]))).toEqual([{ question: "Nova" }]);
  });
  it("não reinicia o banco esgotado", () => {
    expect(freshQuestions([{ question: "Vista" }], new Set(["vista"]))).toEqual([]);
  });
  it("atribui 4 pontos por acerto e 1 por erro", () => {
    expect([answerPoints(true), answerPoints(false)]).toEqual([4, 1]);
  });
  it("índice de acerto ignora questões ainda não respondidas", () => {
    expect(accuracy([{ is_correct: true }, { is_correct: false }, { is_correct: null }])).toEqual({ right: 1, answered: 2, percent: 50 });
  });
});