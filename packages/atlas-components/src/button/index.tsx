import type { ButtonHTMLAttributes } from "react";

import {
  normalizeButtonAppearance,
  normalizeButtonVariant,
  type ButtonAppearance,
  type ButtonVariant,
} from "./button.utils";

import styles from "./button.module.css";

const buildDataAttributes = (attributes: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(attributes).map(([key, value]) => [`data-${key}`, value])
  ) as Record<string, string | boolean>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  rounded?: boolean;
}

export function Button({
  children,
  className,
  appearance = "base",
  variant = "solid",
  rounded = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = className ? `${styles.button} ${className}` : styles.button;
  const dataAttributes = buildDataAttributes({
    appearance: normalizeButtonAppearance(appearance),
    variant: normalizeButtonVariant(variant),
    rounded,
    ...(disabled ? { disabled: true } : {}),
  });
  
  return (
    <button
      className={classes}
      disabled={disabled}
      {...dataAttributes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
