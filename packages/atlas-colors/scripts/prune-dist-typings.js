/**
 * Removes typings and folders that should not ship with the library (leftover from
 * older builds or emitted before tsconfig.build exclusions).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dist = path.join(__dirname, "../dist");

// Fresh clones / CI have no dist yet; rollup creates it. Nothing to prune.
if (!fs.existsSync(dist)) {
  process.exit(0);
}

function rm(p) {
  const full = path.join(dist, p);
  if (!fs.existsSync(full)) return;
  fs.rmSync(full, { recursive: true, force: true });
}

rm("preview");

for (const name of fs.readdirSync(dist, { withFileTypes: true })) {
  if (!name.isFile()) continue;
  if (
    name.name.endsWith(".test.d.ts") ||
    name.name.endsWith(".spec.d.ts") ||
    name.name === "themeToIndexCss.d.ts"
  ) {
    fs.unlinkSync(path.join(dist, name.name));
  }
}
