import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentPropsWithoutRef } from "react";

import {
  getInputDataAttributes,
  type InputAppearance,
} from "./input.utils";

import styles from "./input.module.css";

export interface InputProps extends ComponentPropsWithoutRef<typeof BaseInput> {
  appearance?: InputAppearance;
  className?: string;
}

export function Input({ appearance, disabled, className, ...props }: InputProps) {
  const dataAttributes = getInputDataAttributes(appearance);
  const inputClassName = className ? `${styles.input} ${className}` : styles.input;

  return (
    <BaseInput
      className={inputClassName}
      disabled={disabled}
      {...props}
      {...dataAttributes}
    />
  );
}
