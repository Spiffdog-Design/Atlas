import { FormField } from "../shared/form-field";
import type { FormFieldProps } from "../shared/form-field-props.types";

import { Slider, type SliderProps } from "./slider";

export interface FieldSliderProps extends SliderProps, FormFieldProps {}

export function FieldSlider({
  label,
  description,
  error,
  disabled,
  ...sliderProps
}: FieldSliderProps) {
  return (
    <FormField description={description} disabled={disabled} error={error} label={label}>
      <Slider disabled={disabled} {...sliderProps} />
    </FormField>
  );
}
