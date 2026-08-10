import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./radio-group";

const storageItems = [
  { label: "SSD", value: "ssd" },
  { label: "HDD", value: "hdd" },
  { label: "Network volume", value: "network" },
];

const meta = {
  title: "atlas components/base/RadioGroup",
  component: RadioGroup,
  args: {
    appearance: "primary",
    disabled: false,
    items: storageItems,
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
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Storage type",
    defaultValue: "ssd",
  },
};

export const SuccessAppearance: Story = {
  args: {
    appearance: "success",
    "aria-label": "Notification channel",
    defaultValue: "email",
    items: [
      { label: "Email", value: "email" },
      { label: "SMS", value: "sms" },
      { label: "Push", value: "push" },
    ],
  },
};

export const AlertAppearance: Story = {
  args: {
    appearance: "alert",
    "aria-label": "Recovery option",
    defaultValue: "restore",
    items: [
      { label: "Restore from backup", value: "restore" },
      { label: "Start fresh", value: "fresh" },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    "aria-label": "Billing cycle",
    defaultValue: "monthly",
    items: [
      { label: "Monthly", value: "monthly" },
      { label: "Annual", value: "annual" },
    ],
    orientation: "horizontal",
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Storage type",
    defaultValue: "ssd",
    disabled: true,
  },
};

export const DisabledItem: Story = {
  args: {
    "aria-label": "Storage type",
    defaultValue: "ssd",
    items: [
      { label: "SSD", value: "ssd" },
      { label: "HDD (unavailable)", disabled: true, value: "hdd" },
      { label: "Network volume", value: "network" },
    ],
  },
};
