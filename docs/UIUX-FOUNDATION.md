# UI/UX Foundation v1 — Trolova Frontend

Approved by Product Owner. Binding for all implementation work.
Do not modify without explicit Product Owner authorization.

---

## 1. Product Experience

Trolova is an Operating System for Driving Training Centers, not merely a dashboard.

Experience: **Calm · Clear · Operational · Professional · Reliable · Data-focused.**

Operational work is the hero. Decoration is secondary.

Tables, lists, scheduling, entity details, forms, and operational actions take priority over decorative dashboards, charts, and KPI cards.

---

## 2. Visual Direction

- Light interface as the primary direction.
- White / very light neutral surfaces.
- Trolova Deep Blue is the controlled brand and primary-action color.
- Borders and subtle structural separation are preferred over decorative shadows.
- Shadows only when functional elevation is required.
- Moderately rounded corners; avoid excessively soft/bubbly UI.
- Simple, consistent line-style icons.
- Minimal decoration.
- Medium-to-high information density depending on screen purpose.
- Whitespace serves hierarchy/readability, not excessive visual emptiness.
- Existing approved `--trolova-*` tokens remain the design-value authority.
- LamaSans remains the approved primary typeface.

**Reference philosophy only:**
Linear calm + Samsara operations + Stripe data clarity + ServiceTitan scheduling thinking.
These are inspiration references, NOT designs to copy.

---

## 3. Layout Philosophy

Do not default every screen to a card dashboard.

Preferred conceptual hierarchy:

```
Context / Page Header
  → Actions
  → Controls / Filters
  → Primary Workspace
  → Supporting Information
```

The Primary Workspace is the visual and operational hero.

Examples:
- Students: data/list surface is primary.
- Scheduling: schedule/timeline is primary.
- Student Details: entity information and operations are primary.

Cards are used only when they improve hierarchy or group related information.

Persistent navigation + operational workspace is an accepted design direction.
However, exact App Shell, navigation structure, routes, grouping, and navigation behavior remain unresolved and JIT.

---

## 4. Data & Operational Density

Trolova is intended for repeated operational use.

- Do not sacrifice useful information for cosmetic minimalism.
- Tables/lists may be information-dense while remaining scannable.
- Secondary information should be visually subordinate rather than arbitrarily removed.
- Identity, status, and actions should be quickly distinguishable.
- Avoid repeating the same information across multiple cards without operational value.
- Charts appear only when they support genuine understanding or decisions.
- Status colors communicate status/meaning only.
- Avoid excessive competing status colors in dense screens.

---

## 5. Forms

- Every production input requires a clear label.
- Placeholder is not a label replacement.
- Fields should be grouped semantically.
- Primary action must be visually clear.
- Secondary/cancel actions remain subordinate.
- Errors appear close to their relevant context.
- Required/optional presentation becomes consistent once the first approved pattern is established.
- Do not create a wizard merely because a form is long.
- Frontend must not invent validation behavior or validation copy.
- FormField implementation/API remains Just-in-Time until required by an approved Product screen.

---

## 6. Responsive Experience

Trolova is **fully responsive from the beginning.**

Required experience targets: **Desktop · Laptop · Tablet · Mobile.**

Principle: **Same Product. Same operational truth. Viewport-appropriate experience.**

Responsive does NOT mean shrinking desktop. Presentation and interaction may adapt to viewport/context, but Product truth must not change, and information with Product consequences must not be hidden without approval.

Every Product screen must be reviewed at its relevant responsive sizes.

---

## 7. Arabic / English + RTL / LTR

Arabic and English are first-class. Arabic/RTL is not a later adaptation.

- AR/RTL must be explicitly designed and reviewed.
- EN/LTR must be explicitly designed and reviewed.
- CSS logical properties are the default directional styling method.
- Avoid physical left/right properties when the meaning is directional.
- `text-align: start` is the normal directional default.
- Direction-sensitive icons must be reviewed for RTL behavior.
- Long Arabic content must be tested.
- Date/number/currency/phone formatting must come from an approved Product/domain/contract source, not frontend invention.

---

## 8. Accessibility

Accessibility is part of Definition of Done.

