import { HTMLAttributes, type JSX } from "react";
import styles from "./card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function Card({
  children,
  className,
  title,
  ...props
}: CardProps) {
  const classes = className ? `${styles.card} ${className}` : styles.card

  return (
    <div
      className={classes}
      {...props}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Card;
