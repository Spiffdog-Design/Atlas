import { render } from "@testing-library/react";
import { Input } from "./";

describe("Input", () => {
  it("renders an input field", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Email" />);

    expect(getByPlaceholderText("Email")).toBeInTheDocument();
  });
});
