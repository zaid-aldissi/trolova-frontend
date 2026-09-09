# Students Management v1 — Approved Decisions

Approved by Product Owner. Binding for Students Management v1 implementation.
Do not modify without explicit Product Owner authorization.

Students List v1 decisions remain separately authoritative.
See `docs/STUDENTS-LIST-V1-DECISIONS.md`. They are not duplicated here.

---

## Scope

Covers:

- Register Student
- Student Profile
- Maintain / Edit Student
- Archive / Reactivate Student

Does NOT cover:

- Enrollment flows
- Lessons
- Training Program
- Payments
- Student Portal / self-service
- Operational history data shape or presentation (deferred)
- Full App Shell / navigation architecture
- Exact roles and permissions
- Backend endpoint contracts

---

## Student Data Model — Approved Fields

| Field             | Required / Optional          | Notes                                                      |
|-------------------|------------------------------|------------------------------------------------------------|
| Full Name         | Required                     |                                                            |
| Primary Phone     | Required                     |                                                            |
| National ID       | Optional                     |                                                            |
| Location / Address | Optional                    |                                                            |
| Notes             | Optional                     |                                                            |
| Registration Date | System-set                   | Set automatically at registration. Not user-entered. Not editable. |
| Status            | System-managed lifecycle     | ACTIVE or ARCHIVED only. Not a generic editable field.     |

Student remains distinct from Enrollment. No Enrollment-related fields belong here.

---

## Form Required / Optional Pattern

- Required fields use normal field labels with no additional marker.
- Optional fields explicitly show: `Optional / اختياري`
- Do NOT use `*` as the required-field convention.
- This presentation decision does not imply or invent validation rules.

---

## Register Student

- Registration uses a dedicated page. Route: `/students/new`
- Do NOT use Modal or Drawer for Student registration v1.
- Registration Date is system-set at the moment of registration — it does not appear on the registration form.
- A newly registered Student starts as ACTIVE — status is not user-selectable at registration.
- After successful registration: navigate to the newly created Student Profile.

**Form fields on the registration page:**

- Full Name (required)
- Primary Phone (required)
- National ID (optional — labeled `Optional / اختياري`)
- Location / Address (optional — labeled `Optional / اختياري`)
- Notes (optional — labeled `Optional / اختياري`)

Registration Date and Status are NOT on the registration form.

**States:**

- Loading / submitting: the submit action must reflect in-progress state.
- Error: inline, close to the relevant field or form context. Do not invent validation rules or error copy.
- Success: navigate to the newly created Student Profile upon successful registration.

Exact form layout, field grouping, and skeleton/loading pattern remain JIT under UIUX-FOUNDATION.

---

## Student Profile

- Route: `/students/[id]`
- Profile is primarily a view surface.

**Entry from Students List:**

- Student Full Name is the primary Profile navigation link from the Students List.
- Do NOT make the full table row the primary clickable navigation target.

**Back / Breadcrumb:**

- Provide a clear Back/Breadcrumb path to Students from the Profile.
- List scroll-position preservation is NOT a v1 requirement.
- Search/filter-state preservation may only be retained if naturally supported without speculative architecture. It is not an implementation blocker.

**States:**

- Loading: skeleton aligned with the Profile structure.
- Unavailable / missing data: if the Student record cannot be loaded (not found, access error), an appropriate inline error with recovery action. Do not use Toast as the replacement for a failed-Profile state.
- Success: normal populated Profile view.

Exact Profile layout, field grouping, and visual hierarchy remain JIT under UIUX-FOUNDATION.

---

## Maintain / Edit Student

- Editing uses a distinct edit mode or surface associated with the Student Profile.
- Profile fields are NOT permanently inline-editable.
- No autosave behavior.

**Editable fields:**

- Full Name
- Primary Phone
- National ID (optional)
- Location / Address (optional)
- Notes (optional)

**Not editable:**

- Registration Date (system-set, never editable)
- Status (lifecycle-managed only through Archive / Reactivate)

