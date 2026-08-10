import type { HTMLAttributes, ReactNode } from "react";

import {
  getCardDataAttributes,
  type CardAppearance,
  type CardVariant,
} from "./card.utils";

import styles from "./card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: CardAppearance;
  children?: ReactNode;
  className?: string;
  title: string;
  variant?: CardVariant;
}

export function Card({
  appearance,
  children,
  className,
  title,
  variant,
  ...props
}: CardProps) {
  const dataAttributes = getCardDataAttributes({ appearance, variant });
  const cardClassName = className ? `${styles.card} ${className}` : styles.card;

  return (
    <div className={cardClassName} {...props} {...dataAttributes}>
      <h2 className={styles.title}>{title}</h2>
      {children != null ? <p className={styles.body}>{children}</p> : null}
    </div>
  );
}

export default Card;
