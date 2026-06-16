import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import th from './locales/th.json';

const resources = {
  en: { translation: en },
  th: { translation: th },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'th',
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false, // React safe from XSS
    },
  });

export default i18n;
