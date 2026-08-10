import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentPropsWithoutRef } from "react";

import {
  type DialogAppearance,
  getDialogPopupDataAttributes,
} from "./dialog.utils";

import styles from "./dialog.module.css";

export type DialogRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;

export function DialogRoot(props: DialogRootProps) {
  return <BaseDialog.Root {...props} />;
}

export type DialogTriggerProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Trigger
>;

export function DialogTrigger(props: DialogTriggerProps) {
  return <BaseDialog.Trigger {...props} />;
}

export type DialogPortalProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Portal
>;

export function DialogPortal(props: DialogPortalProps) {
  return <BaseDialog.Portal {...props} />;
}

export type DialogBackdropProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Backdrop
>;

export function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  const backdropClassName = className
    ? `${styles.backdrop} ${className}`
    : styles.backdrop;

  return <BaseDialog.Backdrop className={backdropClassName} {...props} />;
}

export type DialogViewportProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Viewport
>;

export function DialogViewport(props: DialogViewportProps) {
  return <BaseDialog.Viewport {...props} />;
}

export interface DialogPopupProps
  extends ComponentPropsWithoutRef<typeof BaseDialog.Popup> {
  appearance?: DialogAppearance;
}

export function DialogPopup({
  appearance,
  className,
  ...props
}: DialogPopupProps) {
  const popupDataAttributes = getDialogPopupDataAttributes(appearance);
  const popupClassName = className
    ? `${styles.popup} ${className}`
    : styles.popup;

  return (
    <BaseDialog.Popup
      className={popupClassName}
      {...props}
      {...popupDataAttributes}
    />
  );
}

export type DialogTitleProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Title
>;

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  const titleClassName = className
    ? `${styles.title} ${className}`
    : styles.title;

  return <BaseDialog.Title className={titleClassName} {...props} />;
}

export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Description
>;

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  const descriptionClassName = className
    ? `${styles.description} ${className}`
    : styles.description;

  return <BaseDialog.Description className={descriptionClassName} {...props} />;
}

export type DialogCloseProps = ComponentPropsWithoutRef<
  typeof BaseDialog.Close
>;

export function DialogClose(props: DialogCloseProps) {
  return <BaseDialog.Close {...props} />;
}

export function DialogIntro({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const introClassName = className
    ? `${styles.intro} ${className}`
    : styles.intro;

  return <div className={introClassName} {...props} />;
}
