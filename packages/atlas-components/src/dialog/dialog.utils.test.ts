import { describe, expect, it } from "vitest";

import { getDialogPopupDataAttributes } from "./dialog.utils";

describe("getDialogPopupDataAttributes", () => {
  it("builds default styling data attributes", () => {
    expect(getDialogPopupDataAttributes()).toEqual({
      "data-appearance": "base",
    });
  });

  it("builds data attributes for appearance", () => {
    expect(getDialogPopupDataAttributes("primary")).toEqual({
      "data-appearance": "primary",
    });
  });
});
