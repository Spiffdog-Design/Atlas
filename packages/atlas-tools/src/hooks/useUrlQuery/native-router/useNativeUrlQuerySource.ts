import { useMemo, useSyncExternalStore } from "react";

import { createUrlQuerySource } from "../core/createUrlQuerySource.js";
import type { UrlQuerySource } from "../core/useUrlQuery.types.js";
import { createNativeUrlQuerySourceConfig } from "./native.utils.js";

export function useNativeUrlQuerySource(): UrlQuerySource {
  const config = createNativeUrlQuerySourceConfig();

  useSyncExternalStore(config.subscribe, () => window.location.search, () => "");

  return useMemo(() => createUrlQuerySource(config), []);
}
