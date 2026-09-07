# Product Slice Map — Trolova Frontend

Approved by Product Owner. This is the approved frontend planning baseline.

This is a **planning order, NOT a rigid implementation contract.**

Individual screen behavior, fields, actions, routes, navigation, permissions, APIs,
and detailed UI remain Just-in-Time and require their proper authority/approval.

---

## Wave 0 — Shared Product Experience

- Home / Workspace

Minimum Product Shell required to host approved Product slices.

> **Important:** Exact App Shell, navigation items, routes, sidebar/header structure,
> mobile navigation, account controls, and access behavior are NOT approved here.
> Implement only the minimum shell required by an authorized real Product slice.

---

## Wave 1 — Center & People

- Training Center
- Branches
- Students
- Student Profile
- Instructors

**Students List is the currently selected first real data-oriented Product slice.**

---

## Wave 2 — Training Journey

- Enrollments
- Enrollment Detail / Journey
- Lessons

---

## Wave 3 — Daily Operations

- Scheduling / Lesson Coordination
- Instructor operational work
- Branch-context operational work

---

## Wave 4 — Resources & Examination

- Vehicles
- Driving Tests / Driving Test Attempts

---

## Wave 5 — Money

- Payments
- Enrollment financial history
- Financial Operations

---

## Wave 6 — Connected Operational Truth

- Entity history / timelines
- Cross-entity operational context
- Audit visibility

> History/audit is not assumed to exist only at the end. Where an earlier approved
> slice genuinely requires history/audit, that requirement may be handled
> Just-in-Time under the proper authority.

---

## Cross-Cutting UI/UX Requirements

The already-approved UI/UX Foundation v1 applies to EVERY Product slice:

- Calm, clear, operational, professional, reliable, data-focused experience
- Operational workspace/data is the hero
- Light-first visual direction
- Controlled Trolova Deep Blue usage
- Borders/structure over decorative shadows
- Medium-to-high operational information density
- Strong tables/lists/workspaces where appropriate
- AR/RTL and EN/LTR first-class
- Desktop / Laptop / Tablet / Mobile responsive experience
- Same Product truth across viewports
- Accessibility baseline
- Relevant interaction states
- Relevant Loading / Empty / Error / Success states
- JIT Design System — no speculative components
- No silent Product/UX invention
- Visual concepts are design evidence only, never Product authority
- Product Owner visual approval remains part of Product screen Definition of Done

---

## Not Promoted to Independent Product Slices by This Map

Domain concepts such as Training Program, Documents, or Configuration must NOT
automatically become standalone frontend modules/screens. They appear only when
required by an approved Product need.

---

## Not Authorized for Current Implementation by This Map

Do not treat the following as current implementation authorization:

- Student Portal / self-service details
- Reports / Analytics
- Notifications
- Advanced scheduling
- Exact Authentication / Security / Access architecture
- Pre-center experiences
- Any other Product-deferred capability

---

## Waiting Classifications

The following waiting classifications remain in effect:

- `WAITING FOR PRODUCT DECISION`
- `WAITING FOR BACKEND CONTRACT`
- `WAITING FOR SECURITY / ACCESS ARCHITECTURE`
- `WAITING FOR UI/UX DECISION`

Do not invent resolutions for items in these categories.

---

## Governance

- This map establishes planning sequence and scope visibility.
- It does NOT authorize implementation of all waves.
- Only an explicitly authorized slice may be implemented.
- Dependencies discovered later may justify a small sequencing adjustment.
  Kiro must report that dependency and STOP rather than silently reorder or expand scope.
- Do not invent missing screens merely to make the map look complete.
- Do not turn every domain entity into a navigation item.
- Do not create routes, components, or navigation from this documentation alone.
