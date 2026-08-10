import type { InputHTMLAttributes, ReactNode } from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import styles from "./input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  className?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  const input = (
    <BaseInput
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
