import { Select as BaseSelect } from "@base-ui/react/select";
import type { ChangeEvent, ReactNode } from "react";

import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
} from "../shared/control-variants.utils";

export type SelectItem = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export type SelectAppearance = ControlAppearance;

type BaseSelectOnValueChange = NonNullable<
  NonNullable<React.ComponentProps<typeof BaseSelect.Root>["onValueChange"]>
>;

/** Filters out items with empty values. */
export function normalizeSelectItems(items: SelectItem[]): SelectItem[] {
  return items.filter((item) => item.value != null && item.value !== "");
}

export function getSelectTriggerDataAttributes(
  appearance?: SelectAppearance,
): Record<string, string> {
  return buildDataAttributes({
    appearance: normalizeAppearance(appearance),
  });
}

export function getSelectPopupDataAttributes(
  appearance?: SelectAppearance,
): Record<string, string> {
  return getSelectTriggerDataAttributes(appearance);
}

export function createSelectValueChangeHandler(
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void,
  onValueChange?: BaseSelectOnValueChange,
): BaseSelectOnValueChange {
  return (nextValue, eventDetails) => {
    if (onChange) {
      onChange({
        target: { value: nextValue },
      } as ChangeEvent<HTMLSelectElement>);
    }

    onValueChange?.(nextValue, eventDetails);
  };
}
