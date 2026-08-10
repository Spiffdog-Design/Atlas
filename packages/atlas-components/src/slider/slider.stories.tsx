import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./slider";

const meta = {
  title: "atlas components/base/Slider",
  component: Slider,
  args: {
    appearance: "primary",
    defaultValue: 40,
    max: 100,
    min: 0,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    className: {
      table: { disable: true },
    },
    thumbLabel: {
      control: "text",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    appearance: "success",
    defaultValue: 65,
  },
};

export const Warning: Story = {
  args: {
    appearance: "warning",
    defaultValue: 80,
  },
};

export const MinMax: Story = {
  args: {
    defaultValue: 80,
    max: 200,
    min: 0,
  },
};
