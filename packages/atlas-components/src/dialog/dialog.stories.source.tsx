import { Button } from "@spiffdog-design/atlas-components/button";
import { Dialog } from "@spiffdog-design/atlas-components/dialog";

export default () => (
  <Dialog.Root>
    <Dialog.Trigger
      render={<Button appearance="primary">View notifications</Button>}
    />
    <Dialog.Portal>
      <Dialog.Backdrop />
      <Dialog.Popup appearance="base">
        <Dialog.Intro>
          <Dialog.Title>Notifications</Dialog.Title>
          <Dialog.Description>
            You are all caught up. Good job!
          </Dialog.Description>
        </Dialog.Intro>
        <Dialog.Actions appearance="base" primaryLabel="Close" />
      </Dialog.Popup>
    </Dialog.Portal>
  </Dialog.Root>
);
