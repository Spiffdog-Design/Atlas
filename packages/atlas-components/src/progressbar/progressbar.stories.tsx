import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./";

const meta = {
  title: "atlas components/ProgressBar",
  component: ProgressBar,
  args: {
    value: 35,
    max: 100,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NearlyComplete: Story = {
  args: {
    value: 90,
  },
};
