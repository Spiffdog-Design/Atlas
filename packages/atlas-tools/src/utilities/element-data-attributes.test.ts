import { describe, expect, it } from "vitest";
import { buildDataAttributes, normalizeValue } from "./element-data-attributes";

describe("normalizeValue", () => {
  it("returns the provided value when present", () => {
    expect(normalizeValue("primary", "base")).toBe("primary");
  });

  it("returns the fallback when the value is nullish", () => {
    expect(normalizeValue(undefined, "base")).toBe("base");
    expect(normalizeValue(null, "solid")).toBe("solid");
  });
});

describe("buildDataAttributes", () => {
  it("builds data attributes from an object", () => {
    expect(buildDataAttributes({ variant: "outline", rounded: true })).toEqual({
      "data-variant": "outline",
      "data-rounded": "true",
    });
  });

  it("skips nullish values and stringifies others", () => {
    expect(buildDataAttributes({ appearance: "alert", disabled: false, label: undefined })).toEqual({
      "data-appearance": "alert",
      "data-disabled": "false",
    });
  });
});
