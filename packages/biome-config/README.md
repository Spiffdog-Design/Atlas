# @spiffdog-design/biome-config

Shared [Biome](https://biomejs.dev) configuration for the Atlas monorepo. Private workspace package — not published for external use.

## Presets

| Export | File | Use for |
|--------|------|---------|
| `@spiffdog-design/biome-config/base` | `base.json` | Core formatter, linter, and import organization |
| `@spiffdog-design/biome-config/react-internal` | `react-internal.json` | React libraries (`atlas-components`, `atlas-colors`) |
| `@spiffdog-design/biome-config/storybook` | `storybook.json` | Storybook apps (`docs`) |

## Usage

Extend presets in a workspace `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.5.2/schema.json",
  "root": false,
  "extends": [
    "@spiffdog-design/biome-config/base",
    "@spiffdog-design/biome-config/react-internal"
  ]
}
```

The repository root `biome.json` extends `base` only and sets `"root": true`.

Run formatting and linting from the repo root:

```sh
npm run format
npm run lint
```
