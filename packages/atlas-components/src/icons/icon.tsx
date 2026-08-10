import type { LucideIcon, LucideProps } from "lucide-react";

import { normalizeIconSize, normalizeIconStrokeWidth } from "./icon.utils";

export interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
}

export function Icon({
  icon: LucideIconComponent,
  size,
  strokeWidth,
  className,
  style,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) {
  return (
    <LucideIconComponent
      size={normalizeIconSize(size)}
      strokeWidth={normalizeIconStrokeWidth(strokeWidth)}
      aria-hidden={ariaHidden}
      className={className}
      style={{ display: "block", ...style }}
      {...props}
    />
  );
}
