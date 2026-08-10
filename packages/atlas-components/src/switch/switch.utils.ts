import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
  normalizeRounded,
} from "../shared/control-variants.utils";

export type SwitchAppearance = ControlAppearance;

export interface SwitchDataAttributesOptions {
  appearance?: SwitchAppearance;
  rounded?: boolean;
}

export function getSwitchDataAttributes(
  options: SwitchDataAttributesOptions = {},
): Record<string, string> {
  const attributes: Record<string, string | boolean> = {
    appearance: normalizeAppearance(options.appearance, "primary"),
  };

  if (normalizeRounded(options.rounded)) {
    attributes.rounded = true;
  }

  return buildDataAttributes(attributes);
}
