declare module "react-router-dom" {
  import type { ReactNode } from "react";

  export function useSearchParams(): [
    URLSearchParams,
    (
      nextInit: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams),
      navigateOptions?: { replace?: boolean },
    ) => void,
  ];

  export function BrowserRouter(props: { children?: ReactNode }): ReactNode;
}

declare module "@tanstack/react-router" {
  import type { ReactNode } from "react";

  export function useSearch(options: { strict: false }): Record<string, unknown>;

  export function useNavigate(): (options: {
    search: Record<string, string>;
    replace?: boolean;
  }) => void;

  export function RouterProvider(props: { router: unknown }): ReactNode;
}
