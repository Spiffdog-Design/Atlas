import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { themeToIndexCss } from "./themeToIndexCss.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, "../dist");
const { palette } = await import(pathToFileURL(path.resolve(outputDir, "index.mjs")).href);

const indexCss = themeToIndexCss(palette);
fs.writeFileSync(path.join(outputDir, "index.css"), indexCss);

for (const stale of ["light.css", "dark.css"]) {
  const stalePath = path.join(outputDir, stale);
  if (fs.existsSync(stalePath)) {
    fs.unlinkSync(stalePath);
  }
}
