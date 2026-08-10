import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { ToastList } from "./toast-list";

import styles from "./toast.module.css";

export type ToastProviderProps = ComponentPropsWithoutRef<
  typeof BaseToast.Provider
>;

export function ToastProvider({
  children,
  ...providerProps
}: ToastProviderProps) {
  return (
    <BaseToast.Provider {...providerProps}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className={styles.viewport}>
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}

export function withToastProvider(Story: () => ReactNode) {
  return (
    <ToastProvider>
      <Story />
    </ToastProvider>
  );
}
