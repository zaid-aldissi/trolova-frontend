# Students Management v1 — Implementation Work Plan

This file is an **implementation work plan only**. It is not Product authority. It does not alter approved Product, UI/UX, or frontend decisions.

**Do not implement any batch until the Product Owner explicitly authorizes that batch.**

Execution model:

```
Batch 1 → STOP → review
Batch 2 → STOP → review
Batch 3 → STOP → review
Batch 4 → STOP → review
Batch 5 → STOP → review
Batch 6 → STOP → review
Batch 7 → STOP → review
→ one final integrated capability PR
```

All batches stay on `feature/students-management-v1`. There is no separate branch or PR per screen.

---

## 1. Authority

Binding sources, in force for this work package:

| Document | Role |
|----------|------|
| `AGENTS.md` | Operating rules, terminology, frontend-only boundary, STOP-after-batch |
| `docs/FRONTEND-DECISIONS.md` | Locked technical stack (Next.js App Router, CSS Modules, i18n, tests, no extra libraries) |
| `docs/UIUX-FOUNDATION.md` | How approved Product must look and behave |
| `docs/PRODUCT-SLICE-MAP.md` | Planning baseline; does not authorize implementation by itself |
| `docs/STUDENTS-LIST-V1-DECISIONS.md` | Binding Students List v1 Product + UI/UX |
| `docs/STUDENTS-MANAGEMENT-V1-DECISIONS.md` | Binding Register / Profile / Edit / Archive-Reactivate |
| `docs/PROJECT-STATE.md` | Current repo state; implementation remains unauthorized until Product Owner says otherwise |

**Terminology:** Driving Training Center / مركز تدريب القيادة / `TrainingCenter`. Never School / Driving School / مدرسة / مدرسة سواقة / مدرسة قيادة / مركز تدريب السواقة.

**Foundation primitives:** Button and Input are implemented and reusable. Input remains a native `<input>` wrapper; do not expand its API. FormField is not a pre-built primitive.

---

## 2. Capability Outcome

When this capability is complete, an authorized operator can:

- Open **Students** at `/students` and work a Training Center-wide list (approved columns, search, status filter, approved states, viewport-appropriate presentation).
- **Register** a Student at `/students/new` with approved fields, then land on that Student’s Profile.
- **View** Student information at `/students/[id]`, with List → Profile (Full Name) and Profile → Students (Back/Breadcrumb).
- **Maintain** approved editable fields (no autosave; Registration Date and Status not generic-editable).
- **Archive** (with confirmation) and **Reactivate** (`ACTIVE` ↔ `ARCHIVED` only).

Data flows through a typed frontend repository/adapter. Screens are fixture-backed until a backend contract exists. Replacing the data source later must not require redesigning the screens.

Arabic/RTL and English/LTR are first-class. Desktop / Laptop / Tablet / Mobile are required. Accessibility baseline and relevant loading / empty / error / success states are met. Product Owner visual approval remains part of Product screen Definition of Done (`docs/UIUX-FOUNDATION.md` §15).

---

## 3. Included Scope

1. **Students List** — `/students` per `docs/STUDENTS-LIST-V1-DECISIONS.md`.
2. **Register Student** — `/students/new` per `docs/STUDENTS-MANAGEMENT-V1-DECISIONS.md`.
3. **Student Profile** — `/students/[id]`.
4. **Maintain / Edit Student** — distinct edit mode/surface on Profile; approved editable fields only.
5. **Archive / Reactivate** — Profile-owned lifecycle; Archive confirmed; Reactivate not destructive.
6. **Frontend data boundary** — typed Student model, repository/adapter, fixture implementation, UI must not import fixtures.
7. **Cross-cutting** — AR/RTL, EN/LTR, responsive, accessibility baseline, approved states, UI/UX Foundation, CSS Modules + logical properties, existing tokens only.

Minimum page chrome required to host these routes is in scope. Full App Shell / sidebar / account / Training Center switcher is not.

---

## 4. Explicitly Excluded / Deferred

Do not include, invent, or “complete” in this work package:

