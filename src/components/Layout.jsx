import React from "react";
import Sidebar from "./Sidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <LanguageSwitcher />
        {children}
      </div>
    </div>
  );
};

export default Layout;
