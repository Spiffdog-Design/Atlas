import { Toast as BaseToast } from "@base-ui/react/toast";

export const createToastManager = BaseToast.createToastManager;
export type { ToastManager } from "@base-ui/react/toast";

export {
  ToastProvider,
  type ToastProviderProps,
  withToastProvider,
} from "./toast-provider";
export { useToast } from "./use-toast";

export type {
  AtlasToastData,
  ToastAppearance,
  ToastShowOptions,
  ToastUpdateOptions,
} from "./toast.utils";
