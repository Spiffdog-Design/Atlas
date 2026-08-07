import { describe, expect, it } from "vitest";
import { capitalize, trimLines } from "./string";

describe("string utilities", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("atlas")).toBe("Atlas");
  });

  it("returns empty string unchanged", () => {
    expect(capitalize("")).toBe("");
  });

  it("trims each line independently", () => {
    expect(trimLines("  a\n b \n  c  ")).toBe("a\nb\nc");
  });
});
