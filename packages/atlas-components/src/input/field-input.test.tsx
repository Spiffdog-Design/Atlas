import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FieldInput } from "./field-input";

describe("FieldInput", () => {
  it("associates the label through Field", () => {
    const { getByLabelText } = render(
      <FieldInput label="Email address" placeholder="you@example.com" />,
    );

    expect(getByLabelText("Email address")).toBeInTheDocument();
  });

  it("renders helper text through Field.Description", () => {
    const { getByText } = render(
      <FieldInput
        description="We never share your email."
        label="Email address"
        placeholder="you@example.com"
      />,
    );

    expect(getByText("We never share your email.")).toBeInTheDocument();
  });

  it("renders error text through Field.Error", () => {
    const { getByText } = render(
      <FieldInput error="Enter a valid email address." label="Email address" />,
    );

    expect(getByText("Enter a valid email address.")).toBeInTheDocument();
  });
});
