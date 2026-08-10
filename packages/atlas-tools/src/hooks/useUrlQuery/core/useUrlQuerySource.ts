import { useContext } from "react";

import { UrlQueryContext } from "./urlQueryContext";
import { MISSING_URL_QUERY_PROVIDER, type UrlQuerySource } from "./useUrlQuery.types";

/** Resolve an explicit override, context source, or throw when no provider is mounted. */
export function resolveUrlQuerySource(
  explicitSource: UrlQuerySource | undefined,
  contextSource: UrlQuerySource | null,
): UrlQuerySource {
  if (explicitSource) {
    return explicitSource;
  }

  if (contextSource) {
    return contextSource;
  }

  throw new Error(MISSING_URL_QUERY_PROVIDER);
}

export function useUrlQuerySource(explicitSource?: UrlQuerySource): UrlQuerySource {
  const contextSource = useContext(UrlQueryContext);
  return resolveUrlQuerySource(explicitSource, contextSource);
}
