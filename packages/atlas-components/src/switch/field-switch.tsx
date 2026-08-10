import { Field } from "@base-ui/react/field";
import type { ReactNode } from "react";

import type { FormFieldProps } from "../shared/form-field-props.types";

import { Switch, type SwitchProps } from "./switch";

import styles from "./field-switch.module.css";

export interface FieldSwitchProps extends SwitchProps, FormFieldProps {
  /** Optional section caption above the inline control row. */
  fieldLabel?: ReactNode;
}

export function FieldSwitch({
  label,
  fieldLabel,
  description,
  error,
  disabled,
  ...switchProps
}: FieldSwitchProps) {
  if (!label && !fieldLabel && !description && !error) {
    return <Switch disabled={disabled} {...switchProps} />;
  }

  const showTextBlock = label != null || description != null;

  return (
    <Field.Root className={styles.field} disabled={disabled}>
      {fieldLabel ? <span className={styles.fieldLabel}>{fieldLabel}</span> : null}
      <Field.Label className={styles.controlRow}>
        <Switch disabled={disabled} {...switchProps} />
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
