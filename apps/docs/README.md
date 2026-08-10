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
- `packages/atlas-components/src/components.stories.tsx`
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

Story titles follow `atlas components/{type}/{Name}` and `atlas colors/{Name}`. Use `base/` for raw controls, `field/` for field wrappers (`FieldInput`, `FieldCheckbox`), and `set/` for combined previews.

The Canvas **Code** panel is enabled globally (`parameters.docs.codePanel` in `.storybook/preview.tsx`). For live snippets that update with Controls, set `component` on the story meta and drive the demo with `args` (avoid bare `render: () =>` without args).

**Live Code Editor** (`storybook-addon-code-editor`) adds a **Live Code Editor** addon tab on stories wired with `atlasLiveEditStory()` and a colocated `*.stories.source.tsx` file. Edit JSX/TSX in Monaco and the canvas updates in real time. See `packages/atlas-components/src/stories/live-edit.ts` and `button.stories.tsx` for the pattern.
