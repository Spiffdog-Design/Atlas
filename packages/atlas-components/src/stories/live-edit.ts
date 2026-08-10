import { makeLiveEditStory } from "storybook-addon-code-editor";

import { Button } from "../button";
import { Card } from "../card";
import { FieldCheckbox } from "../checkbox";
import { Code } from "../code";
import { Dialog } from "../dialog";
import { FieldInput } from "../input";
import { FieldProgressBar } from "../progressbar";
import { FieldRadioGroup } from "../radio-group";
import { FieldSelect } from "../select";
import { FieldSlider } from "../slider";
import { FieldSwitch } from "../switch";
import { Tabs } from "../tabs";
import { ToastProvider, useToast } from "../toast";

/** Import map for `storybook-addon-code-editor` live snippets. */
export const atlasLiveImports: Record<string, Record<string, unknown>> = {
  "@spiffdog-design/atlas-components/button": { Button },
  "@spiffdog-design/atlas-components/card": { Card },
  "@spiffdog-design/atlas-components/code": { Code },
  "@spiffdog-design/atlas-components/checkbox": { FieldCheckbox },
  "@spiffdog-design/atlas-components/dialog": { Dialog },
  "@spiffdog-design/atlas-components/input": { FieldInput },
  "@spiffdog-design/atlas-components/progressbar": { FieldProgressBar },
  "@spiffdog-design/atlas-components/radio-group": { FieldRadioGroup },
  "@spiffdog-design/atlas-components/select": { FieldSelect },
  "@spiffdog-design/atlas-components/slider": { FieldSlider },
  "@spiffdog-design/atlas-components/switch": { FieldSwitch },
  "@spiffdog-design/atlas-components/tabs": { Tabs },
  "@spiffdog-design/atlas-components/toast": { ToastProvider, useToast },
};

type LiveEditStory = Parameters<typeof makeLiveEditStory>[0];

/**
 * Attach a Monaco live editor panel to a story. Edits re-render the canvas in real time.
 * Initial `code` is typically loaded from a colocated `*.stories.source.tsx?raw` file.
 */
export function atlasLiveEditStory(
  story: LiveEditStory,
  code: string,
  extraImports?: Record<string, Record<string, unknown>>,
): void {
  makeLiveEditStory(story, {
    availableImports: { ...atlasLiveImports, ...extraImports },
    code,
  });
}
