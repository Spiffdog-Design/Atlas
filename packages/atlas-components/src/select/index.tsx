import * as React from "react";
import type { ReactNode } from "react";
import { Select as BaseSelect } from "@base-ui/react/select";

import styles from "./select.module.css";

type SelectItem = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

const parseOptions = (children: ReactNode): SelectItem[] =>
  React.Children.toArray(children)
    .filter(React.isValidElement)
    .filter((child) => child.type === "option")
    .map((child) => {
      const { value, disabled, children: optionChildren } = child.props as {
        value?: string;
        disabled?: boolean;
        children?: ReactNode;
      };

      return {
        value: value ?? String(optionChildren ?? ""),
        label: optionChildren ?? value ?? "",
        disabled,
      };
    });

type BaseSelectRootProps = React.ComponentPropsWithoutRef<typeof BaseSelect.Root>;
type BaseSelectOnValueChange = NonNullable<BaseSelectRootProps["onValueChange"]>;
	export interface SelectProps extends Omit<BaseSelectRootProps, "children" | "onValueChange"> {
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  items?: SelectItem[];
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: BaseSelectOnValueChange;
}

export function Select({
  label,
  className,
  placeholder = "Select...",
  items,
  children,
  onChange,
  onValueChange,
  disabled = false,
  value,
  defaultValue,
  name,
  id,
  required,
  multiple,
  ...rootProps
}: SelectProps) {
  const parsedItems = React.useMemo(() => parseOptions(children), [children]);
  const selectItems = items ?? parsedItems;

  const handleValueChange = React.useCallback(
    (nextValue: unknown, eventDetails: Parameters<BaseSelectOnValueChange>[1]) => {
      if (onChange) {
        const event = {
          target: { value: nextValue },
        } as React.ChangeEvent<HTMLSelectElement>;

        onChange(event);
      }

      if (onValueChange) {
        onValueChange(nextValue as Parameters<BaseSelectOnValueChange>[0], eventDetails);
      }
    },
    [onChange, onValueChange],
  );

  const wrapperClassName = className ? `${styles.field} ${className}` : styles.field;

  return (
    <div className={wrapperClassName}>
      <BaseSelect.Root
        disabled={disabled}
        items={selectItems}
        onValueChange={handleValueChange}
        {...rootProps}
      >
        {label ? <BaseSelect.Label className={styles.label}>{label}</BaseSelect.Label> : null}

        <BaseSelect.Trigger className={styles.trigger}>
          <BaseSelect.Value className={styles.value} placeholder={placeholder} />
          <BaseSelect.Icon className={styles.icon}>▾</BaseSelect.Icon>
        </BaseSelect.Trigger>

        <BaseSelect.Portal>
          <BaseSelect.Backdrop className={styles.backdrop} />
          <BaseSelect.Positioner className={styles.positioner} sideOffset={4}>
            <BaseSelect.Popup className={styles.popup}>
              <BaseSelect.ScrollUpArrow className={styles.scrollArrow}>▴</BaseSelect.ScrollUpArrow>
              <BaseSelect.Arrow className={styles.arrow} />
              <BaseSelect.List className={styles.list}>
                {selectItems.map((item) => (
                  <BaseSelect.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className={styles.item}
                  >
                    <span className={styles.itemIndicatorSpacer} aria-hidden="true" />
                    <BaseSelect.ItemIndicator className={styles.itemIndicator}>✓</BaseSelect.ItemIndicator>
                    <BaseSelect.ItemText className={styles.itemText}>{item.label}</BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
              <BaseSelect.ScrollDownArrow className={styles.scrollArrow}>▾</BaseSelect.ScrollDownArrow>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}

export default Select;
