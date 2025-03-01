import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "User Management": "User Management",
      "Search by name": "Search by name",
      Avatar: "Avatar",
      Name: "Name",
      Email: "Email",
      Role: "Role",
      Status: "Status",
      "Created At": "Created At",
      Actions: "Actions",
      View: "View",
      Delete: "Delete",
      "Large Data Grid (Lazy Loading)": "Large Data Grid (Lazy Loading)",
    },
  },
  ar: {
    translation: {
      "User Management": "إدارة المستخدمين",
      "Search by name": "ابحث عن الاسم",
      Avatar: "الصورة الشخصية",
      Name: "الاسم",
      Email: "البريد الإلكتروني",
      Role: "الدور",
      Status: "الحالة",
      "Created At": "تاريخ الإنشاء",
      Actions: "الإجراءات",
      View: "عرض",
      Delete: "حذف",
      "Large Data Grid (Lazy Loading)": "جدول البيانات الكبيرة (تحميل كسول)",
    },
  },
};

i18n.use(initReactI18next).init({ resources, lng: "en", fallbackLng: "en" });

export default i18n;
