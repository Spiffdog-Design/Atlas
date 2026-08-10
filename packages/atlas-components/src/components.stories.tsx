import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  Code,
  FieldCheckbox,
  FieldInput,
  FieldProgressBar,
  FieldSelect,
  FieldSlider,
} from "./";

const meta = {
  title: "atlas components/set/Component Set",
  component: Button,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <Card title="Atlas component library">
        Build forms and layouts with shared Atlas components styled using semantic tokens.
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
          <FieldSlider defaultValue={45} label="Volume" max={100} min={0} />
          <FieldProgressBar label="Storage used" rounded value={45} />
          <Button appearance="primary" variant="solid">
            Continue
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            padding: "1.5rem",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-surface-hover)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p style={{ margin: 0, color: "var(--color-text)" }}>
            Use <Code>Button</Code>, <Code>FieldInput</Code>, <Code>FieldSelect</Code>, and{" "}
            <Code>FieldCheckbox</Code> together for interactive forms.
          </p>
          <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
            Cards hold layout and context, while progress and slider controls show stateful feedback.
          </p>
        </div>
      </div>
    </div>
  ),
};
