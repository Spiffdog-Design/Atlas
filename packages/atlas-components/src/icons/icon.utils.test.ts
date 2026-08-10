import { describe, expect, it } from "vitest";

import {
  DEFAULT_ICON_SIZE,
  DEFAULT_ICON_STROKE_WIDTH,
  normalizeIconSize,
  normalizeIconStrokeWidth,
} from "./icon.utils";

describe("normalizeIconSize", () => {
  it("returns the default size when omitted", () => {
    expect(normalizeIconSize(undefined)).toBe(DEFAULT_ICON_SIZE);
  });

  it("returns the provided size", () => {
    expect(normalizeIconSize(20)).toBe(20);
  });
});

describe("normalizeIconStrokeWidth", () => {
  it("returns the default stroke width when omitted", () => {
    expect(normalizeIconStrokeWidth(undefined)).toBe(DEFAULT_ICON_STROKE_WIDTH);
  });

  it("returns the provided stroke width", () => {
    expect(normalizeIconStrokeWidth(2)).toBe(2);
  });
});
