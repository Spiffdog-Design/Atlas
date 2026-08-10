import { Field } from "@base-ui/react/field";
import type { ReactNode } from "react";

import type { FormFieldProps } from "./form-field-props.types";

import styles from "./form-field.module.css";

export interface FormFieldWrapperProps extends FormFieldProps {
  disabled?: boolean;
  children: ReactNode;
}

/**
 * Wraps a form control with Base UI Field parts when label, description, or error is present.
 * Part order: Label → control → Description → Error.
 * Pass a Base UI control primitive as `children` (Input, Checkbox.Root, Select.Trigger, …).
 */
export function FormField({
  label,
  description,
  error,
  disabled,
  children,
}: FormFieldWrapperProps) {
  if (!label && !description && !error) {
    return children;
  }

  return (
    <Field.Root className={styles.field} disabled={disabled}>
      {label ? <Field.Label className={styles.label}>{label}</Field.Label> : null}
      {children}
      {description ? (
        <Field.Description className={styles.description}>{description}</Field.Description>
      ) : null}
      {error ? (
        <Field.Error className={styles.error} match>
          {error}
        </Field.Error>
      ) : null}
    </Field.Root>
  );
}
