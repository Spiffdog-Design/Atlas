import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./";

describe("Button", () => {
  it("renders with default data attributes", () => {
    const { getByRole } = render(<Button appName="Atlas">Click me</Button>);
    const button = getByRole("button");

    expect(button).toHaveAttribute("data-appearance", "base");
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-rounded", "false");
  });

  it("renders appearance, variant, and rounded attributes", () => {
    const { getByRole } = render(
      <Button appearance="alert" variant="outline" rounded appName="Atlas">
        Click me
      </Button>
    );
    const button = getByRole("button");

    expect(button).toHaveAttribute("data-appearance", "alert");
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-rounded", "true");
  });
});
