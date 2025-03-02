// src/utils/validation.js
import * as Yup from "yup";
import i18n from "../i18n";

// Helper function to get translation text
const t = i18n.t;

// 🔹 User Form Validation Schema (General)
export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required(t("Name is required")),
  email: Yup.string()
    .email(t("Invalid email"))
    .required(t("Email is required")),
  password: Yup.string()
    .min(6, t("Password must be at least 6 characters"))
    .required(t("Password is required")),
  role: Yup.string().required(t("Role is required")),
  status: Yup.string().required(t("Status is required")),
  avatar: Yup.string()
    .url(t("Enter a valid image URL"))
    .required(t("Avatar is required")),
});

// 🔹 Custom Validation for Field Length
export const getDynamicLengthSchema = (min, max) =>
  Yup.string()
    .min(min, t(`Must be at least ${min} characters`))
    .max(max, t(`Must be at most ${max} characters`))
    .required(t("This field is required"));

// 🔹 Phone Number Validation
export const phoneValidationSchema = Yup.string()
  .matches(/^\+?[0-9\s-]+$/, t("Only numbers and country codes are allowed"))
  .min(10, t("Phone number must be at least 10 digits"))
  .required(t("Phone number is required"));

// 🔹 Name Validation (Arabic & English)
export const arabicEnglishNameValidation = Yup.string()
  .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("Name must be in Arabic or English"))
  .required(t("Name is required"));
