import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Select } from "./";

const planItems = [
  { label: "Starter", value: "starter" },
  { label: "Growth", value: "growth" },
  { label: "Enterprise", value: "enterprise" },
];

describe("Select", () => {
  it("renders a combobox trigger", () => {
    const { getByRole } = render(
      <Select aria-label="Plan type" items={planItems} placeholder="Choose a plan…" />,
    );

    expect(getByRole("combobox")).toBeInTheDocument();
  });

  it("applies appearance data attributes on the trigger", () => {
    const { getByRole } = render(
      <Select appearance="primary" aria-label="Plan type" items={planItems} />,
    );

    const trigger = getByRole("combobox");

    expect(trigger).toHaveAttribute("data-appearance", "primary");
    expect(trigger).not.toHaveAttribute("data-variant");
  });

  it("renders the options list when opened", async () => {
    render(<Select aria-label="Plan type" items={planItems} />);

    fireEvent.click(screen.getByRole("combobox"));

    expect(await screen.findByText("Starter")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Growth" })).toBeInTheDocument();
  });
});
