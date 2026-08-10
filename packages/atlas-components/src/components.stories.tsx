import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  Button,
  Card,
  Code,
  Dialog,
  FieldCheckbox,
  FieldInput,
  FieldProgressBar,
  FieldRadioGroup,
  FieldSelect,
  FieldSlider,
  FieldSwitch,
  Tabs,
  ToastProvider,
  useToast,
} from "./";
import componentSetSource from "./components.stories.source?raw";
import { atlasLiveEditStory } from "./stories/live-edit";
import type { TabsAppearance, TabsVariant } from "./tabs";
import type { ToastAppearance } from "./toast";

import type { CardAppearance, CardVariant } from "./card/card.utils";
import type { DialogAppearance } from "./dialog/dialog.utils";

const tabItems = [
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

const appearanceOptions = [
  "alert",
  "base",
  "primary",
  "success",
  "warning",
] as const;

function ToastButton({
  appearance,
  title,
}: {
  appearance: ToastAppearance;
  title: string;
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
          description: "Your changes were saved successfully.",
          title: `${title} ${count + 1}`,
        });
      }}
      type="button"
    >
      Show toast
    </Button>
  );
}

export interface ComponentSetDemoProps {
  buttonLabel?: string;
  cardAppearance?: CardAppearance;
  cardTitle?: string;
  cardVariant?: CardVariant;
  dialogAppearance?: DialogAppearance;
  dialogDescription?: string;
  dialogPrimaryLabel?: string;
  dialogTitle?: string;
  tabsAppearance?: TabsAppearance;
  tabsVariant?: TabsVariant;
  toastAppearance?: ToastAppearance;
  toastTitle?: string;
}

function ComponentSetDemo({
  buttonLabel = "Continue",
  cardAppearance = "primary",
  cardTitle = "Atlas component library",
  cardVariant = "outline",
  dialogAppearance = "base",
  dialogDescription = "Review your settings before continuing.",
  dialogPrimaryLabel = "Save changes",
  dialogTitle = "Confirm settings",
  tabsAppearance = "primary",
  tabsVariant = "solid",
  toastAppearance = "success",
  toastTitle = "Changes saved",
}: ComponentSetDemoProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <Card appearance={cardAppearance} title={cardTitle} variant={cardVariant}>
        Build forms and layouts with shared Atlas components styled using
        semantic tokens.
      </Card>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 360px)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: "1rem" }}>
          <FieldInput label="Email address" placeholder="you@example.com" />
          <FieldSelect
            items={[
              { label: "Starter", value: "starter" },
              { label: "Growth", value: "growth" },
              { label: "Enterprise", value: "enterprise" },
            ]}
            label="Plan type"
            placeholder="Choose a plan…"
          />
          <FieldCheckbox label="I agree to the terms of service" />
          <FieldRadioGroup
            appearance="primary"
            defaultValue="ssd"
            items={[
              { label: "SSD", value: "ssd" },
              { label: "HDD", value: "hdd" },
            ]}
            label="Storage type"
          />
          <FieldSwitch appearance="primary" label="Email notifications" />
          <FieldSlider defaultValue={45} label="Volume" max={100} min={0} />
          <FieldProgressBar
            appearance="primary"
            label="Storage used"
            rounded
            value={45}
          />
        </div>

        <Tabs
          appearance={tabsAppearance}
          items={tabItems}
          variant={tabsVariant}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <Button appearance="primary" type="button" variant="solid">
          {buttonLabel}
        </Button>

        <Dialog.Root>
          <Dialog.Trigger
            render={<Button appearance="primary">Open dialog</Button>}
          />
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Popup appearance={dialogAppearance}>
              <Dialog.Intro>
                <Dialog.Title>{dialogTitle}</Dialog.Title>
                <Dialog.Description>{dialogDescription}</Dialog.Description>
              </Dialog.Intro>
              <Dialog.Actions
                appearance={dialogAppearance}
                primaryLabel={dialogPrimaryLabel}
              />
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>

        <ToastProvider>
          <ToastButton appearance={toastAppearance} title={toastTitle} />
        </ToastProvider>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "var(--radius-lg)",
          background: "var(--color-surface-hover)",
          boxShadow: "var(--border-edge-subtle)",
        }}
      >
        <p style={{ margin: 0, color: "var(--color-text)" }}>
          Use <Code>FieldInput</Code>, <Code>FieldSelect</Code>,{" "}
          <Code>FieldCheckbox</Code>, <Code>FieldRadioGroup</Code>, and{" "}
          <Code>FieldSwitch</Code> together for interactive forms.
        </p>
        <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
          <Code>Tabs</Code>, <Code>Dialog</Code>, and <Code>ToastProvider</Code>{" "}
          / <Code>useToast</Code> cover navigation, modals, and transient
          feedback.
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "atlas components/set/Component Set",
  component: ComponentSetDemo,
  args: {
    buttonLabel: "Continue",
    cardAppearance: "primary",
    cardTitle: "Atlas component library",
    cardVariant: "outline",
    dialogAppearance: "base",
    dialogDescription: "Review your settings before continuing.",
    dialogPrimaryLabel: "Save changes",
    dialogTitle: "Confirm settings",
    tabsAppearance: "primary",
    tabsVariant: "solid",
    toastAppearance: "success",
    toastTitle: "Changes saved",
  },
  argTypes: {
    buttonLabel: {
      control: "text",
    },
    cardAppearance: {
      control: "select",
      options: appearanceOptions,
    },
    cardTitle: {
      control: "text",
    },
    cardVariant: {
      control: "select",
      options: ["basic", "outline", "solid"],
    },
    dialogAppearance: {
      control: "select",
      options: appearanceOptions,
    },
    dialogDescription: {
      control: "text",
    },
    dialogPrimaryLabel: {
      control: "text",
    },
    dialogTitle: {
      control: "text",
    },
    tabsAppearance: {
      control: "select",
      options: appearanceOptions,
    },
    tabsVariant: {
      control: "select",
      options: ["outline", "solid"],
    },
    toastAppearance: {
      control: "select",
      options: appearanceOptions,
    },
    toastTitle: {
      control: "text",
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ComponentSetDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {};

atlasLiveEditStory(AllComponents, componentSetSource);
