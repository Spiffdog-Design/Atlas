import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Button } from "./";

describe("Button", () => {
  it("renders with default styling data attributes", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveAttribute("data-appearance", "base");
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).not.toHaveAttribute("data-rounded");
  });

  it("renders appearance, variant, and rounded attributes", () => {
    const { getByRole } = render(
      <Button appearance="alert" variant="outline" rounded>
        Click me
      </Button>,
    );
    const button = getByRole("button");

    expect(button).toHaveAttribute("data-appearance", "alert");
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-rounded", "true");
  });

  it("uses the native disabled attribute", () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);

    expect(getByRole("button")).toBeDisabled();
  });

  it("renders children", () => {
    const { getByRole } = render(<Button>Save changes</Button>);

    expect(getByRole("button")).toHaveTextContent("Save changes");
  });
});
