import { join, normalize } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

type CssModuleNode = {
  file?: string | null;
  importers: Set<CssModuleNode>;
};

type CssWatchServer = {
  hot: { send: (payload: { type: "full-reload"; path: string }) => void };
  moduleGraph: {
    urlToModuleMap: Map<string, CssModuleNode>;
    invalidateModule: (mod: CssModuleNode) => void;
  };
  watcher: { add: (path: string) => void };
};

function invalidateCssModuleChain(
  server: CssWatchServer,
  cssPath: string,
): void {
  for (const mod of server.moduleGraph.urlToModuleMap.values()) {
    if (!mod.file || normalize(mod.file) !== cssPath) continue;

    const queue = [mod];
    const seen = new Set<CssModuleNode>();

    while (queue.length > 0) {
      const current = queue.pop();
      if (!current || seen.has(current)) continue;

      seen.add(current);
      server.moduleGraph.invalidateModule(current);

      for (const importer of current.importers) {
        queue.push(importer);
      }
    }
  }
}

function createAtlasColorsCssWatchPlugin(cssPath: string) {
  let reloadTimer: ReturnType<typeof setTimeout> | undefined;

  const scheduleReload = (server: CssWatchServer) => {
    invalidateCssModuleChain(server, cssPath);

    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => {
      server.hot.send({ type: "full-reload", path: "*" });
    }, 50);
  };

  return {
    name: "atlas-colors-css-watch",
    configureServer(server: CssWatchServer) {
      server.watcher.add(cssPath);
    },
    handleHotUpdate({
      file,
      server,
    }: {
      file: string;
      server: CssWatchServer;
    }) {
      if (normalize(file) !== cssPath) return;

      scheduleReload(server);
      // Skip Vite's default CSS HMR — it can strip :root custom properties.
      return [];
    },
  };
}

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    {
      directory: "../../../packages/atlas-components/src",
      files: "**/*.{mdx,stories.@(ts|tsx)}",
    },
    {
      directory: "../../../packages/atlas-colors/src/preview",
      files: "**/*.{mdx,stories.@(ts|tsx)}",
    },
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    const atlasColorsDist = join(
      __dirname,
      "../../../packages/atlas-colors/dist",
    );
    const atlasColorsCss = normalize(join(atlasColorsDist, "index.css"));

    return mergeConfig(config, {
      css: {
        modules: {
          localsConvention: "camelCaseOnly",
        },
      },
      plugins: [createAtlasColorsCssWatchPlugin(atlasColorsCss)],
      resolve: {
        alias: [
          {
            find: "@spiffdog-design/atlas-colors/index.css",
            replacement: join(atlasColorsDist, "index.css"),
          },
          {
            find: "@spiffdog-design/atlas-components",
            replacement: join(__dirname, "../../../packages/atlas-components/src"),
          },
          {
            find: "@spiffdog-design/atlas-colors",
            replacement: join(__dirname, "../../../packages/atlas-colors/src"),
          },
        ],
      },
    });
  },
};

export default config;
