import { Select as BaseSelect } from "@base-ui/react/select";
import { useMemo } from "react";
import type { ChangeEvent, ComponentPropsWithoutRef } from "react";

import {
  CaretDownIcon,
  CaretUpDownIcon,
  CaretUpIcon,
  CheckIcon,
} from "../icons";

import {
  createSelectValueChangeHandler,
  getSelectPopupDataAttributes,
  getSelectTriggerDataAttributes,
  normalizeSelectItems,
  type SelectAppearance,
  type SelectItem,
} from "./select.utils";

import styles from "./select.module.css";

type BaseSelectRootProps = ComponentPropsWithoutRef<typeof BaseSelect.Root>;
type BaseSelectOnValueChange = NonNullable<BaseSelectRootProps["onValueChange"]>;

export interface SelectProps extends Omit<BaseSelectRootProps, "children" | "items" | "onValueChange"> {
  items: SelectItem[];
  appearance?: SelectAppearance;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: BaseSelectOnValueChange;
}

export function Select({
  items,
  appearance,
  className,
  placeholder = "Select…",
  onChange,
  onValueChange,
  disabled,
  ...rootProps
}: SelectProps) {
  const normalizedItems = useMemo(() => normalizeSelectItems(items), [items]);
  const triggerDataAttributes = getSelectTriggerDataAttributes(appearance);
  const popupDataAttributes = getSelectPopupDataAttributes(appearance);
  const handleValueChange = useMemo(
    () => createSelectValueChangeHandler(onChange, onValueChange),
    [onChange, onValueChange],
  );

  const triggerClassName = className ? `${styles.trigger} ${className}` : styles.trigger;

  return (
    <BaseSelect.Root
      disabled={disabled}
      items={normalizedItems}
      onValueChange={handleValueChange}
      {...rootProps}
    >
      <BaseSelect.Trigger className={triggerClassName} {...triggerDataAttributes}>
        <BaseSelect.Value className={styles.value} placeholder={placeholder} />
        <BaseSelect.Icon className={styles.icon}>
          <CaretUpDownIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner className={styles.positioner} sideOffset={4}>
          <BaseSelect.Popup className={styles.popup} {...popupDataAttributes}>
            <BaseSelect.ScrollUpArrow className={styles.scrollArrow}>
              <CaretUpIcon />
            </BaseSelect.ScrollUpArrow>
            <BaseSelect.List className={styles.list}>
              {normalizedItems.map((item) => (
                <BaseSelect.Item
                  key={item.value}
                  className={styles.item}
                  disabled={item.disabled}
                  value={item.value}
                >
                  <BaseSelect.ItemIndicator className={styles.itemIndicator}>
                    <CheckIcon size={20} strokeWidth={2} />
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className={styles.itemText}>{item.label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
            <BaseSelect.ScrollDownArrow className={styles.scrollArrow}>
              <CaretDownIcon />
            </BaseSelect.ScrollDownArrow>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
