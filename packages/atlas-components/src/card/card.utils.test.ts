import { describe, expect, it } from "vitest";

import { getCardDataAttributes } from "./card.utils";

describe("getCardDataAttributes", () => {
  it("builds default styling data attributes", () => {
    expect(getCardDataAttributes({})).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
    });
  });

  it("builds data attributes for appearance and variant", () => {
    expect(
      getCardDataAttributes({
        appearance: "primary",
        variant: "outline",
      }),
    ).toEqual({
      "data-appearance": "primary",
      "data-variant": "outline",
    });
  });

  it("does not emit rounded data attributes", () => {
    expect(getCardDataAttributes({ appearance: "success" })).not.toHaveProperty("data-rounded");
  });
});
