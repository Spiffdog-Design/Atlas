import { render } from "@testing-library/react";
import { Checkbox } from "./";

describe("Checkbox", () => {
  it("renders a labeled checkbox", () => {
    const { getByLabelText } = render(<Checkbox label="Agree" />);

    expect(getByLabelText("Agree")).toBeInTheDocument();
  });
});
