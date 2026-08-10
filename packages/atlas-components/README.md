# @spiffdog-design/atlas-components

React component library for the Atlas design system. Components use CSS Modules, semantic design tokens, and `data-*` attributes for variants.

Requires `@spiffdog-design/atlas-colors` as a peer dependency.

## Install

```sh
npm install @spiffdog-design/atlas-colors @spiffdog-design/atlas-components
```

## Usage

```ts
import { Button, Card, Code, Checkbox, Input, Select, Slider, ProgressBar } from "@spiffdog-design/atlas-components";
import "@spiffdog-design/atlas-colors/index.css";
import "@spiffdog-design/atlas-components/styles.css";
```

Subpath imports are supported for tree-shaking (preferred over the root barrel):

```ts
import { Button } from "@spiffdog-design/atlas-components/button";
```

Explicit export paths: `./button`, `./card`, `./code`, `./checkbox`, `./input`, `./slider`, `./progressbar`, `./select`, `./icon`, `./styles.css`.

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
├── checkbox/
│   ├── index.tsx
│   ├── checkbox.module.css
│   ├── checkbox.test.tsx
│   └── checkbox.stories.tsx
├── input/
│   ├── index.tsx
│   ├── input.module.css
│   ├── input.test.tsx
│   └── input.stories.tsx
├── select/
│   ├── index.tsx
│   ├── select.module.css
│   ├── select.test.tsx
│   └── select.stories.tsx
├── slider/
│   ├── index.tsx
│   ├── slider.module.css
│   └── slider.stories.tsx
├── progressbar/
│   ├── index.tsx
│   ├── progressbar.module.css
│   └── progressbar.stories.tsx
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
- Buttons and other controls also consume hover-specific semantic tokens such as `--color-primary-hover`, `--color-success-hover`, `--color-warning-hover`, and `--color-error-hover`.

## Icons

Icons use [Lucide React](https://lucide.dev/) via a thin `Icon` wrapper with defaults (`size={16}`, `strokeWidth={1.5}`) that inherit the parent `color` through `currentColor`.

```ts
import { Icon, CheckIcon, CloseIcon } from "@spiffdog-design/atlas-components/icon";
import { ChevronRight } from "lucide-react";

<CheckIcon />
<Icon icon={ChevronRight} size={20} strokeWidth={2} />
```

Named helpers (`CheckIcon`, `CaretUpDownIcon`, `CaretUpIcon`, `CaretDownIcon`, `CloseIcon`) cover common Atlas components. Pass any Lucide icon to `Icon` for one-offs.

## Scripts

```sh
npm run build -w @spiffdog-design/atlas-components
npm run dev -w @spiffdog-design/atlas-components
npm run test -w @spiffdog-design/atlas-components
npm run lint -w @spiffdog-design/atlas-components
npm run check-types -w @spiffdog-design/atlas-components
```

Build output goes to `dist/` (TypeScript emit + copied styles).

## Documentation

Component stories and an overview MDX guide are in Storybook (`npm run dev` from the repo root) under **atlas components**.

A combined component set story is available at `packages/atlas-components/src/components.stories.tsx` under **atlas components/Component Set**.
