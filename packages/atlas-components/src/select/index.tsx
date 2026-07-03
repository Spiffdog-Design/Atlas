import type { SelectHTMLAttributes, ReactNode } from "react";

import styles from "./select.module.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  className?: string;
}

export function Select({ label, className, children, ...props }: SelectProps) {
  const select = (
    <select className={className ? `${styles.select} ${className}` : styles.select} {...props}>
      {children}
    </select>
  );

  return label ? (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      {select}
    </label>
  ) : (
    select
  );
}

export default Select;
