import { describe, it, expect } from "vitest";
import { resolveAccess } from "@/lib/featureAccess";
const base = { role: "student", feature_key: "jogo_forca" };
describe("resolveAccess", () => {
  it("perfil personalizado vence a regra da turma", () => {
    const rules = [{ ...base, class_id: "c1", allowed: true }, { ...base, class_id: "c1", allowed: false, profile_id: "p1" }];
    expect(resolveAccess(rules, ["student"], ["c1"], "jogo_forca", ["p1"])).toBe(false);
    expect(resolveAccess(rules, ["student"], ["c1"], "jogo_forca", [])).toBe(true);
  });
  it("regra da turma vence a geral", () => {
    const rules = [{ ...base, class_id: null, allowed: true }, { ...base, class_id: "c1", allowed: false }];
    expect(resolveAccess(rules, ["student"], ["c1"], "jogo_forca")).toBe(false);
  });
});
