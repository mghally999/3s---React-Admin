import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // General UI
      title: "Secured Smart Systems",
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
      Edit: "Edit",
      Delete: "Delete",
      "Large Data Grid": "Large Data Grid",
      "Switch to Arabic": "Switch to Arabic",
      "Switch to English": "Switch to English",

      // MultiTabForm
      "Multi-step Form": "Multi-step Form",
      "Full Name": "Full Name",
      Password: "Password",
      Submit: "Submit",

      // Validation Messages
      "Name is required": "Name is required",
      "Invalid email": "Invalid email",
      "Email is required": "Email is required",
      "Password must be at least 6 characters":
        "Password must be at least 6 characters",
      "Password is required": "Password is required",
      "Form submitted successfully!": "Form submitted successfully!",
    },
  },
  ar: {
    translation: {
      // General UI
      title: "الأنظمة الذكية المؤمنة",
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
      Edit: "تعديل",
      Delete: "حذف",
      "Large Data Grid": "جدول البيانات الكبيرة",
      "Switch to Arabic": "التبديل إلى العربية",
      "Switch to English": "التبديل إلى الإنجليزية",

      // MultiTabForm
      "Multi-step Form": "نموذج متعدد الخطوات",
      "Full Name": "الاسم الكامل",
      Password: "كلمة المرور",
      Submit: "إرسال",

      "All Statuses": "جميع الحالات",
      "All Roles": "جميع الأدوار",
      Active: "نشط",
      Inactive: "غير نشط",
      Admin: "مشرف",
      User: "مستخدم",
      Next: "التالي",
      Previous: "السابق",
      Page: "صفحة",
      of: "من",
      "Confirm Deletion": "تأكيد الحذف",
      "Are you sure you want to delete this user? This action cannot be undone.":
        "هل أنت متأكد أنك تريد حذف هذا المستخدم؟ لا يمكن التراجع عن هذا الإجراء.",
      Cancel: "إلغاء",
      Save: "حفظ",
      "Edit User": "تعديل المستخدم",

      // Validation Messages
      "Name is required": "الاسم مطلوب",
      "Invalid email": "البريد الإلكتروني غير صالح",
      "Email is required": "البريد الإلكتروني مطلوب",
      "Password must be at least 6 characters":
        "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل",
      "Password is required": "كلمة المرور مطلوبة",
      "Form submitted successfully!": "تم إرسال النموذج بنجاح!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
