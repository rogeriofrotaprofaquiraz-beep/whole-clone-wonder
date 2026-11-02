import { describe, expect, it } from "vitest";
import { parseTopicList } from "./parseTopicList";

describe("pasted topics", () => {
  it("creates a topic for each nonempty line in the pasted order", () => {
    expect(parseTopicList("Sólido\n\nLíquido\r\nGasoso")).toEqual(["Sólido", "Líquido", "Gasoso"]);
  });
  it("accepts bullet and numbered lists without removing meaningful numbering", () => {
    expect(parseTopicList("- Sólido\n• Líquido\n* Gasoso\n1. Plasma\n2) Condensado\n5.1 Sólido")).toEqual([
      "Sólido", "Líquido", "Gasoso", "Plasma", "Condensado", "5.1 Sólido",
    ]);
  });
});