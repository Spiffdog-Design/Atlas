import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./";

const meta = {
  title: "atlas components/Input",
  component: Input,
  args: {
    appearance: "base",
    disabled: false,
    label: "Email address",
    placeholder: "you@example.com…",
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
    placeholder: {
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    appearance: "primary",
    label: "API key",
    placeholder: "sk_live_…",
  },
};

export const Success: Story = {
  args: {
    appearance: "success",
    label: "Promo code",
    placeholder: "SAVE20…",
  },
};

export const WithDescription: Story = {
  args: {
    description: "We never share your email.",
    label: "Email address",
    placeholder: "you@example.com…",
  },
};

export const WithError: Story = {
  args: {
    appearance: "alert",
    defaultValue: "not-an-email",
    error: "Enter a valid email address.",
    label: "Email address",
    required: true,
    type: "email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "hello@atlas.design",
  },
};
