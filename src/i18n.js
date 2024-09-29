import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage", "sessionStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: false, // Disable suspense to avoid loading screen for translations
    },
  });

export default i18n;
