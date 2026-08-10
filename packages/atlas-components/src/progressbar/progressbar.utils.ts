import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
  normalizeRounded,
} from "../shared/control-variants.utils";

export type ProgressBarAppearance = ControlAppearance;

export interface ProgressBarDataAttributesOptions {
  appearance?: ProgressBarAppearance;
  rounded?: boolean;
}

export function getProgressBarDataAttributes(
  options: ProgressBarDataAttributesOptions = {},
): Record<string, string> {
  const attributes: Record<string, string | boolean> = {
    appearance: normalizeAppearance(options.appearance, "primary"),
  };

  if (normalizeRounded(options.rounded)) {
    attributes.rounded = true;
  }

  return buildDataAttributes(attributes);
}
