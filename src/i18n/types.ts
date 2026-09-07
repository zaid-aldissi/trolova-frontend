export const supportedLanguages = ["ar", "en"] as const;

export type Language = (typeof supportedLanguages)[number];

export type Direction = "rtl" | "ltr";

/**
 * Top-level dictionary shape.
 * Extend with additional namespaces as product screens are implemented.
 */
export type Dictionary = {
  [key: string]: Record<string, string>;
};
