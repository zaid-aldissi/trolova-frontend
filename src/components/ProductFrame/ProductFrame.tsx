"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";
import { useLanguage } from "../../i18n/language-provider";
import styles from "./ProductFrame.module.css";

const iconPaths = {
  students: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  instructors: "M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 21a7 7 0 0 1 14 0",
  appointments: "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M16 3v4M8 3v4M3 11h18",
  payments: "M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3M2 10h20M6 15h3",
  reports: "M12 20V9M18 20V4M6 20v-6",
  documents: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5v5h5M9 13h6M9 17h4",
  settings: "M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0",
  globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18",
  center: "M4 21V6l8-3v18M12 9h8v12M2 21h20M8 7v2M8 12v2M8 17v2M16 12v2M16 17v2"
};

function FrameIcon({ name }: { name: keyof typeof iconPaths }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[name]} /></svg>;
}

const reservedModules = ["instructors", "appointments", "payments", "reports", "documents", "settings"] as const;

type ProductFrameProps = { children: ReactNode };

export function ProductFrame({ children }: ProductFrameProps) {
  const { dictionary, direction, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const shell = dictionary.shell;

  return (
    <div className={styles.frame} dir={direction}>
      <aside className={styles.sidebar}>
        <div className={styles.brandArea}>
          <Link className={styles.brand} href="/" aria-label={shell.brand}>
            <Image src="/brand/logo/trolova-logo-primary-indigo.svg" alt={shell.brand} width={150} height={40} priority />
          </Link>
          <p className={styles.shellDescription}>{shell.context}</p>
        </div>
        <nav className={styles.navigation} aria-label={shell.navigation}>
          <Link className={styles.navigationLink} href="/students" aria-current={pathname === "/students" ? "page" : undefined}>
            <FrameIcon name="students" />{shell.students}
          </Link>
          <Link className={styles.reservedModule} href="/instructors" aria-current={pathname === "/instructors" ? "page" : undefined}>
            <FrameIcon name="instructors" /><span>{shell.instructors}</span>
          </Link>
          <p className={styles.reservedLabel}>{shell.reserved}</p>
          <ul className={styles.reservedModules}>
            {reservedModules.filter(name => name !== "instructors").map((name) => (
              <li key={name} className={styles.reservedModule}>
                <FrameIcon name={name} /><span>{shell[name]}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.brandNote}>
          <span aria-hidden="true">∞</span>
          <p>{shell.mission}</p>
          <span className={styles.brandSignature} aria-hidden="true">TROLOVA</span>
        </div>
      </aside>
      <div className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.centerContext}>
            <span className={styles.centerIcon}><FrameIcon name="center" /></span>
            <p>{shell.trainingCenter}<span>{shell.context}</span></p>
          </div>
          <Image className={styles.mobileBrand} src="/brand/logo/trolova-logo-primary-indigo.svg" alt={shell.brand} width={112} height={30} />
          <button className={styles.language} type="button" onClick={toggleLanguage} lang={language === "ar" ? "en" : "ar"}>
            <FrameIcon name="globe" />{language === "ar" ? "English" : "العربية"}
          </button>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
