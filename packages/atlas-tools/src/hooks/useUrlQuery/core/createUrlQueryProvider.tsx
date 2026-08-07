import type { ReactNode } from "react";

import type { UrlQuerySource } from "./useUrlQuery.types.js";
import { UrlQueryContext } from "./urlQueryContext.js";

/** Mount a router-specific {@link UrlQuerySource} for child {@link useUrlQuery} calls. */
export function createUrlQueryProvider(useSource: () => UrlQuerySource) {
  function UrlQueryProviderFromSource({ children }: { children: ReactNode }) {
    const source = useSource();
    return <UrlQueryContext.Provider value={source}>{children}</UrlQueryContext.Provider>;
  }

  return UrlQueryProviderFromSource;
}

/** Mount a static or config-driven {@link UrlQuerySource}. */
export function UrlQueryProvider({
  children,
  source,
}: {
  children: ReactNode;
  source: UrlQuerySource;
}) {
  return <UrlQueryContext.Provider value={source}>{children}</UrlQueryContext.Provider>;
}
