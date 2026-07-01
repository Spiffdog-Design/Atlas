/** Storybook display order: neutrals first, then ROYGBIV. */
export const PALETTE_DISPLAY_ORDER = [
  "gray",
  "sage",
  "sand",
  "slate",
  "brown",
  "ruby",
  "red",
  "tomato",
  "orange",
  "amber",
  "yellow",
  "grass",
  "green",
  "teal",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
] as const;

/** @param {readonly string[]} names */
export function getOrderedPaletteNames(names: readonly string[]) {
  const order = new Map(
    PALETTE_DISPLAY_ORDER.map((name, index) => [name, index]),
  );

  return [...names].sort((a, b) => {
    const aIndex = order.get(a);
    const bIndex = order.get(b);

    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex - bIndex;
    }
    if (aIndex !== undefined) {
      return -1;
    }
    if (bIndex !== undefined) {
      return 1;
    }

    return a.localeCompare(b);
  });
}

/** @param {string} paletteName @param {number} step */
export function cssCustomPropertyName(paletteName: string, step: number) {
  return `--${toCssCasing(paletteName)}${step}`;
}

/** @param {string} paletteName @param {number} step */
export function cssVarRef(paletteName: string, step: number) {
  return `var(--${toCssCasing(paletteName)}${step})`;
}

/** @param {string} str */
export function toCssCasing(str: string): string {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}
