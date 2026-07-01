const fs = require("fs");
const path = require("path");

const distIndexPath = require.resolve("../dist/index.js");
delete require.cache[distIndexPath];

const { palette } = require(distIndexPath);
const { themeToIndexCss } = require("./themeToIndexCss");

const outputDir = require("../tsconfig.json").compilerOptions.outDir;

const indexCss = themeToIndexCss(palette);
fs.writeFileSync(path.join(outputDir, "index.css"), indexCss);

for (const stale of ["light.css", "dark.css"]) {
  const stalePath = path.join(outputDir, stale);
  if (fs.existsSync(stalePath)) {
    fs.unlinkSync(stalePath);
  }
}
