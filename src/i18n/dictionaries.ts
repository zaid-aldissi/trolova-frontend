import type { Dictionary, Language } from "./types";

/**
 * Inline dictionaries for AR and EN.
 * Extend with product screen namespaces as they are implemented.
 */
export const dictionaries: Record<Language, Dictionary> = {
  ar: {
    shell: {
      brand: "تروفولا",
      context: "نظام تشغيل لمراكز تدريب القيادة",
      navigation: "التنقل",
      students: "الطلاب",
      trainingCenter: "مركز تدريب القيادة",
      reserved: "مساحات قادمة",
      instructors: "المدربون",
      appointments: "المواعيد",
      payments: "المدفوعات",
      reports: "التقارير",
      documents: "المستندات",
      settings: "الإعدادات",
      mission: "معاً نزيد عدد السائقين الآمنين"
    },
    students: {
      title: "الطلاب",
      context: "إدارة الطلاب في مركز تدريب القيادة",
      register: "تسجيل طالب",
      searchLabel: "بحث عن طالب",
      searchPlaceholder: "ابحث بالاسم الكامل أو رقم الهاتف…",
      statusLabel: "الحالة",
      all: "الكل",
      active: "نشط",
      archived: "مؤرشف",
      fullName: "الاسم الكامل",
      primaryPhone: "الهاتف الأساسي",
      registrationDate: "تاريخ التسجيل",
      status: "الحالة",
      actions: "الإجراءات",
      viewProfile: "عرض الملف الشخصي",
      noStudents: "لا يوجد طلاب",
      noMatchingStudents: "لا يوجد طلاب مطابقون للبحث أو التصفية",
      clearFilters: "مسح البحث والتصفية",
      loadError: "تعذر تحميل قائمة الطلاب",
      retry: "إعادة المحاولة",
      emptyActions: "لا توجد إجراءات"
    },
    instructors: {
      title: "المدربون",
      context: "إدارة المدربين في مركز تدريب القيادة",
      unavailableTitle: "تفاصيل إدارة المدربين غير متاحة بعد",
      unavailableDescription: "لم تُعتمد بيانات المدربين أو عملياتهم لهذه الواجهة بعد."
    }
  },
  en: {
    shell: {
      brand: "Trolova",
      context: "Operating system for driving training centers",
      navigation: "Navigation",
      students: "Students",
      trainingCenter: "Driving Training Center",
      reserved: "Reserved workspaces",
      instructors: "Instructors",
      appointments: "Appointments",
      payments: "Payments",
      reports: "Reports",
      documents: "Documents",
      settings: "Settings",
      mission: "Safer drivers. Stronger communities."
    },
    students: {
      title: "Students",
      context: "Manage students across the training center",
      register: "Register Student",
      searchLabel: "Search students",
      searchPlaceholder: "Search full name or phone…",
      statusLabel: "Status",
      all: "All",
      active: "Active",
      archived: "Archived",
      fullName: "Full Name",
      primaryPhone: "Primary Phone",
      registrationDate: "Registration Date",
      status: "Status",
      actions: "Actions",
      viewProfile: "View profile",
      noStudents: "No students",
      noMatchingStudents: "No students match the search or filter",
      clearFilters: "Clear search and filter",
      loadError: "Unable to load students",
      retry: "Retry",
      emptyActions: "No actions"
    },
    instructors: {
      title: "Instructors",
      context: "Manage instructors at the driving training center",
      unavailableTitle: "Instructor management details are not available yet",
      unavailableDescription: "Instructor data and operations have not been defined for this interface yet."
    }
  }
};
