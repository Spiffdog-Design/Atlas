import type { Meta, StoryObj } from "@storybook/react";

import { FieldCheckbox } from "./field-checkbox";

const meta = {
  title: "atlas components/field/FieldCheckbox",
  component: FieldCheckbox,
  args: {
    appearance: "primary",
    disabled: false,
    label: "Accept terms and conditions",
    variant: "solid",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    variant: {
      control: "select",
      options: ["outline", "solid"],
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
} satisfies Meta<typeof FieldCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const PrimaryOutline: Story = {
  args: {
    appearance: "primary",
    checked: true,
    variant: "outline",
  },
};

export const WithFieldLabel: Story = {
  args: {
    description: "Choose what we send to your inbox.",
    fieldLabel: "Email notifications",
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
    error: "You must accept the terms to continue.",
    label: "Accept terms and conditions",
    required: true,
  },
};

export const AlertOutline: Story = {
  args: {
    appearance: "alert",
    checked: true,
    label: "I understand this action cannot be undone",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    description: "Includes release notes, breaking changes, and migration guides.",
    label:
      "Send me detailed changelog emails whenever a new major version ships, even if I have not logged in recently",
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "32rem" }}>
        <Story />
      </div>
    ),
  ],
};
