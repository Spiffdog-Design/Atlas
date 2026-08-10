import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentPropsWithoutRef } from "react";

import {
  getProgressBarDataAttributes,
  type ProgressBarAppearance,
} from "./progressbar.utils";

import styles from "./progressbar.module.css";

export interface ProgressBarProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseProgress.Root>, "children"> {
  appearance?: ProgressBarAppearance;
  className?: string;
  rounded?: boolean;
  value: number;
}

export function ProgressBar({
  appearance,
  className,
  rounded,
  value,
  ...props
}: ProgressBarProps) {
  const dataAttributes = getProgressBarDataAttributes({ appearance, rounded });
  const rootClassName = className ? `${styles.progress} ${className}` : styles.progress;

  return (
    <BaseProgress.Root
      className={rootClassName}
      value={Math.max(0, value)}
      {...props}
      {...dataAttributes}
    >
      <BaseProgress.Track className={styles.track}>
        <BaseProgress.Indicator className={styles.indicator} />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
