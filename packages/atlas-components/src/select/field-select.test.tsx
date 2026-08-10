import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldSelect } from "./field-select";

const planItems = [
  { label: "Starter", value: "starter" },
  { label: "Growth", value: "growth" },
];

describe("FieldSelect", () => {
  it("associates the label through Field", () => {
    const { getByLabelText } = render(
      <FieldSelect items={planItems} label="Plan type" placeholder="Choose a plan…" />,
    );

    expect(getByLabelText("Plan type")).toBeInTheDocument();
  });

  it("renders helper text through Field.Description", () => {
    const { getByText } = render(
      <FieldSelect
        description="You can upgrade at any time."
        items={planItems}
        label="Plan type"
      />,
    );

    expect(getByText("You can upgrade at any time.")).toBeInTheDocument();
  });

  it("renders error text through Field.Error", () => {
    const { getByText } = render(
      <FieldSelect error="Choose a plan to continue." items={planItems} label="Plan type" />,
    );

    expect(getByText("Choose a plan to continue.")).toBeInTheDocument();
  });
});
