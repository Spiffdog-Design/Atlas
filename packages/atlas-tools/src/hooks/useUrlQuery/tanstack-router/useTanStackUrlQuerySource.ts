import { useMemo } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";

import { createUrlQuerySource } from "../core/createUrlQuerySource";
import type { UrlQuerySource } from "../core/useUrlQuery.types";
import { queryStringToRecord, searchParamsToQueryString } from "./tanstack.utils";

export function useTanStackUrlQuerySource(): UrlQuerySource {
  const search = useSearch({ strict: false }) as Record<string, unknown>;
  const navigate = useNavigate();
  const searchString = searchParamsToQueryString(search);

  return useMemo(
    () =>
      createUrlQuerySource({
        getSearch: () => searchString,
        setSearch: (nextSearch, options) => {
          navigate({
            search: queryStringToRecord(nextSearch),
            replace: options?.replace ?? false,
          });
        },
      }),
    [navigate, searchString],
  );
}
