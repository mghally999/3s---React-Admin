import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Header.css";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="app-header">
      <h1>{t("title")}</h1>
      <div className="header-actions">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
