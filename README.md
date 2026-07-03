# Atlas Design System

Atlas is a React component library and color system maintained by [Spiffdog Design](https://github.com/Spiffdog-Design). It ships as npm packages from this Turborepo monorepo and is documented in Storybook.

## Prerequisites

- **Node.js** 18 or later
- **npm** 11.6.2 (see `devEngines` in `package.json`)

## Getting started

```sh
git clone https://github.com/Spiffdog-Design/Atlas.git
cd Atlas
npm install
npm run dev
```

`npm run dev` starts Storybook on [http://localhost:6006](http://localhost:6006) and runs `@spiffdog-design/atlas-*` packages in watch mode so component and token changes rebuild into the docs app.

## Repository layout

```
atlas/
├── apps/
│   └── docs/              # Storybook documentation app
├── packages/
│   ├── atlas-colors/      # OKLab palette tokens
│   ├── atlas-components/  # React component library
│   ├── biome-config/      # Shared Biome presets
│   └── typescript-config/ # Shared tsconfig bases
├── turbo.json
└── package.json
```

## Workspaces

| Workspace | README |
|-----------|--------|
| `docs` | [apps/docs/README.md](apps/docs/README.md) |
| `@spiffdog-design/atlas-colors` | [packages/atlas-colors/README.md](packages/atlas-colors/README.md) |
| `@spiffdog-design/atlas-components` | [packages/atlas-components/README.md](packages/atlas-components/README.md) |
| `@spiffdog-design/atlas-tools` | [packages/atlas-tools/README.md](packages/atlas-tools/README.md) |
| `@spiffdog-design/biome-config` | [packages/biome-config/README.md](packages/biome-config/README.md) |
| `@spiffdog-design/typescript-config` | [packages/typescript-config/README.md](packages/typescript-config/README.md) |

## Scripts

Run from the repository root:

| Script | Description |
|--------|-------------|
| `npm run dev` | Storybook dev server + watch builds for `atlas-*` packages |
| `npm run build` | Production build of all apps and packages |
| `npm run build:packages` | Build publishable `atlas-*` libraries to each `dist/` |
| `npm run build:docs` | Static Storybook site to `apps/docs/storybook-static/` |
| `npm run lint` | Biome check across the monorepo |
| `npm run format` | Biome check with auto-fix |
| `npm run check-types` | TypeScript `--noEmit` in all workspaces |
| `npx turbo run test --filter=@spiffdog-design/atlas-*` | Run tests across Atlas workspace packages |

## Recent updates

- Added form and input primitives in `@spiffdog-design/atlas-components`: `Checkbox`, `Input`, `Select`, `Slider`, and `ProgressBar`.
- Added a combined component set Storybook example at `packages/atlas-components/src/components.stories.tsx`.
- Added a Turbo `test` task in `turbo.json` so `npx turbo run test --filter=@spiffdog-design/atlas-*` works.
- Added semantic hover tokens in `packages/atlas-components/src/styles/tokens.css`, including `--color-primary-hover`, `--color-success-hover`, `--color-warning-hover`, and `--color-error-hover`.
- Updated package documentation and exports for the new components.

Filter Turborepo tasks to a single workspace:

```sh
npx turbo build --filter=docs
npx turbo dev --filter=@spiffdog-design/atlas-components
```

## Using Atlas in an app

```sh
npm install @spiffdog-design/atlas-colors @spiffdog-design/atlas-components
```

```ts
import { Button, Card, Code, Checkbox, Input, Select, Slider, ProgressBar } from "@spiffdog-design/atlas-components";
import { palette } from "@spiffdog-design/atlas-colors";
import "@spiffdog-design/atlas-colors/index.css";
import "@spiffdog-design/atlas-components/styles.css";
```

See the workspace READMEs linked above for package-specific usage.

## Design principles

- **CSS Modules only** — no utility-first CSS frameworks
- **Semantic tokens** — components consume `--color-*`, `--space-*`, and related variables from `atlas-components` styles
- **Platform-first** — prefer native HTML and CSS; reach for `@base-ui/react` when headless behavior is required
- **Colocated docs** — component stories live next to source in `packages/atlas-components/src/`; color previews in `packages/atlas-colors/src/preview/`

## License

ISC
