# @spiffdog-design/atlas-components

React component library for the Atlas design system. Components use CSS Modules, semantic design tokens, and `data-*` attributes for variants.

Requires `@spiffdog-design/atlas-colors` as a peer dependency.

## Install

```sh
npm install @spiffdog-design/atlas-colors @spiffdog-design/atlas-components
```

## Usage

```ts
import {
  Button,
  Card,
  Code,
  Checkbox,
  FieldCheckbox,
  FieldInput,
  FieldProgressBar,
  FieldSlider,
  Input,
  Select,
} from "@spiffdog-design/atlas-components";
import "@spiffdog-design/atlas-colors/index.css";
import "@spiffdog-design/atlas-components/styles.css";
```

Form controls split into **raw controls** (`Input`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `ProgressBar`) and **field wrappers** (`FieldInput`, `FieldCheckbox`, `FieldRadioGroup`, `FieldSwitch`, `FieldSlider`, `FieldProgressBar`) with label, description, and error chrome. Use the field wrappers in app forms; use raw controls when composing custom layouts.

**Toast** requires an app-level provider. Wrap your root layout with `ToastProvider`, then call `useToast().show()` from any descendant. For toasts outside the React tree, create a manager with `createToastManager()` and pass it to `ToastProvider` via the `toastManager` prop.

```ts
import { ToastProvider, useToast } from "@spiffdog-design/atlas-components/toast";

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

function SaveButton() {
  const toast = useToast();
  return (
    <button
      type="button"
      onClick={() =>
        toast.show({
          appearance: "success",
          title: "Saved",
          description: "Your changes were applied.",
        })
      }
    >
      Save
    </button>
  );
}
```

```ts
import { FieldInput } from "@spiffdog-design/atlas-components/input";
import { FieldCheckbox } from "@spiffdog-design/atlas-components/checkbox";
import { FieldRadioGroup } from "@spiffdog-design/atlas-components/radio-group";
import { FieldSwitch } from "@spiffdog-design/atlas-components/switch";
import { FieldSelect } from "@spiffdog-design/atlas-components/select";
import { FieldSlider } from "@spiffdog-design/atlas-components/slider";
import { FieldProgressBar } from "@spiffdog-design/atlas-components/progressbar";
```

Subpath imports are supported for tree-shaking (preferred over the root barrel):

```ts
import { Button } from "@spiffdog-design/atlas-components/button";
```

Explicit export paths: `./button`, `./card`, `./code`, `./checkbox`, `./input`, `./radio-group`, `./switch`, `./tabs`, `./toast`, `./dialog`, `./slider`, `./progressbar`, `./select`, `./icon`, `./styles.css`.

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
│   ├── index.tsx           # Re-exports Checkbox + FieldCheckbox
│   ├── checkbox.tsx        # Raw control
│   ├── field-checkbox.tsx  # Inline field layout + optional fieldLabel
│   ├── checkbox.module.css
│   ├── field-checkbox.module.css
│   ├── checkbox.utils.ts
│   ├── checkbox.utils.test.ts
│   ├── checkbox.test.tsx
│   ├── field-checkbox.test.tsx
│   └── *.stories.tsx
├── input/
│   ├── index.tsx           # Re-exports Input + FieldInput
│   ├── input.tsx           # Raw control
│   ├── field-input.tsx     # Stack field layout
│   ├── input.module.css
│   ├── input.utils.ts
│   ├── input.test.tsx
│   ├── field-input.test.tsx
│   └── *.stories.tsx
├── select/
│   ├── index.tsx           # Re-exports Select + FieldSelect
│   ├── select-control.tsx  # Raw control (full Base UI part tree)
│   ├── field-select.tsx    # Stack field layout
│   ├── select.module.css
│   ├── select.utils.ts
│   ├── select.utils.test.ts
│   ├── select.test.tsx
│   ├── field-select.test.tsx
│   └── *.stories.tsx
├── radio-group/
│   ├── index.tsx           # Re-exports RadioGroup + FieldRadioGroup
│   ├── radio-group.tsx     # Raw control
│   ├── field-radio-group.tsx
│   ├── radio-group.module.css
│   ├── radio-group.utils.ts
│   ├── radio-group.utils.test.ts
│   ├── field-radio-group.test.tsx
│   └── *.stories.tsx
├── switch/
│   ├── index.tsx           # Re-exports Switch + FieldSwitch
│   ├── switch.tsx          # Raw control
│   ├── field-switch.tsx    # Inline field layout + optional fieldLabel
│   ├── switch.module.css
│   ├── field-switch.module.css
│   ├── switch.utils.ts
│   ├── switch.utils.test.ts
│   ├── field-switch.test.tsx
│   └── *.stories.tsx
├── tabs/
│   ├── index.tsx           # Tabs component
│   ├── tabs.tsx
│   ├── tabs.module.css
│   ├── tabs.utils.ts
│   ├── tabs.utils.test.ts
│   ├── tabs.test.tsx
│   └── tabs.stories.tsx
├── toast/
│   ├── index.tsx           # ToastProvider, useToast, createToastManager
│   ├── toast-provider.tsx
│   ├── toast-list.tsx
│   ├── use-toast.ts
│   ├── toast.module.css
│   ├── toast.utils.ts
│   ├── toast.utils.test.ts
│   ├── toast.test.tsx
│   └── toast.stories.tsx
├── dialog/
│   ├── index.tsx           # Dialog compound parts + createHandle
│   ├── dialog.tsx
│   ├── dialog-actions.tsx
│   ├── dialog.module.css
│   ├── dialog.utils.ts
│   ├── dialog.utils.test.ts
│   ├── dialog.test.tsx
│   └── dialog.stories.tsx
├── slider/
│   ├── index.tsx           # Re-exports Slider + FieldSlider
│   ├── slider.tsx          # Raw control
│   ├── field-slider.tsx    # Stack field layout
│   ├── slider.module.css
│   ├── slider.utils.ts
│   ├── slider.utils.test.ts
│   └── *.stories.tsx
├── progressbar/
│   ├── index.tsx           # Re-exports ProgressBar + FieldProgressBar
│   ├── progressbar.tsx     # Raw control
│   ├── field-progressbar.tsx
│   ├── progressbar.module.css
│   ├── progressbar.utils.ts
│   ├── progressbar.utils.test.ts
│   └── *.stories.tsx
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

A combined component set story is available at `packages/atlas-components/src/components.stories.tsx` under **atlas components/set/Component Set**.
