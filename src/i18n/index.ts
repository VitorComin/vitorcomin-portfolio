import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ptBR from "./pt-br.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: ptBR,
    },
  },
  lng: navigator.language.includes("pt") ? "pt" : "en",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
