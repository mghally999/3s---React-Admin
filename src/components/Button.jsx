import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton, DefaultButton } from "@fluentui/react";
import "../styles/Button.css";

const Button = ({
  text,
  primary = true,
  onClick = () => {},
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`button-container ${className}`}>
      {primary ? (
        <PrimaryButton onClick={onClick} disabled={disabled}>
          {text}
        </PrimaryButton>
      ) : (
        <DefaultButton
          onClick={onClick}
          disabled={disabled}
          className={className}
        >
          {text}
        </DefaultButton>
      )}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
