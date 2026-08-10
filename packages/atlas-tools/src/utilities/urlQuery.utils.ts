/** Normalize a query string by stripping a leading `?`. */
export function normalizeSearch(search: string): string {
  return search.startsWith("?") ? search.slice(1) : search;
}

/** Read a single query parameter from a search string. */
export function getSearchParam(search: string, key: string): string | null {
  return new URLSearchParams(normalizeSearch(search)).get(key);
}

/** Return an updated search string (with leading `?`, or empty when no params remain). */
export function setSearchParam(search: string, key: string, value: string | null): string {
  const params = new URLSearchParams(normalizeSearch(search));

  if (value === null) {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  const query = params.toString();
  return query ? `?${query}` : "";
}

/** Parse a raw query value, falling back to `defaultValue` when absent. */
export function parseQueryValue<T>(
  raw: string | null,
  defaultValue: T,
  parse?: (value: string) => T,
): T {
  if (raw === null) {
    return defaultValue;
  }

  return parse ? parse(raw) : (raw as T);
}

/** Serialize a value for the query string; `null` removes the param. */
export function serializeQueryValue(
  value: unknown,
  serialize?: (value: unknown) => string,
): string | null {
  if (value == null) {
    return null;
  }

  return serialize ? serialize(value) : String(value);
}
