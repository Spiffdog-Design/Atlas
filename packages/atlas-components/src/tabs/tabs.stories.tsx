import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./tabs";

const workspaceItems = [
  {
    label: "Overview",
    panel: <p style={{ margin: 0 }}>Workspace stats and activity.</p>,
    value: "overview",
  },
  {
    label: "Projects",
    panel: <p style={{ margin: 0 }}>Milestones and deadlines.</p>,
    value: "projects",
  },
  {
    label: "Account",
    panel: <p style={{ margin: 0 }}>Profile and preferences.</p>,
    value: "account",
  },
];

const meta = {
  title: "atlas components/base/Tabs",
  component: Tabs,
  args: {
    appearance: "primary",
    items: workspaceItems,
    rounded: false,
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
    rounded: {
      control: "boolean",
    },
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryOutline: Story = {
  args: {
    variant: "outline",
  },
};

export const SuccessSolid: Story = {
  args: {
    appearance: "success",
    defaultValue: "projects",
    variant: "solid",
  },
};

export const AlertOutline: Story = {
  args: {
    appearance: "alert",
    variant: "outline",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    variant: "solid",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "48rem" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      workspaceItems[0],
      { ...workspaceItems[1], disabled: true },
      workspaceItems[2],
    ],
  },
};
