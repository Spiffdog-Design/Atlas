import { createUrlQueryProvider } from "../core/createUrlQueryProvider";
import { useReactRouterUrlQuerySource } from "./useReactRouterUrlQuerySource";

/** Provider for React Router (`react-router-dom`) search params. */
export const ReactRouterUrlQueryProvider = createUrlQueryProvider(useReactRouterUrlQuerySource);
