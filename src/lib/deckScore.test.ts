import { describe, it, expect } from "vitest";
import { deckPercent, isTopicUnlocked } from "./deckScore";

describe("liberação por pontuação", () => {
  it("primeiro tópico sempre liberado", () => expect(isTopicUnlocked(0, null)).toBe(true));
  it("libera o próximo com 70%", () => expect(isTopicUnlocked(1, 70)).toBe(true));
  it("bloqueia o próximo com 69%", () => expect(isTopicUnlocked(1, 69)).toBe(false));
  it("bloqueia se o anterior não foi feito", () => expect(isTopicUnlocked(2, null)).toBe(false));
  it("calcula porcentagem por estrelas (3 por slide)", () => expect(deckPercent(7, 4)).toBe(58));
});
