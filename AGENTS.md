# AGENTS.md — Trolova Frontend

Authority and operating rules for all Kiro sessions in this repository.

---

## Authority Hierarchy

1. **Product Owner** — final authority on scope, product behavior, and what to build next.
2. **Approved decisions recorded here and in `docs/`** — binding for all Kiro sessions.
3. **Kiro** — implements only what is explicitly authorized. Never invents product behavior.

---

## Terminology Rules

| Approved English term         | Approved Arabic term            | Internal/domain term  |
|-------------------------------|---------------------------------|-----------------------|
| Driving Training Center       | مركز تدريب القيادة              | TrainingCenter        |

**Never use:** School, Driving School, مدرسة, مدرسة سواقة, مدرسة قيادة, مركز تدريب السواقة

---

## Repository Rules

- **Frontend only.** No backend code, no Prisma, no NestJS, no API implementations.
- **Standalone repo.** No monorepo structure, no `apps/`, no `packages/`, no Turbo, no pnpm workspaces.
- **Legacy repo is reference only.** `C:\Users\LENOVO\Documents\Driver Journey Platform` is a read-only migration source. Do not modify it.

---

## Workflow Rules

- **Small-batch, one concern at a time.** Each authorized implementation batch is scoped and completed before the next.
- **STOP after every authorized batch.** Do not proceed to the next batch without explicit Product Owner authorization.
- **One primitive / one concern per batch.** Do not bundle multiple new primitives into a single batch.
- **Primitives are built Just-In-Time.** Do not pre-build primitives that have no authorized use yet.

---

## What Kiro Must Not Do Without Explicit Authorization

- Expand the Input primitive API (`src/components/Input/` — already implemented; limited native `<input>` wrapper)
- Implement FormField as a pre-built reusable primitive (not currently approved; may be considered JIT only when a real Students Management form requires it, after review — do not design or authorize its API now)
- Add styling frameworks (Tailwind, CSS-in-JS, etc.)
- Add Storybook, form libraries, query libraries, validation libraries, UI component libraries
- Expand the token set beyond the approved 43 `--trolova-*` tokens
- Build auth flows, navigation, app shell, or product screens
- Treat Student as an authenticated User (unresolved Product behavior)
- Assume web-specific domain behavior that would block future clients (mobile, etc.)
- Push to `origin` without explicit authorization
- Commit without explicit authorization

---

## Waiting Categories

**Product** — behavior or UX decisions that require Product Owner input before implementation.
**Security** — auth, session, authorization decisions.
**Backend** — API contracts, data shapes, endpoints.

Do not invent resolutions for items in these categories.

---

## Design Principles

- Responsive web first.
- CSS Modules for all component-scoped styles.
- Logical CSS properties for BiDi safety.
- AR is the default language; RTL is the default direction.
- Future clients (mobile, etc.) must not be blocked by web-specific domain assumptions.
