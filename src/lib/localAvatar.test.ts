import { describe, it, expect } from "vitest";
import { buildAvatarSVG } from "./localAvatar";
import { APPEARANCE_OPTIONS } from "./heroAppearance";

describe("compositor do super-herói", () => {
  // Cada opção de cada categoria precisa mudar o desenho, para que toda combinação marcada gere um herói diferente.
  for (const [cat, opts] of Object.entries(APPEARANCE_OPTIONS)) {
    it(`todas as opções de "${cat}" geram desenhos diferentes`, () => {
      const svgs = opts.map((o) => buildAvatarSVG({ [cat]: o.v }));
      expect(new Set(svgs).size).toBe(opts.length);
    });
  }

  it("combinações diferentes geram heróis diferentes", () => {
    const a = buildAvatarSVG({ gender: "feminino", speciesType: "robo", cape: "longa", mainPower: "fogo" });
    const b = buildAvatarSVG({ gender: "feminino", speciesType: "robo", cape: "longa", mainPower: "gelo" });
    expect(a).not.toBe(b);
  });
});
