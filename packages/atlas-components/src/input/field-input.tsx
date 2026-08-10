import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import { Input, type InputProps } from "./input";

export interface FieldInputProps extends InputProps, FormFieldProps {}

export function FieldInput({
  label,
  description,
  error,
  disabled,
  ...inputProps
}: FieldInputProps) {
  return (
    <FormField description={description} disabled={disabled} error={error} label={label}>
      <Input disabled={disabled} {...inputProps} />
    </FormField>
  );
}
