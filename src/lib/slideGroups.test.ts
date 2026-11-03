import { describe, expect, it } from "vitest";
import { applyGroupHeader, groupSlides } from "./slideGroups";

describe("cabeçalho por grupo", () => {
  it("aplica a imagem a todos os slides do módulo, sem alterar outro módulo", () => {
    const slides = [
      { title: "1. Química", header: { image: "antiga", show: false } },
      { title: "1.1 Matéria" },
      { title: "Exemplos" },
      { title: "2. Átomos", header: { image: "outro" } },
    ];
    const groups = groupSlides(slides);
    const result = applyGroupHeader(slides, groups[0].idx, "cabecalho-16-3");
    expect(result.slice(0, 3).map(s => s.header?.image)).toEqual(["cabecalho-16-3", "cabecalho-16-3", "cabecalho-16-3"]);
    expect(result[0].header?.show).toBe(true);
    expect(result[3].header?.image).toBe("outro");
    expect(slides[0].header?.image).toBe("antiga");
  });
  it("remove somente o cabeçalho do grupo selecionado", () => {
    const result = applyGroupHeader([{ title: "1. A", header: { image: "a" } }, { title: "2. B", header: { image: "b" } }], [0], "");
    expect(result[0].header?.image).toBe("");
    expect(result[1].header?.image).toBe("b");
  });
});