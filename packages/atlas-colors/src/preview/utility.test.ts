import { describe, expect, it } from "vitest";

import { getOrderedPaletteNames, PALETTE_DISPLAY_ORDER } from "./utility";

describe("getOrderedPaletteNames", () => {
  it("places neutrals first, then follows ROYGBIV", () => {
    const names = [
      "violet",
      "gray",
      "blue",
      "sand",
      "red",
      "yellow",
      "slate",
      "green",
      "sage",
    ];

    expect(getOrderedPaletteNames(names)).toEqual([
      "gray",
      "sage",
      "sand",
      "slate",
      "red",
      "yellow",
      "green",
      "blue",
      "violet",
    ]);
  });

  it("appends unknown names alphabetically after known palettes", () => {
    expect(getOrderedPaletteNames(["zebra", "gray", "alpha"])).toEqual([
      "gray",
      "alpha",
      "zebra",
    ]);
  });

  it("includes every palette scale in display order", () => {
    expect(PALETTE_DISPLAY_ORDER).toHaveLength(19);
  });
});
