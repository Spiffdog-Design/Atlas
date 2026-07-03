import type { HTMLAttributes } from "react";

import styles from "./progressbar.module.css";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({ value, max = 100, className, ...props }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={className ? `${styles.progress} ${className}` : styles.progress} {...props}>
      <div className={styles.fill} style={{ width: `${percentage}%` }} />
    </div>
  );
}

export default ProgressBar;
