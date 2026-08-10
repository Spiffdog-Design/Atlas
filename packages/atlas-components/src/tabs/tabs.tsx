import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { useMemo } from "react";
import type { ComponentPropsWithoutRef } from "react";

import {
  getTabDataAttributes,
  normalizeTabsItems,
  resolveTabsDefaultValue,
  type TabsAppearance,
  type TabsItem,
  type TabsVariant,
} from "./tabs.utils";

import styles from "./tabs.module.css";

export interface TabsProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseTabs.Root>, "children"> {
  items: TabsItem[];
  appearance?: TabsAppearance;
  variant?: TabsVariant;
  rounded?: boolean;
  className?: string;
}

export function Tabs({
  items,
  appearance,
  variant,
  rounded,
  className,
  defaultValue,
  value,
  orientation,
  ...rootProps
}: TabsProps) {
  const normalizedItems = useMemo(() => normalizeTabsItems(items), [items]);
  const tabDataAttributes = getTabDataAttributes({ appearance, variant, rounded });
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;
  const isVertical = orientation === "vertical";
  const layoutClassName = isVertical
    ? `${rootClassName} ${styles.rootVertical}`
    : rootClassName;
  const resolvedDefault = useMemo(
    () => (value !== undefined ? undefined : resolveTabsDefaultValue(normalizedItems, defaultValue)),
    [value, normalizedItems, defaultValue],
  );

  return (
    <BaseTabs.Root
      className={layoutClassName}
      defaultValue={resolvedDefault}
      orientation={orientation}
      value={value}
      {...rootProps}
    >
      <BaseTabs.List className={styles.list}>
        {normalizedItems.map((item) =>
          item.disabled ? (
            <span
              key={item.value}
              aria-disabled="true"
              aria-selected={false}
              className={styles.tab}
              role="tab"
              tabIndex={-1}
              {...tabDataAttributes}
            >
              {item.label}
            </span>
          ) : (
            <BaseTabs.Tab
              key={item.value}
              className={styles.tab}
              value={item.value}
              {...tabDataAttributes}
            >
              {item.label}
            </BaseTabs.Tab>
          ),
        )}
      </BaseTabs.List>
      <div className={styles.panelViewport}>
        {normalizedItems.map((item) => (
          <BaseTabs.Panel key={item.value} className={styles.panel} value={item.value}>
            {item.panel}
          </BaseTabs.Panel>
        ))}
      </div>
    </BaseTabs.Root>
  );
}
