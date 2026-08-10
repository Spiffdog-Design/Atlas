import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FieldRadioGroup } from "./field-radio-group";

const storageItems = [
  { label: "SSD", value: "ssd" },
  { label: "HDD", value: "hdd" },
];

describe("FieldRadioGroup", () => {
  it("associates the label through Field", () => {
    const { getByRole, getByText } = render(
      <FieldRadioGroup items={storageItems} label="Storage type" />,
    );

    expect(getByRole("radiogroup", { name: "Storage type" })).toBeInTheDocument();
    expect(getByText("Storage type")).toBeInTheDocument();
  });

  it("renders helper text through Field.Description", () => {
    const { getByText } = render(
      <FieldRadioGroup
        description="Choose the storage type for your workspace."
        items={storageItems}
        label="Storage type"
      />,
    );

    expect(getByText("Choose the storage type for your workspace.")).toBeInTheDocument();
  });

  it("renders error text through Field.Error", () => {
    const { getByText } = render(
      <FieldRadioGroup error="Select a storage type to continue." items={storageItems} label="Storage type" />,
    );

    expect(getByText("Select a storage type to continue.")).toBeInTheDocument();
  });
});
