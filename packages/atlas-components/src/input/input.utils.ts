import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
} from "../shared/control-variants.utils";

export type InputAppearance = ControlAppearance;

export function getInputDataAttributes(
  appearance?: InputAppearance,
): Record<string, string> {
  return buildDataAttributes({
    appearance: normalizeAppearance(appearance),
  });
}