- Backend APIs, URLs, payloads, or endpoint contracts
- Authentication, session, roles, permissions, Security / Access Architecture
- Conditional visibility of Register or Profile fields by role
- Enrollment, Lessons, Training Program, Payments, Student Portal
- Operational history data shape, source, or presentation (capability acknowledged; implementation deferred)
- Reports / Analytics / Notifications
- Full App Shell / navigation architecture
- Speculative Product fields (email, gender, Branch on Student, etc.)
- Speculative validation rules or validation copy
- Speculative reusable design-system primitives (Table, Select, Modal, Toast, Badge, PageHeader, Pagination, Textarea-as-shared-primitive, FormField unless separately authorized)
- Token expansion beyond the approved `--trolova-*` set
- New dependencies (form/query/validation/UI libraries)
- Locale-based routing
- User-facing list sorting controls or Product pagination UI
- Branch column/filter
- National ID search
- Treating Student as an authenticated User
- Date / phone / address **formatting** invention (WAITING FOR BACKEND CONTRACT — store and display fixture strings as provided)

---

## 5. Existing Foundation Reused

Inspected repository (no production product screens exist; `app/page.tsx` returns `null`).

| Foundation | Location | Reuse |
|------------|----------|--------|
| Next.js 15 App Router | `app/` | Add `app/students/...` route files only |
| Root layout + LamaSans + LanguageProvider | `app/layout.tsx` | Wrap already present; do not rebuild i18n |
| Tokens + reset | `app/globals.css` | Consume existing `--trolova-*` only |
| Button | `src/components/Button/` | Primary/secondary actions (Register, submit, retry, Archive/Reactivate as appropriate by hierarchy — not extra variants) |
| Input | `src/components/Input/` | Search; text fields on register/edit |
| i18n | `src/i18n/` (`LanguageProvider`, `useLanguage`, empty `dictionaries`) | Extend dictionaries with a Students namespace; no locale routes |
| Vitest + Testing Library | `src/**/*.test.{ts,tsx}`, `vitest.config.ts` | Colocated unit/component tests |
| Playwright | `tests/browser/` | Capability browser coverage; keep existing foundation specs |
| CSS Modules + logical properties | Button/Input modules | Same pattern for new screen-scoped CSS |

Do **not** reuse or migrate legacy Driver Journey Platform screens. Legacy is reference only.

**Avoid duplication:** one Student type, one repository interface, one fixture source, one Students dictionary namespace, one list surface (desktop table vs mobile structured rows as presentation of the same Product truth — not two Product models). Register and Edit share the same approved field set; do not invent a second Student shape.

---

## 6. Proposed Frontend Architecture

Only what the current repo and approved decisions support.

### 6.1 Student types / model boundary

Proposed module root: `src/students/` (feature-local; no speculative `src/design-system/`).

Typed frontend Student (identity for fixtures and `/students/[id]` — **not** an API contract):

- `id` — frontend entity identity for routing and repository operations
- `fullName`
- `primaryPhone`
- `nationalId` — optional
- `location` — optional (Location / Address)
- `notes` — optional
- `registrationDate` — system-set; not user-entered; not editable
- `status` — `'ACTIVE' | 'ARCHIVED'` only

No Enrollment fields.

### 6.2 Repository / adapter

- `StudentRepository` interface: list (with search + status filter inputs as **frontend query**, not HTTP), getById, create, update, archive, reactivate.
- Return typed results plus failure modes the UI already must handle (list error, profile unavailable). Do **not** invent REST paths, status codes, or payload schemas.
- Registration Date set by the repository at create time. New Student status `ACTIVE`.
- Status changes **only** via archive / reactivate methods — not via generic update.

### 6.3 Fixture source

- `src/students/fixtures.ts` — fixture records only.
- `src/students/fixture-repository.ts` — the only production module allowed to import fixtures.
- UI, route files, and screen components **must not** import `fixtures.ts`.
- Composition: a small client provider/factory (e.g. `StudentRepositoryProvider`) supplies the repository implementation to screens. Swapping to a future backend adapter replaces this composition root only.

### 6.4 Routes

| Route | Owner |
|-------|--------|
| `/students` | Students List |
| `/students/new` | Register Student (dedicated page, not Modal/Drawer) |
| `/students/[id]` | Student Profile + associated edit mode/surface + Archive/Reactivate |

No other Product routes. No App Shell routes. `/` stays a placeholder unless a later authorized batch says otherwise.

### 6.5 Screen ownership

- Route files in `app/students/` stay thin: compose providers + screen component.
- Screen components live under `src/students/` with colocated `.module.css` and `.test.tsx`.
- List search/filter/state live in the List screen, talking only to the repository.
- Profile owns view, edit surface, and lifecycle actions.
- Minimum chrome: page context, title, primary action, workspace. No sidebar, no KPI cards, no charts.

