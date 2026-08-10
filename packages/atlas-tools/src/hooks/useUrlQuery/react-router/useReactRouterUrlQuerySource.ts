import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { createUrlQuerySource } from "../core/createUrlQuerySource";
import type { UrlQuerySource } from "../core/useUrlQuery.types";

export function useReactRouterUrlQuerySource(): UrlQuerySource {
  const [searchParams, setSearchParams] = useSearchParams();

  return useMemo(
    () =>
      createUrlQuerySource({
        getSearch: () => (searchParams.toString() ? `?${searchParams.toString()}` : ""),
        setSearch: (nextSearch, options) => {
          const normalized = nextSearch.startsWith("?") ? nextSearch.slice(1) : nextSearch;
          setSearchParams(new URLSearchParams(normalized), {
            replace: options?.replace ?? false,
          });
        },
      }),
    [searchParams, setSearchParams],
  );
}
