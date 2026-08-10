import type { Preview } from "@storybook/react";

import "@spiffdog-design/atlas-colors/index.css";
import "@spiffdog-design/atlas-components/styles/index.css";

import "./preview.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="atlas-root">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
