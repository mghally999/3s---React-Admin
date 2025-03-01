import React, { useState } from "react";
import { Stack, DefaultButton } from "@fluentui/react";
import "../styles/Pagination.css";
import { useTranslation } from "react-i18next";

const Pagination = ({ currentPage, totalPages, onChange }) => {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <Stack horizontal className="pagination-container" style={{ direction }}>
      <DefaultButton
        text={t("« Previous")}
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn"
      />
      <span className="pagination-info">
        {t("Page")} {currentPage} {t("of")} {totalPages}
      </span>
      <DefaultButton
        text={t("Next »")}
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      />
    </Stack>
  );
};

export default Pagination;
