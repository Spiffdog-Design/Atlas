import { describe, expect, it, beforeEach, vi } from "vitest";

import { createUrlQuerySource } from "../core/createUrlQuerySource.js";
import { getSearchParam } from "../../../utilities/urlQuery.utils.js";
import {
  createNativeUrlQuerySourceConfig,
  subscribeToNativeSearch,
  writeNativeSearchParam,
} from "./native.utils.js";

type MockLocation = {
  search: string;
  pathname: string;
  hash: string;
};

function installMockWindow(initialSearch = "") {
  const listeners = new Map<string, Set<() => void>>();
  const location: MockLocation = {
    search: initialSearch,
    pathname: "/",
    hash: "",
  };

  const windowMock = {
    location,
    history: {
      state: null,
      replaceState: vi.fn((_state: unknown, _title: string, url: string) => {
        applyUrl(url);
      }),
      pushState: vi.fn((_state: unknown, _title: string, url: string) => {
        applyUrl(url);
      }),
    },
    addEventListener: vi.fn((type: string, listener: () => void) => {
      const bucket = listeners.get(type) ?? new Set();
      bucket.add(listener);
      listeners.set(type, bucket);
    }),
    removeEventListener: vi.fn((type: string, listener: () => void) => {
      listeners.get(type)?.delete(listener);
    }),
    dispatchEvent: vi.fn((event: Event) => {
      for (const listener of listeners.get(event.type) ?? []) {
        listener();
      }

      return true;
    }),
  };

  function applyUrl(url: string) {
    const parsed = new URL(url, "https://example.test");
    location.pathname = parsed.pathname;
    location.search = parsed.search;
    location.hash = parsed.hash;
  }

  vi.stubGlobal("window", windowMock);

  return { location, listeners };
}

describe("native url query utils", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    installMockWindow();
  });

  it("writes and reads search params", () => {
    writeNativeSearchParam("tab", "settings", false);
    expect(window.location.search).toBe("?tab=settings");
    expect(getSearchParam(window.location.search, "tab")).toBe("settings");
  });

  it("removes params when value is null", () => {
    installMockWindow("?tab=settings");
    writeNativeSearchParam("tab", null, false);
    expect(window.location.search).toBe("");
  });

  it("notifies popstate subscribers", () => {
    const listener = vi.fn();
    const unsubscribe = subscribeToNativeSearch(listener);

    writeNativeSearchParam("tab", "overview", false);
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
  });

  it("creates a source that mirrors the current search string", () => {
    installMockWindow("?page=2");
    const source = createUrlQuerySource(createNativeUrlQuerySourceConfig());

    expect(getSearchParam(source.getSearch(), "page")).toBe("2");

    source.setSearch("?page=3");
    expect(getSearchParam(window.location.search, "page")).toBe("3");
  });
});
