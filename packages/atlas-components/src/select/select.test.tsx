import { fireEvent, render, screen } from "@testing-library/react";
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

  it("renders the options list when opened", async () => {
    render(
      <Select>
        <option value="1">One</option>
      </Select>,
    );

    fireEvent.click(screen.getByRole("combobox"));

    expect(await screen.findByText("One")).toBeInTheDocument();
  });
});
