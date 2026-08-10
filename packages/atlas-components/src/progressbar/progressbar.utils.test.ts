import { describe, expect, it } from "vitest";

import { getProgressBarDataAttributes } from "./progressbar.utils";

describe("getProgressBarDataAttributes", () => {
  it("builds appearance data attribute with primary default", () => {
    expect(getProgressBarDataAttributes()).toEqual({
      "data-appearance": "primary",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getProgressBarDataAttributes({ appearance: "success" })).toEqual({
      "data-appearance": "success",
    });
  });

  it("includes rounded when true", () => {
    expect(getProgressBarDataAttributes({ rounded: true })).toEqual({
      "data-appearance": "primary",
      "data-rounded": "true",
    });
  });

  it("omits rounded when false", () => {
    expect(getProgressBarDataAttributes({ rounded: false })).toEqual({
      "data-appearance": "primary",
    });
  });

  it("does not emit variant data attributes", () => {
    expect(getProgressBarDataAttributes({ appearance: "warning" })).not.toHaveProperty(
      "data-variant",
    );
  });
});
