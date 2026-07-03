import { render } from "@testing-library/react";
import { Select } from "./";

describe("Select", () => {
  it("renders a select box", () => {
    const { getByRole } = render(
      <Select>
        <option value="1">One</option>
      </Select>,
    );

    expect(getByRole("combobox")).toBeInTheDocument();
  });
});
