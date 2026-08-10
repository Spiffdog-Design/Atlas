import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import {
  getButtonDataAttributes,
  type ButtonAppearance,
  type ButtonVariant,
} from "./button.utils.js";

import styles from "./button.module.css";

export interface ButtonProps extends ComponentPropsWithoutRef<typeof BaseButton> {
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  rounded?: boolean;
  children?: ReactNode;
}

export function Button({
  appearance,
  variant,
  rounded,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const dataAttributes = getButtonDataAttributes({
    appearance,
    variant,
    rounded,
  });

  const classes = className ? `${styles.button} ${className}` : styles.button;

  return (
    <BaseButton className={classes} disabled={disabled} {...props} {...dataAttributes}>
      {children}
    </BaseButton>
  );
}
