import {
  type ControlAppearance,
  type ControlDataAttributesOptions,
  type ControlVariant,
  getControlDataAttributes,
  normalizeAppearance,
  normalizeControlOption,
  normalizeVariant,
} from "../shared/control-variants.utils.js";

export type ButtonAppearance = ControlAppearance;
export type ButtonVariant = ControlVariant;
export type ButtonDataAttributesOptions = ControlDataAttributesOptions;

export const normalizeButtonOption = normalizeControlOption;
export const normalizeButtonAppearance = normalizeAppearance;
export const normalizeButtonVariant = normalizeVariant;
export const getButtonDataAttributes = getControlDataAttributes;
