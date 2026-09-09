# Frontend Decisions — Trolova Frontend

Locked technical decisions for this repository.
These are binding. Do not reverse them without explicit Product Owner authorization.

---

## Repository Shape

- **Standalone frontend repository.** Not a monorepo.
- No `apps/`, no `packages/`, no Turbo, no pnpm workspace config.
- Frontend only. No backend, no Prisma, no NestJS.

---

## Framework

| Concern      | Decision                     |
|--------------|------------------------------|
| Framework    | Next.js 15 (App Router)      |
| UI library   | React 19                     |
| Language     | TypeScript (strict)          |
| Module format | ESM (`"type": "module"`)    |

---

## Styling

| Concern                        | Decision                                              |
|--------------------------------|-------------------------------------------------------|
| Component-scoped styles        | CSS Modules (`.module.css`)                           |
| Global foundation + tokens     | `app/globals.css`                                     |
| Design tokens                  | 43 approved `--trolova-*` CSS custom properties       |
| BiDi layout                    | Logical CSS properties (`padding-inline`, `block-size`, etc.) |
| Styling framework              | None — no Tailwind, no CSS-in-JS                      |
| Token expansion                | Not approved — do not add tokens without authorization |

---

## Typography

| Concern        | Decision                                               |
|----------------|--------------------------------------------------------|
| Font           | LamaSans (Regular 400, Medium 500, SemiBold 600, Bold 700) |
| Font loading   | `next/font/local`, TTF files in `public/brand/fonts/` |
| Font variable  | `--trolova-font-family-primary` (injected by Next.js on `<html>`) |

---

## Internationalisation

| Concern         | Decision                                        |
|-----------------|-------------------------------------------------|
| Languages       | Arabic (AR) and English (EN)                    |
| Default         | AR, RTL                                         |
| Implementation  | Client-side React Context (`LanguageProvider`)  |
| Routing         | No locale-based routing at this stage           |
| Dictionaries    | Inline TypeScript in `src/i18n/dictionaries.ts` |

---

## Testing

| Concern            | Decision                                                 |
|--------------------|----------------------------------------------------------|
| Unit / component   | Vitest + jsdom + Testing Library + jest-dom              |
| Browser / E2E      | Playwright (Chromium)                                    |
| Test file location | `src/**/*.test.{ts,tsx}` (Vitest), `tests/browser/` (Playwright) |
| Auto-test on save  | No — run explicitly                                      |

---

## Primitives

- Built **Just-In-Time** — only when there is an authorized use.
- One primitive per implementation batch.
- **Button** — first production primitive. ✅ Implemented.
- **Input** — second production primitive. ✅ Implemented at `src/components/Input/`. Approved scope is a native `<input>` wrapper that forwards `InputHTMLAttributes<HTMLInputElement>`. Do not expand its API without explicit authorization.
- **FormField** — not currently an approved or pre-built reusable primitive. It may be considered Just-In-Time when a real Students Management form requires it, after review. Do not design or authorize its API now.

---

## Brand Assets

- Font TTF files: `public/brand/fonts/`
- Logo SVG + PNG: `public/brand/logo/`
- Reference images (design docs only): not served by the app — keep in legacy repo.

---

## What Is Explicitly Not Added At This Stage

- Tailwind CSS
- Storybook
- Form libraries (react-hook-form, Formik, etc.)
- Query / state libraries (TanStack Query, Zustand, Redux, etc.)
- Validation libraries (Zod, Yup, etc.)
- UI component libraries (shadcn/ui, Radix, MUI, etc.)
- lucide-react (was only used in the legacy FoundationPage dev artifact)
