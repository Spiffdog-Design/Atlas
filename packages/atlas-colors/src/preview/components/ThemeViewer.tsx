import { palette } from "../../palette";

import { PaletteViewer } from "./PaletteViewer";

import { getOrderedPaletteNames } from "../utility";

import styles from "./theme-viewer.module.css";

export const ThemeViewer = () => {
  return (
    <div className={styles.root}>
      {getOrderedPaletteNames(Object.keys(palette)).map((key) => (
        <PaletteViewer key={key} name={key} />
      ))}
    </div>
  );
};
