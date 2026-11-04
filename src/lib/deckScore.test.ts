import { describe, it, expect } from "vitest";
import { deckPercent, isTopicUnlocked } from "./deckScore";

describe("liberação por pontuação", () => {
  it("primeiro tópico sempre liberado", () => expect(isTopicUnlocked(0, null)).toBe(true));
  it("libera o próximo com 70%", () => expect(isTopicUnlocked(1, 70)).toBe(true));
  it("bloqueia o próximo com 69%", () => expect(isTopicUnlocked(1, 69)).toBe(false));
  it("bloqueia se o anterior não foi feito", () => expect(isTopicUnlocked(2, null)).toBe(false));
  it("calcula porcentagem por estrelas (3 por slide)", () => expect(deckPercent(7, 4)).toBe(58));
});

import { isLessonUnlocked, lessonPercent, lessonTopics } from "./deckScore";
describe("liberação de aulas", () => {
  it("aula 1 sempre liberada", () => expect(isLessonUnlocked(0, null, false)).toBe(true));
  it("aula 2 libera com 70% na aula 1", () => expect(isLessonUnlocked(1, 70, false)).toBe(true));
  it("aula 2 bloqueada com 69% na aula 1", () => expect(isLessonUnlocked(1, 69, true)).toBe(false));
  it("tópico não feito conta 0 na média", () => expect(lessonPercent([100, null])).toBe(50));
  it("lê tópicos do conteúdo", () => expect(lessonTopics("# A\n- **01 X**\ntexto\n• Y")).toEqual(["01 X", "Y"]));
});

import { isAfterReset } from "./deckScore";
describe("refazer do zero", () => {
  it("ignora nota feita antes do reinício", () => { expect(isAfterReset("2026-01-01T00:00:00Z", "2026-02-01T00:00:00Z")).toBe(false); });
  it("vale nota feita depois do reinício", () => { expect(isAfterReset("2026-03-01T00:00:00Z", "2026-02-01T00:00:00Z")).toBe(true); });
  it("sem reinício toda nota vale; nota sem data é ignorada após reinício", () => { expect(isAfterReset(null, null)).toBe(true); expect(isAfterReset(null, "2026-02-01T00:00:00Z")).toBe(false); });
});
