import {
  type ControlAppearance,
  type ControlDataAttributesOptions,
  type ControlVariant,
  getControlDataAttributes,
  normalizeAppearance,
  normalizeVariant,
} from "../shared/control-variants.utils";

export type CheckboxAppearance = ControlAppearance;
export type CheckboxVariant = Extract<ControlVariant, "outline" | "solid">;

export function normalizeCheckboxVariant(
  variant?: ControlVariant,
  fallback: CheckboxVariant = "solid",
): CheckboxVariant {
  const normalized = normalizeVariant(variant, fallback);
  return normalized === "outline" ? "outline" : "solid";
}

export function getCheckboxDataAttributes(
  options: Pick<ControlDataAttributesOptions, "appearance" | "variant">,
): Record<string, string> {
  return getControlDataAttributes({
    appearance: normalizeAppearance(options.appearance),
    variant: normalizeCheckboxVariant(options.variant),
  });
}
