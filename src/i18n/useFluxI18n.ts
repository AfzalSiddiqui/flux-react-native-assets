import { useContext } from 'react';
import { FluxI18nContext, FluxI18nContextValue } from './FluxI18nProvider';

/** Hook returning { t, locale, isRTL, setLocale } */
export function useFluxI18n(): FluxI18nContextValue {
  return useContext(FluxI18nContext);
}
