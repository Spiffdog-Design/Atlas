import { describe, expect, it, vi } from "vitest";

import {
  createSelectValueChangeHandler,
  getSelectPopupDataAttributes,
  getSelectTriggerDataAttributes,
  normalizeSelectItems,
} from "./select.utils";

describe("normalizeSelectItems", () => {
  it("filters out items with empty values", () => {
    expect(
      normalizeSelectItems([
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

describe("getSelectTriggerDataAttributes", () => {
  it("builds appearance data attribute with base default", () => {
    expect(getSelectTriggerDataAttributes()).toEqual({
      "data-appearance": "base",
    });
  });

  it("builds appearance data attribute for semantic appearances", () => {
    expect(getSelectTriggerDataAttributes("primary")).toEqual({
      "data-appearance": "primary",
    });
  });

  it("does not emit variant or rounded data attributes", () => {
    expect(getSelectTriggerDataAttributes("success")).not.toHaveProperty("data-variant");
    expect(getSelectTriggerDataAttributes("success")).not.toHaveProperty("data-rounded");
  });
});

describe("getSelectPopupDataAttributes", () => {
  it("builds appearance data attribute for tinted popup shadow", () => {
    expect(getSelectPopupDataAttributes("success")).toEqual({
      "data-appearance": "success",
    });
  });
});

describe("createSelectValueChangeHandler", () => {
  it("calls onChange and onValueChange", () => {
    const onChange = vi.fn();
    const onValueChange = vi.fn();
    const handler = createSelectValueChangeHandler(onChange, onValueChange);

    handler("starter", { reason: "none" } as never);

    expect(onChange).toHaveBeenCalledWith({
      target: { value: "starter" },
    });
    expect(onValueChange).toHaveBeenCalledWith("starter", { reason: "none" });
  });
});
