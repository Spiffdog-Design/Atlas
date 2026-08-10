import type { DialogAppearance } from "./dialog.utils";

export interface DialogDemoProps {
  appearance?: DialogAppearance;
  description?: string;
  primaryLabel?: string;
  title?: string;
}

export function dialogSourceTransform(
  _code: string,
  storyContext: { args: DialogDemoProps },
): string {
  const {
    appearance = "base",
    description = "",
    primaryLabel = "Close",
    title = "",
  } = storyContext.args;

  return `import { Button } from "@spiffdog-design/atlas-components/button";
import { Dialog } from "@spiffdog-design/atlas-components/dialog";

<Dialog.Root>
  <Dialog.Trigger
    render={<Button appearance="primary">View notifications</Button>}
  />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup appearance=${JSON.stringify(appearance)}>
      <Dialog.Intro>
        <Dialog.Title>{${JSON.stringify(title)}}</Dialog.Title>
        <Dialog.Description>{${JSON.stringify(description)}}</Dialog.Description>
      </Dialog.Intro>
      <Dialog.Actions
        appearance=${JSON.stringify(appearance)}
        primaryLabel={${JSON.stringify(primaryLabel)}}
      />
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>`;
}
