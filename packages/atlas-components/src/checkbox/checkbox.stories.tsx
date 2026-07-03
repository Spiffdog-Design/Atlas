import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./";

const meta = {
  title: "atlas components/Checkbox",
  component: Checkbox,
  args: {
    label: "Accept terms and conditions",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