### 6.6 Component boundaries

- Reuse **Button** and **Input** only as shared primitives.
- List table/rows, status presentation (not color-alone), empty/error/skeleton markup, filter control, confirmation UI, and labeled field composition are **screen-local** until a first-use pattern is designed, reviewed, and approved.
- **FormField** is not pre-authorized (`AGENTS.md`, `PROJECT-STATE.md`). Register/Edit use Input + semantic `<label>` (and a local notes control if required) unless Product Owner authorizes a FormField primitive as first real form usage.
- **Notes:** Input is a native `<input>` only. A local `<textarea>` in the register/edit screen is allowed if Notes cannot honestly be a single-line Input. That does **not** authorize a shared Textarea primitive.
- **Status filter:** no Select primitive. Use a semantic local control (e.g. native `<select>` or grouped buttons) decided JIT before List implementation — not a new design-system Select.

### 6.7 i18n approach

- Default remains AR/RTL via `src/i18n/config.ts` and `app/layout.tsx`.
- Extend `Dictionary` + `dictionaries.ts` with a `students` (or equivalent) namespace as screens land.
- No locale-based routing (`docs/FRONTEND-DECISIONS.md`).
- Do not invent Product copy. Strings already recorded in approved docs may be used; any additional operator-facing copy is a JIT Product/UI copy decision (see §8). Tests may drive `useLanguage().setLanguage` / `toggleLanguage` for EN/LTR. Do not add a full account/header language product unless a later visual-review need is explicitly authorized as minimum chrome.

### 6.8 Testing approach

- Vitest + Testing Library colocated under `src/students/**/*.test.{ts,tsx}`.
- Repository tests: fixture-backed behavior (create sets date + ACTIVE; archive/reactivate; search/filter; UI modules never import fixtures).
- Component tests: approved columns/fields, navigation affordances, states, labels, keyboard/accessible names.
- Playwright under `tests/browser/` for route smoke, AR/RTL default, EN/LTR switch, and representative viewports (including 375px overflow check pattern already used in `tests/browser/foundation.spec.ts`).
- `npm run typecheck`, `npm run test`, `npm run build`, and Playwright remain required at capability close. They are necessary but not sufficient for Product screen Done.

---

## 7. Execution Batches

Each batch is independently reviewable. **STOP after every batch.** Do not start the next batch without explicit Product Owner authorization.

File lists are **expected** planning targets. JIT UI/UX review may rename or split screen-local files; it must not expand Product scope.

### Batch 1 — Student data boundary + fixtures

**Objective:** Typed Student model, repository interface, fixture data, fixture-backed adapter, and a composition path so later UI cannot import fixtures.

**Expected files to create/modify:**

- Create `src/students/types.ts`
- Create `src/students/repository.ts` (interface + result types only)
- Create `src/students/fixtures.ts`
- Create `src/students/fixture-repository.ts`
- Create `src/students/student-repository-provider.tsx` (or equivalent composition root)
- Create `src/students/fixture-repository.test.ts`
- Create `src/students/repository-boundary.test.ts` (assert screen-facing modules do not import fixtures — or equivalent architectural test)

**Approved behavior included:**

- Approved fields only; `ACTIVE` \| `ARCHIVED`; Registration Date system-set on create; create starts ACTIVE; update cannot change Registration Date or Status; archive/reactivate are the only status transitions; list query supports Full Name + Primary Phone search and All/Active/Archived filter; default list order newest Registration Date first.

**JIT before this batch:** None for the data shape itself (fields are approved). Fixture **values** must not invent formatting rules.

**Tests/verification:**

- Vitest for create/update/archive/reactivate/list/getById and failure cases needed by later screens.
- Typecheck.

**STOP condition:** Data boundary exists; no routes, no screens, no visual UI. STOP for review.

---

### Batch 2 — Students List

**Objective:** Production Students List at `/students` using the repository, not fixtures.

**Expected files to create/modify:**

- Create `app/students/page.tsx`
- Create `src/students/StudentsList/StudentsList.tsx`
- Create `src/students/StudentsList/StudentsList.module.css`
- Create `src/students/StudentsList/StudentsList.test.tsx`
- Modify `src/i18n/types.ts` and `src/i18n/dictionaries.ts` (Students List strings only)
- Optionally create `tests/browser/students-list.spec.ts` (may defer remaining viewport/i18n hardening to Batch 7 if listed in that batch)

**Approved behavior included:**

