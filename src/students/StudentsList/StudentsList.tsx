"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useLanguage } from "../../i18n/language-provider";
import type { Student, StudentStatus } from "../types";
import type { StudentStatusFilter } from "../repository";
import { useStudentRepository } from "../student-repository-provider";
import styles from "./StudentsList.module.css";

const studentIconPaths = {
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  search: "M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0M20.5 20.5l-4-4",
  calendar: "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M16 3v4M8 3v4M3 11h18",
  plus: "M12 5v14M5 12h14"
};

function StudentIcon({ name }: { name: keyof typeof studentIconPaths }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={studentIconPaths[name]} /></svg>;
}

function initials(name: string): string {
  return name.trim().split(/\s+/u).slice(0, 2).map(part => Array.from(part)[0] ?? "").join("");
}

const statusOptions: StudentStatusFilter[] = ["ALL", "ACTIVE", "ARCHIVED"];

function isFiltered(search: string, status: StudentStatusFilter): boolean {
  return search.trim().length > 0 || status !== "ALL";
}

function statusLabel(
  status: StudentStatus,
  students: Record<StudentStatus, string>
): string {
  return students[status];
}

// Display the supplied calendar date without timezone or locale conversion.
function registrationDateLabel(value: string): string {
  return /^\d{4}-\d{2}-\d{2}(?:T|$)/.test(value) ? value.slice(0, 10) : "—";
}

export function StudentsList() {
  const repository = useStudentRepository();
  const { dictionary } = useLanguage();
  const studentsDictionary = dictionary.students;
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StudentStatusFilter>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError(false);

    repository.list({ search, status }).then((result) => {
      if (!active) {
        return;
      }

      if (result.ok) {
        setStudents(result.data);
        setError(false);
      } else {
        setStudents([]);
        setError(true);
      }

      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [repository, retryCount, search, status]);

  function clearFilters() {
    setSearch("");
    setStatus("ALL");
  }

  const filtered = isFiltered(search, status);
  const localizedStatuses: Record<StudentStatus, string> = {
    ACTIVE: studentsDictionary.active,
    ARCHIVED: studentsDictionary.archived
  };

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <span>{dictionary.shell.trainingCenter}</span>
        <span aria-hidden="true" className={styles.breadcrumbSeparator}>/</span>
        <span aria-current="page">{studentsDictionary.title}</span>
      </div>
      <header className={styles.header}>
        <span className={styles.titleIcon}><StudentIcon name="users" /></span>
        <div>
          <h1 className={styles.title}>{studentsDictionary.title}</h1>
          <p className={styles.context}>{studentsDictionary.context}</p>
        </div>
      </header>
      <section aria-label={studentsDictionary.title}>
        <form className={styles.controls} role="search" onSubmit={event => event.preventDefault()}>
          <div className={styles.searchField}>
            <label className={styles.visuallyHidden} htmlFor="students-search">{studentsDictionary.searchLabel}</label>
            <span className={styles.searchIcon}><StudentIcon name="search" /></span>
            <Input id="students-search" name="search" type="search" value={search}
              placeholder={studentsDictionary.searchPlaceholder}
              onChange={event => setSearch(event.target.value)} />
          </div>
          <fieldset className={styles.statusFilter}>
            <legend className={styles.visuallyHidden}>{studentsDictionary.statusLabel}</legend>
            {statusOptions.map(option => (
              <label className={styles.filterOption} key={option}>
                <input type="radio" name="student-status" value={option} checked={status === option}
                  onChange={() => setStatus(option)} />
                <span>{option === "ALL" ? studentsDictionary.all : localizedStatuses[option]}</span>
              </label>
            ))}
          </fieldset>
          <Link className={styles.registerAction} href="/students/new">
            <StudentIcon name="plus" />{studentsDictionary.register}
          </Link>
        </form>
        <div className={styles.results} aria-live="polite" aria-busy={loading}>
          {loading ? (
            <div className={styles.skeleton} aria-label={studentsDictionary.title}>
              {Array.from({ length: 4 }, (_, index) => (
                <div className={styles.skeletonRow} key={index}>
                  {Array.from({ length: 5 }, (_, cell) => <span key={cell} />)}
                </div>
              ))}
            </div>
          ) : error ? (
            <div className={styles.state}>
              <span className={styles.stateIcon}><StudentIcon name="users" /></span>
              <p>{studentsDictionary.loadError}</p>
              <Button type="button" onClick={() => setRetryCount(current => current + 1)}>{studentsDictionary.retry}</Button>
            </div>
          ) : students.length === 0 ? (
            <div className={styles.state}>
              <span className={styles.stateIcon}><StudentIcon name="search" /></span>
              <p>{filtered ? studentsDictionary.noMatchingStudents : studentsDictionary.noStudents}</p>
              {filtered ? (
                <Button type="button" variant="secondary" onClick={clearFilters}>{studentsDictionary.clearFilters}</Button>
              ) : (
                <Link className={styles.stateAction} href="/students/new">{studentsDictionary.register}</Link>
              )}
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table>
                <caption className={styles.visuallyHidden}>{studentsDictionary.title}</caption>
                <thead>
                  <tr>
                    <th scope="col">{studentsDictionary.fullName}</th>
                    <th scope="col">{studentsDictionary.primaryPhone}</th>
                    <th scope="col">{studentsDictionary.registrationDate}</th>
                    <th scope="col">{studentsDictionary.status}</th>
                    <th scope="col">{studentsDictionary.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <th scope="row" data-label={studentsDictionary.fullName}>
                        <div className={styles.identity}>
                          <span className={styles.avatar} aria-hidden="true">{initials(student.fullName)}</span>
                          <Link href={`/students/${student.id}`}>{student.fullName}</Link>
                        </div>
                      </th>
                      <td className={styles.phone} data-label={studentsDictionary.primaryPhone}>
                        <bdi dir="ltr">{student.primaryPhone}</bdi>
                      </td>
                      <td className={styles.date} data-label={studentsDictionary.registrationDate}>
                        <span className={styles.mobileDateLabel}><StudentIcon name="calendar" />{studentsDictionary.registrationDate}</span>
                        <time dateTime={student.registrationDate} dir="ltr">{registrationDateLabel(student.registrationDate)}</time>
                      </td>
                      <td className={styles.statusCell} data-label={studentsDictionary.status}>
                        <span className={styles.status} data-status={student.status}>{statusLabel(student.status, localizedStatuses)}</span>
                      </td>
                      <td className={styles.actions} data-label={studentsDictionary.actions}>
                        <span className={styles.emptyAction} aria-label={studentsDictionary.emptyActions}>—</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
