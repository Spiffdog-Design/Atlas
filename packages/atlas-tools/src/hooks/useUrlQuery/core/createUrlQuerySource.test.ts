import { describe, expect, it } from "vitest";

import { createUrlQuerySource, noopUrlQuerySubscribe } from "./createUrlQuerySource";

describe("createUrlQuerySource", () => {
  it("uses noop subscribe when omitted", () => {
    const source = createUrlQuerySource({
      getSearch: () => "",
      setSearch: () => {},
    });

    expect(source.subscribe).toBe(noopUrlQuerySubscribe);
  });
});
