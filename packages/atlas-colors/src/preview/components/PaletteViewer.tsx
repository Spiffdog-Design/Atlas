import { palette } from "../../palette";

import { ColorViewer } from "./ColorViewer";

import styles from "./palette-viewer.module.css";

export interface PaletteViewerProps {
  name: string;
}

export const PaletteViewer = ({ name }: PaletteViewerProps) => {
  const steps = Object.keys(palette[name])
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className={styles.root}>
      <div className={styles.title}>{name}</div>
      <div className={styles.swatches}>
        {steps.map((step) => (
          <ColorViewer key={`${name}-${step}`} paletteName={name} step={step} />
        ))}
      </div>
    </div>
  );
};
