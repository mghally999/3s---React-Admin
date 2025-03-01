import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/dataSlice";
import { TextField, PrimaryButton } from "@fluentui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import "../styles/ViewEditPage.css";

const ViewEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const lang = i18n.language;
    setDirection(lang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const data = useSelector((state) => state.data.data);
  const item = data.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="edit-page-container" style={{ direction }}>
        <h2>{t("User Not Found")}</h2>
        <PrimaryButton onClick={() => navigate("/")}>
          {t("Go Back")}
        </PrimaryButton>
      </div>
    );
  }

  const validationSchema = Yup.object({
    name: Yup.string().required(t("Name is required")),
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Email is required")),
  });

  const handleSave = (values) => {
    const updatedData = data.map((d) =>
      d.id === item.id ? { ...d, ...values } : d
    );
    dispatch(setData(updatedData));
    navigate("/");
  };

  return (
    <div className="edit-page-container" style={{ direction }}>
      <div className="edit-form-container">
        <h2>{t("Edit User")}</h2>
        <Formik
          initialValues={{ name: item?.name || "", email: item?.email || "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSave(values)}
        >
          {({ isSubmitting }) => (
            <Form className="edit-form">
              <div className="form-field">
                <label htmlFor="name">{t("Full Name")} *</label>
                <Field as={TextField} name="name" id="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">{t("Email")} *</label>
                <Field as={TextField} name="email" id="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="button-group">
                <PrimaryButton type="submit" disabled={isSubmitting}>
                  {t("Save")}
                </PrimaryButton>
                <PrimaryButton
                  onClick={() => navigate("/")}
                  className="cancel-btn"
                >
                  {t("Cancel")}
                </PrimaryButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ViewEditPage;
