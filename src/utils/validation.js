import * as Yup from "yup";
import i18n from "../i18n"; // Import i18n for dynamic translations

// 🔹 General validation schema for user forms
export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required(() => i18n.t("Name is required")),
  email: Yup.string()
    .email(() => i18n.t("Invalid email"))
    .required(() => i18n.t("Email is required")),
  password: Yup.string()
    .min(6, () => i18n.t("Password must be at least 6 characters"))
    .required(() => i18n.t("Password is required")),
});

// 🔹 Validation for dynamic field length (Example: Custom Inputs)
export const getDynamicLengthSchema = (min, max) =>
  Yup.string()
    .min(min, () => i18n.t(`Must be at least ${min} characters`))
    .max(max, () => i18n.t(`Must be at most ${max} characters`))
    .required(() => i18n.t("This field is required"));

// 🔹 Custom validation for phone numbers
export const phoneValidationSchema = Yup.string()
  .matches(/^[0-9]+$/, () => i18n.t("Only numbers are allowed"))
  .min(10, () => i18n.t("Phone number must be at least 10 digits"))
  .required(() => i18n.t("Phone number is required"));

// 🔹 Custom validation for Arabic and English names (Optional)
export const arabicEnglishNameValidation = Yup.string()
  .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, () =>
    i18n.t("Name must be in Arabic or English")
  )
  .required(() => i18n.t("Name is required"));
