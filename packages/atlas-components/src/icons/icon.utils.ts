export const DEFAULT_ICON_SIZE = 16;
export const DEFAULT_ICON_STROKE_WIDTH = 1.5;

export function normalizeIconSize(size?: number): number {
  return size ?? DEFAULT_ICON_SIZE;
}

export function normalizeIconStrokeWidth(strokeWidth?: number): number {
  return strokeWidth ?? DEFAULT_ICON_STROKE_WIDTH;
}
