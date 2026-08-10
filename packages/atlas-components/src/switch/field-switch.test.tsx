import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldSwitch } from "./field-switch";

describe("FieldSwitch", () => {
  it("renders an inline labeled switch", () => {
    const { getByRole } = render(<FieldSwitch label="Notifications" />);

    expect(getByRole("switch", { name: "Notifications" })).toBeInTheDocument();
  });

  it("renders a field label above the control row", () => {
    const { getByText, getByRole } = render(
      <FieldSwitch fieldLabel="Email notifications" label="Product updates" />,
    );

    expect(getByText("Email notifications")).toBeInTheDocument();
    expect(getByRole("switch", { name: "Product updates" })).toBeInTheDocument();
  });

  it("renders description under the inline label", () => {
    const { getByText } = render(
      <FieldSwitch
        description="You can change this later in Settings."
        label="Subscribe to product updates"
      />,
    );

    expect(getByText("You can change this later in Settings.")).toBeInTheDocument();
  });

  it("renders error text below the control row", () => {
    const { getByText } = render(
      <FieldSwitch error="Enable notifications to continue." label="Notifications" />,
    );

    expect(getByText("Enable notifications to continue.")).toBeInTheDocument();
  });

  it("falls back to the raw switch when no field chrome is provided", () => {
    const { container, getByRole } = render(<FieldSwitch aria-label="Notifications" />);

    expect(getByRole("switch", { name: "Notifications" })).toBeInTheDocument();
    expect(container.querySelector("[class*='field']")).toBeNull();
  });
});
