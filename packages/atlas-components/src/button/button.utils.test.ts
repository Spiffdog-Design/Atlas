import { describe, expect, it } from "vitest";
import {
  buildButtonDataAttributes,
  normalizeButtonAppearance,
  normalizeButtonVariant,
} from "./button.utils";

describe("normalizeButtonAppearance", () => {
  it("returns default base when no appearance is provided", () => {
    expect(normalizeButtonAppearance(undefined)).toBe("base");
  });

  it("returns the provided appearance", () => {
    expect(normalizeButtonAppearance("alert")).toBe("alert");
  });
});

describe("normalizeButtonVariant", () => {
  it("returns default solid when no variant is provided", () => {
    expect(normalizeButtonVariant(undefined)).toBe("solid");
  });

  it("returns the provided variant", () => {
    expect(normalizeButtonVariant("outline")).toBe("outline");
  });
});

describe("buildButtonDataAttributes", () => {
  it("builds default data attributes", () => {
    expect(buildButtonDataAttributes({})).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
      "data-rounded": "false",
    });
  });

  it("builds data attributes for all options", () => {
    expect(
      buildButtonDataAttributes({
        appearance: "success",
        variant: "outline",
        rounded: true,
        disabled: true,
      }),
    ).toEqual({
      "data-appearance": "success",
      "data-variant": "outline",
      "data-rounded": "true",
      "data-disabled": "true",
    });
  });
});
