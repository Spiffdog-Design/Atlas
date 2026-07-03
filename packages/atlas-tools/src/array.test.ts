import { describe, expect, it } from "vitest";
import { chunk, unique } from "./array";

describe("array utilities", () => {
  it("chunks arrays into smaller arrays", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("returns an empty array when size is 0", () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
  });

  it("extracts unique values", () => {
    expect(unique([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  });
});
