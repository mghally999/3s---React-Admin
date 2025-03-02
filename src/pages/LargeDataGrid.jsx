import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../styles/LargeDataGrid.css";

const LargeDataGrid = () => {
  const { t, i18n } = useTranslation();
  const allData = useSelector((state) => state.data.data);
  const [direction, setDirection] = useState("ltr");
  const [visibleData, setVisibleData] = useState([]);
  const containerRef = useRef(null);
  const batchSize = 50;

  useEffect(() => {
    const lang = i18n.language;
    setDirection(lang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Load initial batch
  useEffect(() => {
    setVisibleData(allData.slice(0, batchSize));
  }, [allData]);

  // Lazy loading as user scrolls
  const loadMoreData = () => {
    if (visibleData.length < allData.length) {
      setVisibleData(allData.slice(0, visibleData.length + batchSize));
    }
  };

  const handleScroll = useCallback(() => {
    if (
      containerRef.current &&
      containerRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      loadMoreData();
    }
  }, [visibleData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="large-data-container"
      ref={containerRef}
      style={{ direction }}
    >
      <h2>{t("Large Data Grid")}</h2>
      <div className="table-wrapper">
        <table className="large-data-table">
          <thead>
            <tr>
              <th>{t("Name")}</th>
              <th>{t("Email")}</th>
              <th>{t("Avatar")}</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((user, index) => (
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
    </div>
  );
};

export default LargeDataGrid;
