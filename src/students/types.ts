export const studentStatuses = ["ACTIVE", "ARCHIVED"] as const;

export type StudentStatus = (typeof studentStatuses)[number];

/**
 * Frontend Student entity for Students Management v1.
 * `id` is a frontend identity for routing and repository operations, not an API contract.
 * `registrationDate` is a system-set opaque stored value (ISO-8601) used for ordering.
 * Display formatting is deferred (WAITING FOR BACKEND CONTRACT).
 */
export type Student = {
  id: string;
  fullName: string;
  primaryPhone: string;
  nationalId?: string;
  location?: string;
  notes?: string;
  registrationDate: string;
  status: StudentStatus;
};
