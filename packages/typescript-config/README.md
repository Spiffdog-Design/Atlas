# @spiffdog-design/typescript-config

Shared `tsconfig.json` bases for the Atlas monorepo. Private workspace package — not published for external use.

## Presets

| Export | File | Description |
|--------|------|-------------|
| `@spiffdog-design/typescript-config/base.json` | `base.json` | Strict ES2022, NodeNext module resolution |
| `@spiffdog-design/typescript-config/react-library.json` | `react-library.json` | Extends `base.json` with `jsx: react-jsx` |

## Usage

Extend a preset in a workspace `tsconfig.json`:

```json
{
  "extends": "@spiffdog-design/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

`base.json` enables `strict`, `noUncheckedIndexedAccess`, declaration emit, and `moduleResolution: NodeNext`. Packages add their own `outDir`, `rootDir`, and `include` as needed.

Type-check the monorepo from the repo root:

```sh
npm run check-types
```
