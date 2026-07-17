import { describe, expect, it } from "vitest";
import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  normalizeButtonAppearance,
  normalizeButtonOption,
  normalizeButtonVariant,
} from "./button.utils";

describe("normalizeButtonOption", () => {
  it("returns the fallback when no value is provided", () => {
    expect(normalizeButtonOption(undefined, "base")).toBe("base");
  });

  it("returns the provided value when present", () => {
    expect(normalizeButtonOption("outline", "solid")).toBe("outline");
  });
});

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

describe("buildDataAttributes", () => {
  it("builds data attributes from a generic object", () => {
    expect(buildDataAttributes({ variant: "outline", rounded: true })).toEqual({
      "data-variant": "outline",
      "data-rounded": "true",
    });
  });
});

describe("buildDataAttributes", () => {
  it("builds default data attributes", () => {
    expect(
      buildDataAttributes({
        appearance: "base",
        variant: "solid",
        rounded: false,
      }),
    ).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
      "data-rounded": "false",
    });
  });

  it("builds data attributes for all options", () => {
    expect(
      buildDataAttributes({
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
