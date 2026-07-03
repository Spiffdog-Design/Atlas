export type ButtonAppearance = "alert" | "base" | "primary" | "success" | "warning";
export type ButtonVariant = "basic" | "solid" | "outline";

export interface ButtonDataAttributesOptions {
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  rounded?: boolean;
  disabled?: boolean;
}

export function normalizeButtonAppearance(
  appearance?: ButtonAppearance,
): ButtonAppearance {
  return appearance ?? "base";
}

export function normalizeButtonVariant(
  variant?: ButtonVariant,
): ButtonVariant {
  return variant ?? "solid";
}

export function buildButtonDataAttributes({
  appearance,
  variant,
  rounded = false,
  disabled = false,
}: ButtonDataAttributesOptions) {
  return {
    "data-appearance": normalizeButtonAppearance(appearance),
    "data-variant": normalizeButtonVariant(variant),
    "data-rounded": rounded ? "true" : "false",
    ...(disabled ? { "data-disabled": "true" } : {}),
  } as const;
}
