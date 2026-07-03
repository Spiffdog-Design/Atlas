import { describe, expect, it } from "vitest";
import { deepMerge } from "./object";

describe("object utilities", () => {
  it("merges shallow object properties", () => {
    expect(deepMerge({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 1, b: 3 });
  });

  it("merges nested objects deeply", () => {
    expect(deepMerge({ a: { x: 1 }, b: 2 }, { a: { y: 2 } })).toEqual({ a: { x: 1, y: 2 }, b: 2 });
  });
});
