import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton, DefaultButton } from "@fluentui/react";
import { useTranslation } from "react-i18next";
import "../styles/Button.css"; // External styles

const Button = ({ text, type = "primary", onClick, disabled = false }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`button-container ${isRTL ? "rtl" : ""}`}>
      {type === "primary" ? (
        <PrimaryButton onClick={onClick} disabled={disabled}>
          {text}
        </PrimaryButton>
      ) : (
        <DefaultButton
          onClick={onClick}
          disabled={disabled}
          className={`btn-${type}`}
        >
          {text}
        </DefaultButton>
      )}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
