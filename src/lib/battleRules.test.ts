import { describe, it, expect } from "vitest";
import { battleCoins } from "./battleRules";
describe("moedas da batalha", () => {
  it("vitória 3x2 dá 4·3 + 1·2 + 4 de bônus", () => expect(battleCoins(3, 2)).toBe(18));
  it("derrota 1x4 dá 4 + 4 = 8, sem bônus", () => expect(battleCoins(1, 4)).toBe(8));
});