**States:**

- Loading / submitting: the save action must reflect in-progress state.
- Error: inline, close to the relevant field or form context.
- Success: return to Profile view state on successful save.

Exact edit surface form (inline panel vs. edit page), field grouping, and cancel/save action placement remain JIT under UIUX-FOUNDATION.

---

## Archive / Reactivate

- Archive and Reactivate belong to Student Profile work, not Students List quick actions (carried from `docs/STUDENTS-LIST-V1-DECISIONS.md`).
- Student lifecycle: ACTIVE ↔ ARCHIVED only. No other states exist.

**Archive:**

- Archive is a consequential lifecycle action.
- Archive requires explicit confirmation before execution.
- The confirmation pattern will be the first consequential confirmation in the system. Design it, review it, and approve it JIT. It may then become reusable.

**Reactivate:**

- Reactivate is a clear recovery lifecycle action.
- Reactivate is NOT styled or treated as destructive.

Status presentation must not rely on color alone (carried from `docs/STUDENTS-LIST-V1-DECISIONS.md`).

Exact placement of Archive / Reactivate actions on the Profile, confirmation dialog design, and Reactivate visual weight remain JIT under UIUX-FOUNDATION.

---

## Operational History

- Authorized users can review Student operational history. This is an approved Product capability.
- Operational history does NOT block Students Management v1 implementation.
- Data shape, data source, and presentation are deferred.
- Do not invent data shape, endpoint, or presentation.

---

## Responsive Experience

Desktop / Laptop / Tablet / Mobile are required for all surfaces per UIUX-FOUNDATION.

- Mobile: full Student profile information must remain present. Information with Product consequences must not be hidden without approval.
- Registration and edit forms must be fully operable at mobile sizes with appropriate touch targets.
- Exact responsive layouts and breakpoints are JIT under UIUX-FOUNDATION.

---

## Internationalization

Arabic/RTL and English/LTR are first-class from initial implementation, per UIUX-FOUNDATION.

---

## Accessibility

Baseline carried from UIUX-FOUNDATION:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Proper labels and accessible names
- Sufficient contrast
- Status not relying on color alone
- Reasonable touch targets

---

## JIT Component Patterns

The following may be justified by first real usage within this group.
None are pre-authorized as required reusable primitives:

- FormField — first real form usage will establish the API
- Confirmation — first usage is the Archive confirmation; its design sets the system precedent
- Skeleton — first Profile/page loading pattern
- Toast — if a surface genuinely requires transient feedback; first usage locks the pattern

Design, review, and approve each JIT at the point of first real use.

---

## Still Deferred / Not Solved by This Approval

| Item | Category |
|------|----------|
| Backend API contracts (registration, profile fetch, update, archive, reactivate) | WAITING FOR BACKEND CONTRACT |
| Operational history data shape, source, and presentation | WAITING FOR BACKEND CONTRACT |
| Date / phone / address formatting source of truth | WAITING FOR BACKEND CONTRACT |
| Exact roles and permissions | WAITING FOR SECURITY / ACCESS ARCHITECTURE |
| Security / Access Architecture | WAITING FOR SECURITY / ACCESS ARCHITECTURE |
| Whether any Profile field is conditionally visible by role | WAITING FOR SECURITY / ACCESS ARCHITECTURE |
| Whether Register Student action is conditionally shown | WAITING FOR SECURITY / ACCESS ARCHITECTURE |
| Exact edit surface form (inline panel vs. edit page) | WAITING FOR UI/UX DECISION |
| Exact Profile layout and field grouping | WAITING FOR UI/UX DECISION |
| Exact registration page layout | WAITING FOR UI/UX DECISION |
| Confirmation dialog UI design | WAITING FOR UI/UX DECISION |
| Exact breakpoints and page max-width | WAITING FOR UI/UX DECISION |
| Full App Shell / sidebar / navigation architecture | WAITING FOR PRODUCT DECISION |
| Operational history presentation | WAITING FOR PRODUCT DECISION |
