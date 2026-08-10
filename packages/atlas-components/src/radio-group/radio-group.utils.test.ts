import { describe, expect, it } from "vitest";

import {
  getRadioGroupDataAttributes,
  normalizeRadioGroupItems,
  normalizeRadioGroupOrientation,
} from "./radio-group.utils";

describe("normalizeRadioGroupItems", () => {
  it("filters out items with empty values", () => {
    expect(
      normalizeRadioGroupItems([
        { label: "One", value: "1" },
        { label: "Empty", value: "" },
        { label: "Two", value: "2" },
      ]),
    ).toEqual([
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
    ]);
  });
});

describe("normalizeRadioGroupOrientation", () => {
  it("returns vertical by default", () => {
    expect(normalizeRadioGroupOrientation(undefined)).toBe("vertical");
  });

  it("returns horizontal when requested", () => {
    expect(normalizeRadioGroupOrientation("horizontal")).toBe("horizontal");
  });
});

describe("getRadioGroupDataAttributes", () => {
  it("builds appearance data attribute with primary default", () => {
    expect(getRadioGroupDataAttributes()).toEqual({
      "data-appearance": "primary",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getRadioGroupDataAttributes({ appearance: "success" })).toEqual({
      "data-appearance": "success",
    });
  });

  it("emits horizontal orientation only when requested", () => {
    expect(getRadioGroupDataAttributes({ orientation: "horizontal" })).toEqual({
      "data-appearance": "primary",
      "data-orientation": "horizontal",
    });
  });

  it("omits orientation data attribute for vertical layout", () => {
    expect(getRadioGroupDataAttributes({ orientation: "vertical" })).toEqual({
      "data-appearance": "primary",
    });
  });

  it("does not emit variant or rounded data attributes", () => {
    expect(getRadioGroupDataAttributes({ appearance: "alert" })).not.toHaveProperty(
      "data-variant",
    );
    expect(getRadioGroupDataAttributes({ appearance: "alert" })).not.toHaveProperty(
      "data-rounded",
    );
  });
});
