import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogIntro,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
} from "./dialog";
import { DialogActions } from "./dialog-actions";

export const Dialog = {
  Actions: DialogActions,
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Description: DialogDescription,
  Intro: DialogIntro,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  Viewport: DialogViewport,
  createHandle: BaseDialog.createHandle,
};

export type {
  DialogBackdropProps,
  DialogCloseProps,
  DialogDescriptionProps,
  DialogPopupProps,
  DialogPortalProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
  DialogViewportProps,
} from "./dialog";
export type { DialogActionsProps } from "./dialog-actions";

export type { DialogAppearance } from "./dialog.utils";

export {
  DialogActions,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogIntro,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
};
