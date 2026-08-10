import { Button } from "@spiffdog-design/atlas-components/button";
import { Card } from "@spiffdog-design/atlas-components/card";
import { FieldInput } from "@spiffdog-design/atlas-components/input";
import { Tabs } from "@spiffdog-design/atlas-components/tabs";

const tabItems = [
  {
    label: "Overview",
    panel: <p style={{ margin: 0 }}>Workspace stats and activity.</p>,
    value: "overview",
  },
  {
    label: "Projects",
    panel: <p style={{ margin: 0 }}>Milestones and deadlines.</p>,
    value: "projects",
  },
];

export default () => (
  <div style={{ display: "grid", gap: "1.5rem", maxWidth: "48rem" }}>
    <Card appearance="primary" title="Atlas component library" variant="outline">
      Build forms and layouts with shared Atlas components.
    </Card>

    <FieldInput label="Email address" placeholder="you@example.com" />

    <Tabs appearance="primary" items={tabItems} variant="solid" />

    <Button appearance="primary" type="button" variant="solid">
      Continue
    </Button>
  </div>
);
