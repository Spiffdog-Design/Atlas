import type {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
} from "react";

import { Button } from "../button";
import { DialogClose } from "./dialog";

import type { ButtonAppearance, ButtonVariant } from "../button/button.utils";
import type { DialogAppearance } from "./dialog.utils";

import styles from "./dialog.module.css";

export interface DialogActionsProps extends ComponentPropsWithoutRef<"div"> {
  appearance?: DialogAppearance;
  primaryLabel: ReactNode;
  secondaryLabel?: ReactNode;
  primaryAppearance?: ButtonAppearance;
  primaryVariant?: ButtonVariant;
  secondaryAppearance?: ButtonAppearance;
  secondaryVariant?: ButtonVariant;
  onPrimaryClick?: MouseEventHandler<HTMLButtonElement>;
}

export function DialogActions({
  appearance,
  className,
  onPrimaryClick,
  primaryAppearance,
  primaryLabel,
  primaryVariant = "solid",
  secondaryAppearance = "base",
  secondaryLabel = "Cancel",
  secondaryVariant = "basic",
  ...props
}: DialogActionsProps) {
  const resolvedPrimaryAppearance =
    primaryAppearance ?? appearance ?? "primary";
  const actionsClassName = className
    ? `${styles.actions} ${className}`
    : styles.actions;

  return (
    <div className={actionsClassName} {...props}>
      <DialogClose
        render={
          <Button
            appearance={secondaryAppearance}
            type="button"
            variant={secondaryVariant}
          >
            {secondaryLabel}
          </Button>
        }
      />
      <DialogClose
        render={
          <Button
            appearance={resolvedPrimaryAppearance}
            onClick={onPrimaryClick}
            type="button"
            variant={primaryVariant}
          >
            {primaryLabel}
          </Button>
        }
      />
    </div>
  );
}
