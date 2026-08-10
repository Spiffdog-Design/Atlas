import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../button";
import { atlasLiveEditStory } from "../stories/live-edit";
import toastSource from "./toast.stories.source?raw";
import { ToastProvider, withToastProvider } from "./toast-provider";
import { useToast } from "./use-toast";

import {
  type ToastTriggerProps,
  toastSourceTransform,
} from "./toast.stories.utils";

function ToastTrigger({
  appearance = "base",
  description = "This is a toast notification.",
  rounded = false,
  title = "Toast created",
}: ToastTriggerProps) {
  const toast = useToast();
  const [count, setCount] = useState(0);

  return (
    <Button
      appearance={appearance === "base" ? "primary" : appearance}
      onClick={() => {
        setCount((previous) => previous + 1);
        toast.show({
          appearance,
          description,
          rounded,
          title: `${title} ${count + 1}`,
        });
      }}
      type="button"
    >
      Create toast
    </Button>
  );
}

const appearanceOptions = [
  "alert",
  "base",
  "primary",
  "success",
  "warning",
] as const;

const meta = {
  title: "atlas components/base/Toast",
  component: ToastTrigger,
  decorators: [withToastProvider],
  args: {
    appearance: "base",
    description: "This is a toast notification.",
    rounded: false,
    title: "Toast created",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearanceOptions,
    },
    description: {
      control: "text",
    },
    rounded: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Toast notifications require `ToastProvider` at the app root (or a Storybook decorator). Queue toasts with `useToast().show()` — pass `appearance` for semantic tint on the title and drop shadow.",
      },
      source: {
        transform: toastSourceTransform,
      },
    },
  },
} satisfies Meta<typeof ToastTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

atlasLiveEditStory(Default, toastSource);

export const PrimaryAppearance: Story = {
  args: {
    appearance: "primary",
    title: "Update available",
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    description: "Your API key was copied to the clipboard.",
    title: "Copied",
  },
};

export const WarningAppearance: Story = {
  args: {
    appearance: "warning",
    description: "Your session expires in 5 minutes.",
    title: "Session expiring",
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    description: "We could not save your changes. Try again.",
    title: "Save failed",
  },
};

export const Rounded: Story = {
  args: {
    appearance: "primary",
    rounded: true,
    title: "Rounded toast",
  },
};
