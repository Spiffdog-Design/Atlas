import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta = {
  title: "atlas components/Button",
  component: Button,
  args: {
    children: "Save changes",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    appearance: "primary",
    variant: "solid",
  },
};

export const AlertOutline: Story = {
  args: {
    appearance: "alert",
    variant: "outline",
    rounded: true,
    children: "Delete",
  },
};
