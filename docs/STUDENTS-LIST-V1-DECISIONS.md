# Students List v1 — Approved Decisions

Approved by Product Owner. Binding for Students List v1 implementation.
Do not modify without explicit Product Owner authorization.

---

## Scope

- Students List is Training Center-wide.
- Branch is operational context, not Student ownership.
- No Branch column or Branch filter in v1.
- Future access restrictions may limit what an authorized user sees without changing this Product truth.

---

## Visible Columns

- Student — Full Name
- Primary Phone
- Registration Date
- Status
- Actions

Do NOT include:

- National ID
- Location / Address
- Notes
- Enrollment
- Training Program
- Instructor
- Lessons
- Balance
- Enrollment Status

Student remains distinct from Enrollment.

---

## Status

- ACTIVE
- ARCHIVED
- Status presentation must not rely on color alone.

---

## Register Student

- Register Student / تسجيل طالب is the primary page action.
- Student registration capability is approved.
- Registration flow implementation is NOT part of Students List v1.

---

## Student Profile

- Students List provides an entry toward the approved Student Profile capability.
- Do NOT implement Student Profile as part of this slice.
- Preserve a clean boundary if the profile destination is not yet implemented.

---

## Archive / Reactivate

- Archive and reactivate remain approved Product capabilities.
- Do NOT expose them as quick lifecycle actions in Students List v1.
- Their UI placement is deferred to Student Profile work.

---

## Search

- Search is included in v1.
- Search scope:
  - Full Name
  - Primary Phone
- National ID search is not included in v1.

---

## Filtering

- Status filter only:
  - All
  - Active
  - Archived
- No Branch filter.
- No additional filters.

---

## Sorting

- No user-facing sorting controls in v1.
- Default presentation order: newest Registration Date first.

---

## Pagination

- No Product pagination UI is locked for v1.
- Future data architecture should support pagination without speculative UI now.

---

## Responsive Experience

**Desktop / Laptop:**
- Operational table/list workspace.
- Useful information density.
- Data is the hero.

**Tablet:**
- Preserve the same Product truth.
- Adapt spacing/presentation only.

**Mobile:**
- Structured list rows.
- NOT a shrunken desktop table.
- NOT decorative cards.
- Full Name + Status are primary.
- Primary Phone + Registration Date are secondary.

---

## Screen Structure

Approved conceptual hierarchy:

```
Page context
  → Students title + Register Student
  → Search + Status filter
  → Students data workspace
  → Relevant state presentation
```

Do NOT add:

- KPI cards
- charts
- dashboard summary cards
- decorative metrics

---

## Route / Navigation

- Product destination: Students / الطلاب
- Route: /students
- Do NOT design or infer the full App Shell / sidebar / navigation architecture.
- Only the minimum shell required by this slice may later be considered.

---

## States

**Loading:**
- Skeleton rows aligned with the list structure.

**Empty — no Students:**
- Calm empty state.
- Register Student CTA where appropriate for an authorized user.

**Empty — search/filter:**
- No Students found.
- Provide a way to clear search/filter.
- Keep this distinct from the no-Students-yet state.

**Error:**
- Inline error inside the data workspace.
- Retry action.
- Do not use Toast as the replacement for failed-list state.

**Success:**
- Normal populated Students workspace.

---

## Data Boundary

- Use a typed frontend data adapter/repository boundary with fixture data before backend availability.
- UI must not import fixture data directly.
- Future backend API should replace the data source without redesigning the UI.
- Do NOT invent backend endpoint contracts.

---

## Internationalization

- Arabic/RTL and English/LTR are first-class from initial implementation.

---

## Accessibility

- Semantic controls/data structure.
- Proper labels and accessible names.
- Keyboard navigation.
- Visible focus.
- Status not dependent on color alone.
- Reasonable responsive/touch interaction.

---

## Existing UI/UX Foundation

All approved UI/UX Foundation v1 rules remain authoritative:

- calm
- clear
- operational
- professional
- reliable
- data-focused
- borders/structure over decorative shadows
- controlled Trolova Deep Blue
- JIT Design System
- no speculative shared components
- Product Owner visual approval required

---

## Still Deferred / Not Solved by This Approval

- Backend API contract
- Exact Security / Access Architecture
- Exact roles and permissions
- Student registration flow
- Student Profile implementation
- Archive/reactivate UI implementation
- Full App Shell / sidebar / navigation architecture
- Pagination UI
- Additional filters
- Advanced sorting
- Enrollment-related Student information
- Student operational history presentation
