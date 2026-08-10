import { Toast as BaseToast } from "@base-ui/react/toast";

import { CloseIcon } from "../icons";

import { type AtlasToastData, getToastDataAttributes } from "./toast.utils";

import styles from "./toast.module.css";

export function ToastList() {
  const { toasts } = BaseToast.useToastManager<AtlasToastData>();

  return toasts.map((toast) => (
    <BaseToast.Root
      key={toast.id}
      className={styles.root}
      toast={toast}
      {...getToastDataAttributes(toast.data)}
    >
      <BaseToast.Content className={styles.content}>
        <div className={styles.text}>
          {toast.title != null && toast.title !== "" ? (
            <BaseToast.Title className={styles.title} />
          ) : null}
          {toast.description != null && toast.description !== "" ? (
            <BaseToast.Description className={styles.description} />
          ) : null}
        </div>
        <BaseToast.Close aria-label="Dismiss" className={styles.close}>
          <CloseIcon />
        </BaseToast.Close>
      </BaseToast.Content>
    </BaseToast.Root>
  ));
}
