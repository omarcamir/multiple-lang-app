import { useEffect, useState } from "react";
import i18n from "i18next";

export const useLanguage = (defaultLang = "en") => {
  const storedLang = localStorage.getItem("language") || defaultLang;
  const [lang, setLang] = useState(storedLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
    window.document.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", lang); // Persist language to localStorage
  }, [lang]);

  return { lang, setLang };
};
