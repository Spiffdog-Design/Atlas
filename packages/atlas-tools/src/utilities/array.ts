export function chunk<T>(items: T[], size: number): T[][] {
  if (size <= 0) {
    return [];
  }

  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }

  return result;
}

export function unique<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}
