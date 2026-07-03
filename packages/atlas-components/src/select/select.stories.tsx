import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./";

const meta = {
  title: "atlas components/Select",
  component: Select,
  args: {
    label: "Choose an option",
    children: (
      <>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </>
    ),
  },
} satisfies Meta<typeof Select>;

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
    value: "option2",
  },
};
