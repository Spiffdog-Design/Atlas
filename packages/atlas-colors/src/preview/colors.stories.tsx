import type { Decorator } from "@storybook/react";

import { ThemeViewer } from "./components/ThemeViewer";

const fullHeightDecorator: Decorator = (Story) => (
  <div className="sb-full-height-story">
    <Story />
  </div>
);

const meta = {
  title: "atlas colors/Themes",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [fullHeightDecorator],
};

export default meta;

export const Demo = {
  render: () => <ThemeViewer />,
};
