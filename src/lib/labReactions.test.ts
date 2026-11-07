import { describe, it, expect } from "vitest";
import { mix } from "./labReactions";

describe("laboratório virtual", () => {
  it("vinagre + bicarbonato libera gás carbônico em qualquer ordem", () => {
    expect(mix(["bicarbonato", "vinagre"])?.product).toContain("Gás carbônico");
  });
  it("mistura sem reação conhecida retorna null", () => {
    expect(mix(["Cu", "NaCl"])).toBeNull();
  });
  it("um único reagente não reage", () => {
    expect(mix(["H"])).toBeNull();
  });
});
