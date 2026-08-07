type PartialDeep<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? Array<PartialDeep<U>>
  : T extends object
  ? { [K in keyof T]?: PartialDeep<T[K]> }
  : T;

export function deepMerge<T extends Record<string, any>>(target: T, source: PartialDeep<T>): T {
  const result = { ...target } as any;
  const sourceAny = source as Record<string, any>;

  for (const key of Object.keys(sourceAny)) {
    const sourceValue = sourceAny[key];
    const targetValue = target[key as keyof T];

    if (
      typeof sourceValue === "object" &&
      sourceValue !== null &&
      !Array.isArray(sourceValue) &&
      typeof targetValue === "object" &&
      targetValue !== null &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMerge(targetValue as Record<string, any>, sourceValue as PartialDeep<Record<string, any>>);
    } else {
      result[key] = sourceValue;
    }
  }

  return result as T;
}
