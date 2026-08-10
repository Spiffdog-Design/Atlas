import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../button";
import { Dialog } from "./index";

function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={<Button appearance="primary">Open dialog</Button>}
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup appearance="primary">
          <Dialog.Intro>
            <Dialog.Title>Notifications</Dialog.Title>
            <Dialog.Description>
              You are all caught up. Good job!
            </Dialog.Description>
          </Dialog.Intro>
          <Dialog.Actions appearance="primary" primaryLabel="Close" secondaryLabel="Dismiss" />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

describe("Dialog", () => {
  it("opens the popup when the trigger is clicked", async () => {
    render(<BasicDialog />);

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));

    await waitFor(() => {
      expect(screen.getByText("Notifications")).toBeVisible();
      expect(
        screen.getByText("You are all caught up. Good job!"),
      ).toBeVisible();
    });
  });

  it("applies appearance data attributes to the popup", async () => {
    render(<BasicDialog />);

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));

    await waitFor(() => {
      expect(
        screen.getByText("Notifications").closest("[data-appearance]"),
      ).toHaveAttribute("data-appearance", "primary");
    });
  });

  it("closes when a dialog action is clicked", async () => {
    render(<BasicDialog />);

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));

    await waitFor(() => {
      expect(screen.getByText("Notifications")).toBeVisible();
    });

    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(screen.queryByText("Notifications")).toBeNull();
    });
  });

  it("styles the confirm button with the dialog appearance and cancel as basic", async () => {
    render(<BasicDialog />);

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Close" })).toHaveAttribute(
        "data-appearance",
        "primary",
      );
      expect(screen.getByRole("button", { name: "Close" })).toHaveAttribute(
        "data-variant",
        "solid",
      );
      expect(screen.getByRole("button", { name: "Dismiss" })).toHaveAttribute(
        "data-variant",
        "basic",
      );
    });
  });
});
