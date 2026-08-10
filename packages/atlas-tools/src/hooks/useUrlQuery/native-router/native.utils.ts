import { setSearchParam } from "../../../utilities/urlQuery.utils";
import type { SetUrlQueryOptions } from "../core/useUrlQuery.types";

const POP_STATE_EVENT = "popstate";

/** Subscribe to browser back/forward and programmatic search updates. */
export function subscribeToNativeSearch(onStoreChange: () => void): () => void {
  window.addEventListener(POP_STATE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener(POP_STATE_EVENT, onStoreChange);
  };
}

/** Write a full search string via the History API and notify subscribers. */
export function writeNativeSearch(nextSearch: string, replace = false): void {
  const normalized = nextSearch.startsWith("?") || nextSearch === "" ? nextSearch : `?${nextSearch}`;
  const nextUrl = `${window.location.pathname}${normalized}${window.location.hash}`;

  if (replace) {
    window.history.replaceState(window.history.state, "", nextUrl);
  } else {
    window.history.pushState(window.history.state, "", nextUrl);
  }

  window.dispatchEvent(new Event(POP_STATE_EVENT));
}

/** Write a single query param via the History API and notify subscribers. */
export function writeNativeSearchParam(
  key: string,
  value: string | null,
  replace = false,
): void {
  writeNativeSearch(setSearchParam(window.location.search, key, value), replace);
}

/** Config for the native browser History API source. */
export function createNativeUrlQuerySourceConfig() {
  return {
    getSearch: () => window.location.search,
    setSearch: (search: string, options?: SetUrlQueryOptions) => {
      writeNativeSearch(search, options?.replace ?? false);
    },
    subscribe: subscribeToNativeSearch,
  };
}
