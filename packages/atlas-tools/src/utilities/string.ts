export function capitalize(value: string): string {
  return value.length === 0 ? value : `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export function trimLines(value: string): string {
  return value.split("\n").map((line) => line.trim()).join("\n");
}
