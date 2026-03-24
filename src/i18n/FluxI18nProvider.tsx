import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { I18nManager } from 'react-native';
import en from './locales/en.json';
import ar from './locales/ar.json';

export type FluxLocale = 'en' | 'ar';

type Translations = Record<string, string>;

const locales: Record<FluxLocale, Translations> = { en, ar };

const RTL_LOCALES: FluxLocale[] = ['ar'];

export interface FluxI18nContextValue {
  locale: FluxLocale;
  isRTL: boolean;
  t: (key: string) => string;
  setLocale: (locale: FluxLocale) => void;
}

export const FluxI18nContext = createContext<FluxI18nContextValue>({
  locale: 'en',
  isRTL: false,
  t: (key: string) => key,
  setLocale: () => {},
});

interface FluxI18nProviderProps {
  children: ReactNode;
  initialLocale?: FluxLocale;
}

export function FluxI18nProvider({
  children,
  initialLocale = 'en',
}: FluxI18nProviderProps) {
  const [locale, setLocaleState] = useState<FluxLocale>(initialLocale);

  const setLocale = (newLocale: FluxLocale) => {
    const isRTL = RTL_LOCALES.includes(newLocale);
    I18nManager.forceRTL(isRTL);
    setLocaleState(newLocale);
  };

  const value = useMemo<FluxI18nContextValue>(() => {
    const isRTL = RTL_LOCALES.includes(locale);
    const translations = locales[locale] ?? locales.en;
    const t = (key: string): string => translations[key] ?? key;
    return { locale, isRTL, t, setLocale };
  }, [locale]);

  return (
    <FluxI18nContext.Provider value={value}>
      {children}
    </FluxI18nContext.Provider>
  );
}
