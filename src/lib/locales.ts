import arData from '../locales/ar.json';
import enData from '../locales/en.json';

export type Locale = 'ar' | 'en';

export const locales: Locale[] = ['ar', 'en'];

export function getTranslations(locale: Locale) {
  return locale === 'ar' ? arData : enData;
}

