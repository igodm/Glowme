"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/en";
import zh from "../i18n/zh";
import { Namespace } from "@/i18n";

const ns = Object.values(Namespace);

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      lng: "en",
      ns,
      interpolation: { escapeValue: false },
      resources: {
        en,
        zh,
      },
    })
    .catch((err) => console.error("i18n init error:", err));
}

export default i18n;
