type DataAttributeValue = string | number | boolean | null | undefined;

type DataAttributeMap<T extends Record<string, DataAttributeValue>> = Record<
  `data-${Extract<keyof T, string>}`,
  string
>;

export function normalizeValue<T>(value: T | null | undefined, fallback: T): T {
  return value ?? fallback;
}

export function buildDataAttributes<T extends Record<string, DataAttributeValue>>(
  attributes: T,
): DataAttributeMap<T> {
  return Object.fromEntries(
    Object.entries(attributes)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [
        `data-${key}`,
        typeof value === "boolean" ? (value ? "true" : "false") : String(value),
      ]),
  ) as DataAttributeMap<T>;
}
