import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./progressbar";

const meta = {
  title: "atlas components/base/ProgressBar",
  component: ProgressBar,
  args: {
    appearance: "primary",
    max: 100,
    value: 35,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    className: {
      table: { disable: true },
    },
    rounded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    rounded: true,
    value: 55,
  },
};

export const Success: Story = {
  args: {
    appearance: "success",
    rounded: true,
    value: 72,
  },
};

export const Warning: Story = {
  args: {
    appearance: "warning",
    rounded: true,
    value: 88,
  },
};

export const NearlyComplete: Story = {
  args: {
    value: 90,
  },
};
