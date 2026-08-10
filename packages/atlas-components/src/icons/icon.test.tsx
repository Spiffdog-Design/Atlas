import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Check } from "lucide-react";

import { Icon } from "./icon";
import { DEFAULT_ICON_SIZE, DEFAULT_ICON_STROKE_WIDTH } from "./icon.utils";

describe("Icon", () => {
  it("renders with default size and stroke width", () => {
    const { container } = render(<Icon icon={Check} data-testid="check-icon" />);
    const svg = container.querySelector("svg");

    expect(svg).toBeTruthy();
    expect(svg).toHaveAttribute("width", String(DEFAULT_ICON_SIZE));
    expect(svg).toHaveAttribute("height", String(DEFAULT_ICON_SIZE));
    expect(svg).toHaveAttribute("stroke-width", String(DEFAULT_ICON_STROKE_WIDTH));
  });

  it("allows overriding size and stroke width", () => {
    const { container } = render(<Icon icon={Check} size={20} strokeWidth={2} />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "20");
    expect(svg).toHaveAttribute("height", "20");
    expect(svg).toHaveAttribute("stroke-width", "2");
  });

  it("inherits parent color via currentColor stroke", () => {
    const { container } = render(
      <span style={{ color: "rgb(255, 0, 0)" }}>
        <Icon icon={Check} />
      </span>,
    );
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("stroke", "currentColor");
  });
});
