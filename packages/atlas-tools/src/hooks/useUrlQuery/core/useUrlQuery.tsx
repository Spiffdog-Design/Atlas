import { useCallback, useSyncExternalStore } from "react";

import {
  getSearchParam,
  parseQueryValue,
  serializeQueryValue,
  setSearchParam,
} from "../../../utilities/urlQuery.utils";
import { useUrlQuerySource } from "./useUrlQuerySource";
import type { UseUrlQueryOptions, UseUrlQuerySetter } from "./useUrlQuery.types";

/**
 * Read and write a single URL query parameter.
 * Requires a UrlQueryProvider from a router adapter, or `options.source`.
 */
export function useUrlQuery<T>(
  key: string,
  options: UseUrlQueryOptions<T>,
): [T, UseUrlQuerySetter<T>] {
  const source = useUrlQuerySource(options.source);
  const search = useSyncExternalStore(source.subscribe, source.getSearch, () => "");

  const value = parseQueryValue(
    getSearchParam(search, key),
    options.defaultValue,
    options.parse,
  );

  const setValue = useCallback<UseUrlQuerySetter<T>>(
    (nextValue, setOptions) => {
      source.setSearch(
        setSearchParam(
          source.getSearch(),
          key,
          serializeQueryValue(nextValue, options.serialize as ((value: unknown) => string) | undefined),
        ),
        setOptions,
      );
    },
    [key, options.serialize, source],
  );

  return [value, setValue];
}
