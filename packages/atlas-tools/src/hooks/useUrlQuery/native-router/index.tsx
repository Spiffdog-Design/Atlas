import { createUrlQueryProvider } from "../core/createUrlQueryProvider.js";
import { useNativeUrlQuerySource } from "./useNativeUrlQuerySource.js";

/** Provider for native browser query-string state (History API). */
export const NativeUrlQueryProvider = createUrlQueryProvider(useNativeUrlQuerySource);
