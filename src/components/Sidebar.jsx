import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sidebar ${isOpen ? "open" : "closed"} ${isRTL ? "rtl" : ""}`}
    >
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? (isRTL ? "→" : "←") : isRTL ? "←" : "→"}
      </button>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i>📊</i> <span>Grid</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/large-data"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i>📈</i> <span>Large Data</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/multi-tab-form"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i>📝</i> <span>Multi Tab Form</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
