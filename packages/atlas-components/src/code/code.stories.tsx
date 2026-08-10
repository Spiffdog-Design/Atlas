import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./";

const meta = {
  title: "atlas components/base/Code",
  component: Code,
  args: {
    children: "npm run dev",
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InlineSnippet: Story = {
  args: {
    children: "pnpm dlx storybook@latest init",
  },
};
