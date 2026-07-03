import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./";

const meta = {
  title: "atlas components/Slider",
  component: Slider,
  args: {
    min: 0,
    max: 100,
    defaultValue: 40,
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MinMax: Story = {
  args: {
    min: 0,
    max: 200,
    defaultValue: 80,
  },
};
