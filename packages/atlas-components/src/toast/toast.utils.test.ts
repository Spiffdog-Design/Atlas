import { describe, expect, it } from "vitest";

import {
  buildToastData,
  getToastDataAttributes,
  normalizeToastShowOptions,
  normalizeToastUpdateOptions,
} from "./toast.utils";

describe("buildToastData", () => {
  it("defaults appearance to base and rounded to false", () => {
    expect(buildToastData({})).toEqual({
      appearance: "base",
      rounded: false,
    });
  });

  it("normalizes appearance and rounded", () => {
    expect(
      buildToastData({
        appearance: "success",
        rounded: true,
      }),
    ).toEqual({
      appearance: "success",
      rounded: true,
    });
  });
});

describe("getToastDataAttributes", () => {
  it("builds default styling data attributes", () => {
    expect(getToastDataAttributes()).toEqual({
      "data-appearance": "base",
    });
  });

  it("builds data attributes for appearance and rounded", () => {
    expect(
      getToastDataAttributes({
        appearance: "warning",
        rounded: true,
      }),
    ).toEqual({
      "data-appearance": "warning",
      "data-rounded": "true",
    });
  });
});

describe("normalizeToastShowOptions", () => {
  it("maps appearance and rounded into toast data", () => {
    expect(
      normalizeToastShowOptions({
        appearance: "alert",
        description: "Try again.",
        rounded: true,
        title: "Upload failed",
      }),
    ).toEqual({
      data: {
        appearance: "alert",
        rounded: true,
      },
      description: "Try again.",
      title: "Upload failed",
    });
  });
});

describe("normalizeToastUpdateOptions", () => {
  it("returns rest options when appearance and rounded are omitted", () => {
    expect(
      normalizeToastUpdateOptions({
        title: "Updated",
      }),
    ).toEqual({
      title: "Updated",
    });
  });

  it("maps appearance and rounded into toast data", () => {
    expect(
      normalizeToastUpdateOptions({
        appearance: "primary",
        rounded: true,
      }),
    ).toEqual({
      data: {
        appearance: "primary",
        rounded: true,
      },
    });
  });
});