- Columns: Full Name, Primary Phone, Registration Date, Status, Actions.
- Search: Full Name + Primary Phone; no National ID search.
- Status filter: All / Active / Archived; no Branch filter.
- No user-facing sort; newest Registration Date first.
- No pagination UI.
- Register Student is the primary page action (control present; flow is Batch 3).
- Full Name is the Profile entry (not the full row). If Profile is not yet implemented, preserve a clean boundary (link may 404-avoid or no-op with authorized placeholder — **do not** build Profile in this batch).
- Do not expose Archive/Reactivate as list quick actions.
- States: loading skeleton rows; empty no-Students with Register CTA; empty search/filter distinct + clear; inline list error + retry; success populated workspace.
- Desktop/laptop operational table/list; tablet same Product truth; mobile structured rows (Full Name + Status primary; phone + date secondary). No KPI/charts.

**JIT needed before implementation:**

- WAITING FOR UI/UX DECISION: exact list layout, table vs row markup, filter control form, skeleton row design, empty-state visual style, Actions column contents for v1 (Profile entry only vs empty actions).
- WAITING FOR PRODUCT DECISION: operator-facing copy not already recorded (empty/error/retry/clear/filter labels in AR and EN).

**Tests/verification:**

- Component tests for columns, search/filter, states, Full Name as navigation affordance, no Branch/National ID.
- Typecheck + Vitest. Browser smoke if included here.

**STOP condition:** List is reviewable in isolation. No register page, no profile, no edit, no archive UI. STOP for review.

---

### Batch 3 — Register Student

**Objective:** Dedicated registration page at `/students/new`; success navigates to `/students/[id]`.

**Expected files to create/modify:**

- Create `app/students/new/page.tsx`
- Create `src/students/RegisterStudent/RegisterStudent.tsx`
- Create `src/students/RegisterStudent/RegisterStudent.module.css`
- Create `src/students/RegisterStudent/RegisterStudent.test.tsx`
- Modify `src/i18n/types.ts` and `src/i18n/dictionaries.ts`
- Modify List Register action to navigate to `/students/new`
- Optionally wire a temporary Profile destination stub **only if** Batch 4 is not yet authorized — prefer not inventing a fake Profile screen; if Profile route is missing, success navigation target is still `/students/[id]` and Batch 4 fills it. Do not implement Profile UI here.

**Approved behavior included:**

- Fields: Full Name, Primary Phone required (normal labels, no `*`); National ID, Location/Address, Notes optional labeled `Optional / اختياري`.
- Registration Date and Status not on the form.
- Submit in-progress state; inline errors close to field/form; do not invent validation rules or error copy.
- Success: repository create then navigate to new Profile.

**JIT needed before implementation:**

- WAITING FOR UI/UX DECISION: exact registration layout, field grouping, submitting/skeleton pattern; whether Notes is local textarea vs Input; whether first form usage authorizes FormField (default plan: **no FormField** unless Product Owner authorizes it as this batch’s primitive).
- WAITING FOR PRODUCT DECISION: submit/cancel/page title copy beyond approved Register Student / تسجيل طالب.
- WAITING FOR BACKEND CONTRACT: do not invent validation messages; fixture repository may only fail in generic ways already required by UI states.

**Tests/verification:**

- Form field presence, optional labeling, no date/status fields, submit loading, success calls create and navigates, UI does not import fixtures.
- Typecheck + Vitest.

**STOP condition:** Registration page exists and posts through the repository. Profile/edit/archive not built. STOP for review.

---

### Batch 4 — Student Profile

**Objective:** View-primary Profile at `/students/[id]` with List ↔ Profile navigation.

**Expected files to create/modify:**

- Create `app/students/[id]/page.tsx`
- Create `src/students/StudentProfile/StudentProfile.tsx`
- Create `src/students/StudentProfile/StudentProfile.module.css`
- Create `src/students/StudentProfile/StudentProfile.test.tsx`
- Modify Students List Full Name navigation to `/students/[id]`
- Modify `src/i18n/types.ts` and `src/i18n/dictionaries.ts`

**Approved behavior included:**

- Show approved Student information (view surface).
- List → Profile: Full Name is the primary link; not the full row.
- Profile → Students: clear Back/Breadcrumb. Scroll restoration not required. Search/filter preservation only if natural; not a blocker.
- States: skeleton aligned with Profile; unavailable/missing inline error + recovery; success populated view. No Toast as the failed-Profile replacement.
- Mobile: full Student information remains present.

