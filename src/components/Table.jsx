import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Table.css";

const Table = ({ columns, data }) => {
  const { t } = useTranslation();

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{t(col.name)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {row[col.fieldName] || col.onRender?.(row)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="no-data">
                {t("No Data Available")}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
