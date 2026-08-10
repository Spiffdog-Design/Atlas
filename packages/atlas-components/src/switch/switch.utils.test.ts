import { describe, expect, it } from "vitest";

import { getSwitchDataAttributes } from "./switch.utils";

describe("getSwitchDataAttributes", () => {
  it("builds appearance data attribute with primary default", () => {
    expect(getSwitchDataAttributes()).toEqual({
      "data-appearance": "primary",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getSwitchDataAttributes({ appearance: "success" })).toEqual({
      "data-appearance": "success",
    });
  });

  it("includes rounded when true", () => {
    expect(getSwitchDataAttributes({ rounded: true })).toEqual({
      "data-appearance": "primary",
      "data-rounded": "true",
    });
  });

  it("omits rounded when false", () => {
    expect(getSwitchDataAttributes({ rounded: false })).toEqual({
      "data-appearance": "primary",
    });
  });

  it("does not emit variant data attributes", () => {
    expect(getSwitchDataAttributes({ appearance: "warning" })).not.toHaveProperty("data-variant");
  });
});
