import { describe, it, expect } from "vitest";
import { buildCrossword } from "./crosswordLayout";

describe("buildCrossword", () => {
  const words = ["SOLIDO", "FERRO", "OXIGENIO", "ATOMO", "SODIO", "ELETRON", "MOLECULA"];
  it("cruza palavras horizontais e verticais sem conflito", () => {
    const l = buildCrossword(words, (w) => w, 5);
    expect(l.words.length).toBeGreaterThanOrEqual(4);
    expect(l.words.some((w) => w.dir === "down")).toBe(true);
    const cells = new Map<string, string>();
    for (const w of l.words) for (let i = 0; i < w.answer.length; i++) {
      const k = `${w.row + (w.dir === "down" ? i : 0)},${w.col + (w.dir === "across" ? i : 0)}`;
      if (cells.has(k)) expect(cells.get(k)).toBe(w.answer[i]);
      cells.set(k, w.answer[i]);
    }
  });
  it("remove acentos e espaços", () => {
    const l = buildCrossword(["Óxido"], (w) => w, 1);
    expect(l.words[0].answer).toBe("OXIDO");
  });
});
