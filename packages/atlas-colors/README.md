# @spiffdog-design/atlas-colors

OKLab-based color palette for the Atlas design system. Each scale step is a single CSS color using `light-dark()` so one token works in both light and dark appearance.

## Install

```sh
npm install @spiffdog-design/atlas-colors
```

## CSS

Import the stylesheet to expose palette custom properties on `:root`:

```ts
import "@spiffdog-design/atlas-colors/index.css";
```

The stylesheet:

1. Sets `color-scheme: light dark` so the browser resolves `light-dark()` and native controls match the active scheme.
2. Declares variables such as `--gray1`, `--blue9`, `--amber12`, etc.

If you use tokens without importing this stylesheet (for example in shadow DOM or CSS-in-JS), set an appropriate `color-scheme` on an ancestor — `light dark`, `light`, or `dark` — or `light-dark()` may not resolve as intended. See [MDN: `light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) and [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme).

## JavaScript / TypeScript

```ts
import { palette } from "@spiffdog-design/atlas-colors";

const primary = palette.blue[9];
```

`palette` is a typed `Theme` object in [`src/palette.ts`](src/palette.ts). Each leaf is a CSS color string suitable for `color`, `background`, and other properties.

## Structure

```
packages/atlas-colors/
├── src/
│   ├── palette.ts      # Palette token definitions
│   ├── preview/        # Storybook color scale stories
│   └── types/
├── scripts/            # Build helpers (Rollup, CSS modules)
└── dist/               # Published output (after build)
```

## Scripts

```sh
npm run build -w @spiffdog-design/atlas-colors
npm run dev -w @spiffdog-design/atlas-colors
npm run test -w @spiffdog-design/atlas-colors
```

## Documentation

OKLab scales and previews are available in Storybook (`npm run dev` from the repo root) under **atlas colors**.
