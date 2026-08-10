import { describe, expect, it } from "vitest";

import { getInputDataAttributes } from "./input.utils";

describe("getInputDataAttributes", () => {
  it("builds appearance data attribute with base default", () => {
    expect(getInputDataAttributes()).toEqual({
      "data-appearance": "base",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getInputDataAttributes("success")).toEqual({
      "data-appearance": "success",
    });
  });

  it("does not emit variant data attributes", () => {
    expect(getInputDataAttributes("primary")).not.toHaveProperty("data-variant");
  });
});
