import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";

const meta = {
  title: "atlas components/base/Checkbox",
  component: Checkbox,
  args: {
    appearance: "primary",
    disabled: false,
    variant: "solid",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["alert", "base", "primary", "success", "warning"],
    },
    variant: {
      control: "select",
      options: ["outline", "solid"],
    },
    disabled: {
      control: "boolean",
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    "aria-label": "Accept terms and conditions",
    checked: true,
  },
};

export const PrimaryOutline: Story = {
  args: {
    "aria-label": "Accept terms and conditions",
    appearance: "primary",
    checked: true,
    variant: "outline",
  },
};

export const SuccessSolid: Story = {
  args: {
    "aria-label": "Enable email notifications",
    appearance: "success",
    checked: true,
    variant: "solid",
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Accept terms and conditions",
    defaultChecked: true,
    disabled: true,
  },
};
