import { describe, expect, it } from "vitest";
import { usableCardReference } from "./playerProfile";
import { ELEMENTS_DATA } from "@/data/elements";

describe("referência da carta para o avatar ultrarrealista", () => {
  it("aceita imagem fixa por https", () => {
    const url = "https://image.pollinations.ai/prompt/abc?width=600&height=800&nologo=true";
    expect(usableCardReference(url)).toBe(url);
  });

  it("recusa vídeo, SVG, arte de placeholder, url relativa e vazio", () => {
    expect(usableCardReference("https://x.supabase.co/uploads/helio_mov.mp4")).toBeUndefined();
    expect(usableCardReference("https://x.com/hero.svg")).toBeUndefined();
    expect(usableCardReference("https://x.com/fallback-hero.png")).toBeUndefined();
    expect(usableCardReference("/local/hero.png")).toBeUndefined();
    expect(usableCardReference(undefined)).toBeUndefined();
    expect(usableCardReference(null)).toBeUndefined();
  });

  it("carta de hidrogênio é vídeo e não serve; silício é imagem e serve", () => {
    expect(usableCardReference(ELEMENTS_DATA["H"].heroImage)).toBeUndefined();
    expect(usableCardReference(ELEMENTS_DATA["Si"].heroImage)).toBe(ELEMENTS_DATA["Si"].heroImage);
  });
});

import { elementForLevel as efl } from "./playerProfile";
describe("elemento por nível", () => {
  it("nível 1 = H, 2 = He, 3 = Li", () => {
    expect(efl(1)).toBe("H"); expect(efl(2)).toBe("He"); expect(efl(3)).toBe("Li");
  });
});
