import * as React from "react";
import type { ReactNode } from "react";
import { Slider as BaseSlider } from "@base-ui/react/slider";

import styles from "./slider.module.css";

export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<typeof BaseSlider.Root>, "children"> {
  className?: string;
  thumbLabel?: string;
}

export function Slider({
  className,
  thumbLabel = "Slider thumb",
  ...props
}: SliderProps) {
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <BaseSlider.Root className={rootClassName} {...props}>
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          <BaseSlider.Thumb aria-label={thumbLabel} className={styles.thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export default Slider;
