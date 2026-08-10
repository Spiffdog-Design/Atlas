import type { Meta, StoryObj } from "@storybook/react";

import { FieldSelect } from "./field-select";

const planItems = [
  { label: "Starter", value: "starter" },
  { label: "Growth", value: "growth" },
  { label: "Enterprise", value: "enterprise" },
];

const meta = {
  title: "atlas components/field/FieldSelect",
  component: FieldSelect,
  args: {
    appearance: "base",
    disabled: false,
    items: planItems,
    label: "Plan type",
    placeholder: "Choose a plan…",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    disabled: {
      control: "boolean",
    },
    label: {
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
} satisfies Meta<typeof FieldSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryOpen: Story = {
  args: {
    appearance: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Open the menu in the canvas to inspect the appearance-tinted popup shadow.",
      },
    },
  },
};

export const WithDescription: Story = {
  args: {
    description: "You can upgrade at any time.",
  },
};

export const WithError: Story = {
  args: {
    appearance: "alert",
    error: "Choose a plan to continue.",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "starter",
    disabled: true,
  },
};
