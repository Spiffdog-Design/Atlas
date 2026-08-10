import { Input as BaseInput } from "@base-ui/react/input";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { FormField } from "./form-field";

describe("FormField", () => {
  it("renders the control alone when no field chrome is provided", () => {
    const { getByRole } = render(
      <FormField>
        <BaseInput aria-label="Email" />
      </FormField>,
    );

    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("renders Field.Label, Field.Description, and Field.Error", () => {
    const { getByLabelText, getByText } = render(
      <FormField
        description="We never share your email."
        error="Enter a valid email address."
        label="Email address"
      >
        <BaseInput />
      </FormField>,
    );

    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByText("We never share your email.")).toBeInTheDocument();
    expect(getByText("Enter a valid email address.")).toBeInTheDocument();
  });
});
