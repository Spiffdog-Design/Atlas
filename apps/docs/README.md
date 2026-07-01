# docs

Storybook app for the Atlas design system. Hosts interactive documentation and previews for `@spiffdog-design/atlas-components` and `@spiffdog-design/atlas-colors`.

This app is private and not published to npm. The `atlas-*` libraries are published independently; Storybook consumes them as workspace dependencies for local development only.

## Structure

```
apps/docs/
├── .storybook/       # Storybook config (Vite, preview styles, aliases)
├── stories/          # MDX guides (Introduction, color docs, etc.)
├── package.json
└── tsconfig.json
```

Stories for components and colors are colocated with their source packages, not in this app:

- `packages/atlas-components/src/<component>/*.stories.tsx`
- `packages/atlas-colors/src/preview/*.stories.tsx`

## Scripts

From the repository root:

| Script | Description |
|--------|-------------|
| `npm run dev` | Storybook on port 6006 + watch builds for `atlas-*` packages |
| `npm run build:docs` | Static site to `storybook-static/` |
| `npm run build` | Build packages and docs |

From this workspace:

```sh
npm run dev -w docs
npm run build -w docs
npm run lint -w docs
npm run check-types -w docs
```

`prebuild` runs `@spiffdog-design/atlas-colors` build so palette CSS is available before the static Storybook build.

## Adding documentation

- **Component stories** — add `*.stories.tsx` next to the component in `packages/atlas-components/src/`
- **Color previews** — add stories under `packages/atlas-colors/src/preview/`
- **MDX guides** — add files under `stories/` or `stories/colors/`

Story titles follow `atlas components/{Name}` and `atlas colors/{Name}`.
