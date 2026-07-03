import type { InputHTMLAttributes, ReactNode } from "react";

import styles from "./checkbox.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  className?: string;
}

export function Checkbox({ label, className, disabled = false, ...props }: CheckboxProps) {
  const checkbox = (
    <input
      className={styles.input}
      type="checkbox"
      disabled={disabled}
      {...props}
    />
  );

  return label ? (
    <label className={className ? `${styles.checkbox} ${className}` : styles.checkbox}>
      {checkbox}
      <span className={styles.label}>{label}</span>
    </label>
  ) : (
    checkbox
  );
}

export default Checkbox;
