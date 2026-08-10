import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import { ProgressBar, type ProgressBarProps } from "./progressbar";

export interface FieldProgressBarProps extends ProgressBarProps, FormFieldProps {}

export function FieldProgressBar({
  label,
  description,
  error,
  ...progressBarProps
}: FieldProgressBarProps) {
  return (
    <FormField description={description} error={error} label={label}>
      <ProgressBar {...progressBarProps} />
    </FormField>
  );
}
