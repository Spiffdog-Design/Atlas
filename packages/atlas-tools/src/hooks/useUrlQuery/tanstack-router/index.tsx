import { createUrlQueryProvider } from "../core/createUrlQueryProvider";
import { useTanStackUrlQuerySource } from "./useTanStackUrlQuerySource";

/** Provider for TanStack Router search params. */
export const TanStackUrlQueryProvider = createUrlQueryProvider(useTanStackUrlQuerySource);
