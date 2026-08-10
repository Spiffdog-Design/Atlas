import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentPropsWithoutRef } from "react";

import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import {
  getInputDataAttributes,
  type InputAppearance,
} from "./input.utils";

import styles from "./input.module.css";

export interface InputProps
  extends ComponentPropsWithoutRef<typeof BaseInput>,
    FormFieldProps {
  appearance?: InputAppearance;
  className?: string;
}

export function Input({
  label,
  description,
  error,
  appearance,
  disabled,
  className,
  ...props
}: InputProps) {
  const dataAttributes = getInputDataAttributes(appearance);
  const inputClassName = className ? `${styles.input} ${className}` : styles.input;

  return (
    <FormField description={description} disabled={disabled} error={error} label={label}>
      <BaseInput
        className={inputClassName}
        disabled={disabled}
        {...props}
        {...dataAttributes}
      />
    </FormField>
  );
}

export default Input;
