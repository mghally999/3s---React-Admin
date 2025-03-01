import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "@fluentui/react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <PrimaryButton onClick={toggleLanguage}>
      {i18n.language === "en" ? "التبديل إلى العربية" : "Switch to English"}
    </PrimaryButton>
  );
};

export default LanguageSwitcher;
