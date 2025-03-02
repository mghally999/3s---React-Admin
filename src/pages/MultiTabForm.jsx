import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter,
  Spinner,
  Dropdown,
} from "@fluentui/react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/dataSlice";
import { useTranslation } from "react-i18next";
import { userValidationSchema } from "../utils/validation";
import "../styles/MultiTabForm.css";

const MultiTabForm = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.setAttribute("dir", newDirection);
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  const roles = [
    { key: "Admin", text: t("Admin") },
    { key: "User", text: t("User") },
  ];

  const statuses = [
    { key: "Active", text: t("Active") },
    { key: "Inactive", text: t("Inactive") },
  ];

  return (
    <div className="multi-tab-form-container" style={{ direction }}>
      <div className={`multi-tab-form ${direction === "rtl" ? "rtl" : ""}`}>
        <h2 className="form-title">{t("Multi-step Form")}</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "",
            status: "",
            avatar: "",
          }}
          validationSchema={userValidationSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(
              addUser({ ...values, createdAt: new Date().toISOString() })
            );
            resetForm();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="pivot-container">
              <div className="form-field">
                <label htmlFor="name">{t("Full Name")} *</label>
                <Field type="text" name="name" className="input-field" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">{t("Email")} *</label>
                <Field type="email" name="email" className="input-field" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-field">
                <label htmlFor="role">{t("Role")} *</label>
                <Dropdown
                  selectedKey={values.role}
                  options={roles}
                  onChange={(_, option) => setFieldValue("role", option.key)}
                  className="rtl-dropdown"
                />
                <ErrorMessage
                  name="role"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-field">
                <label htmlFor="status">{t("Status")} *</label>
                <Dropdown
                  selectedKey={values.status}
                  options={statuses}
                  onChange={(_, option) => setFieldValue("status", option.key)}
                  className="rtl-dropdown"
                />
                <ErrorMessage
                  name="status"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="button-group">
                <DefaultButton className="cancel-btn">
                  {t("Cancel")}
                </DefaultButton>
                <PrimaryButton type="submit">{t("Submit")}</PrimaryButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiTabForm;
