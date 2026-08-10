import * as React from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";

import styles from "./progressbar.module.css";

export interface ProgressBarProps extends Omit<React.ComponentPropsWithoutRef<typeof BaseProgress.Root>, "children"> {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className, ...props }: ProgressBarProps) {
  const rootClassName = className ? `${styles.progress} ${className}` : styles.progress;

  return (
    <BaseProgress.Root className={rootClassName} value={Math.max(0, value)} {...props}>
      <BaseProgress.Track className={styles.track}>
        <BaseProgress.Indicator className={styles.indicator} />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export default ProgressBar;
