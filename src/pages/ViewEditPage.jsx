import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/dataSlice";
import { TextField, PrimaryButton } from "@fluentui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import { userValidationSchema } from "../utils/validation";
import "../styles/ViewEditPage.css";

const ViewEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
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
          validationSchema={userValidationSchema}
          onSubmit={(values) => handleSave(values)}
        >
          {({ isSubmitting }) => (
            <Form className="edit-form">
              <Field name="name">
                {({ field }) => <TextField {...field} label={t("Full Name")} />}
              </Field>
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />

              <Field name="email">
                {({ field }) => <TextField {...field} label={t("Email")} />}
              </Field>
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />

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
