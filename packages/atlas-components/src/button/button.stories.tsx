import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta = {
  title: "atlas components/Button",
  component: Button,
  args: {
    appearance: "primary",
    children: "Click Me",
    disabled: false,
    rounded: false,
    variant: "solid",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Alert: Story = {
  args: {
    appearance: "alert",
    variant: "basic",
    children: "Delete",
  },
};
