import type { ToastAppearance } from "./toast.utils";

export interface ToastTriggerProps {
  appearance?: ToastAppearance;
  description?: string;
  rounded?: boolean;
  title?: string;
}

export function toastSourceTransform(
  _code: string,
  storyContext: { args: ToastTriggerProps },
): string {
  const {
    appearance = "base",
    description = "",
    rounded = false,
    title = "",
  } = storyContext.args;

  const buttonAppearance = appearance === "base" ? "primary" : appearance;
  const roundedLine = rounded ? "\n          rounded: true," : "";

  return `import { Button } from "@spiffdog-design/atlas-components/button";
import { ToastProvider, useToast } from "@spiffdog-design/atlas-components/toast";

function ToastExample() {
  const toast = useToast();

  return (
    <Button
      appearance=${JSON.stringify(buttonAppearance)}
      onClick={() => {
        toast.show({
          appearance: ${JSON.stringify(appearance)},
          description: ${JSON.stringify(description)},${roundedLine}
          title: ${JSON.stringify(title)},
        });
      }}
      type="button"
    >
      Create toast
    </Button>
  );
}

<ToastProvider>
  <ToastExample />
</ToastProvider>`;
}
