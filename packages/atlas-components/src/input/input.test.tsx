import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Input } from "./";

describe("Input", () => {
  it("renders an input field", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Email" />);

    expect(getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("renders with default appearance data attribute", () => {
    const { getByRole } = render(<Input aria-label="Email" />);
    const input = getByRole("textbox");

    expect(input).toHaveAttribute("data-appearance", "base");
    expect(input).not.toHaveAttribute("data-variant");
  });

  it("renders semantic appearance data attributes", () => {
    const { getByRole } = render(<Input appearance="success" aria-label="Promo code" />);

    expect(getByRole("textbox")).toHaveAttribute("data-appearance", "success");
  });

  it("uses the native disabled attribute", () => {
    const { getByRole } = render(<Input aria-label="Email" disabled />);

    expect(getByRole("textbox")).toBeDisabled();
  });

  it("associates the label through Field", () => {
    const { getByLabelText } = render(
      <Input label="Email address" placeholder="you@example.com" />,
    );

    expect(getByLabelText("Email address")).toBeInTheDocument();
  });

  it("renders helper text through Field.Description", () => {
    const { getByText } = render(
      <Input
        description="We never share your email."
        label="Email address"
        placeholder="you@example.com"
      />,
    );

    expect(getByText("We never share your email.")).toBeInTheDocument();
  });
});
