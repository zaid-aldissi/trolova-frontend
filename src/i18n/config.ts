import type { Direction, Language } from "./types";

export const defaultLanguage: Language = "ar";

export const languageDirections: Record<Language, Direction> = {
  ar: "rtl",
  en: "ltr"
};

export const nextLanguage = (language: Language): Language =>
  language === "ar" ? "en" : "ar";
