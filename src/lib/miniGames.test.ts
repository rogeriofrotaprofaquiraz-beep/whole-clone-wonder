import { describe, it, expect } from "vitest";
import { coinsFor, cellVoltage, sameAtoms, rounds, norm, CELLS } from "./miniGames";

describe("minijogos", () => {
  it("4 moedas por acerto e 1 por erro", () => { expect(coinsFor(3, 2)).toBe(14); });
  it("pilha Zn/Cu dá 1,10 V", () => {
    expect(cellVoltage(CELLS.find(c => c.metal === "Zn")!, CELLS.find(c => c.metal === "Cu")!)).toBe(1.1);
  });
  it("H2O reconhecida", () => { expect(sameAtoms({ H: 2, O: 1 }, { O: 1, H: 2 })).toBe(true); expect(sameAtoms({ H: 1 }, { H: 2 })).toBe(false); });
  it("15 rodadas mesmo com lista menor", () => { expect(rounds([1, 2, 3], 15)).toHaveLength(15); });
  it("CO₂ e co2 são iguais", () => { expect(norm("CO₂")).toBe(norm("co2")); });
});
