import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../button";
import { ToastProvider, withToastProvider } from "./toast-provider";
import { useToast } from "./use-toast";

import type { ToastAppearance } from "./toast.utils";

const meta = {
  title: "atlas components/base/Toast",
  component: ToastProvider,
  decorators: [withToastProvider],
  parameters: {
    docs: {
      description: {
        component:
          "Toast notifications require `ToastProvider` at the app root (or a Storybook decorator). Queue toasts with `useToast().show()` — pass `appearance` for semantic tint on the title and drop shadow.",
      },
    },
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

function ToastTrigger({
  appearance = "base",
  description = "This is a toast notification.",
  rounded = false,
  title = "Toast created",
}: {
  appearance?: ToastAppearance;
  description?: string;
  rounded?: boolean;
  title?: string;
}) {
  const toast = useToast();
  const [count, setCount] = useState(0);

  return (
    <Button
      appearance={appearance === "base" ? "primary" : appearance}
      onClick={() => {
        setCount((previous) => previous + 1);
        toast.show({
          appearance,
          description,
          rounded,
          title: `${title} ${count + 1}`,
        });
      }}
      type="button"
    >
      Create toast
    </Button>
  );
}

export const Default: Story = {
  render: () => <ToastTrigger />,
};

export const PrimaryAppearance: Story = {
  render: () => <ToastTrigger appearance="primary" title="Update available" />,
};

export const SuccessAppearance: Story = {
  render: () => (
    <ToastTrigger
      appearance="success"
      description="Your API key was copied to the clipboard."
      title="Copied"
    />
  ),
};

export const WarningAppearance: Story = {
  render: () => (
    <ToastTrigger
      appearance="warning"
      description="Your session expires in 5 minutes."
      title="Session expiring"
    />
  ),
};

export const AlertAppearance: Story = {
  render: () => (
    <ToastTrigger
      appearance="alert"
      description="We could not save your changes. Try again."
      title="Save failed"
    />
  ),
};

export const Rounded: Story = {
  render: () => (
    <ToastTrigger appearance="primary" rounded title="Rounded toast" />
  ),
};
