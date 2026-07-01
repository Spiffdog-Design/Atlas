# @spiffdog-design/atlas-components

React component library for the Atlas design system. Components use CSS Modules, semantic design tokens, and `data-*` attributes for variants.

Requires `@spiffdog-design/atlas-colors` as a peer dependency.

## Install

```sh
npm install @spiffdog-design/atlas-colors @spiffdog-design/atlas-components
```

## Usage

```ts
import { Button, Card, Code } from "@spiffdog-design/atlas-components";
import "@spiffdog-design/atlas-colors/index.css";
import "@spiffdog-design/atlas-components/styles.css";
```

Subpath imports are supported for tree-shaking:

```ts
import { Button } from "@spiffdog-design/atlas-components/button";
```

## Structure

Each component lives in its own folder under `src/`:

```
packages/atlas-components/src/
├── button/
│   ├── index.tsx           # React component
│   ├── button.module.css   # CSS Module styles
│   ├── button.utils.ts     # Pure logic (tested)
│   ├── button.test.ts
│   └── button.stories.tsx
├── styles/
│   ├── index.css           # Layered global styles entry
│   ├── tokens.css          # Semantic design tokens
│   └── globals.css
└── index.ts                # Package exports
```

New components can be scaffolded with:

```sh
npm run generate:component -w @spiffdog-design/atlas-components
```

## Styling

- Import `@spiffdog-design/atlas-components/styles.css` once in your app.
- Components map props to `data-*` attributes; variants are styled in CSS, not toggled in JavaScript.
- Use semantic tokens (`--color-*`, `--space-*`, `--radius-*`) from `styles/tokens.css`, not raw palette steps.

## Scripts

```sh
npm run build -w @spiffdog-design/atlas-components
npm run dev -w @spiffdog-design/atlas-components
npm run lint -w @spiffdog-design/atlas-components
npm run check-types -w @spiffdog-design/atlas-components
```

Build output goes to `dist/` (TypeScript emit + copied styles).

## Documentation

Component stories and an overview MDX guide are in Storybook (`npm run dev` from the repo root) under **atlas components**.
