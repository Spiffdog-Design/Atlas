import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./switch";

const meta = {
  title: "atlas components/base/Switch",
  component: Switch,
  args: {
    appearance: "primary",
    disabled: false,
    rounded: false,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    rounded: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Notifications",
  },
};

export const Checked: Story = {
  args: {
    "aria-label": "Notifications",
    defaultChecked: true,
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    "aria-label": "Enable backups",
    defaultChecked: true,
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    "aria-label": "Allow destructive actions",
    defaultChecked: true,
  },
};

export const Rounded: Story = {
  args: {
    "aria-label": "Notifications",
    defaultChecked: true,
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Notifications",
    defaultChecked: true,
    disabled: true,
  },
};
