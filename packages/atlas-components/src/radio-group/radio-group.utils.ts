import type { ReactNode } from "react";

import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
} from "../shared/control-variants.utils";

export type RadioGroupItem = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export type RadioGroupAppearance = ControlAppearance;
export type RadioGroupOrientation = "horizontal" | "vertical";

export interface RadioGroupDataAttributesOptions {
  appearance?: RadioGroupAppearance;
  orientation?: RadioGroupOrientation;
}

/** Filters out items with empty values. */
export function normalizeRadioGroupItems(items: RadioGroupItem[]): RadioGroupItem[] {
  return items.filter((item) => item.value != null && item.value !== "");
}

export function normalizeRadioGroupOrientation(
  orientation?: RadioGroupOrientation,
): RadioGroupOrientation {
  return orientation === "horizontal" ? "horizontal" : "vertical";
}

export function getRadioGroupDataAttributes(
  options: RadioGroupDataAttributesOptions = {},
): Record<string, string> {
  const attributes: Record<string, string | boolean> = {
    appearance: normalizeAppearance(options.appearance, "primary"),
  };

  if (normalizeRadioGroupOrientation(options.orientation) === "horizontal") {
    attributes.orientation = "horizontal";
  }

  return buildDataAttributes(attributes);
}
