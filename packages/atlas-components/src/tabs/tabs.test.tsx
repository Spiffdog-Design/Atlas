import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Tabs } from "./tabs";
import type { TabsItem } from "./tabs.utils";

const overviewTab: TabsItem = {
  label: "Overview",
  panel: <p>Workspace stats and activity.</p>,
  value: "overview",
};
const projectsTab: TabsItem = {
  label: "Projects",
  panel: <p>Milestones and deadlines.</p>,
  value: "projects",
};
const accountTab: TabsItem = {
  label: "Account",
  panel: <p>Profile and preferences.</p>,
  value: "account",
};
const workspaceItems = [overviewTab, projectsTab, accountTab];

describe("Tabs", () => {
  it("renders tab labels and the default panel", () => {
    render(<Tabs items={workspaceItems} />);

    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Workspace stats and activity.")).toBeVisible();
  });

  it("activates a tab panel on click", () => {
    render(<Tabs defaultValue="overview" items={workspaceItems} />);

    fireEvent.click(screen.getByRole("tab", { name: "Account" }));

    expect(screen.getByRole("tab", { name: "Account" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Profile and preferences.")).toBeVisible();
    expect(screen.queryByText("Workspace stats and activity.")).toBeNull();
  });

  it("renders disabled tabs outside the composite focus order", () => {
    render(
      <Tabs
        defaultValue="overview"
        items={[overviewTab, { ...projectsTab, disabled: true }, accountTab]}
      />,
    );

    const disabledTab = screen.getByRole("tab", { name: "Projects" });

    expect(disabledTab.tagName).toBe("SPAN");
    expect(disabledTab).toHaveAttribute("aria-disabled", "true");
    expect(disabledTab).toHaveAttribute("tabindex", "-1");
  });

  it("skips disabled tabs when arrowing between enabled tabs", async () => {
    render(
      <Tabs
        defaultValue="overview"
        items={[overviewTab, { ...projectsTab, disabled: true }, accountTab]}
      />,
    );

    const overview = screen.getByRole("tab", { name: "Overview" });
    const account = screen.getByRole("tab", { name: "Account" });
    const tablist = screen.getByRole("tablist");

    overview.focus();
    fireEvent.keyDown(tablist, { key: "ArrowRight" });

    await waitFor(() => {
      expect(account).toHaveFocus();
    });
  });
});
