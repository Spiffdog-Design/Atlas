import { createContext } from "react";

import type { UrlQuerySource } from "./useUrlQuery.types";

export const UrlQueryContext = createContext<UrlQuerySource | null>(null);
