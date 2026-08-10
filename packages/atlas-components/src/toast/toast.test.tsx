import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ToastProvider } from "./toast-provider";
import { useToast } from "./use-toast";

function ToastDemo() {
  const toast = useToast();

  return (
    <button
      type="button"
      onClick={() =>
        toast.show({
          appearance: "success",
          description: "Your workspace settings were saved.",
          title: "Changes saved",
        })
      }
    >
      Show toast
    </button>
  );
}

describe("Toast", () => {
  it("renders a toast when useToast().show is called", async () => {
    render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Show toast" }));

    await waitFor(() => {
      expect(screen.getByText("Changes saved")).toBeVisible();
      expect(
        screen.getByText("Your workspace settings were saved."),
      ).toBeVisible();
    });
  });

  it("applies appearance data attributes to the toast surface", async () => {
    render(
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Show toast" }));

    await waitFor(() => {
      expect(
        screen.getByText("Changes saved").closest("[data-appearance]"),
      ).toHaveAttribute("data-appearance", "success");
    });
  });
});
