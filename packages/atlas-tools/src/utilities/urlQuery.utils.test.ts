import { describe, expect, it } from "vitest";

import {
  getSearchParam,
  parseQueryValue,
  serializeQueryValue,
  setSearchParam,
} from "./urlQuery.utils.js";

describe("getSearchParam", () => {
  it("reads params with or without a leading question mark", () => {
    expect(getSearchParam("?tab=settings", "tab")).toBe("settings");
    expect(getSearchParam("tab=settings", "tab")).toBe("settings");
  });

  it("returns null when the param is missing", () => {
    expect(getSearchParam("?tab=settings", "page")).toBeNull();
  });
});

describe("setSearchParam", () => {
  it("adds and updates params", () => {
    expect(setSearchParam("", "tab", "overview")).toBe("?tab=overview");
    expect(setSearchParam("?tab=overview", "tab", "settings")).toBe("?tab=settings");
  });

  it("removes params when value is null", () => {
    expect(setSearchParam("?tab=settings&page=2", "tab", null)).toBe("?page=2");
    expect(setSearchParam("?tab=settings", "tab", null)).toBe("");
  });
});

describe("parseQueryValue", () => {
  it("returns the default when raw is null", () => {
    expect(parseQueryValue(null, "all")).toBe("all");
    expect(parseQueryValue(null, 1)).toBe(1);
  });

  it("parses with a custom parser", () => {
    expect(parseQueryValue("3", 1, Number)).toBe(3);
  });
});

describe("serializeQueryValue", () => {
  it("returns null for nullish values", () => {
    expect(serializeQueryValue(null)).toBeNull();
    expect(serializeQueryValue(undefined)).toBeNull();
  });

  it("stringifies primitives by default", () => {
    expect(serializeQueryValue(2)).toBe("2");
    expect(serializeQueryValue("all")).toBe("all");
  });

  it("uses a custom serializer", () => {
    expect(serializeQueryValue(2, String)).toBe("2");
  });
});
