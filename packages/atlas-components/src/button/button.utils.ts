import { normalizeValue } from "@spiffdog-design/atlas-tools";

export type ButtonAppearance = "alert" | "base" | "primary" | "success" | "warning";
export type ButtonVariant = "basic" | "solid" | "outline";

export interface ButtonDataAttributesOptions {
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  rounded?: boolean;
  disabled?: boolean;
}

export function normalizeButtonOption<T>(
  value: T | undefined,
  fallback: T,
): T {
  return normalizeValue(value, fallback);
}

export function normalizeButtonAppearance(
  appearance?: ButtonAppearance,
): ButtonAppearance {
  return normalizeButtonOption(appearance, "base");
}

export function normalizeButtonVariant(
  variant?: ButtonVariant,
): ButtonVariant {
  return normalizeButtonOption(variant, "solid");
}

