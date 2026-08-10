import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import { RadioGroup, type RadioGroupProps } from "./radio-group";

export interface FieldRadioGroupProps extends RadioGroupProps, FormFieldProps {}

export function FieldRadioGroup({
  label,
  description,
  error,
  disabled,
  ...radioGroupProps
}: FieldRadioGroupProps) {
  return (
    <FormField description={description} disabled={disabled} error={error} label={label}>
      <RadioGroup disabled={disabled} {...radioGroupProps} />
    </FormField>
  );
}
