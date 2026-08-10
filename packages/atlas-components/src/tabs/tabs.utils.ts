import type { ReactNode } from "react";

import {
  type ControlAppearance,
  type ControlVariant,
  getControlDataAttributes,
  normalizeAppearance,
  normalizeVariant,
} from "../shared/control-variants.utils";

export type TabsItem = {
  label: ReactNode;
  value: string;
  panel: ReactNode;
  disabled?: boolean;
};

export type TabsAppearance = ControlAppearance;
export type TabsVariant = Extract<ControlVariant, "outline" | "solid">;

export interface TabDataAttributesOptions {
  appearance?: TabsAppearance;
  variant?: ControlVariant;
  rounded?: boolean;
}

/** Filters out items with empty values. */
export function normalizeTabsItems(items: TabsItem[]): TabsItem[] {
  return items.filter((item) => item.value != null && item.value !== "");
}

export function normalizeTabsVariant(
  variant?: ControlVariant,
  fallback: TabsVariant = "solid",
): TabsVariant {
  const normalized = normalizeVariant(variant, fallback);
  return normalized === "outline" ? "outline" : "solid";
}

export function getTabDataAttributes(
  options: TabDataAttributesOptions = {},
): Record<string, string> {
  return getControlDataAttributes({
    appearance: normalizeAppearance(options.appearance),
    rounded: options.rounded,
    variant: normalizeTabsVariant(options.variant),
  });
}

/** Picks the first enabled tab when no explicit default is provided. */
export function resolveTabsDefaultValue(
  items: TabsItem[],
  defaultValue?: string | null,
): string | undefined {
  const normalized = normalizeTabsItems(items);

  if (defaultValue != null && defaultValue !== "") {
    return defaultValue;
  }

  return normalized.find((item) => !item.disabled)?.value;
}
