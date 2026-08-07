import { createUrlQueryProvider } from "../core/createUrlQueryProvider.js";
import { useTanStackUrlQuerySource } from "./useTanStackUrlQuerySource.js";

/** Provider for TanStack Router search params. */
export const TanStackUrlQueryProvider = createUrlQueryProvider(useTanStackUrlQuerySource);
