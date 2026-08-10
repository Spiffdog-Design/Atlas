import { resolve } from "node:path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const workspaceRoot = fileURLToPath(new URL("../../", import.meta.url));
const semverPath = resolve(workspaceRoot, "node_modules/semver/index.js");
const useSyncExternalStoreRootPath = resolve(
  workspaceRoot,
  "node_modules/use-sync-external-store/index.js",
);

export default defineConfig({
  resolve: {
    alias: [
      { find: /^semver$/, replacement: semverPath },
      { find: /^use-sync-external-store$/, replacement: useSyncExternalStoreRootPath },
      { find: /^use-sync-external-store\/shim$/, replacement: useSyncExternalStoreRootPath },
      { find: /^use-sync-external-store\/shim\/index\.js$/, replacement: useSyncExternalStoreRootPath },
    ],
  },
  optimizeDeps: {
    include: ["semver", "use-sync-external-store"],
  },
});
