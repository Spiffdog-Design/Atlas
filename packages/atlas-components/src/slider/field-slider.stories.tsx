import type { Meta, StoryObj } from "@storybook/react";

import { FieldSlider } from "./field-slider";

const meta = {
  title: "atlas components/field/FieldSlider",
  component: FieldSlider,
  args: {
    appearance: "primary",
    defaultValue: 40,
    label: "Volume",
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
    description: {
      control: "text",
    },
    error: {
      control: "text",
    },
    label: {
      control: "text",
    },
    thumbLabel: {
      control: "text",
    },
  },
} satisfies Meta<typeof FieldSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: "Adjust playback level from 0 to 100.",
    label: "Volume",
  },
};

export const Success: Story = {
  args: {
    appearance: "success",
    defaultValue: 72,
    label: "Upload progress",
  },
};

export const WithError: Story = {
  args: {
    appearance: "alert",
    defaultValue: 95,
    error: "Volume exceeds safe listening level.",
    label: "Volume",
  },
};
