import type { InputHTMLAttributes, ReactNode } from "react";

import styles from "./input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  className?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  const input = (
    <input
      className={className ? `${styles.input} ${className}` : styles.input}
      {...props}
    />
  );

  return label ? (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      {input}
    </label>
  ) : (
    input
  );
}

export default Input;
