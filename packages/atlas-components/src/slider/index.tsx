import type { InputHTMLAttributes } from "react";

import styles from "./slider.module.css";

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

export function Slider({ className, ...props }: SliderProps) {
  return (
    <input
      className={className ? `${styles.slider} ${className}` : styles.slider}
      type="range"
      {...props}
    />
  );
}

export default Slider;
