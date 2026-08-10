import { useMemo, useSyncExternalStore } from "react";

import { createUrlQuerySource } from "../core/createUrlQuerySource";
import type { UrlQuerySource } from "../core/useUrlQuery.types";
import { createNativeUrlQuerySourceConfig } from "./native.utils";

export function useNativeUrlQuerySource(): UrlQuerySource {
  const config = createNativeUrlQuerySourceConfig();

  useSyncExternalStore(config.subscribe, () => window.location.search, () => "");

  return useMemo(() => createUrlQuerySource(config), []);
}
