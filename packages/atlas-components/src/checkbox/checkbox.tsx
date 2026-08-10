import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { ComponentPropsWithoutRef } from "react";

import { CheckIcon } from "../icons/index";

import {
  getCheckboxDataAttributes,
  type CheckboxAppearance,
  type CheckboxVariant,
} from "./checkbox.utils";

import styles from "./checkbox.module.css";

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseCheckbox.Root>, "className"> {
  appearance?: CheckboxAppearance;
  variant?: CheckboxVariant;
  className?: string;
}

export function Checkbox({
  appearance,
  variant,
  disabled,
  className,
  ...props
}: CheckboxProps) {
  const dataAttributes = getCheckboxDataAttributes({ appearance, variant });
  const checkboxClassName = className ? `${styles.checkbox} ${className}` : styles.checkbox;

  return (
    <BaseCheckbox.Root
      className={checkboxClassName}
      disabled={disabled}
      {...props}
      {...dataAttributes}
    >
      <BaseCheckbox.Indicator className={styles.indicator}>
        <CheckIcon />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
