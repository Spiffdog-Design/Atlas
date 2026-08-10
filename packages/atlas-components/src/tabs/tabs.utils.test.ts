import { describe, expect, it } from "vitest";

import {
  getTabDataAttributes,
  normalizeTabsItems,
  normalizeTabsVariant,
  resolveTabsDefaultValue,
} from "./tabs.utils";

describe("normalizeTabsItems", () => {
  it("filters out items with empty values", () => {
    expect(
      normalizeTabsItems([
        { label: "One", panel: "1", value: "1" },
        { label: "Empty", panel: "e", value: "" },
        { label: "Two", panel: "2", value: "2" },
      ]),
    ).toEqual([
      { label: "One", panel: "1", value: "1" },
      { label: "Two", panel: "2", value: "2" },
    ]);
  });
});

describe("normalizeTabsVariant", () => {
  it("returns solid by default", () => {
    expect(normalizeTabsVariant(undefined)).toBe("solid");
  });

  it("returns outline when requested", () => {
    expect(normalizeTabsVariant("outline")).toBe("outline");
  });

  it("maps basic to solid", () => {
    expect(normalizeTabsVariant("basic")).toBe("solid");
  });
});

describe("getTabDataAttributes", () => {
  it("builds default styling data attributes", () => {
    expect(getTabDataAttributes()).toEqual({
      "data-appearance": "base",
      "data-variant": "solid",
    });
  });

  it("builds data attributes for appearance, outline variant, and rounded", () => {
    expect(
      getTabDataAttributes({
        appearance: "primary",
        rounded: true,
        variant: "outline",
      }),
    ).toEqual({
      "data-appearance": "primary",
      "data-rounded": "true",
      "data-variant": "outline",
    });
  });
});

describe("resolveTabsDefaultValue", () => {
  const items = [
    { label: "Overview", panel: "o", value: "overview" },
    { label: "Projects", disabled: true, panel: "p", value: "projects" },
    { label: "Account", panel: "a", value: "account" },
  ];

  it("returns the explicit default when provided", () => {
    expect(resolveTabsDefaultValue(items, "account")).toBe("account");
  });

  it("returns the first enabled tab when default is omitted", () => {
    expect(resolveTabsDefaultValue(items)).toBe("overview");
  });
});
