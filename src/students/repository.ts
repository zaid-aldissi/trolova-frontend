import type { Student, StudentStatus } from "./types";

export type StudentStatusFilter = "ALL" | StudentStatus;

export type ListStudentsQuery = {
  search?: string;
  status?: StudentStatusFilter;
};

export type CreateStudentInput = {
  fullName: string;
  primaryPhone: string;
  nationalId?: string;
  location?: string;
  notes?: string;
};

export type UpdateStudentInput = {
  fullName: string;
  primaryPhone: string;
  nationalId?: string;
  location?: string;
  notes?: string;
};

export type RepositoryErrorCode = "NOT_FOUND" | "UNAVAILABLE";

export type RepositoryResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: RepositoryErrorCode };

export type StudentRepository = {
  list(query?: ListStudentsQuery): Promise<RepositoryResult<Student[]>>;
  getById(id: string): Promise<RepositoryResult<Student>>;
  create(input: CreateStudentInput): Promise<RepositoryResult<Student>>;
  update(
    id: string,
    input: UpdateStudentInput
  ): Promise<RepositoryResult<Student>>;
  archive(id: string): Promise<RepositoryResult<Student>>;
  reactivate(id: string): Promise<RepositoryResult<Student>>;
};
