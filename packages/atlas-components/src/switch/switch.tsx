import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentPropsWithoutRef } from "react";

import { getSwitchDataAttributes, type SwitchAppearance } from "./switch.utils";

import styles from "./switch.module.css";

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseSwitch.Root>, "className"> {
  appearance?: SwitchAppearance;
  className?: string;
  rounded?: boolean;
}

export function Switch({
  appearance,
  className,
  disabled,
  rounded,
  ...props
}: SwitchProps) {
  const dataAttributes = getSwitchDataAttributes({ appearance, rounded });
  const switchClassName = className ? `${styles.switch} ${className}` : styles.switch;

  return (
    <BaseSwitch.Root
      className={switchClassName}
      disabled={disabled}
      {...props}
      {...dataAttributes}
    >
      <BaseSwitch.Thumb className={styles.thumb} />
    </BaseSwitch.Root>
  );
}
