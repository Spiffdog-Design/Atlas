import { ReactNode } from "react";

import styles from "./button.module.css";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

export default Button;
