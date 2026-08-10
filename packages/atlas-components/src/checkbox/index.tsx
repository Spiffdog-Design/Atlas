import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";

import { CheckIcon } from "../icons/index.js";

import styles from "./checkbox.module.css";

export function Checkbox() {
  return (
    <label className={styles.label}>
      <BaseCheckbox.Root defaultChecked className={styles.checkbox}>
        <BaseCheckbox.Indicator className={styles.indicator}>
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      Enable notifications
    </label>
  );
}
