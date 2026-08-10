import { Toast as BaseToast } from "@base-ui/react/toast";

import {
  type AtlasToastData,
  normalizeToastShowOptions,
  normalizeToastUpdateOptions,
  type ToastShowOptions,
  type ToastUpdateOptions,
} from "./toast.utils";

export function useToast() {
  const manager = BaseToast.useToastManager<AtlasToastData>();

  return {
    close: manager.close,
    promise: manager.promise,
    show: (options: ToastShowOptions) =>
      manager.add(normalizeToastShowOptions(options)),
    toasts: manager.toasts,
    update: (toastId: string, options: ToastUpdateOptions) =>
      manager.update(toastId, normalizeToastUpdateOptions(options)),
  };
}
