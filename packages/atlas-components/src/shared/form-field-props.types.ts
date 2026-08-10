import type { ReactNode } from "react";

/** Shared label, helper, and error props for `@base-ui/react/field` wrappers. */
export interface FormFieldProps {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}
