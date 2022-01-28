import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ru from './translations/ru.json';
import en from './translations/en.json';


const translates = { ...ru, ...en };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources: translates,
    defaultNS: 'translation',
    debug: true,
    returnObjects: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      // wait: true,
      // ^ warn: https://github.com/freeCodeCamp/freeCodeCamp/issues/41211
      useSuspence: true
    },
  });

export default i18n;
