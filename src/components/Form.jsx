import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@fluentui/react";
import PropTypes from "prop-types";

const CustomInput = ({ label, name, type = "text" }) => (
  <div className="form-field">
    <Field name={name}>
      {({ field }) => <TextField label={label} type={type} {...field} />}
    </Field>
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CustomInput;
