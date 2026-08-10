import type { UrlQuerySource, UrlQuerySourceConfig } from "./useUrlQuery.types";

/** No-op subscription for routers that re-render the provider when search changes. */
export function noopUrlQuerySubscribe(): () => void {
  return () => {};
}

/** Build a {@link UrlQuerySource} from config; `subscribe` defaults to {@link noopUrlQuerySubscribe}. */
export function createUrlQuerySource(config: UrlQuerySourceConfig): UrlQuerySource {
  return {
    getSearch: config.getSearch,
    setSearch: config.setSearch,
    subscribe: config.subscribe ?? noopUrlQuerySubscribe,
  };
}
