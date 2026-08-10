import { describe, expect, it } from "vitest";

import { getSliderDataAttributes } from "./slider.utils";

describe("getSliderDataAttributes", () => {
  it("builds appearance data attribute with primary default", () => {
    expect(getSliderDataAttributes()).toEqual({
      "data-appearance": "primary",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getSliderDataAttributes("success")).toEqual({
      "data-appearance": "success",
    });
  });

  it("does not emit variant or rounded data attributes", () => {
    expect(getSliderDataAttributes("warning")).not.toHaveProperty("data-variant");
    expect(getSliderDataAttributes("warning")).not.toHaveProperty("data-rounded");
  });
});
