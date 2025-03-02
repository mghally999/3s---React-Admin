import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`layout ${isRTL ? "rtl" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="main-content">
        <Header title="Secured Smart Systems" />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
