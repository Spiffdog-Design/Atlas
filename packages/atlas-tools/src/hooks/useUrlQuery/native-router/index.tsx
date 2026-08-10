import { createUrlQueryProvider } from "../core/createUrlQueryProvider";
import { useNativeUrlQuerySource } from "./useNativeUrlQuerySource";

/** Provider for native browser query-string state (History API). */
export const NativeUrlQueryProvider = createUrlQueryProvider(useNativeUrlQuerySource);
