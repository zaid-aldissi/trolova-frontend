"use client";

import React from "react";
import { useLanguage } from "../../i18n/language-provider";
import styles from "./InstructorsPage.module.css";

const instructorIconPath = "M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 21a7 7 0 0 1 14 0";

export function InstructorsPage() {
  const { dictionary } = useLanguage();
  const instructors = dictionary.instructors;

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <span>{dictionary.shell.trainingCenter}</span>
        <span aria-hidden="true" className={styles.breadcrumbSeparator}>/</span>
        <span aria-current="page">{instructors.title}</span>
      </div>

      <header className={styles.header}>
        <span className={styles.titleIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={instructorIconPath} />
          </svg>
        </span>
        <div>
          <h1 className={styles.title}>{instructors.title}</h1>
          <p className={styles.context}>{instructors.context}</p>
        </div>
      </header>

      <section className={styles.workspace} aria-labelledby="instructors-state-title">
        <div className={styles.stateIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 5.5h16v13H4z" />
            <path d="M8 9.5h8M8 13h5" />
          </svg>
        </div>
        <h2 id="instructors-state-title" className={styles.stateTitle}>{instructors.unavailableTitle}</h2>
        <p className={styles.stateDescription}>{instructors.unavailableDescription}</p>
      </section>
    </div>
  );
}