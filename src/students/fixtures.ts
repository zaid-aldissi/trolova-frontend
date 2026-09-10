import type { Student } from "./types";

/**
 * Fixture Student records for frontend development.
 * Import only from the fixture repository adapter — never from UI.
 */
export const studentFixtures: Student[] = [
  {
    id: "student-1",
    fullName: "سارة أحمد",
    primaryPhone: "0790000001",
    nationalId: "1234567890",
    location: "عمّان",
    notes: "يفضّل التواصل صباحاً",
    registrationDate: "2026-09-08T10:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "student-2",
    fullName: "Omar Khaled",
    primaryPhone: "0790000002",
    registrationDate: "2026-09-07T09:00:00.000Z",
    status: "ACTIVE"
  },
  {
    id: "student-3",
    fullName: "ليلى حسن",
    primaryPhone: "0790000003",
    registrationDate: "2026-09-06T08:00:00.000Z",
    status: "ARCHIVED"
  },
  {
    id: "student-4",
    fullName: "Nour Ali",
    primaryPhone: "0790000004",
    location: "Irbid",
    registrationDate: "2026-09-05T07:00:00.000Z",
    status: "ACTIVE"
  }
];
