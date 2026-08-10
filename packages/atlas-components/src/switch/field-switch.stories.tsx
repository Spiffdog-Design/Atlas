import type { Meta, StoryObj } from "@storybook/react";

import { FieldSwitch } from "./field-switch";

const meta = {
  title: "atlas components/field/FieldSwitch",
  component: FieldSwitch,
  args: {
    appearance: "primary",
    disabled: false,
    label: "Email notifications",
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
    label: {
      control: "text",
    },
    fieldLabel: {
      control: "text",
    },
    description: {
      control: "text",
    },
    error: {
      control: "text",
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof FieldSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithFieldLabel: Story = {
  args: {
    defaultChecked: true,
    description: "Choose what we send to your inbox.",
    fieldLabel: "Notifications",
    label: "Product updates",
  },
};

export const WithDescription: Story = {
  args: {
    description: "You can change this later in Settings.",
    label: "Subscribe to product updates",
  },
};

export const WithError: Story = {
  args: {
    error: "Enable notifications to continue.",
    label: "Email notifications",
    required: true,
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    defaultChecked: true,
    label: "Automatic backups",
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    defaultChecked: true,
    label: "Allow destructive actions without confirmation",
  },
};

export const Rounded: Story = {
  args: {
    defaultChecked: true,
    label: "Email notifications",
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};
