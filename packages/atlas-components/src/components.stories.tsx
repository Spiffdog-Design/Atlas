import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  Code,
  Checkbox,
  Input,
  ProgressBar,
  Select,
  Slider,
} from "./";

const meta = {
  title: "atlas components/Component Set",
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
      <Card href="https://example.com" title="Atlas component library">
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
          <Input label="Email address" placeholder="you@example.com" />
          <Select label="Plan type">
            <option value="starter">Starter</option>
            <option value="growth">Growth</option>
            <option value="enterprise">Enterprise</option>
          </Select>
          <Checkbox label="I agree to the terms of service" />
          <div style={{ display: "grid", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--color-text-muted)" }}>
                Volume
              </label>
              <Slider defaultValue={45} min={0} max={100} />
            </div>
            <ProgressBar value={45} />
          </div>
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
            Use <Code>Button</Code>, <Code>Input</Code>, <Code>Select</Code>, and <Code>Checkbox</Code> together for interactive forms.
          </p>
          <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
            Cards hold layout and context, while progress and slider controls show stateful feedback.
          </p>
        </div>
      </div>
    </div>
  ),
};
