import { studentFixtures } from "./fixtures";
import type {
  CreateStudentInput,
  ListStudentsQuery,
  RepositoryResult,
  StudentRepository,
  UpdateStudentInput
} from "./repository";
import type { Student } from "./types";

export type FixtureStudentRepositoryOptions = {
  initialStudents?: Student[];
  now?: () => Date;
};

function cloneStudent(student: Student): Student {
  return { ...student };
}

function cloneStudents(students: Student[]): Student[] {
  return students.map(cloneStudent);
}

function optionalField(value: string | undefined): string | undefined {
  return value === undefined || value === "" ? undefined : value;
}

function editableFields(input: CreateStudentInput | UpdateStudentInput) {
  return {
    fullName: input.fullName,
    primaryPhone: input.primaryPhone,
    nationalId: optionalField(input.nationalId),
    location: optionalField(input.location),
    notes: optionalField(input.notes)
  };
}

function matchesSearch(student: Student, search: string): boolean {
  const needle = search.trim().toLocaleLowerCase();

  if (needle.length === 0) {
    return true;
  }

  return (
    student.fullName.toLocaleLowerCase().includes(needle) ||
    student.primaryPhone.toLocaleLowerCase().includes(needle)
  );
}

export function createFixtureStudentRepository(
  options: FixtureStudentRepositoryOptions = {}
): StudentRepository {
  const students = cloneStudents(options.initialStudents ?? studentFixtures);
  const now = options.now ?? (() => new Date());

  const findIndex = (id: string) =>
    students.findIndex((student) => student.id === id);

  const notFound = (): RepositoryResult<Student> => ({
    ok: false,
    error: "NOT_FOUND"
  });

  return {
    async list(query: ListStudentsQuery = {}): Promise<RepositoryResult<Student[]>> {
      const status = query.status ?? "ALL";
      const search = query.search ?? "";

      const data = cloneStudents(students)
        .filter((student) => status === "ALL" || student.status === status)
        .filter((student) => matchesSearch(student, search))
        .sort((a, b) =>
          a.registrationDate < b.registrationDate
            ? 1
            : a.registrationDate > b.registrationDate
              ? -1
              : 0
        );

      return { ok: true, data };
    },

    async getById(id: string): Promise<RepositoryResult<Student>> {
      const student = students.find((entry) => entry.id === id);

      if (!student) {
        return notFound();
      }

      return { ok: true, data: cloneStudent(student) };
    },

    async create(input: CreateStudentInput): Promise<RepositoryResult<Student>> {
      const student: Student = {
        id: crypto.randomUUID(),
        ...editableFields(input),
        registrationDate: now().toISOString(),
        status: "ACTIVE"
      };

      students.push(student);

      return { ok: true, data: cloneStudent(student) };
    },

    async update(
      id: string,
      input: UpdateStudentInput
    ): Promise<RepositoryResult<Student>> {
      const index = findIndex(id);

      if (index === -1) {
        return notFound();
      }

      const current = students[index];
      const updated: Student = {
        ...current,
        ...editableFields(input),
        registrationDate: current.registrationDate,
        status: current.status
      };

      students[index] = updated;

      return { ok: true, data: cloneStudent(updated) };
    },

    async archive(id: string): Promise<RepositoryResult<Student>> {
      const index = findIndex(id);

      if (index === -1) {
        return notFound();
      }

      const updated: Student = {
        ...students[index],
        status: "ARCHIVED"
      };

      students[index] = updated;

      return { ok: true, data: cloneStudent(updated) };
    },

    async reactivate(id: string): Promise<RepositoryResult<Student>> {
      const index = findIndex(id);

      if (index === -1) {
        return notFound();
      }

      const updated: Student = {
        ...students[index],
        status: "ACTIVE"
      };

      students[index] = updated;

      return { ok: true, data: cloneStudent(updated) };
    }
  };
}
