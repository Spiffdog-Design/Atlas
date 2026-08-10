import { describe, expect, it } from "vitest";

import { queryStringToRecord } from "./tanstack.utils";

describe("queryStringToRecord", () => {
  it("parses query strings with or without a leading question mark", () => {
    expect(queryStringToRecord("?tab=settings&page=2")).toEqual({
      tab: "settings",
      page: "2",
    });
    expect(queryStringToRecord("tab=settings")).toEqual({ tab: "settings" });
  });
});
