import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📊 Grid
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/large-data"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📈 Large Data
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/multi-tab-form"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📝 Multi Tab Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
