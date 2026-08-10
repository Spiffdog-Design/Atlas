import { Field } from "@base-ui/react/field";
import type { ReactNode } from "react";

import type { FormFieldProps } from "../shared/form-field-props.types";

import { Checkbox, type CheckboxProps } from "./checkbox";

import styles from "./field-checkbox.module.css";

export interface FieldCheckboxProps extends CheckboxProps, FormFieldProps {
  /** Optional section caption above the inline control row. */
  fieldLabel?: ReactNode;
}

export function FieldCheckbox({
  label,
  fieldLabel,
  description,
  error,
  disabled,
  ...checkboxProps
}: FieldCheckboxProps) {
  if (!label && !fieldLabel && !description && !error) {
    return <Checkbox disabled={disabled} {...checkboxProps} />;
  }

  const showTextBlock = label != null || description != null;

  return (
    <Field.Root className={styles.field} disabled={disabled}>
      {fieldLabel ? <span className={styles.fieldLabel}>{fieldLabel}</span> : null}
      <Field.Label className={styles.controlRow}>
        <Checkbox disabled={disabled} {...checkboxProps} />
        {showTextBlock ? (
          <span className={styles.textBlock}>
            {label ? <span className={styles.inlineLabel}>{label}</span> : null}
            {description ? (
              <Field.Description className={styles.description}>{description}</Field.Description>
            ) : null}
          </span>
        ) : null}
      </Field.Label>
      {error ? (
        <Field.Error className={styles.error} match>
          {error}
        </Field.Error>
      ) : null}
    </Field.Root>
  );
}
