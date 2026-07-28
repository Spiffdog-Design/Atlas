# @spiffdog-design/atlas-tools

Utility helpers and React hooks for the Atlas design system.

## Install

```sh
npm install @spiffdog-design/atlas-tools
```

Hooks require `react` as a peer dependency. Router providers optionally peer on `react-router-dom` or `@tanstack/react-router`.

## Usage

### Utilities (tree-shakeable)

```ts
// Barrel (backward compatible)
import { chunk, capitalize, deepMerge, normalizeValue } from "@spiffdog-design/atlas-tools";

// Preferred deep import
import { capitalize } from "@spiffdog-design/atlas-tools/utilities/string";
import { getSearchParam } from "@spiffdog-design/atlas-tools/utilities/url-query";
```

| Module | Exports | Import path |
|--------|---------|-------------|
| `array` | `chunk`, `unique` | `@spiffdog-design/atlas-tools/utilities/array` |
| `string` | `capitalize`, `trimLines` | `@spiffdog-design/atlas-tools/utilities/string` |
| `object` | `deepMerge` | `@spiffdog-design/atlas-tools/utilities/object` |
| `element-data-attributes` | `buildDataAttributes`, `normalizeValue` | `@spiffdog-design/atlas-tools/utilities/element-data-attributes` |
| `urlQuery.utils` | `getSearchParam`, `setSearchParam`, `parseQueryValue`, `serializeQueryValue` | `@spiffdog-design/atlas-tools/utilities/url-query` |

### Hooks

```tsx
import { useUrlQuery } from "@spiffdog-design/atlas-tools/hooks/use-url-query";
import { NativeUrlQueryProvider } from "@spiffdog-design/atlas-tools/hooks/use-url-query/native-router";
import { ReactRouterUrlQueryProvider } from "@spiffdog-design/atlas-tools/hooks/use-url-query/react-router";
import { TanStackUrlQueryProvider } from "@spiffdog-design/atlas-tools/hooks/use-url-query/tanstack-router";

// React Router app
<ReactRouterUrlQueryProvider>
  <App />
</ReactRouterUrlQueryProvider>

// Or vanilla / no router — opt in to the native History API adapter
<NativeUrlQueryProvider>
  <App />
</NativeUrlQueryProvider>

const [tab, setTab] = useUrlQuery("tab", { defaultValue: "overview" });
const [page, setPage] = useUrlQuery("page", {
  defaultValue: 1,
  parse: Number,
  serialize: String,
});

setTab("settings");
setTab(null); // removes param
setPage(2, { replace: true });
```

Without a provider (or `options.source`), `useUrlQuery` throws — pick an adapter explicitly.

### Custom routers

Implement a `UrlQuerySource` via `createUrlQuerySource`. Omit `subscribe` when the router re-renders the provider on search changes (React Router and TanStack Router):

```tsx
import {
  createUrlQueryProvider,
  createUrlQuerySource,
  useUrlQuery,
} from "@spiffdog-design/atlas-tools/hooks/use-url-query";

const MyRouterUrlQueryProvider = createUrlQueryProvider(() =>
  createUrlQuerySource({
    getSearch: () => myRouter.query,
    setSearch: (search, options) =>
      myRouter.navigate({ search, replace: options?.replace }),
    // subscribe omitted — defaults to no-op
  }),
);
```

Pass `source` in options to override the provider in tests.

## Package structure

```
packages/atlas-tools/
├── src/
│   ├── index.ts                 # Re-exports utilities only
│   ├── utilities/
│   │   ├── array.ts
│   │   ├── string.ts
│   │   ├── object.ts
│   │   ├── element-data-attributes.ts
│   │   └── urlQuery.utils.ts
│   └── hooks/
│       ├── index.ts
│       └── useUrlQuery/
│           ├── index.tsx              # Core hook + factories (no adapter)
│           ├── core/
│           │   ├── useUrlQuery.tsx
│           │   ├── createUrlQueryProvider.tsx
│           │   ├── createUrlQuerySource.ts
│           │   └── useUrlQuerySource.ts
│           ├── native-router/         # History API adapter (opt-in)
│           ├── react-router/
│           └── tanstack-router/
├── tsconfig.build.json
├── vitest.config.ts
└── package.json
```

## Scripts

- `npm run build` — compile TypeScript output to `dist/`
- `npm run dev` — watch TypeScript builds
- `npm run lint` — run Biome lint checks
- `npm run check-types` — run TypeScript type checks
- `npm run test` — run unit tests with Vitest

See `package-exports-tree-shaking` and `update-docs-on-completed-work` Cursor rules for export and documentation conventions.
