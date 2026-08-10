import { describe, expect, it } from "vitest";

import {
  getControlDataAttributes,
  normalizeAppearance,
  normalizeControlOption,
  normalizeRounded,
  normalizeVariant,
} from "./control-variants.utils";

describe("normalizeControlOption", () => {
  it("returns the fallback when no value is provided", () => {
    expect(normalizeControlOption(undefined, "base")).toBe("base");
  });

  it("returns the provided value when present", () => {
    expect(normalizeControlOption("outline", "solid")).toBe("outline");
  });
});

describe("normalizeAppearance", () => {
  it("returns default base when no appearance is provided", () => {
    expect(normalizeAppearance(undefined)).toBe("base");
  });

  it("returns the provided appearance", () => {
    expect(normalizeAppearance("alert")).toBe("alert");
  });
});

describe("normalizeVariant", () => {
  it("returns default solid when no variant is provided", () => {
    expect(normalizeVariant(undefined)).toBe("solid");
  });

  it("returns the provided variant", () => {
    expect(normalizeVariant("outline")).toBe("outline");
  });
});

describe("normalizeRounded", () => {
  it("returns default false when rounded is omitted", () => {
    expect(normalizeRounded(undefined)).toBe(false);
  });

  it("returns the provided rounded value", () => {
    expect(normalizeRounded(true)).toBe(true);
  });
});

describe("getControlDataAttributes", () => {
  it("builds default styling data attributes without false booleans", () => {
    expect(getControlDataAttributes({})).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
    });
  });

  it("builds data attributes for styling options", () => {
    expect(
      getControlDataAttributes({
        appearance: "success",
        variant: "outline",
        rounded: true,
      }),
    ).toEqual({
      "data-appearance": "success",
      "data-variant": "outline",
      "data-rounded": "true",
    });
  });

  it("omits rounded when false", () => {
    expect(getControlDataAttributes({ appearance: "primary", rounded: false })).toEqual({
      "data-appearance": "primary",
      "data-variant": "solid",
    });
  });
});
