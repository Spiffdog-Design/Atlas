import { Slider as BaseSlider } from "@base-ui/react/slider";
import type { ComponentPropsWithoutRef } from "react";

import {
  getSliderDataAttributes,
  type SliderAppearance,
} from "./slider.utils";

import styles from "./slider.module.css";

export interface SliderProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseSlider.Root>, "children"> {
  appearance?: SliderAppearance;
  className?: string;
  thumbLabel?: string;
}

export function Slider({
  appearance,
  className,
  thumbLabel = "Slider thumb",
  ...props
}: SliderProps) {
  const dataAttributes = getSliderDataAttributes(appearance);
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <BaseSlider.Root className={rootClassName} {...props} {...dataAttributes}>
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          <BaseSlider.Thumb aria-label={thumbLabel} className={styles.thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
