import type { Meta, StoryObj } from "@storybook/react";

import { atlasLiveEditStory } from "../stories/live-edit";
import { Button } from "./";
import buttonSource from "./button.stories.source?raw";

const meta = {
  title: "atlas components/base/Button",
  component: Button,
  args: {
    appearance: "primary",
    children: "Click Me",
    disabled: false,
    rounded: false,
    variant: "solid",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    variant: {
      control: "select",
      options: ["basic", "outline", "solid"],
    },
    rounded: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

atlasLiveEditStory(Default, buttonSource);

export const BaseSolid: Story = {
  args: {
    appearance: "base",
    variant: "solid",
    children: "Cancel",
  },
};

export const PrimaryOutline: Story = {
  args: {
    appearance: "primary",
    variant: "outline",
    children: "Learn More",
  },
};

export const SuccessSolid: Story = {
  args: {
    appearance: "success",
    variant: "solid",
    children: "Confirm",
  },
};

export const WarningOutline: Story = {
  args: {
    appearance: "warning",
    variant: "outline",
    children: "Review",
  },
};

export const AlertBasic: Story = {
  args: {
    appearance: "alert",
    variant: "basic",
    children: "Delete",
  },
};

export const RoundedPrimary: Story = {
  args: {
    appearance: "primary",
    rounded: true,
    children: "Continue",
  },
};

export const Disabled: Story = {
  args: {
    appearance: "primary",
    disabled: true,
    children: "Saving…",
  },
};
