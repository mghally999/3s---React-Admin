import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, PrimaryButton } from "@fluentui/react";
import { useTranslation } from "react-i18next";
import "../styles/Form.css"; // External CSS

const CustomTextField = ({ label, ...props }) => (
  <div className="form-field">
    <label>{label} *</label>
    <Field as={TextField} {...props} />
    <ErrorMessage name={props.name} component="div" className="error" />
  </div>
);

const CustomForm = ({ onSubmit }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const validationSchema = Yup.object({
    name: Yup.string().required(t("Name is required")),
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Email is required")),
    password: Yup.string()
      .min(6, t("Password must be at least 6 characters"))
      .required(t("Password is required")),
  });

  return (
    <div className={`form-container ${isRTL ? "rtl" : ""}`}>
      <h2>{t("User Form")}</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomTextField name="name" label={t("Full Name")} />
            <CustomTextField name="email" label={t("Email")} />
            <CustomTextField
              name="password"
              label={t("Password")}
              type="password"
            />
            <PrimaryButton type="submit" disabled={isSubmitting}>
              {t("Submit")}
            </PrimaryButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
