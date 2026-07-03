# @spiffdog-design/atlas-tools

Utility helpers for Atlas data types, organized by category.

## Install

```sh
npm install @spiffdog-design/atlas-tools
```

## Usage

```ts
import { chunk, capitalize, deepMerge } from "@spiffdog-design/atlas-tools";
```

## Package structure

```
packages/atlas-tools/
├── src/
│   ├── array.ts
│   ├── array.test.ts
│   ├── object.ts
│   ├── object.test.ts
│   ├── string.ts
│   ├── string.test.ts
│   └── index.ts
├── tsconfig.build.json
├── biome.json
├── vitest.config.ts
└── package.json
```

## Scripts

- `npm run build` — compile TypeScript output to `dist/`
- `npm run dev` — watch TypeScript builds
- `npm run lint` — run Biome lint checks
- `npm run check-types` — run TypeScript type checks
- `npm run test` — run unit tests with Vitest
