import type { Meta, StoryObj } from "@storybook/react";

import { FieldRadioGroup } from "./field-radio-group";

const storageItems = [
  { label: "SSD", value: "ssd" },
  { label: "HDD", value: "hdd" },
  { label: "Network volume", value: "network" },
];

const meta = {
  title: "atlas components/field/FieldRadioGroup",
  component: FieldRadioGroup,
  args: {
    appearance: "primary",
    disabled: false,
    items: storageItems,
    label: "Storage type",
    orientation: "vertical",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
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
} satisfies Meta<typeof FieldRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "ssd",
  },
};

export const WithDescription: Story = {
  args: {
    defaultValue: "ssd",
    description: "SSD is recommended for most development workloads.",
  },
};

export const WithError: Story = {
  args: {
    error: "Select a storage type to continue.",
    required: true,
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    defaultValue: "email",
    description: "Choose how we should reach you for billing alerts.",
    items: [
      { label: "Email", value: "email" },
      { label: "SMS", value: "sms" },
    ],
    label: "Notification channel",
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    defaultValue: "restore",
    items: [
      { label: "Restore from backup", value: "restore" },
      { label: "Start fresh", value: "fresh" },
    ],
    label: "Recovery option",
  },
};

export const Horizontal: Story = {
  args: {
    defaultValue: "monthly",
    items: [
      { label: "Monthly", value: "monthly" },
      { label: "Annual", value: "annual" },
    ],
    label: "Billing cycle",
    orientation: "horizontal",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "ssd",
    disabled: true,
  },
};
