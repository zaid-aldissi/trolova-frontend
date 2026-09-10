"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  type ReactNode
} from "react";
import { createFixtureStudentRepository } from "./fixture-repository";
import type { StudentRepository } from "./repository";

const StudentRepositoryContext = createContext<StudentRepository | undefined>(
  undefined
);

type StudentRepositoryProviderProps = {
  children: ReactNode;
  repository?: StudentRepository;
};

export function StudentRepositoryProvider({
  children,
  repository
}: StudentRepositoryProviderProps) {
  const value = useMemo(
    () => repository ?? createFixtureStudentRepository(),
    [repository]
  );

  return (
    <StudentRepositoryContext.Provider value={value}>
      {children}
    </StudentRepositoryContext.Provider>
  );
}

export function useStudentRepository(): StudentRepository {
  const value = useContext(StudentRepositoryContext);

  if (!value) {
    throw new Error(
      "useStudentRepository must be used inside StudentRepositoryProvider"
    );
  }

  return value;
}
