import type { ButtonHTMLAttributes, ReactNode } from "react";

import { buildButtonDataAttributes, type ButtonAppearance, type ButtonVariant } from "./button.utils";

import styles from "./button.module.css";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  className?: string;
  appName?: string;
  appearance?: ButtonAppearance;
  variant?: ButtonVariant;
  rounded?: boolean;
}

export const Button = ({
  children,
  className,
  appName,
  appearance = "base",
  variant = "solid",
  rounded = false,
  disabled = false,
  type = "button",
  onClick,
  ...props
}: ButtonProps) => {
  const dataAttributes = buildButtonDataAttributes({
    appearance,
    variant,
    rounded,
    disabled,
  });

  const handleClick = onClick ?? (appName ? () => alert(`Hello from your ${appName} app!`) : undefined);

  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      {...dataAttributes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