Baseline includes:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Proper labels
- Accessible names
- Sufficient contrast
- Clear disabled states
- Never relying on color alone for meaning
- Keyboard-operable controls
- Reasonable touch targets
- Appropriate screen-reader semantics

---

## 9. Interaction & System States

Relevant interactive controls must account for:

**Default · Hover · Focus · Active · Disabled**

Relevant Product/data experiences must account for:

**Loading · Empty · Error · Success**

Exact Skeleton / Toast / Error / Empty patterns are NOT globally locked yet. They are designed and approved Just-in-Time.

---

## 10. Actions & Feedback

- Actions require clear hierarchy.
- Avoid multiple competing primary actions without justification.
- Destructive actions are not ordinary primary actions.
- Sensitive operations require appropriate confirmation/feedback.
- Toast / Modal / Drawer / Inline feedback patterns are not chosen speculatively.
- The first real usage is designed, reviewed, and may then become reusable.

---

## 11. Just-in-Time Design System

Do NOT build a large speculative Design System.

Current approved foundation includes:
- Design tokens
- Typography foundation
- Button
- Input
- CSS architecture
- AR/EN + RTL/LTR foundation

Future patterns such as FormField, Table, Badge, PageHeader, Select, Modal, Drawer, Toast, EmptyState, Skeleton, and Pagination must originate from a real approved Product need.

Rule:

```
Product need
  → Design
  → Product Owner approval
  → reusable pattern if justified
  → implementation
  → validation
  → lock when proven reusable
```

---

## 12. Navigation / App Shell

Accepted design direction: **Persistent navigation + operational workspace.**

NOT currently locked:
- Navigation items, ordering, and grouping
- Exact sidebar design and collapsed behavior
- Header contents
- Training Center switcher behavior
- Account controls
- Routes
- Permissions-based navigation
- Mobile navigation

These require appropriate Product and Security/Access decisions.

---

## 13. Visual Concepts Are Not Product Authority

All generated visual concepts used during exploration are **design evidence only.**

Their appearance does NOT approve Product functionality.

Items shown in concepts such as Reports, Notifications, Messages, Maps, KPIs, statuses, fields, calendars, search, Training Center switchers, dashboards, or actions are NOT Product requirements merely because they appeared visually.

Rule:
- Product authority decides **WHAT** exists.
- Approved UI/UX governs **HOW** approved things should feel and behave visually.

---

## 14. Kiro UI/UX Governance

Kiro implements approved Product using approved Trolova UI/UX.

Kiro must NOT silently become the Product Designer.

Do not silently invent:
- Product behavior
- Navigation or routes
- Permissions
- Validation rules
- Product copy
- New design tokens
- Shared components
- Recurring visual patterns
- Responsive behavior with Product consequences
- Backend assumptions

When implementation requires an unresolved UI/UX decision, classify:

> **WAITING FOR UI/UX DECISION**

Report the smallest decision required. STOP. Do not automatically continue.

Existing waiting classifications remain valid:
- `WAITING FOR PRODUCT DECISION`
- `WAITING FOR BACKEND CONTRACT`
- `WAITING FOR SECURITY / ACCESS ARCHITECTURE`

---

## 15. Product Screen Definition of Done

Typecheck + tests + build are necessary but NOT sufficient.

A Product screen is not DONE until:

- [ ] Functional behavior verified
- [ ] Visual browser review completed
- [ ] AR / RTL reviewed
- [ ] EN / LTR reviewed
- [ ] Relevant Desktop / Laptop / Tablet / Mobile sizes reviewed
- [ ] Keyboard/accessibility baseline met
- [ ] Overflow and long-content behavior tested
- [ ] Relevant interaction/data states covered
- [ ] No invented Product behavior
- [ ] Product Owner visual approval received

---

## Explicitly Not Locked in v1

The following remain Just-in-Time unless separately approved:

- Exact sidebar, header, and navigation
- Exact routes
- Exact breakpoints
- Exact Table API
- Exact FormField API
- Modal design
- Toast system
- Mobile navigation
- Loading pattern
- Empty State visual style
- Page maximum width
- Individual Product screen layouts
- Product copy
