import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import { Select, type SelectProps } from "./select-control";

export interface FieldSelectProps extends SelectProps, FormFieldProps {}

export function FieldSelect({
  label,
  description,
  error,
  disabled,
  ...selectProps
}: FieldSelectProps) {
  return (
    <FormField description={description} disabled={disabled} error={error} label={label}>
      <Select disabled={disabled} {...selectProps} />
    </FormField>
  );
}
