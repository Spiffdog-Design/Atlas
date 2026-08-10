import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./";

const meta = {
  title: "atlas components/base/Card",
  component: Card,
  args: {
    title: "Card title",
    children: "Supporting copy for the card.",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    title: "Explore the design system",
    children: "Cards link to related documentation or resources. Keep titles concise and use the body for context.",
  },
};
