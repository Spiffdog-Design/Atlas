import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  X,
  type LucideProps,
} from "lucide-react";

import { Icon, type IconProps } from "./icon.js";

export { Icon, type IconProps } from "./icon.js";
export {
  DEFAULT_ICON_SIZE,
  DEFAULT_ICON_STROKE_WIDTH,
  normalizeIconSize,
  normalizeIconStrokeWidth,
} from "./icon.utils.js";

type NamedIconProps = Omit<IconProps, "icon">;

export function CheckIcon(props: NamedIconProps) {
  return <Icon icon={Check} {...props} />;
}

export function CaretUpDownIcon(props: NamedIconProps) {
  return <Icon icon={ChevronsUpDown} {...props} />;
}

export function CaretUpIcon(props: NamedIconProps) {
  return <Icon icon={ChevronUp} {...props} />;
}

export function CaretDownIcon(props: NamedIconProps) {
  return <Icon icon={ChevronDown} {...props} />;
}

export function CloseIcon(props: NamedIconProps) {
  return <Icon icon={X} {...props} />;
}

export type { LucideProps };
