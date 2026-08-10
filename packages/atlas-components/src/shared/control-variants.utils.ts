import { buildDataAttributes, normalizeValue } from "@spiffdog-design/atlas-tools";

export type ControlAppearance = "alert" | "base" | "primary" | "success" | "warning";
export type ControlVariant = "basic" | "solid" | "outline";

export interface ControlDataAttributesOptions {
  appearance?: ControlAppearance;
  variant?: ControlVariant;
  rounded?: boolean;
}

export function normalizeControlOption<T>(value: T | undefined, fallback: T): T {
  return normalizeValue(value, fallback);
}

export function normalizeAppearance(
  appearance?: ControlAppearance,
  fallback: ControlAppearance = "base",
): ControlAppearance {
  return normalizeControlOption(appearance, fallback);
}

export function normalizeVariant(
  variant?: ControlVariant,
  fallback: ControlVariant = "solid",
): ControlVariant {
  return normalizeControlOption(variant, fallback);
}

export function normalizeRounded(rounded?: boolean, fallback = false): boolean {
  return normalizeControlOption(rounded, fallback);
}

export function getControlDataAttributes(
  options: ControlDataAttributesOptions,
): Record<string, string> {
  const attributes: Record<string, string | boolean> = {
    appearance: normalizeAppearance(options.appearance),
    variant: normalizeVariant(options.variant),
  };

  if (normalizeRounded(options.rounded)) {
    attributes.rounded = true;
  }

  return buildDataAttributes(attributes);
}
