import { describe, it, expect } from "vitest";
import { teamPrize, teamWinners } from "./teamRoom";

describe("sala de equipes", () => {
  it("vence a equipe com mais acertos", () => {
    expect(teamWinners({ a: { right: 3, wrong: 2 }, b: { right: 4, wrong: 1 } })).toEqual(["b"]);
  });
  it("empate: as duas vencem", () => {
    expect(teamWinners({ a: { right: 2, wrong: 0 }, b: { right: 2, wrong: 3 } })).toEqual(["a", "b"]);
  });
  it("cada membro ganha 4 por acerto e 1 por erro", () => {
    expect(teamPrize({ right: 4, wrong: 1 })).toBe(17);
  });
});
