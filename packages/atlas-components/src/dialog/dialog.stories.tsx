import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { atlasLiveEditStory } from "../stories/live-edit";
import dialogSource from "./dialog.stories.source?raw";
import { Dialog } from "./index";

import {
  type DialogDemoProps,
  dialogSourceTransform,
} from "./dialog.stories.utils";

function DialogDemo({
  appearance = "base",
  description = "You are all caught up. Good job!",
  primaryLabel = "Close",
  title = "Notifications",
}: DialogDemoProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={<Button appearance="primary">View notifications</Button>}
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup appearance={appearance}>
          <Dialog.Intro>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
          </Dialog.Intro>
          <Dialog.Actions appearance={appearance} primaryLabel={primaryLabel} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
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
  title: "atlas components/base/Dialog",
  component: DialogDemo,
  args: {
    appearance: "base",
    description: "You are all caught up. Good job!",
    primaryLabel: "Close",
    title: "Notifications",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearanceOptions,
    },
    description: {
      control: "text",
    },
    primaryLabel: {
      control: "text",
    },
    title: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Modal dialog built on Base UI parts. Style the popup with `appearance`. Pass the same `appearance` to `Dialog.Actions` so the confirm button matches; cancel defaults to a `basic` button.",
      },
      source: {
        transform: dialogSourceTransform,
      },
    },
  },
} satisfies Meta<typeof DialogDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

atlasLiveEditStory(Default, dialogSource);

export const PrimaryAppearance: Story = {
  args: {
    appearance: "primary",
    description: "A new version of Atlas is ready to install.",
    primaryLabel: "Update now",
    title: "Update available",
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    description: "Your workspace settings were saved.",
    primaryLabel: "Done",
    title: "Changes saved",
  },
};

export const WarningAppearance: Story = {
  args: {
    appearance: "warning",
    description: "Your session expires in 5 minutes.",
    primaryLabel: "Extend session",
    title: "Session expiring",
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    description:
      "This will permanently delete the project and all of its data.",
    primaryLabel: "Delete project",
    title: "Delete project?",
  },
};
