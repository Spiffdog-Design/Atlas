import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { useMemo } from "react";
import type { ComponentPropsWithoutRef } from "react";

import {
  getRadioGroupDataAttributes,
  normalizeRadioGroupItems,
  type RadioGroupAppearance,
  type RadioGroupItem,
  type RadioGroupOrientation,
} from "./radio-group.utils";

import styles from "./radio-group.module.css";

export interface RadioGroupProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseRadioGroup>, "children"> {
  items: RadioGroupItem[];
  appearance?: RadioGroupAppearance;
  orientation?: RadioGroupOrientation;
  className?: string;
}

export function RadioGroup({
  items,
  appearance,
  orientation,
  className,
  disabled,
  ...rootProps
}: RadioGroupProps) {
  const normalizedItems = useMemo(() => normalizeRadioGroupItems(items), [items]);
  const dataAttributes = getRadioGroupDataAttributes({ appearance, orientation });
  const groupClassName = className ? `${styles.group} ${className}` : styles.group;

  return (
    <BaseRadioGroup
      className={groupClassName}
      disabled={disabled}
      {...rootProps}
      {...dataAttributes}
    >
      {normalizedItems.map((item) => (
        <label key={item.value} className={styles.item}>
          <BaseRadio.Root
            className={styles.radio}
            disabled={item.disabled ?? disabled}
            value={item.value}
          >
            <BaseRadio.Indicator className={styles.indicator} />
          </BaseRadio.Root>
          <span className={styles.itemLabel}>{item.label}</span>
        </label>
      ))}
    </BaseRadioGroup>
  );
}
