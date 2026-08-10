import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
} from "../shared/control-variants.utils";

export type DialogAppearance = ControlAppearance;

export function getDialogPopupDataAttributes(
  appearance?: DialogAppearance,
): Record<string, string> {
  return buildDataAttributes({
    appearance: normalizeAppearance(appearance),
  });
}
