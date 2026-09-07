"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { defaultLanguage, languageDirections, nextLanguage } from "./config";
import { dictionaries } from "./dictionaries";
import type { Dictionary, Direction, Language } from "./types";

type LanguageContextValue = {
  dictionary: Dictionary;
  direction: Direction;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const direction = languageDirections[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      dictionary: dictionaries[language],
      direction,
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () =>
        setLanguageState((current) => nextLanguage(current))
    }),
    [direction, language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return value;
}
