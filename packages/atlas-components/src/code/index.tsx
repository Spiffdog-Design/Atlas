import { type JSX } from "react";
import styles from "./code.module.css";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className ? `${styles.code} ${className}` : styles.code}>{children}</code>;
}

export default Code;
