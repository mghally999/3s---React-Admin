import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "@fluentui/react";
import "../styles/MultiTabForm.css";
import { useTranslation } from "react-i18next";

const MultiTabForm = () => {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("ltr");

  // Auto-update direction on language switch
  useEffect(() => {
    const lang = i18n.language;
    setDirection(lang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

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
    <div className="multi-tab-form" style={{ direction }}>
      <h2>{t("Multi-step Form")}</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert(t("Form submitted successfully!"));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="pivot-container">
            <div className="form-field">
              <label htmlFor="name">{t("Full Name")} *</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="input-field"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">{t("Email")} *</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">{t("Password")} *</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="button-group">
              <PrimaryButton
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {t("Submit")}
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiTabForm;
