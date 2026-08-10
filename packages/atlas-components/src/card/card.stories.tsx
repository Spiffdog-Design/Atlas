import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

const meta = {
  title: "atlas components/base/Card",
  component: Card,
  args: {
    appearance: "base",
    children: "Supporting copy for the card.",
    title: "Card title",
    variant: "solid",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    className: {
      table: { disable: true },
    },
    variant: {
      control: "select",
      options: ["basic", "outline", "solid"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimarySolid: Story = {
  args: {
    appearance: "primary",
    children: "Solid cards use a light gray background. Only the title reflects the appearance accent.",
    title: "Primary solid",
    variant: "solid",
  },
};

export const PrimaryOutline: Story = {
  args: {
    appearance: "primary",
    children: "Outline panels use appearance-tinted border edges without elevation shadow.",
    title: "Primary outline",
    variant: "outline",
  },
};

export const SuccessOutline: Story = {
  args: {
    appearance: "success",
    children: "Semantic appearances tint the border edge. The title uses the appearance accent.",
    title: "Success outline",
    variant: "outline",
  },
};

export const BasicPanel: Story = {
  args: {
    children: "Basic cards have no background or shadow. Only the title picks up the appearance accent.",
    title: "Basic panel",
    variant: "basic",
  },
};

export const LongContent: Story = {
  args: {
    children:
      "Cards hold layout and context. Keep titles concise and use the body for supporting detail.",
    title: "Explore the design system",
  },
};
