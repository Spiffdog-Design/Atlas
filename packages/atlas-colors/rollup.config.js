// rollup.config.js
import { createRequire } from "node:module";

import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import sass from "sass";

const require = createRequire(import.meta.url);

function emitIndexCss() {
  const scriptPath = require.resolve("./scripts/build-css-modules.js");

  return {
    name: "emit-index-css",
    writeBundle() {
      delete require.cache[scriptPath];
      require(scriptPath);
    },
  };
}

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "cjs",
    },
    {
      file: "./dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
    }),
    scss({
      output: "./dist/css/style.css",
      failOnError: true,
      runtime: sass,
    }),
    emitIndexCss(),
  ],
};
