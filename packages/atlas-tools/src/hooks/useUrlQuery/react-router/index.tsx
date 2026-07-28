import { createUrlQueryProvider } from "../core/createUrlQueryProvider.js";
import { useReactRouterUrlQuerySource } from "./useReactRouterUrlQuerySource.js";

/** Provider for React Router (`react-router-dom`) search params. */
export const ReactRouterUrlQueryProvider = createUrlQueryProvider(useReactRouterUrlQuerySource);
