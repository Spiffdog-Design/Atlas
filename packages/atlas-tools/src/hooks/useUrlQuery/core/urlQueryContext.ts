import { createContext } from "react";

import type { UrlQuerySource } from "./useUrlQuery.types.js";

export const UrlQueryContext = createContext<UrlQuerySource | null>(null);
