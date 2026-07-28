export type SetUrlQueryOptions = {
  replace?: boolean;
};

/** Router-agnostic contract: read, write, and subscribe to the URL search string. */
export type UrlQuerySource = {
  getSearch: () => string;
  setSearch: (search: string, options?: SetUrlQueryOptions) => void;
  subscribe: (listener: () => void) => () => void;
};

/** Config for {@link createUrlQuerySource}. `subscribe` defaults to a no-op when omitted. */
export type UrlQuerySourceConfig = {
  getSearch: () => string;
  setSearch: (search: string, options?: SetUrlQueryOptions) => void;
  subscribe?: (listener: () => void) => () => void;
};

export type UseUrlQueryOptions<T> = {
  defaultValue: T;
  parse?: (value: string) => T;
  serialize?: (value: T) => string;
  /** Override the nearest provider source (useful in tests). */
  source?: UrlQuerySource;
};

export type UseUrlQuerySetter<T> = (value: T | null, options?: SetUrlQueryOptions) => void;

export const MISSING_URL_QUERY_PROVIDER =
  "useUrlQuery requires a UrlQueryProvider. Import NativeUrlQueryProvider, ReactRouterUrlQueryProvider, TanStackUrlQueryProvider, or pass options.source.";
