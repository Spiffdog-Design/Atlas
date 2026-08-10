import type { Meta, StoryObj } from "@storybook/react";

import { FieldProgressBar } from "./field-progressbar";

const meta = {
  title: "atlas components/field/FieldProgressBar",
  component: FieldProgressBar,
  args: {
    appearance: "primary",
    label: "Storage used",
    max: 100,
    rounded: true,
    value: 45,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    className: {
      table: { disable: true },
    },
    description: {
      control: "text",
    },
    error: {
      control: "text",
    },
    label: {
      control: "text",
    },
    rounded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof FieldProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    appearance: "success",
    label: "Profile completion",
    value: 80,
  },
};

export const WithDescription: Story = {
  args: {
    description: "45 of 100 GB allocated to this workspace.",
    label: "Storage used",
  },
};

export const WithError: Story = {
  args: {
    appearance: "alert",
    error: "Storage is almost full. Remove files or upgrade your plan.",
    label: "Storage used",
    value: 96,
  },
};
