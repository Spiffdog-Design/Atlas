import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./";

describe("Checkbox", () => {
  it("renders a checkbox control", () => {
    const { getByRole } = render(<Checkbox aria-label="Agree" />);

    expect(getByRole("checkbox", { name: "Agree" })).toBeInTheDocument();
  });

  it("applies appearance and variant data attributes", () => {
    const { getByRole } = render(
      <Checkbox appearance="success" aria-label="Agree" variant="outline" />,
    );

    const checkbox = getByRole("checkbox", { name: "Agree" });

    expect(checkbox).toHaveAttribute("data-appearance", "success");
    expect(checkbox).toHaveAttribute("data-variant", "outline");
  });

  it("forwards checked and disabled props", () => {
    const { getByRole } = render(
      <Checkbox aria-label="Agree" checked disabled readOnly />,
    );

    const checkbox = getByRole("checkbox", { name: "Agree" });

    expect(checkbox).toHaveAttribute("aria-checked", "true");
    expect(checkbox).toHaveAttribute("aria-disabled", "true");
    expect(checkbox).toHaveAttribute("aria-readonly", "true");
  });
});