**JIT needed before implementation:**

- WAITING FOR UI/UX DECISION: exact Profile layout, field grouping, visual hierarchy, skeleton, Back/Breadcrumb treatment (still not full App Shell).
- WAITING FOR PRODUCT DECISION: Profile copy not already approved.
- WAITING FOR SECURITY / ACCESS ARCHITECTURE: do not invent role-conditional fields; if getById fails, show the approved unavailable state only.

**Tests/verification:**

- Renders approved fields; missing id state; name link from list (or unit-level href); back path to `/students`; no enrollment fields.
- Typecheck + Vitest.

**STOP condition:** View Profile only. No edit mode, no Archive/Reactivate controls. STOP for review.

---

### Batch 5 — Maintain / Edit Student

**Objective:** Distinct edit mode/surface associated with Profile; save returns to view.

**Expected files to create/modify:**

- Modify `src/students/StudentProfile/` (or add `StudentEdit` colocated files if the approved surface is a distinct page — **only after** the JIT layout decision)
- Create/modify matching `.module.css` and `.test.tsx`
- Modify dictionaries as needed

**Approved behavior included:**

- Editable: Full Name, Primary Phone, National ID, Location/Address, Notes.
- Not editable: Registration Date, Status.
- Not permanently inline-editable; no autosave.
- Save in-progress; inline errors; success returns to Profile view.

**JIT needed before implementation (blocking):**

- WAITING FOR UI/UX DECISION: exact edit surface (inline panel vs edit page), field grouping, cancel/save placement. **Do not start this batch until that decision is recorded.**
- Same FormField/Notes control rule as Batch 3.
- WAITING FOR PRODUCT DECISION: edit/save/cancel copy.

**Tests/verification:**

- Only approved fields editable; date/status locked; no autosave; save → view; repository update used.
- Typecheck + Vitest.

**STOP condition:** Edit works through the repository. Archive/Reactivate still absent. STOP for review.

---

### Batch 6 — Archive / Reactivate

**Objective:** Profile-owned lifecycle ACTIVE ↔ ARCHIVED.

**Expected files to create/modify:**

- Modify Profile screen files to host Archive / Reactivate
- Create screen-local confirmation UI files (not a speculative shared Modal primitive unless first-use is designed, reviewed, and approved in this batch)
- Tests + dictionaries

**Approved behavior included:**

- Not list quick actions.
- Archive is consequential and requires explicit confirmation (first confirmation in the system — design/review/approve JIT; may later become reusable, not pre-built).
- Reactivate is recovery, not destructive styling.
- Status not color-alone.

**JIT needed before implementation (blocking):**

- WAITING FOR UI/UX DECISION: placement on Profile, confirmation dialog design, Reactivate visual weight. **Do not start this batch until confirmation UI is approved.**
- WAITING FOR PRODUCT DECISION: confirmation copy.

**Tests/verification:**

- Archive requires confirm; cancel does not archive; reactivate restores ACTIVE; list filter reflects status after action (component or repository-level).
- Typecheck + Vitest.

**STOP condition:** Lifecycle complete on Profile. No operational history UI. STOP for review.

---

### Batch 7 — Integrated responsive / i18n / accessibility / state hardening

**Objective:** Close cross-cutting gaps across List, Register, Profile, Edit, and lifecycle so the capability can enter one PR. No new Product behavior.

**Expected files to create/modify:**

- Existing screen CSS/components/tests only as needed for gaps
- `tests/browser/students-management.spec.ts` (or split list/register/profile specs)
- Dictionaries only for already-approved copy decisions from earlier batches

**Approved behavior included:**

- AR/RTL and EN/LTR first-class on all surfaces.
- Desktop / Laptop / Tablet / Mobile; mobile list rows vs table; forms operable with touch targets; Profile information not hidden.
- Accessibility baseline: semantic HTML, keyboard, visible focus, labels, accessible names, contrast via existing tokens, status not color-alone.
- All approved Loading / Empty / Error / Success states present and distinct.
- UI still does not import fixtures; no extra libraries; no token expansion.

**JIT needed before implementation:**

- WAITING FOR UI/UX DECISION: exact breakpoints and page max-width if still unresolved — adapt presentation without hiding Product truth; do not invent a global breakpoint system beyond what screens need.
- Do not use this batch to add App Shell, history, or backend contracts.

**Tests/verification:**

