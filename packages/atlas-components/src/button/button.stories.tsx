import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index.js";

const meta = {
  title: "atlas components/Button",
  component: Button,
  args: {
    appName: "Atlas",
    children: "Click me",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomLabel: Story = {
  args: {
    children: "Save changes",
  },
};
