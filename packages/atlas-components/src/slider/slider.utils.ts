import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
} from "../shared/control-variants.utils";

export type SliderAppearance = ControlAppearance;

export function getSliderDataAttributes(
  appearance?: SliderAppearance,
): Record<string, string> {
  return buildDataAttributes({
    appearance: normalizeAppearance(appearance, "primary"),
  });
}