- Playwright: `/students`, `/students/new`, `/students/[id]`; default `lang=ar` `dir=rtl`; EN/LTR; 375px overflow; keyboard to primary actions.
- `npm run typecheck`, `npm run test`, `npm run build`, `npx playwright test`.
- Manual/browser review checklist from UI/UX Foundation §15 (agent verifies in browser when tools allow; Product Owner visual approval still required).

**STOP condition:** Hardening complete. Ready for §9 / §10 capability verification — still **not** merged, and **not** a substitute for Product Owner authorization to open the final PR.

---

## 8. JIT Decisions Queue

Only decisions genuinely required during implementation. Do not resolve them by assumption in a batch.

| Decision | When it blocks | Classification |
|----------|----------------|----------------|
| Operator-facing copy not already in approved docs (empty/error/retry/filter/submit/confirm/back labels, AR+EN) | Batches 2–6 | WAITING FOR PRODUCT DECISION |
| Exact Students List layout, filter control, skeleton rows, empty visual style, Actions column v1 contents | Batch 2 | WAITING FOR UI/UX DECISION |
| Exact registration page layout and field grouping; Notes control (Input vs local textarea); submitting pattern | Batch 3 | WAITING FOR UI/UX DECISION |
| Whether first form usage authorizes a FormField primitive | Batch 3 (default: no) | WAITING FOR UI/UX DECISION (FormField also not approved in `AGENTS.md` / `PROJECT-STATE.md`) |
| Exact Profile layout, field grouping, hierarchy, skeleton, Back/Breadcrumb chrome | Batch 4 | WAITING FOR UI/UX DECISION |
| Exact edit surface: inline panel vs edit page; cancel/save placement | Batch 5 | WAITING FOR UI/UX DECISION |
| Archive confirmation UI; Archive/Reactivate placement; Reactivate visual weight | Batch 6 | WAITING FOR UI/UX DECISION |
| Exact breakpoints and page max-width | Batch 7 (screens may adapt without a global system) | WAITING FOR UI/UX DECISION |
| Toast vs inline-only (approved docs: list/profile failure is **inline**, not Toast) | Only if a later surface truly needs transient success feedback | WAITING FOR UI/UX DECISION |
| Date / phone / address formatting source of truth | Display fixture strings as stored until contract exists | WAITING FOR BACKEND CONTRACT |
| Backend API contracts for list/get/create/update/archive/reactivate | Entire capability stays fixture-backed | WAITING FOR BACKEND CONTRACT |
| Operational history data shape, source, presentation | Out of this capability | WAITING FOR BACKEND CONTRACT / WAITING FOR PRODUCT DECISION |
| Roles, permissions, conditional Register/Profile visibility, access errors beyond generic unavailable | Do not implement gating | WAITING FOR SECURITY / ACCESS ARCHITECTURE |
| Full App Shell / sidebar / navigation architecture | Minimum chrome only | WAITING FOR PRODUCT DECISION |

---

## 9. Final Capability Verification

Before requesting the **one** integrated PR, all of the following must hold:

1. Working tree contains only this capability’s work on `feature/students-management-v1`.
2. Routes `/students`, `/students/new`, `/students/[id]` exist and match approved behavior.
3. UI modules do not import `fixtures.ts`.
4. No backend contracts, auth, roles, enrollment, history UI, App Shell, or extra dependencies were added.
5. `npm run typecheck` passes.
6. `npm run test` passes.
7. `npm run build` passes.
8. Playwright capability + existing foundation specs pass.
9. Browser review: AR/RTL, EN/LTR, Desktop/Laptop/Tablet/Mobile, keyboard/accessibility baseline, overflow/long content, all relevant states.
10. Button and Input reused; FormField and other primitives absent unless a batch explicitly authorized one.
11. Tokens unchanged in count/authority; CSS Modules + logical properties on new UI.
12. Product Owner visual approval still required for Product screen Done.

---

## 10. Definition of Done

Students Management v1 is ready for **one final integrated capability PR** when:

- Batches 1–7 have each been Product Owner–authorized, implemented, and reviewed (STOP after each).
- §3 Included Scope is implemented and §4 remains excluded.
- §9 verification has passed.
- This work plan was not used as a vehicle to change Product decisions.
- Implementation PRs per screen were **not** created; delivery is a single PR from `feature/students-management-v1` toward `main`, opened only when the Product Owner authorizes commit/push/PR.

**This work plan does not authorize Batch 1 or any later batch.** Explicit Product Owner authorization is required before any production implementation.
