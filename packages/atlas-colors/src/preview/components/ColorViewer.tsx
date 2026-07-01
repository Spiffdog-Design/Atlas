import type { CSSProperties } from "react";
import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";

import { cssCustomPropertyName, cssVarRef } from "../utility";

import styles from "./color-viewer.module.css";

export interface ColorViewerProps {
  paletteName: string;
  step: number;
}

export const ColorViewer = ({ paletteName, step }: ColorViewerProps) => {
  const varRef = cssVarRef(paletteName, step);
  const propName = cssCustomPropertyName(paletteName, step);
  const borderColor = `color-mix(in srgb, ${varRef}, var(--${paletteName}1) 72%)`;
  const swatchStyle = {
    "--swatch-bg": varRef,
    border: `1px solid ${borderColor}`,
  } as CSSProperties;

  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>
          <div className={styles.root}>
            <div className={styles.checker}>
              <div className={styles.swatch} style={swatchStyle} />
            </div>
            <div className={styles.label}>{step}</div>
          </div>
        </Trigger>
        <Portal>
          <Content className={styles.tooltip} sideOffset={10}>
            <div className={styles.tooltipGrid}>
              <strong>CSS variable:</strong>
              <code>{propName}</code>

              <strong>Token:</strong>
              <code>{`${paletteName}[${step}]`}</code>
              
              <strong>Preview:</strong>
              <div className={styles.preview} style={swatchStyle}>
                <div className={styles.swatchPlain} />
              </div>
            </div>
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
