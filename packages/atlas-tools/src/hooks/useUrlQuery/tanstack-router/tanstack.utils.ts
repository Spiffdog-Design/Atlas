/** Convert a query string to a plain record (for object-shaped router search). */
export function queryStringToRecord(search: string): Record<string, string> {
  const normalized = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(normalized);
  const record: Record<string, string> = {};

  for (const [key, value] of params.entries()) {
    record[key] = value;
  }

  return record;
}

/** Convert a router search object to a query string with leading `?`. */
export function searchParamsToQueryString(search: Record<string, unknown>): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(search)) {
    if (value == null) {
      continue;
    }

    params.set(key, String(value));
  }

  const query = params.toString();
  return query ? `?${query}` : "";
}
