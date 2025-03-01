import React from "react";
import { useTranslation } from "react-i18next";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
import "../styles/Header.css"; // External styles

const Header = ({ title }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const headerItems: ICommandBarItemProps[] = [
    {
      key: "languageSwitch",
      text: t("Switch Language"),
      iconProps: { iconName: "Globe" },
      onClick: toggleLanguage,
    },
  ];

  return (
    <header className={`app-header ${isRTL ? "rtl" : ""}`}>
      <h1>{t(title)}</h1>
      <CommandBar items={headerItems} />
    </header>
  );
};

export default Header;
