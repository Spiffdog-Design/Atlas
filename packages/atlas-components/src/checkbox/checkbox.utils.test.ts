import { describe, expect, it } from "vitest";

import {
  getCheckboxDataAttributes,
  normalizeCheckboxVariant,
} from "./checkbox.utils";

describe("normalizeCheckboxVariant", () => {
  it("returns solid by default", () => {
    expect(normalizeCheckboxVariant(undefined)).toBe("solid");
  });

  it("returns outline when requested", () => {
    expect(normalizeCheckboxVariant("outline")).toBe("outline");
  });

  it("maps basic to solid", () => {
    expect(normalizeCheckboxVariant("basic")).toBe("solid");
  });
});

describe("getCheckboxDataAttributes", () => {
  it("builds default styling data attributes", () => {
    expect(getCheckboxDataAttributes({})).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
    });
  });

  it("builds data attributes for appearance and outline variant", () => {
    expect(
      getCheckboxDataAttributes({
        appearance: "primary",
        variant: "outline",
      }),
    ).toEqual({
      "data-appearance": "primary",
      "data-variant": "outline",
    });
  });

  it("does not emit rounded data attributes", () => {
    expect(getCheckboxDataAttributes({ appearance: "success" })).not.toHaveProperty(
      "data-rounded",
    );
  });
});
