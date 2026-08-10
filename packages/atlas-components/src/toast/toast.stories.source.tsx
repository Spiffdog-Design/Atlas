import { useState } from "react";

import { Button } from "@spiffdog-design/atlas-components/button";
import { ToastProvider, useToast } from "@spiffdog-design/atlas-components/toast";

function ToastExample() {
  const toast = useToast();
  const [count, setCount] = useState(0);

  return (
    <Button
      appearance="primary"
      onClick={() => {
        setCount((previous) => previous + 1);
        toast.show({
          appearance: "base",
          description: "This is a toast notification.",
          title: `Toast created ${count + 1}`,
        });
      }}
      type="button"
    >
      Create toast
    </Button>
  );
}

export default () => (
  <ToastProvider>
    <ToastExample />
  </ToastProvider>
);
