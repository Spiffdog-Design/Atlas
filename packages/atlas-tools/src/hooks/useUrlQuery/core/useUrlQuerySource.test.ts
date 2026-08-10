import { describe, expect, it } from "vitest";

import { createUrlQuerySource } from "./createUrlQuerySource";
import { resolveUrlQuerySource } from "./useUrlQuerySource";
import { MISSING_URL_QUERY_PROVIDER } from "./useUrlQuery.types";

describe("resolveUrlQuerySource", () => {
  it("prefers an explicit source", () => {
    const explicit = createUrlQuerySource({ getSearch: () => "?a=1", setSearch: () => {} });
    const context = createUrlQuerySource({ getSearch: () => "?b=2", setSearch: () => {} });

    expect(resolveUrlQuerySource(explicit, context)).toBe(explicit);
  });

  it("uses context when no explicit source is passed", () => {
    const context = createUrlQuerySource({ getSearch: () => "?b=2", setSearch: () => {} });

    expect(resolveUrlQuerySource(undefined, context)).toBe(context);
  });

  it("throws when no provider or explicit source exists", () => {
    expect(() => resolveUrlQuerySource(undefined, null)).toThrow(MISSING_URL_QUERY_PROVIDER);
  });
});
