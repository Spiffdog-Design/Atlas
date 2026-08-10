import type {
  ToastManagerAddOptions,
  ToastManagerUpdateOptions,
} from "@base-ui/react/toast";

import { buildDataAttributes } from "@spiffdog-design/atlas-tools";

import {
  type ControlAppearance,
  normalizeAppearance,
  normalizeRounded,
} from "../shared/control-variants.utils";

export type ToastAppearance = ControlAppearance;

export interface AtlasToastData {
  appearance?: ToastAppearance;
  rounded?: boolean;
}

export interface ToastShowOptions
  extends Omit<
    ToastManagerAddOptions<AtlasToastData>,
    "data" | "appearance" | "rounded"
  > {
  appearance?: ToastAppearance;
  rounded?: boolean;
}

export type ToastUpdateOptions = Partial<ToastShowOptions>;

export function buildToastData(options: {
  appearance?: ToastAppearance;
  rounded?: boolean;
}): AtlasToastData {
  return {
    appearance: normalizeAppearance(options.appearance, "base"),
    rounded: normalizeRounded(options.rounded),
  };
}

export function getToastDataAttributes(
  options: AtlasToastData = {},
): Record<string, string> {
  const attributes: Record<string, string | boolean> = {
    appearance: normalizeAppearance(options.appearance, "base"),
  };

  if (normalizeRounded(options.rounded)) {
    attributes.rounded = true;
  }

  return buildDataAttributes(attributes);
}

export function normalizeToastShowOptions(
  options: ToastShowOptions,
): ToastManagerAddOptions<AtlasToastData> {
  const { appearance, rounded, ...rest } = options;

  return {
    ...rest,
    data: buildToastData({ appearance, rounded }),
  };
}

export function normalizeToastUpdateOptions(
  options: ToastUpdateOptions,
): ToastManagerUpdateOptions<AtlasToastData> {
  const { appearance, rounded, ...rest } = options;

  if (appearance === undefined && rounded === undefined) {
    return rest;
  }

  return {
    ...rest,
    data: buildToastData({ appearance, rounded }),
  };
}
