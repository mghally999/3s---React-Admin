import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../styles/LargeDataGrid.css";

const LargeDataGrid = () => {
  const { t, i18n } = useTranslation();
  const data = useSelector((state) => state.data.data);
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const lang = i18n.language;
    setDirection(lang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="large-data-container" style={{ direction }}>
      <h2>{t("Large Data Grid (Lazy Loading)")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("Name")}</th>
            <th>{t("Email")}</th>
            <th>{t("Avatar")}</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 20).map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="avatar" className="avatar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LargeDataGrid;
