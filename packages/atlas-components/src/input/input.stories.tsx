import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./";

const meta = {
  title: "atlas components/Input",
  component: Input,
  args: {
    label: "Email address",
    placeholder: "you@example.com",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: "hello@atlas.design",
  },
};
