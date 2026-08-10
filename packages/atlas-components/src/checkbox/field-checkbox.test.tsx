import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldCheckbox } from "./field-checkbox";

describe("FieldCheckbox", () => {
  it("renders an inline labeled checkbox", () => {
    const { getByRole } = render(<FieldCheckbox label="Agree" />);

    expect(getByRole("checkbox", { name: "Agree" })).toBeInTheDocument();
  });

  it("renders a field label above the control row", () => {
    const { getByText, getByRole } = render(
      <FieldCheckbox fieldLabel="Notifications" label="Product updates" />,
    );

    expect(getByText("Notifications")).toBeInTheDocument();
    expect(getByRole("checkbox", { name: "Product updates" })).toBeInTheDocument();
  });

  it("renders description under the inline label", () => {
    const { getByText } = render(
      <FieldCheckbox
        description="You can change this later in Settings."
        label="Subscribe to product updates"
      />,
    );

    expect(getByText("You can change this later in Settings.")).toBeInTheDocument();
  });

  it("renders error text below the control row", () => {
    const { getByText } = render(
      <FieldCheckbox error="You must accept the terms to continue." label="Agree" />,
    );

    expect(getByText("You must accept the terms to continue.")).toBeInTheDocument();
  });

  it("falls back to the raw checkbox when no field chrome is provided", () => {
    const { container, getByRole } = render(<FieldCheckbox aria-label="Agree" />);

    expect(getByRole("checkbox", { name: "Agree" })).toBeInTheDocument();
    expect(container.querySelector("[class*='field']")).toBeNull();
  });
});
