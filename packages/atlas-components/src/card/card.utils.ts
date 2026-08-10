import {
  type ControlAppearance,
  type ControlDataAttributesOptions,
  type ControlVariant,
  getControlDataAttributes,
} from "../shared/control-variants.utils";

export type CardAppearance = ControlAppearance;
export type CardVariant = ControlVariant;

export function getCardDataAttributes(
  options: Pick<ControlDataAttributesOptions, "appearance" | "variant">,
): Record<string, string> {
  return getControlDataAttributes(options);
}
