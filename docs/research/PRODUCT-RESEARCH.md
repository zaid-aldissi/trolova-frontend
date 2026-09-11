> This document contains market and competitor research only.
> Findings recorded here are NOT approved TROLOVA product requirements, implementation commitments, roadmap items, or Domain Truth.
> Any finding must go through separate Product review before it can become an accepted TROLOVA decision.

# Research Index

| Entry | Theme | Primary source(s) | Research role |
|---|---|---|---|
| 001 | Scheduling, Instructor execution, progress, reminders, analytics | Booknetic article and surveyed products | Initial signals |
| 002 | Capacity recovery, Instructor execution, self-service, privacy, scheduling coordination | DrivingSchoolSoftware.com | Independent reinforcement and new operational signals |
| 003 | Availability, waiting mechanisms, entitlements, connected journeys, actor-specific surfaces | EKRA / Drive App | New distinctions and reinforcement |
| 004 | Pre-Lesson context, offline execution, geography, progress, readiness boundaries | DriveSchool Pro | New operational constraints |
| 005 | Reflection, Student locations/availability, recovery, offline operations, financial visibility | Total Drive | New perspective and reinforcement |
| 006 | Facility capacity, readiness, qualification, operational truth | Misha Infotech and Nexivo | Constraint synthesis |
| 007 | Training activity, structure, provenance, progress, cadence | Driving GradeBook, Drivers Ed Solutions, ZoomScheduler, WorkDo, Driveato | Training/progress synthesis |

Source-specific supplements remain attached to the relevant chronological location: EKRA / Drive App, IJRASET geographic matching, SetTime, and Drivofy.

# How to Read This Research

Entries preserve chronological research provenance. Multiple sources may independently reinforce the same signal. `NEW` describes a finding when its Entry was written; later reinforcement does not rewrite that historical label. Research Importance is not Product priority. Research findings are not Product Truth, and Deferred does not mean an approved roadmap commitment. Competitor terminology is not automatically TROLOVA terminology.

# Research Method / Future Entry Rules

Do NOT restructure or rewrite previous research entries when adding another source.

Append each new source as:

`Research Entry 002`, `Research Entry 003`, etc.

For every source capture:

1. Source and research date
2. What was actually observed
3. Most impressive/useful findings
4. Why each finding may matter for TROLOVA
5. Relationship to current TROLOVA Product Truth
6. Research importance
7. New ideas that require discussion
8. Repeated signals already seen in previous research
9. Potential differentiation opportunities
Clearly distinguish:

- observed competitor capability
- our interpretation
- existing TROLOVA truth
- exploratory idea
Never promote a research finding into an accepted Product decision.

# Research Entry 001 — Booknetic Driving School Management Software Article

## Source
Booknetic — “Top 10 Driving School Management Software for 2026”

Source URL:
[https://www.booknetic.com/blog/driving-school-management-software](https://www.booknetic.com/blog/driving-school-management-software)

Research date:
September 2026

## Context
The article surveys multiple driving-school management products and highlights recurring operational capabilities across products such as Booknetic, MyDrivingSchool, BookingTimes, Core Driving, Picktime, Driving GradeBook, GoRoadie Pro, Dation, Galileo, and GoDribe.

The goal of this entry is not to copy their feature sets.

The goal is to preserve the most relevant product signals that may be useful when evaluating TROLOVA's future product direction.

## Finding 1 — Intelligent Scheduling and Instructor Availability
Observed market capabilities include:

- Instructor availability
- conflict prevention
- calendar-based scheduling
- Student scheduling
- Instructor assignment
- Vehicle/resource allocation
- online booking
- calendar integrations

### Why this may matter for TROLOVA
TROLOVA already has a strong Scheduling/Lesson foundation built around operational eligibility and conflict prevention.

A potentially powerful future direction is making Scheduling an operational decision engine rather than only a calendar interface.

Conceptually:

Student needs Lesson
→ eligible Enrollment
→ eligible Instructors
→ Instructor availability
→ compatible/eligible Vehicle where applicable
→ Branch context
→ conflict detection
→ valid time slots
→ Lesson scheduling

This should be considered alongside TROLOVA's existing distinction:

Teaching Eligibility ≠ Scheduling Availability ≠ Software Access.

### Current TROLOVA relationship
Foundation exists.

Advanced availability, slot generation, Instructor working hours, recurring/bulk scheduling, and external calendar integrations are currently Deferred.

### Research importance
HIGH

## Finding 2 — Mobile-First Instructor Execution Experience
Several products emphasize mobile access for Instructors and operational Staff.

The interesting opportunity is not merely making the existing desktop UI responsive.

A dedicated Instructor execution flow could center around the Instructor's actual working day:

Today
→ Next Lesson
→ Student / Enrollment context
→ Start Lesson
→ Attendance
→ Training notes
→ Student progress/evaluation
→ Complete Lesson

### Why this may matter for TROLOVA
TROLOVA already distinguishes the Instructor operational profile from authentication identity and administrative Staff capacity.

A focused Instructor experience could make this distinction useful at the product experience level.

### Current TROLOVA relationship
Product direction already exists for a dedicated operational teaching experience.

Exact Instructor workspace, UX, actions, and access behavior remain Deferred until separately defined.

### Research importance
HIGH

## Finding 3 — Structured Student Progress and Skills
Several products track more than Lesson counts.

Observed concepts include:

- Student progress
- grades/evaluations
- Instructor notes
- performance history
- training progress
A future TROLOVA model could potentially represent progress across actual driving competencies, for example:

- Parking
- Lane control
- Roundabouts
- Observation
- other defined driving competencies
These examples are exploratory only and are NOT an approved competency taxonomy.

### Why this may matter for TROLOVA
Instead of understanding a Student only through completed Lesson count, the Training Center and Instructor could understand what the Student has learned, where improvement is needed, and how progress changes over time.

This could connect Lesson execution with the broader Enrollment journey.

Important TROLOVA constraint:

Progress/evaluation should not automatically mutate Enrollment lifecycle state unless such automation is separately and explicitly approved.

In particular, structured progress must not automatically make an Enrollment `READY_FOR_TEST`.

### Current TROLOVA relationship
Lesson-level Student progress/evaluation is accepted conceptually.

Exact skills taxonomy, scoring system, competency framework, progress calculation, and readiness criteria remain Deferred.

### Research importance
HIGH

## Finding 4 — Notifications and Automatic Lesson Reminders
Recurring capabilities across the surveyed products include:

- Student Lesson reminders
- Instructor Lesson reminders
- email notifications
- SMS notifications
- WhatsApp notifications
- schedule-change communication

### Why this may matter for TROLOVA
Notifications could support the operational Lesson lifecycle rather than exist as an isolated communications feature.

Potential future events worth evaluating include:

Lesson scheduled
→ reminder
→ rescheduled
→ updated reminder
→ cancellation
→ relevant participant notification

Exact channels, timing, templates, preferences, and notification rules are not decided.

### Current TROLOVA relationship
Notifications and communications are Deferred.

### Research importance
MEDIUM-HIGH

## Finding 5 — Operational Analytics
Several products provide reporting around operational activity.

Potentially useful TROLOVA-oriented analytics areas include:

- Instructor utilization
- Lesson completion
- cancellations
- no-shows
- Student progress
- scheduling pressure
- Vehicle utilization where relevant
These are research examples only and are not approved TROLOVA KPIs.

### Why this may matter for TROLOVA
The strongest analytics opportunity appears to be operational decision support for Training Centers rather than building a generic BI/reporting product.

### Current TROLOVA relationship
Home workspace is accepted.

Exact dashboard metrics, KPIs, reports, and analytics remain Deferred.

### Research importance
MEDIUM-HIGH

# Strong Combined Product Signal
The strongest combined idea discovered in this research is the connection between:

Scheduling
→ Lesson
→ Instructor Execution
→ Student Progress
→ Next Scheduling

This may eventually create a strong operational loop for TROLOVA.

A more advanced conceptual flow worth preserving for future discussion is:

Student needs Lesson
→ determine eligible Instructors
→ evaluate availability
→ determine eligible/compatible Vehicles where applicable
→ apply Branch context
→ detect conflicts
→ generate valid slots
→ schedule Lesson
→ send relevant reminders
→ Instructor executes Lesson
→ attendance
→ notes
→ progress/evaluation
→ preserve operational history
→ inform future scheduling decisions

This is a RESEARCH DIRECTION only.

Do not convert this flow into implementation requirements.

# Secondary Ideas Observed
Also preserve these as lower-priority research signals:

- Student online/self-booking
- online payments
- external calendar integrations
- invoices
- accounting integrations
- group appointments/classes
- vehicle maintenance logs
These should NOT be assumed to belong in TROLOVA.

Some overlap with already Deferred areas, while others may remain outside the current Product boundary.

They require separate future evaluation.

# Research Principle
A recurring conclusion from this research is that TROLOVA should not become a checklist of competitor features.

Its differentiation should continue to come from correct operational semantics and connected operational truth.

Preserve these distinctions when evaluating future competitors:

- Student ≠ Enrollment
- Eligibility ≠ Availability
- Instructor ≠ User
- Vehicle operational status ≠ scheduling availability
- Driving Test attempt ≠ Enrollment outcome
- Payment ≠ balance
- Branch context ≠ ownership
- Current state must not erase history
- Connected domains ≠ automatic cross-domain lifecycle mutations

# Research Entry 002 — DrivingSchoolSoftware.com

## Source
DrivingSchoolSoftware.com

Primary source:
[https://www.drivingschoolsoftware.com/](https://www.drivingschoolsoftware.com/)

Additional feature pages reviewed:
[https://www.drivingschoolsoftware.com/features2.html](https://www.drivingschoolsoftware.com/features2.html)
[https://www.drivingschoolsoftware.com/software-features.html](https://www.drivingschoolsoftware.com/software-features.html)
[https://www.drivingschoolsoftware.com/features_privacy-shield.html](https://www.drivingschoolsoftware.com/features_privacy-shield.html)

Research date:
September 2026

## Context
DrivingSchoolSoftware.com is directly focused on driving-school operations and exposes several capabilities closely related to TROLOVA's operational domains.

This research entry preserves the most relevant product signals discovered from the product and its feature pages.

The purpose is NOT to copy the product's feature set and NOT to approve these capabilities for TROLOVA.

---

## Finding 1 — Late-Cancel Slot Recovery
A particularly interesting scheduling capability is handling a Lesson slot that becomes available after a late cancellation.

The product describes a workflow where eligible Students can be identified/notified about the newly available time so that the cancelled slot may be filled.

### Why this may matter for TROLOVA
This suggests that Scheduling can eventually do more than create and validate Lessons.

It could potentially help the Training Center recover operational capacity after schedule disruption.

Conceptually:

Lesson cancelled
→ time slot becomes available
→ determine potentially eligible Students
→ evaluate relevant scheduling constraints
→ offer/reallocate the slot
→ create or reschedule the appropriate Lesson

This could extend the broader TROLOVA scheduling direction from:

"Can this Lesson be scheduled?"

toward:

"How can the Training Center use available teaching capacity effectively?"

### Important constraint
This is an exploratory research direction only.

No automatic reassignment, Student eligibility algorithm, priority mechanism, notification behavior, or booking rule is approved.

### Current TROLOVA relationship
Lesson cancellation and scheduling foundations exist.

Advanced availability, slot generation, automated scheduling behavior, notifications, and Student self-booking remain Deferred.

### Research importance
HIGH

---

## Finding 2 — Instructor Lesson Execution + Evaluation
The product supports an Instructor-oriented operational workflow around scheduled Lessons, including schedule access, attendance-related activity, Lesson evaluation, skills/performance information, and operational follow-up.

### Why this may matter for TROLOVA
This reinforces the idea that the Instructor experience should potentially be centered around Lesson execution rather than merely providing an Instructor profile or administrative screen.

Potential conceptual flow:

Instructor Today
→ upcoming Lesson
→ Student / Enrollment context
→ Lesson execution
→ attendance
→ evaluation / skills
→ notes
→ Lesson completion
→ preserved Student progress history

### Current TROLOVA relationship
TROLOVA already accepts:

- Instructor as an operational teaching profile
- dedicated operational teaching experience as Product Direction
- Lesson attendance
- training notes
- Student progress/evaluation where applicable
Exact Instructor workspace, attendance taxonomy, skills taxonomy, scoring, competency framework, and progress calculations remain Deferred.

### Repeated signal
This reinforces Research Entry 001.

Instructor mobile/operational execution and Student progress/evaluation have now appeared as meaningful signals across multiple reviewed sources.

### Research importance
HIGH

---

## Finding 3 — Student / Parent Self-Service Center
The product exposes a broader self-service experience where Students and/or parents can perform operational activities such as accessing account information, scheduling, payments, documents, and training-related activity.

### Why this may matter for TROLOVA
This gives us a concrete market example of how Student self-service can evolve beyond a read-only portal.

Potential future self-service areas worth separately evaluating may include:

- viewing upcoming Lessons
- viewing training journey information
- scheduling/rescheduling where authorized
- payments
- documents
- progress visibility
- communication-related activity
These are exploratory examples only.

Do NOT treat them as an approved TROLOVA Student Portal scope.

### Current TROLOVA relationship
Student login/self-service is Product Direction.

The exact Student Portal, Student actions, authorization boundaries, public intake, self-booking, payments experience, and document experience remain Deferred.

Parent/guardian access is NOT established as TROLOVA Product Truth by this research.

### Research importance
HIGH

---

## Finding 4 — Privacy-Protected Instructor/Student Communication
A distinctive capability observed is a communication privacy layer designed to avoid directly exposing personal Instructor and Student phone numbers while allowing operational communication.

The product also describes communication controls and records around Instructor/Student interactions.

### Why this may matter for TROLOVA
This is particularly interesting because it is more specific to the Instructor/Student operational relationship than a generic notification feature.

A future communication model could potentially explore:

- protected contact between Instructor and Student
- avoiding unnecessary disclosure of personal phone numbers
- Training Center visibility/control where appropriate
- communication history
- controlled communication windows or relationships
These are research possibilities only.

### Important constraint
TROLOVA currently has no approved Privacy Shield, masked-number system, communication-recording model, contact policy, or communication authorization design.

This finding must remain research until separately evaluated from Product, privacy, legal, security, and operational perspectives.

### Current TROLOVA relationship
Notifications/Communications are Deferred.

Exact communication architecture and Security/Access Architecture are also Deferred.

### Research importance
HIGH

---

## Finding 5 — Scheduling Availability and Resource Coordination
The product reinforces several scheduling capabilities already observed in Research Entry 001, including concepts around:

- Instructor schedules/availability
- Lesson scheduling
- conflict/double-booking prevention
- Vehicle/resource coordination
- reminders
- schedule management

### Why this may matter for TROLOVA
This is important less because it introduces a completely new idea and more because it strengthens an existing market signal.

The recurring pattern is that mature driving-school operations require Scheduling to understand multiple operational constraints rather than act as a simple calendar.

TROLOVA's existing scheduling composition remains the authoritative foundation:

Enrollment eligibility

- Student consistency
- planned date/time
- Branch
- Instructor eligibility
- capability compatibility
- optional Vehicle
- conflict prevention
= schedulable Lesson
Availability should remain conceptually distinct from eligibility.

### Repeated signal
This is now a repeated signal across Research Entry 001 and Research Entry 002.

In particular:

- Scheduling/availability
- Instructor execution
- Student progress/evaluation
- reminders/notifications
have appeared repeatedly.

### Current TROLOVA relationship
Basic scheduling and conflict prevention are accepted.

Advanced availability, Instructor working hours, slot generation, recurring/bulk scheduling, external calendars, reminders, and exact calendar UX remain Deferred.

### Research importance
HIGH

---

# Additional Capabilities Observed
Other capabilities surfaced during this research include concepts such as:

- online enrollment
- electronic signatures
- document storage
- online payments
- balances/refunds
- road-test scheduling
- compliance/reporting
- payroll/time-related functionality
- virtual/online classroom integrations
- additional administrative and financial functionality
These capabilities are preserved only as secondary market observations.

They should NOT automatically be interpreted as gaps in TROLOVA.

Some may overlap with Deferred TROLOVA areas.

Some may require separate Product evaluation.

Some may remain outside TROLOVA's current Product boundary.

---

# Repeated Market Signals After Entry 002
After reviewing the first two research sources, the following signals have now appeared repeatedly:

## 1. Scheduling as an Operational Engine
Scheduling repeatedly extends beyond calendar display into:

- Instructor availability
- conflict prevention
- resource coordination
- reminders
- capacity utilization
The late-cancellation recovery concept introduces an additional possibility:

schedule disruption
→ detect reusable capacity
→ identify potential demand
→ recover the slot

This remains exploratory.

## 2. Instructor Execution Experience
The Instructor experience repeatedly centers around the working day and Lesson execution rather than administrative Instructor management alone.

Recurring pattern:

Today
→ Lesson
→ Student context
→ attendance
→ notes/evaluation
→ completion

## 3. Student Progress / Evaluation
Progress tracking, skills, grades/evaluations, and Instructor notes have appeared across multiple sources.

This strengthens the research case for eventually exploring structured Student progress while preserving TROLOVA's existing lifecycle boundaries.

Progress must not automatically equal readiness.

## 4. Notifications / Reminders
Lesson reminders and schedule-related communication are recurring operational capabilities.

This strengthens their relevance for future evaluation but does not change their current Deferred status.

---

# New Product Signals Introduced by Entry 002
The most notable new signals from this source are:

1. Late-cancel slot recovery / operational capacity recovery
2. Broader Student self-service
3. Privacy-protected Instructor/Student communication
These should be preserved for comparison against future research sources.

They are NOT approved Product decisions.

---

# Potential TROLOVA Differentiation Signal
This research further supports a possible differentiation direction:

TROLOVA should not merely store Students, Instructors, Vehicles, and Lessons.

Its long-term opportunity may be to understand how those operational truths interact.

Conceptually:

Enrollment state
→ scheduling eligibility
→ Instructor eligibility
→ Instructor availability
→ Vehicle compatibility/availability
→ valid Lesson
→ Instructor execution
→ attendance
→ progress/evaluation
→ preserved history
→ future operational decisions

The value would come from correct operational semantics and coordination, not from maximizing the number of features.

This remains a research interpretation only.

---

# Research Entry 003 — EKRA Driving School Management

## Source
EKRA — Driving School Management

Primary source:
[http://ekra.it/en/driving-school-management](http://ekra.it/en/driving-school-management)

Additional EKRA product material reviewed where available from the official EKRA website.

Research date:
September 2026

## Context
EKRA presents a driving-school management environment spanning operational administration, scheduling, mobile access, Student-facing functionality, and training-related digital services.

This source is useful because several capabilities reinforce signals already observed in Research Entries 001 and 002, while also introducing additional concepts around waiting lists and digital Lesson packages.

The purpose of this entry is NOT to copy EKRA's feature set.

Nothing recorded here becomes approved TROLOVA Product Truth.

---

## Finding 1 — Shared Calendar, Instructor Availability, and Student Self-Booking
EKRA exposes scheduling capabilities around a shared operational calendar.

Observed concepts include:

- shared scheduling/calendar visibility
- Instructor-defined or Instructor-related available time periods
- Student booking into available slots
- booking modification/cancellation
- schedule-related notifications

### Why this may matter for TROLOVA
This provides another concrete example of the relationship between:

Instructor availability
→ valid available slots
→ Student selection
→ Lesson booking

The important research signal is not simply "online booking."

The more interesting idea is that self-booking can sit on top of operational rules and controlled availability rather than allowing arbitrary Student-created appointments.

Conceptually:

Instructor working/available time
→ operational eligibility and constraints
→ valid slots
→ Student sees allowed options
→ Student selects slot
→ Lesson is scheduled

### Important TROLOVA constraint
Student self-booking must not bypass TROLOVA's operational truth.

Any future self-booking design would still need to respect applicable:

- Enrollment eligibility
- Student consistency
- Branch context
- Instructor eligibility
- capability compatibility
- Vehicle requirements where applicable
- scheduling availability
- conflict prevention
- authorization rules
This is research only.

### Current TROLOVA relationship
Basic Lesson scheduling and conflict prevention are accepted.

Student self-service is Product Direction.

Advanced Instructor availability, working hours, slot generation, Student self-booking, external calendars, and exact calendar UX remain Deferred.

### Repeated signal
Scheduling availability and self-service scheduling continue to appear across reviewed products.

### Research importance
HIGH

---

## Finding 2 — Waiting Lists and Demand for Open Lesson Capacity
EKRA exposes waiting-list management as part of driving-school operations.

### Why this may matter for TROLOVA
This introduces an interesting concept that connects Student demand with limited Lesson capacity.

A waiting list could potentially represent Students who want or need a Lesson but do not currently have a suitable available slot.

Conceptually:

Student needs Lesson
→ no suitable slot currently available
→ Student enters an appropriate waiting mechanism
→ capacity becomes available
→ eligible demand can be reconsidered

This becomes especially interesting when compared with the late-cancellation recovery signal observed in Research Entry 002.

Combined exploratory concept:

Lesson cancelled
→ slot becomes available
→ identify relevant waiting demand
→ re-evaluate eligibility and scheduling constraints
→ offer available capacity
→ schedule/reschedule appropriate Lesson

### Important constraint
No TROLOVA Waiting List domain, queue, priority algorithm, automatic matching behavior, eligibility policy, or notification rule is approved.

A waiting list must not be assumed to mean first-come-first-served or automatic booking.

### Current TROLOVA relationship
No dedicated Waiting List concept is currently accepted.

This is a NEW RESEARCH SIGNAL requiring future Product evaluation.

### Research importance
HIGH

---

## Finding 3 — Digital Lesson Packages / Carnet
EKRA exposes a digital "carnet" or package-like concept associated with driving Lessons and the Student's training activity.

This suggests a distinction between:

- money received
- a purchased training package/entitlement
- Lessons consumed from that entitlement

### Why this may matter for TROLOVA
This is particularly important conceptually because TROLOVA already protects the distinction:

Payment ≠ balance

A future package/entitlement model, if ever accepted, should also not be collapsed into Payment.

Potential conceptual distinction:

Payment
≠ purchased package
≠ Lesson entitlement
≠ consumed Lesson
≠ remaining entitlement

This could become relevant if Training Centers sell packages such as a defined number or type of Lessons.

### Important constraint
No package, pricing plan, Lesson credit, entitlement balance, consumption rule, expiry rule, transfer rule, or pricing model is approved.

Do NOT introduce these concepts into TROLOVA Product Truth or implementation from this research.

### Current TROLOVA relationship
Pricing/packages and detailed financial behavior are Deferred.

Payment remains defined as received money for one Student in one Enrollment.

This research does not change that definition.

### New research signal
Digital Lesson packages / training entitlements are a NEW RESEARCH SIGNAL introduced by Entry 003.

### Research importance
HIGH

---

## Finding 4 — End-to-End Student Training Journey
EKRA describes management of the Student across a broader journey, from initial registration through training-related activity toward licensing completion.

### Why this may matter for TROLOVA
This does not introduce a new TROLOVA domain concept.

Instead, it reinforces TROLOVA's existing direction that the Student journey should not be represented as disconnected administrative screens.

TROLOVA already distinguishes:

Student
→ Enrollment
→ Lessons
→ Driving Test attempts
→ Payments / Financial Operations
→ preserved operational history

The important market signal is that driving-school software gains value when these activities form a connected journey.

### Current TROLOVA relationship
This strongly aligns with existing TROLOVA Product Truth.

Student is the durable Training Center-scoped profile.

Enrollment represents a specific training journey.

Lessons, Driving Test attempts, and Payments relate to that journey without collapsing into one another.

### Repeated signal
Connected Student journey management continues to be supported by the reviewed market landscape.

### Research importance
MEDIUM-HIGH

---

## Finding 5 — Notifications Embedded in the Booking Lifecycle
EKRA uses notifications around scheduling and booking activity.

Observed concepts include communication associated with:

- booking creation
- upcoming Lesson reminders
- booking changes
- cancellation or schedule changes
- individual or broader communication

### Why this may matter for TROLOVA
This further reinforces that notifications may be most valuable when they are driven by operational events rather than existing as an isolated messaging feature.

Potential conceptual pattern:

Lesson scheduled
→ relevant notification

Lesson approaching
→ reminder

Lesson rescheduled
→ updated notification

Lesson cancelled
→ cancellation notification

This remains exploratory.

### Current TROLOVA relationship
Notifications and Communications remain Deferred.

Exact channels, timing, templates, delivery rules, preferences, recipients, retries, and communication history are not defined.

### Repeated signal
Notifications/reminders have now appeared consistently across multiple reviewed sources.

This increases the strength of the market signal but does NOT change their Deferred status.

### Research importance
HIGH

---

## Finding 6 — Role-Specific Product Surfaces
EKRA presents different digital experiences around administrative management, mobile operational use, and Student/training-related functionality.

### Why this may matter for TROLOVA
This reinforces a broader product principle:

Shared operational truth does not require every actor to use the same interface.

Potential future TROLOVA experiences may be optimized around actor responsibilities while reading/writing the same underlying operational truth.

For example:

Training Center Staff
→ coordination and administration

Instructor
→ assigned work and Lesson execution

Student
→ own journey and permitted self-service

These are conceptual experience boundaries only.

### Current TROLOVA relationship
TROLOVA already distinguishes Staff, Instructor, and Student operational capacities.

A dedicated Instructor operational experience is Product Direction.

Student self-service is Product Direction.

Exact workspace structure, navigation, routes, permissions, and actor-specific UX remain Deferred.

### Repeated signal
This reinforces the Instructor-execution and Student-self-service signals from previous entries.

### Research importance
MEDIUM-HIGH

---

# Secondary Observation — Digital Learning / Training Content
EKRA also exposes digital training/learning capabilities, including training content and progress-related digital learning experiences.

### TROLOVA interpretation
This should be preserved as a market observation but treated cautiously.

TROLOVA is currently NOT defined as a Learning Management System.

Building:

- course-content management
- video-learning infrastructure
- educational content libraries
- e-learning delivery
- learning-content analytics
would represent a materially different Product area.

This research entry does NOT propose adding LMS functionality to TROLOVA.

### Current TROLOVA relationship
LMS functionality is outside the current Product definition.

### Research importance
LOW for current TROLOVA scope

---

# Repeated Market Signals After Entry 003
After three research entries, several patterns are becoming increasingly consistent.

## 1. Scheduling Is More Than a Calendar
Repeated capabilities now include:

- Instructor availability
- conflict prevention
- valid time slots
- Student booking
- reminders
- Vehicle/resource coordination
- schedule changes
- capacity recovery
The research increasingly supports evaluating Scheduling as an operational engine.

This does not change the current accepted/deferred boundaries.

---

## 2. Instructor Availability Is a Separate Operational Truth
Multiple sources reinforce the distinction between:

Instructor is eligible to teach

and

Instructor is available at this time.

This strongly aligns with TROLOVA's existing principle:

Teaching Eligibility ≠ Scheduling Availability ≠ Software Access.

---

## 3. Student Self-Service Is Becoming a Repeated Signal
Student-facing scheduling and account functionality have appeared across multiple sources.

The key research question for TROLOVA is not simply whether Students should have a portal.

The future question is:

What operational actions should a Student be allowed to perform without weakening Training Center control or operational consistency?

This remains Deferred.

---

## 4. Notifications Are Closely Coupled to Scheduling
Notifications/reminders repeatedly appear around Lesson scheduling activity.

The emerging pattern is:

Operational event
→ communication consequence

rather than:

Generic messaging system
→ unrelated messages

This may be useful when Notifications/Communications are eventually defined.

---

## 5. Instructor Execution Remains Important
Previous sources strongly established:

Instructor
→ Lesson
→ attendance
→ notes
→ evaluation/progress
→ completion

EKRA's role-specific/mobile product structure continues to support the broader importance of actor-specific operational experiences.

---

# New Product Signals Introduced by Entry 003
The strongest new research signals are:

1. Waiting Lists / queued Student demand
2. Digital Lesson packages / training entitlements
These should be tracked carefully against future sources.

They are NOT approved TROLOVA concepts.

---

# Emerging Scheduling Opportunity
Entries 001–003 now expose a broader possible scheduling loop:

Student needs Lesson
→ determine eligibility
→ evaluate Instructor eligibility
→ evaluate Instructor availability
→ evaluate Vehicle requirements/availability
→ generate valid slots
→ Student or Staff selects valid slot
→ Lesson scheduled
→ reminder
→ Lesson executed

If no valid slot exists:

Student demand
→ potential waiting mechanism

If scheduled capacity becomes available:

Lesson cancelled
→ open capacity
→ waiting/eligible demand
→ constraints re-evaluated
→ potential replacement booking

This is a RESEARCH MODEL ONLY.

Do not implement it or treat it as accepted Product behavior.

---

# Emerging Commercial/Entitlement Question
The digital carnet/package observation introduces a Product question that should be preserved for later review:

If a Training Center sells a package of training Lessons, what exactly represents the Student's right to consume those Lessons?

Potential concepts might eventually require distinguishing:

Payment
≠ Package
≠ Entitlement
≠ Lesson
≠ Consumption
≠ Remaining entitlement

No answer is approved.

This is intentionally preserved as a future Product question rather than a proposed solution.

---

# Research Conclusion — Entry 003
EKRA primarily strengthens existing signals around:

- Scheduling
- Instructor availability
- Student self-service
- notifications
- role-specific experiences
- connected Student journeys
Its most notable new contributions to the research pool are:

- Waiting Lists
- Digital Lesson Packages / Carnet
These should be compared against future driving-school products before deciding whether they represent broad market requirements, optional operational models, or product-specific behavior that TROLOVA should not adopt.

---
## Detailed EKRA / Drive App Supplement

## Additional Source
GestionaleAutoscuola.it / Drive App

Official product site:
[https://www.gestionaleautoscuola.it/](https://www.gestionaleautoscuola.it/)

Detailed product pages reviewed include the Instructor App and Student App material available on the official website.

This source provides additional detail about the same product ecosystem already covered by Research Entry 003.

It is therefore preserved as a supplement rather than a separate research entry.

The supplement introduces four details worth retaining.

---

### Supplement Finding 1 — Instructor Availability Has Multiple Operational Dimensions
The detailed product material provides a more concrete view of Instructor availability.

Observed concepts include:

- Instructors can define available time slots.
- Lesson duration can vary.
- Instructor absence/unavailability can be recorded.
- Instructor availability can be organized in relation to different driving-school locations/branches.
- Administrative users can view Instructor schedules.
- Student-facing availability does not necessarily expose the internal reason why an Instructor is unavailable.

### Why this may matter for TROLOVA
This strengthens an important distinction that should be preserved when advanced Scheduling is eventually evaluated.

Instructor scheduling truth may involve several separate questions:

Instructor is qualified/eligible to teach?
≠
Instructor normally works at this time?
≠
Instructor has made this time available?
≠
Instructor is absent/unavailable?
≠
Instructor already has a conflicting Lesson?

These should not automatically be collapsed into one generic `AVAILABLE / UNAVAILABLE` field.

A conceptual future model may need to reason across:

Teaching Eligibility
→ working/availability rules
→ temporary absence or time-off
→ existing bookings/conflicts
→ Branch context
→ valid scheduling capacity

### Important TROLOVA constraint
Do NOT introduce:

- Instructor working-hour entities
- availability schemas
- absence entities
- time-off models
- recurring availability rules
- availability statuses
- Branch availability rules
from this research.

Those details remain Deferred and require separate Product/Domain definition.

### Current TROLOVA relationship
TROLOVA already explicitly establishes:

Teaching Eligibility ≠ Scheduling Availability ≠ Software Access.

Advanced Instructor availability and working hours remain Deferred.

### Research significance
This is not a completely new Product area.

It is a STRONGER DETAIL supporting the existing Scheduling/Availability research signal.

### Research importance
HIGH

---

### Supplement Finding 2 — Digital Carnet Represents Consumable Lesson Entitlement
The detailed Student-facing material clarifies that the digital carnet is more than a generic commercial package.

Observed behavior includes:

- a defined number of Lessons associated with the Student
- the carnet/package being visible in the Student experience
- Lesson booking being related to that available training entitlement
- remaining Lesson quantity being reduced as Lessons are performed/consumed

### Why this may matter for TROLOVA
This significantly strengthens the Product question introduced in Entry 003.

A future Training Center may sell or assign a training entitlement that represents the Student's right to receive a defined amount of training.

That operational truth is not necessarily the same thing as the Payment that funded it.

The conceptual distinctions worth preserving are:

Payment
≠ Package
≠ Entitlement
≠ Lesson
≠ Lesson consumption
≠ Remaining entitlement

Example conceptual flow:

Training package exists
→ Student receives Lesson entitlement
→ Student schedules eligible Lesson
→ Lesson is executed
→ entitlement is consumed according to defined rules
→ remaining entitlement changes

This is NOT an approved TROLOVA workflow.

### Why the distinction matters
A Payment answers:

"What money was received?"

An entitlement could answer:

"What training is this Student currently entitled to receive?"

A Lesson answers:

"What training session was scheduled/executed?"

These are different operational questions.

They should not be collapsed merely because a commercial product connects them.

### Important TROLOVA constraint
TROLOVA currently defines Payment as received money.

This research does NOT change that.

Do NOT add:

- Packages
- Lesson credits
- Carnets
- Entitlements
- balances
- consumption rules
- expiry
- package pricing
- automatic Lesson deduction
- refunds/credits
to Product Truth or implementation.

Pricing/packages and detailed financial behavior remain Deferred.

### Research significance
The digital carnet / entitlement concept was introduced in Entry 003.

The detailed product material now provides stronger evidence that this can represent a real operational concept rather than merely a pricing display.

### Research importance
HIGH

---

### Supplement Finding 3 — Lesson Waiting List and Driving Test Waiting List Must Not Be Assumed to Be the Same Concept
The detailed product material exposes waiting-list concepts related to theory and practical examination activity in addition to Lesson/scheduling capacity concepts.

### Why this may matter for TROLOVA
This introduces an important domain distinction.

A waiting mechanism for Lesson capacity may answer:

"Which Students are waiting for a suitable training slot?"

A Driving Test waiting mechanism may answer a materially different question:

"Which Students/Enrollments are waiting for an appropriate Driving Test opportunity?"

These should not automatically be represented by one generic Waiting List merely because both involve waiting.

Conceptually:

Lesson Capacity Waiting
≠
Driving Test Opportunity Waiting

The eligibility conditions, operational owner, ordering rules, scheduling constraints, outcomes, and lifecycle consequences may be completely different.

### Relationship to previous research
Entry 002 introduced late-cancellation capacity recovery.

Entry 003 introduced waiting lists around Lesson capacity.

The additional EKRA material shows that waiting mechanisms may exist in other operational contexts as well.

This increases the importance of NOT prematurely creating a generic `WaitingList` domain.

### Important TROLOVA constraint
No Waiting List concept is currently accepted.

Do NOT introduce:

- generic WaitingList entity
- Lesson waiting-list entity
- Driving Test waiting-list entity
- queue ordering
- priority rules
- automatic promotion
- matching algorithms
- test eligibility rules
- automatic booking
from this research.

These remain Product questions.

### Research significance
NEW DOMAIN DISTINCTION inside the broader waiting-list research signal.

### Research importance
HIGH

---

### Supplement Finding 4 — Preserve Student Lesson Booking/Execution/Cancellation History
The detailed Student experience exposes historical visibility around Lesson activity, including Lessons associated with booking, execution, and cancellation.

### Why this may matter for TROLOVA
This reinforces one of TROLOVA's strongest existing principles:

Current state must not erase operational history.

For example:

Lesson scheduled
→ Lesson rescheduled
→ Lesson completed

or:

Lesson scheduled
→ Lesson cancelled

should not result in the system behaving as if earlier operational facts never existed.

The exact historical model is not derived from EKRA.

The useful research signal is simply that Lesson history has ongoing operational value for both the Training Center and Student-facing experience.

### Current TROLOVA relationship
This strongly aligns with existing TROLOVA Product Truth:

- Lesson has durable identity.
- Rescheduling preserves Lesson identity.
- terminal outcomes remain historical truth.
- operational history/audit visibility is accepted.
- current state should not erase history.

### Important constraint
Do NOT infer from this source that TROLOVA needs a specific:

- event-sourcing architecture
- audit schema
- booking-history entity
- Student timeline UI
- cancellation-history table
- activity feed
Those are implementation/UX questions that remain separately defined.

### Research significance
This does NOT introduce a new Product area.

It provides additional market support for an already accepted TROLOVA principle.

### Research importance
MEDIUM

---

### EKRA Supplement Conclusion
The additional `gestionaleautoscuola.it` material does not justify a separate research entry because it represents the same EKRA / Drive App product ecosystem already covered in Research Entry 003.

Its value is in adding four more precise observations:

1. Instructor availability is multi-dimensional and should not be reduced to a single availability status.
2. Digital Lesson packages/carnets may represent real consumable training entitlements distinct from Payments and Lessons.
3. Lesson-capacity waiting and Driving-Test waiting are potentially different domain problems and should not prematurely become one generic Waiting List.
4. Lesson booking/execution/cancellation history has ongoing operational value and reinforces TROLOVA's existing history-preservation principle.
Of these, the strongest Product questions for future TROLOVA evaluation are:

- Advanced Instructor Availability
- Training Packages / Entitlements
- Context-specific Waiting mechanisms
The Lesson-history observation primarily reinforces already accepted TROLOVA Product Truth.

Nothing in this supplement is an approved TROLOVA requirement.

---

# Research Entry 004 — DriveSchool Pro

## Source
DriveSchool Pro — Driving School Management Software

Official website:
[https://driveschoolpro.com/](https://driveschoolpro.com/)

Primary page:
[https://driveschoolpro.com/driving-school-management-software/](https://driveschoolpro.com/driving-school-management-software/)

Additional official product material reviewed includes:

[https://driveschoolpro.com/driving-school-scheduling-software/](https://driveschoolpro.com/driving-school-scheduling-software/)

[https://driveschoolpro.com/features/lesson-briefings/](https://driveschoolpro.com/features/lesson-briefings/)

[https://driveschoolpro.com/features/getting-paid/](https://driveschoolpro.com/features/getting-paid/)

[https://driveschoolpro.com/how-progress-works/](https://driveschoolpro.com/how-progress-works/)

Research date:
September 2026

## Context
DriveSchool Pro exposes many capabilities already seen across previous research sources, including:

- scheduling
- Instructor availability
- Student/Instructor/Vehicle conflict prevention
- Student progress
- Student-facing functionality
- reminders
- Lesson packages
- operational Lesson management
Those repeated capabilities should NOT be expanded into duplicate research sections merely to increase the size of this entry.

The primary value of this source is three more distinctive product signals:

1. Pre-Lesson briefing generated from historical Student/Lesson context
2. Offline-first Instructor execution
3. Geographic / travel-time-aware scheduling
The source also provides stronger evidence around structured Student progress and consumable Lesson packages.

Finally, it exposes automated test-readiness behavior that is useful as a competitor observation but conflicts with an important TROLOVA boundary if interpreted as automatic Enrollment mutation.

Nothing in this entry is approved TROLOVA Product Truth.

---

# Finding 1 — Pre-Lesson Briefing from Historical Student Context
DriveSchool Pro exposes a Lesson briefing capability intended to prepare the Instructor before an upcoming Lesson.

The briefing uses existing Student/Lesson information such as:

- previous Lesson notes
- Student progress
- skill-related information
- previous training context
to provide a concise summary of what the Instructor should know before the next Lesson.

### Why this may matter for TROLOVA
This introduces a particularly interesting use of TROLOVA's existing operational history.

Instead of preserving Lesson history only for audit/reference purposes, historical truth could potentially become useful context for future operational work.

Conceptually:

Previous Lessons

- Instructor notes
- Student progress/evaluation
- Enrollment context
→ relevant context for upcoming Lesson
The Instructor could enter the next Lesson already understanding:

- what was previously trained
- where difficulty was observed
- what progress has been recorded
- what may deserve attention next

### Instructor continuity
This becomes especially interesting when the Instructor changes.

TROLOVA already allows an Enrollment's primary Instructor to change without rewriting historical attribution.

A future briefing/context capability could potentially help a new Instructor understand the Student's existing training journey without pretending that the new Instructor performed previous Lessons.

Conceptually:

Instructor A executes previous Lessons
→ historical records remain attributed correctly
→ Instructor B receives upcoming Lesson
→ relevant Student training context is surfaced
→ Instructor B continues from preserved history

### Important distinction
The valuable Product idea is:

Historical operational truth
→ useful next-Lesson context

The valuable idea is NOT necessarily "AI."

AI is one possible implementation mechanism.

TROLOVA should not create an AI Product requirement merely because DriveSchool Pro uses AI for this feature.

A future TROLOVA implementation could theoretically use:

- structured summaries
- deterministic rules
- manually curated context
- AI-generated summaries
- or another approach
That decision is NOT made here.

### Important TROLOVA constraint
Any future generated briefing must not silently become Domain Truth.

For example:

Generated recommendation
≠ Instructor evaluation

Generated summary
≠ historical Lesson record

Generated suggestion
≠ Enrollment lifecycle decision

The underlying recorded operational facts must remain authoritative.

### Current TROLOVA relationship
TROLOVA already accepts:

- Lesson history
- Instructor attribution
- training notes
- Student progress/evaluation conceptually
- preserved operational history
Exact progress framework and Instructor experience remain Deferred.

AI-assisted Lesson briefing is NOT currently an accepted Product capability.

### New research signal
This is a NEW RESEARCH SIGNAL.

### Research importance
HIGH

---

# Finding 2 — Offline-First Instructor Execution
DriveSchool Pro emphasizes mobile operational access that can continue when internet connectivity is unavailable, with later synchronization when connectivity returns.

Observed offline-oriented concepts include access to relevant Instructor operational information such as:

- schedule
- Student information
- Lesson-related information
- Lesson notes/context

### Why this may matter for TROLOVA
Driving Instructors operate in a fundamentally mobile environment.

They may be:

- inside a training Vehicle
- moving between Students
- at pickup locations
- away from Training Center offices
- in areas with unreliable mobile connectivity
Therefore, responsive mobile UX and offline operational resilience are different Product questions.

Mobile-friendly
≠
Offline-capable

### Potential operational value
A future Instructor experience could potentially preserve enough assigned operational context locally to allow the Instructor to continue essential Lesson work when connectivity is temporarily unavailable.

Conceptually:

Instructor has assigned Lessons
→ relevant operational data available on device
→ network connection disappears
→ essential Lesson execution continues
→ local changes are preserved safely
→ connectivity returns
→ synchronization occurs

### Important TROLOVA constraint
Offline operation creates serious unresolved questions around:

- data freshness
- authorization
- device security
- locally stored Student data
- conflicting edits
- synchronization
- stale scheduling information
- revoked access
- audit history
- privacy
- deletion/retention
- cross-device behavior
Therefore this research MUST NOT be interpreted as approval for offline implementation.

### Current TROLOVA relationship
Responsive product behavior is accepted.

Dedicated Instructor operational experience is Product Direction.

Offline-first behavior is NOT currently accepted or defined.

Security/Access Architecture is Deferred.

### New research signal
Offline-first Instructor execution is a NEW RESEARCH SIGNAL.

### Research importance
HIGH

---

# Finding 3 — Geographic / Pickup / Travel-Time-Aware Scheduling
DriveSchool Pro introduces scheduling constraints related to physical geography and travel between Lessons.

Observed concepts include:

- Student pickup locations
- geographic scheduling considerations
- travel time between Lessons
- avoiding unrealistic back-to-back Instructor scheduling across distant locations

### Why this may matter for TROLOVA
This introduces an important scheduling insight:

A schedule can be conflict-free in time while still being operationally impossible.

Example:

Lesson A ends at 10:00 in Location A.

Lesson B starts at 10:05 in Location B.

The Instructor technically has no overlapping Lesson.

But if travel between the locations requires 25 minutes, the schedule is not operationally feasible.

Therefore:

No time overlap
≠
Instructor can physically execute both Lessons

### Potential future scheduling model
A more advanced scheduling engine might eventually consider:

Previous Lesson location
→ end time
→ travel requirement
→ next Lesson location
→ next start time
→ operational feasibility

This could affect:

- valid slot generation
- Instructor availability
- scheduling warnings
- Student pickup selection
- route efficiency
- operational capacity

### Important TROLOVA constraint
TROLOVA currently has no accepted Product definition for:

- Student pickup points
- Lesson start/end geographic locations
- travel-time calculations
- maps/routing
- geographic zones
- Instructor service areas
- automatic route optimization
- traffic-aware scheduling
- travel buffers
Do NOT introduce any of these into Product Truth or implementation.

### Relationship to existing TROLOVA scheduling
TROLOVA already has strong time conflict semantics.

This research does NOT modify those accepted rules.

Instead, it exposes a separate future question:

Should advanced Scheduling eventually distinguish:

Temporal availability
≠
Geographic feasibility?

### New research signal
Geographic/travel-time-aware Scheduling is a NEW RESEARCH SIGNAL.

### Research importance
HIGH

---

# Finding 4 — Structured Student Driving-Skill Progress
DriveSchool Pro exposes structured Student progress based on defined driving skills and proficiency levels.

Its implementation uses a specific driving-skill framework associated with its target market.

### Why this may matter for TROLOVA
This further strengthens the repeated signal that Student progress in driving training may need to represent more than:

"Lessons completed."

Potentially useful concepts include:

Student
→ driving competency
→ observed proficiency
→ Instructor evaluation
→ historical progression

### Important localization warning
Do NOT copy DriveSchool Pro's exact:

- skill list
- number of skills
- categories
- proficiency levels
- scoring model
into TROLOVA.

Those structures reflect a particular regulatory/training environment.

TROLOVA's exact competency taxonomy remains Deferred and may vary by market, Training Center, licensing framework, or future Product strategy.

### Cross-Instructor continuity
Structured progress may also help preserve continuity when multiple Instructors participate in one Enrollment journey.

Instructor A records progress
→ history remains preserved
→ Instructor B can understand prior progress
→ future Lesson execution builds on shared operational truth

This connects strongly with Finding 1's pre-Lesson context signal.

### Repeated signal
Student progress/evaluation has now appeared repeatedly across several research sources.

This substantially strengthens it as a market signal.

### Current TROLOVA relationship
Lesson-level Student progress/evaluation is accepted conceptually.

Exact:

- skills taxonomy
- competency framework
- scoring
- proficiency levels
- progress calculation
- readiness calculation
remain Deferred.

### Research importance
HIGH

---

# Finding 5 — Lesson Packages as Consumable Training Entitlements
DriveSchool Pro provides additional evidence around Lesson packages and consumption of purchased/available training hours.

This reinforces the digital carnet signal from EKRA.

### Why this may matter for TROLOVA
We now have repeated evidence that some driving schools operate with a concept resembling:

Student receives training entitlement
→ Lessons consume that entitlement
→ remaining entitlement changes

This again reinforces the conceptual distinction:

Payment
≠ Package
≠ Entitlement
≠ Lesson
≠ Consumption
≠ Remaining entitlement

### Repeated signal
This is no longer an observation from only one product ecosystem.

The package/entitlement/consumption pattern has appeared across multiple reviewed products.

That increases its importance as a future Product question.

### Important TROLOVA constraint
Repeated market evidence does NOT automatically approve the concept.

TROLOVA currently defines Payment as received money.

Do NOT modify that definition.

Pricing, packages, Lesson credits, entitlement balances, and detailed financial behavior remain Deferred.

### Research importance
HIGH

---

# Finding 6 — Automated Test Readiness Is Competitor Behavior, Not TROLOVA Truth
DriveSchool Pro connects structured Student progress with automated test-readiness evaluation.

Its product can derive a readiness indication from recorded skill/proficiency information.

### Why this is useful research
This demonstrates one possible way competitors connect:

Student progress
→ readiness evaluation
→ Driving Test preparation

This is relevant because TROLOVA also has:

- Student progress/evaluation
- Enrollment lifecycle
- `READY_FOR_TEST`
- Driving Test attempts
However, the existence of those connected concepts does NOT mean they should mutate each other automatically.

### Critical TROLOVA boundary
TROLOVA currently protects the principle:

CONSISTENCY ≠ AUTOMATIC MUTATION

and:

CONNECTED DOMAINS ≠ AUTOMATIC CROSS-DOMAIN LIFECYCLE CHANGES

Therefore:

Progress score
≠ automatic `READY_FOR_TEST`

Skill completion
≠ automatic `READY_FOR_TEST`

Generated readiness recommendation
≠ Enrollment lifecycle mutation

Unless a future Product decision explicitly defines such behavior.

### Potential future distinction
If TROLOVA ever explores readiness intelligence, a useful conceptual distinction may be:

Readiness evidence / recommendation
≠
authorized Enrollment lifecycle decision

This is only a research question.

### Research importance
HIGH because it identifies both a market capability and an important TROLOVA differentiation/boundary.

---

# Repeated Market Signals After Entry 004
DriveSchool Pro further strengthens several signals already present in the research pool.

## Scheduling / Availability
Now repeatedly observed:

- Instructor availability
- conflict prevention
- Student scheduling
- Vehicle coordination
- valid slot generation concepts
- reminders
- capacity utilization
DriveSchool Pro adds:

- geographic feasibility
- travel-time awareness
This expands the Scheduling research question from:

"Is the resource free?"

toward:

"Can the Lesson actually be executed under the relevant operational constraints?"

---

## Student Progress
Structured progress/evaluation is now one of the strongest repeated market signals.

The important TROLOVA opportunity appears to be:

Lesson execution
→ structured evaluation
→ preserved Student progress
→ useful context for future Lessons

without automatically turning progress into lifecycle mutation.

---

## Instructor Operational Experience
Instructor-specific operational execution continues to appear repeatedly.

DriveSchool Pro adds two particularly interesting dimensions:

- pre-Lesson contextual briefing
- offline resilience

---

## Packages / Entitlements
Consumable training packages have now appeared across multiple sources.

This increases the importance of eventually evaluating whether TROLOVA requires an entitlement concept distinct from Payment and Lesson.

No decision is made.

---

# New Product Signals Introduced by Entry 004
The three strongest NEW signals from DriveSchool Pro are:

1. Pre-Lesson briefing generated from historical Student/Lesson context
2. Offline-first Instructor execution
3. Geographic / pickup / travel-time-aware Scheduling
These should be tracked carefully against future research sources.

---

# Emerging TROLOVA Operational Loop
The accumulated research now suggests a potentially powerful future operational loop:

Student / Enrollment needs training
→ determine teaching eligibility
→ evaluate Instructor availability
→ evaluate Vehicle requirements
→ evaluate time conflicts
→ potentially evaluate geographic feasibility
→ generate/select valid Lesson slot
→ Lesson scheduled
→ reminders
→ Instructor receives relevant pre-Lesson context
→ Instructor executes Lesson
→ attendance
→ notes
→ structured progress/evaluation
→ historical truth preserved
→ next Lesson can use that context

If capacity is unavailable:

Student demand
→ potential waiting mechanism

If capacity becomes unexpectedly available:

Cancellation
→ available slot
→ potentially eligible waiting demand
→ constraints re-evaluated
→ possible replacement booking

If packages/entitlements eventually exist:

Training entitlement
→ Lesson execution
→ entitlement consumption

All of this remains a RESEARCH MODEL ONLY.

Do NOT convert this into Product requirements or implementation behavior.

---

# Potential TROLOVA Differentiation Signal
DriveSchool Pro reinforces an important direction:

The strongest TROLOVA opportunity may not be having more features than competitors.

It may be having a more coherent operational model where:

- scheduling uses real operational constraints
- Instructor work has the right Student context
- Lesson execution creates useful progress history
- history helps future work
- financial truth remains separate from training entitlement
- readiness evidence remains separate from lifecycle authority
- current state never destroys historical truth
This preserves TROLOVA's core philosophy:

Connected operational truth without uncontrolled automatic mutation.

---

# Research Conclusion — Entry 004
DriveSchool Pro is a high-value research source.

It strongly reinforces existing signals around:

- advanced Scheduling
- Instructor availability
- Instructor operational execution
- structured Student progress
- training packages/entitlements
More importantly, it introduces three distinctive research directions:

- pre-Lesson contextual briefing
- offline-first Instructor execution
- geographic/travel-time-aware Scheduling
It also provides a useful competitor contrast around automated test readiness.

TROLOVA should preserve the distinction between progress/readiness evidence and authorized Enrollment lifecycle state unless a future Product decision explicitly changes that rule.

Nothing in this entry is an approved Product requirement.

---

## Geographic Instructor Discovery / Matching Supplement

## Additional Source
IJRASET — “Advanced Management System for Car Driving Schools”

Source:
[https://www.ijraset.com/research-paper/advanced-management-system-for-car-driving-schools](https://www.ijraset.com/research-paper/advanced-management-system-for-car-driving-schools)

This source repeats many capabilities already preserved elsewhere in the TROLOVA research pool, including scheduling, Instructor management, Student-facing functionality, payments, attendance, progress, and booking.

Those repeated capabilities should NOT be duplicated here.

Only the additional geographic distinction below should be preserved.

---

## Geographic Feasibility ≠ Geographic Instructor Discovery / Matching
Research Entry 004 introduced geographic and travel-time-aware Scheduling.

That concept asks:

**Can an already relevant Instructor physically execute two Lessons given their locations and the travel time between them?**

Conceptually:

Previous Lesson location
→ travel time
→ next Lesson location
→ next Lesson start time
→ operational feasibility

The IJRASET source exposes a related but different geographic concept.

Its proposed system discusses location/geolocation in relation to Students finding or booking suitable nearby tutors/Instructors, particularly when location or distance affects access to training.

This introduces a second geographic Product question:

**Which Instructor is geographically appropriate for this Student or requested training?**

Conceptually:

Student / requested training location
→ geographic proximity or service area
→ potentially relevant Instructors
→ Instructor availability
→ potential booking

These two questions must NOT automatically be treated as the same problem.

### Distinction to preserve
**Geographic Scheduling Feasibility**

asks:

"Can this Instructor physically execute the proposed Lesson given surrounding Lesson locations and travel requirements?"

Whereas:

**Geographic Instructor Discovery / Matching**

asks:

"Which Instructors are geographically appropriate candidates for this Student or requested Lesson?"

Therefore:

Travel feasibility
≠
Instructor proximity
≠
Instructor service area
≠
Student pickup location
≠
Instructor discovery/matching

Even though all may involve geography.

---

## Why this may matter for TROLOVA
TROLOVA currently has a Training Center-centered operating model.

Instructor discovery/matching should therefore NOT automatically be interpreted as:

- a public Instructor marketplace
- public Instructor discovery
- Student-to-Instructor marketplace matching
- ratings/recommendations
- independent Instructor listings
Those areas remain outside the current Product boundary or otherwise unapproved.

However, the underlying geographic question may still become relevant INSIDE a Training Center.

For example, a future Training Center scheduling system might need to evaluate:

Student/pickup location
→ Instructor operational area
→ Branch context
→ Instructor eligibility
→ Instructor availability
→ geographic feasibility
→ valid Lesson options

This is exploratory only.

---

## Important TROLOVA Boundary
Do NOT introduce any of the following from this research:

- public Instructor marketplace
- public Instructor search
- public Instructor profiles
- Student-selected independent Instructors
- Instructor ratings/reviews
- geographic marketplace discovery
- service-area schema
- pickup-location schema
- map/routing architecture
- proximity algorithm
- automatic Instructor matching
- geolocation tracking
TROLOVA's current Training Center-centered ownership model remains authoritative.

The research value is only the operational distinction between different uses of geography.

---

## Relationship to Existing Research
Research Entry 004 already preserves:

**Temporal availability ≠ Geographic feasibility**

This supplement extends the research distinction to:

**Temporal availability**
≠
**Geographic travel feasibility**
≠
**Geographic Instructor suitability/matching**

Potential future scheduling reasoning could therefore involve several independent questions:

Is the Instructor eligible?
→ Is the Instructor available?
→ Is there a time conflict?
→ Is the Instructor geographically able to execute the Lesson?
→ Is the Instructor operationally appropriate for the Student/location?

No such engine or rule set is approved.

---

## Research Significance
This is a SMALL NEW RESEARCH DISTINCTION.

It does NOT justify a separate Research Entry.

The source primarily reinforces capabilities already captured elsewhere.

The only retained value is distinguishing:

**Geographic feasibility ≠ Geographic Instructor discovery/matching**

---

### Geographic Matching Supplement Conclusion
The IJRASET source does not materially expand the TROLOVA feature research pool.

Its useful contribution is one conceptual distinction:

Geography can affect Scheduling in more than one way.

One problem concerns physical travel feasibility between Lessons.

Another concerns determining which Instructor is geographically appropriate for a Student or requested Lesson.

TROLOVA should preserve this distinction for future Scheduling research without interpreting it as approval for marketplace-style Instructor discovery.

Nothing in this supplement is an approved TROLOVA Product requirement.

---

# Research Entry 005 — Total Drive

## Source
Total Drive — Driving Instructor / Driving School Management Platform

Official website:
[https://totaldrive.co.uk/](https://totaldrive.co.uk/)

Relevant official product/help material includes:

[https://totaldrive.co.uk/driving-instructor-app/](https://totaldrive.co.uk/driving-instructor-app/)

[https://totaldrive.co.uk/take-card-payments/](https://totaldrive.co.uk/take-card-payments/)

Total Drive official support/help material concerning the Pupil App and Reflective Logs.

Research date:
September 2026

## Why This Source Is Worth Preserving
Total Drive repeats many capabilities already documented in previous research, including:

- scheduling
- Student management
- Instructor diary
- payments
- progress tracking
- reminders
- booking management
Do NOT duplicate those capabilities as standalone findings.

The value of Total Drive for TROLOVA research is concentrated in:

### New signals

1. Student Self-Reflection distinct from Instructor Evaluation
2. Multiple Student/Learner Locations

### Stronger repeated signals

1. Student Availability as a Scheduling input
2. Lesson Gap / Cancelled Capacity Recovery
3. Offline Instructor Operations

### TROLOVA distinction reinforced

1. Financial recipient/destination/visibility distinctions
Nothing in this entry is an approved TROLOVA Product requirement.

---

# Finding 1 — Student Self-Reflection ≠ Instructor Evaluation
Total Drive exposes reflective logging around Lessons.

A particularly important distinction is that reflection is not limited to the Instructor evaluating the Student.

The Student can also reflect on their own Lesson experience, including concepts such as:

- how they felt the Lesson went
- achievements
- areas they believe require further development
- goals or areas of future focus
The Instructor can access relevant Student reflection.

## Why this may matter for TROLOVA
Previous research strongly established:

Lesson
→ Instructor notes
→ Instructor evaluation
→ Student progress history

Total Drive introduces another potentially distinct perspective:

Lesson
→ Student self-reflection

These should not automatically be treated as the same operational fact.

Conceptually:

**Instructor Evaluation**
≠
**Student Self-Reflection**

An Instructor may record:

"What did I observe about the Student's driving performance?"

while the Student may record:

"How did I experience my own performance and what do I believe I need to improve?"

Both can relate to the same Lesson without being interchangeable.

## Potential richer progress context
A future training history could conceptually contain:

Lesson
→ Instructor assessment
+
Student reflection
→ richer historical training context

This may become useful for:

- future Lesson context
- Instructor continuity
- Student engagement
- understanding differences between Instructor observation and Student perception
No such workflow is approved.

## Important TROLOVA constraint
Do NOT introduce:

- Student Reflection entity
- reflection forms
- reflection scoring
- mandatory reflection
- automatic progress changes
- automatic readiness changes
- Student-defined competency truth
from this research.

Student self-reflection must not overwrite or silently become Instructor evaluation.

Likewise:

Student reflection
≠ progress calculation
≠ readiness decision
≠ Enrollment lifecycle mutation

## Research significance
This is the PRIMARY NEW SIGNAL from Total Drive and the main reason the source justifies a standalone research entry.

## Research importance
HIGH

---

# Finding 2 — Multiple Student Locations
Total Drive supports operational use of more than one relevant location for a learner/Student.

## Why this may matter for TROLOVA
This adds another useful distinction to the geographic research already accumulated.

A Student's identity or profile location is not necessarily the same thing as the location relevant to every Lesson.

Conceptually:

Student
→ possible operational locations
→ selected location for a particular scheduling context

Therefore:

**Student identity**
≠
**Student home/profile address**
≠
**Lesson-relevant location**

A Student could potentially have different valid locations depending on operational context.

## Relationship to Entry 004 geographic research
Entry 004 established:

Temporal availability
≠
Geographic travel feasibility
≠
Geographic Instructor suitability/matching

Total Drive adds another possible dimension:

Student/Learner operational location.

A future advanced scheduling question might therefore involve:

Student
→ relevant Lesson location
→ Instructor eligibility
→ Instructor availability
→ Vehicle requirements
→ travel feasibility
→ valid Lesson possibility

This remains exploratory only.

## Important TROLOVA constraint
Do NOT introduce:

- Pickup Location entity
- Student Location entity
- multiple-address schema
- home/work/school location taxonomy
- map integration
- routing
- geolocation tracking
from this research.

The useful signal is only:

**Student identity ≠ Lesson-relevant geographic location**

## Research significance
NEW RESEARCH SIGNAL.

## Research importance
MEDIUM-HIGH

---

# Finding 3 — Student Availability Is a Separate Scheduling Input
Total Drive exposes Student availability as information that can assist Lesson planning.

## Why this may matter for TROLOVA
Our previous research heavily established Instructor availability.

Total Drive reinforces that advanced Scheduling may eventually need to reason about availability from both sides.

Conceptually:

Instructor availability
+
Student availability
+
Enrollment eligibility
+
Instructor eligibility
+
Vehicle requirements
+
conflict prevention
+
potential geographic constraints
→ possible Lesson slots

This creates another useful distinction:

**Instructor Availability**
≠
**Student Availability**

A Student may be eligible for training while still being unavailable at a particular time.

Likewise:

Student eligibility
≠ Student scheduling availability

## Important TROLOVA constraint
Do NOT introduce:

- Student Availability entity
- recurring Student availability
- preferred hours
- blocked-time models
- automatic slot generation
from this research.

Advanced availability and slot generation remain Deferred.

## Research significance
This is not a completely new Scheduling area.

It materially strengthens the existing advanced Scheduling research model by showing that Student-side availability can also be first-class operational input.

## Research importance
MEDIUM-HIGH

---

# Finding 4 — Lesson Gaps / Cancelled Capacity Recovery
Total Drive exposes mechanisms around gaps in Instructor schedules that can be surfaced to Students and potentially filled.

## Relationship to previous research
This strongly reinforces the late-cancellation capacity-recovery signal introduced in Research Entry 002.

The emerging operational pattern is:

Lesson cancelled or schedule gap appears
→ capacity becomes available
→ interested/appropriate Students may see or receive that opportunity
→ booking may fill the gap

## Why this may matter for TROLOVA
Cancellation does not necessarily need to mean permanently lost Instructor capacity.

Advanced Scheduling could eventually distinguish:

Lesson cancellation
→ historical Lesson outcome remains preserved

from:

resulting Instructor capacity
→ becomes potentially reusable

These are different operational facts.

## Important TROLOVA constraint
Do NOT introduce:

- automatic Student reassignment
- automatic gap filling
- priority algorithms
- waiting-list promotion rules
- Student eligibility assumptions
- automatic replacement Lesson creation
Any future capacity recovery must still respect relevant TROLOVA constraints.

## Research significance
REPEATED / STRENGTHENED MARKET SIGNAL.

Not a new domain concept.

## Research importance
MEDIUM-HIGH

---

# Finding 5 — Offline Instructor Operations Is Now a Repeated Signal
Total Drive provides additional evidence for Instructor operational access in mobile/offline-oriented working conditions.

Research Entry 004 introduced offline-first Instructor execution through DriveSchool Pro.

Total Drive independently strengthens this signal.

## Why this matters
Driving Instructors operate away from the Training Center and may encounter unreliable connectivity.

Therefore:

**Mobile responsive**
≠
**Operationally resilient without connectivity**

Offline Instructor operation should now be considered a repeated market signal rather than an observation from only one competitor.

## Potential operational context
Conceptually:

Instructor has assigned work
→ relevant Lesson/Student context available
→ connectivity becomes unavailable
→ essential Instructor workflow remains usable
→ changes are safely preserved
→ synchronization occurs when connectivity returns

This is research only.

## Important TROLOVA constraint
All unresolved concerns from Entry 004 remain:

- stale data
- conflicting changes
- revoked access
- local Student data security
- synchronization
- privacy
- device security
- auditability
Do NOT interpret repeated evidence as implementation approval.

## Research significance
STRONGER REPEATED MARKET SIGNAL.

## Research importance
MEDIUM-HIGH

---

# Finding 6 — Payment Destination / Financial Visibility Are Separate Questions
Total Drive exposes financial behavior where payment handling may differ according to operational/business setup.

The useful TROLOVA research signal is NOT the competitor's exact franchise or account structure.

The useful signal is that several financial questions may be distinct:

Who recorded the Payment?
≠
Who collected/received the money?
≠
Where is the money ultimately directed?
≠
Who is responsible for reconciliation/settlement?
≠
Who is allowed to view the financial record?

## Why this matters for TROLOVA
TROLOVA already makes important distinctions:

Recorder
≠ Collector/Receiver

and:

Payment
≠ Settlement

Total Drive strengthens the need not to collapse these concepts as financial operations become more detailed.

A future system may need to distinguish:

**Transaction truth**
from
**money custody/destination**
from
**settlement responsibility**
from
**authorization/visibility**

## Critical boundary
Do NOT infer from Total Drive that TROLOVA requires:

- Instructor-owned payment accounts
- franchise accounting
- payment splitting
- payouts
- commissions
- payroll
- Instructor revenue ownership
- separate bank-account architecture
Those are NOT approved.

Likewise:

Financial visibility
≠ financial ownership

and:

Software access
≠ operational responsibility

## Current TROLOVA relationship
This finding reinforces existing Product Truth rather than replacing it.

TROLOVA already distinguishes:

- Payment
- Expense
- Settlement
- Collector/Receiver
- Recorder
- Handover Actor
- Center Receiving Actor
Detailed finance remains Deferred.

## Research significance
TROLOVA DISTINCTION REINFORCED.

## Research importance
MEDIUM-HIGH

---

# What Total Drive Primarily Reinforces
Do NOT expand this into another feature inventory.

The useful accumulated signals after this source are:

### Student Progress
Student progress may contain multiple perspectives:

Instructor observation
≠
Student self-reflection

Both may relate to the same Lesson while preserving separate authorship and meaning.

### Scheduling
Advanced Scheduling increasingly appears to require reasoning across more than Instructor calendar conflicts:

Student availability
+
Instructor availability
+
eligibility
+
Vehicle requirements
+
geography
+
capacity recovery

No such complete engine is approved.

### Instructor Operations
Offline/mobile operational resilience is now supported by multiple independent market sources.

### Financial Operations
Money received, money destination, settlement responsibility, record authorship, and visibility should not automatically be treated as the same concept.

---

# New vs Repeated Signals — Entry 005

## New

- Student Self-Reflection distinct from Instructor Evaluation
- Student identity distinct from Lesson-relevant/multiple operational locations

## Strengthened

- Student Availability as Scheduling input
- Lesson Gap / Cancelled Capacity Recovery
- Offline Instructor Operations

## Existing TROLOVA Distinction Reinforced

- Payment recorder / receiver / destination / settlement / visibility should remain conceptually separable where Product requirements eventually require them

---

# Research Conclusion — Entry 005
Total Drive is worth preserving primarily because it introduces a distinct Student perspective into Lesson history:

**Instructor Evaluation ≠ Student Self-Reflection**

This is the strongest new Product signal from the source.

It also adds useful geographic nuance through multiple Student/Learner locations.

The remaining retained findings strengthen research already underway around:

- Student-side availability
- recovery of cancelled scheduling capacity
- offline Instructor operations
- separation of financial responsibilities and visibility
Routine features already captured elsewhere should not be repeated.

Nothing in this entry is an approved TROLOVA Product requirement.

---
## Source-Specific Scheduling Supplement — SetTime

## Source Context
SetTime is a broader appointment/scheduling platform with a dedicated Driving School scheduling use case.

Official source:
[https://settime.io/industries/automotive/driving-school-scheduling-software](https://settime.io/industries/automotive/driving-school-scheduling-software)

Official product/user guide:
[https://settime.io/user-guide/](https://settime.io/user-guide/)

Research date:
September 2026

It repeats many capabilities already observed across previous TROLOVA research, including:

- Instructor schedules
- Student scheduling
- Vehicle/resource availability
- recurring appointments
- cancellations
- reminders
- Student/customer history
- service/Lesson types
- payments/deposits
- operational reporting
These should NOT be duplicated as standalone findings.

The useful contribution of this source is a more precise set of advanced Scheduling distinctions.

---

### Finding 1 — Bookable Slot ≠ Requested Time
SetTime allows a customer to request certain times even when those times fall outside normally available booking hours, with the business retaining control over whether the request is accepted.

## Why this may matter for TROLOVA
Previous research established Student self-booking as one possible future Scheduling model.

SetTime introduces a useful distinction between:

**Direct Booking**

and:

**Scheduling Request**

Conceptually:

### Direct booking
Valid available slot
→ Student selects
→ booking may proceed under applicable rules

### Scheduling request
Desired time is not normally bookable
→ Student submits request
→ authorized operational actor reviews request
→ approve / reject
→ only then may Scheduling change

Therefore:

**Bookable Slot**
≠
**Requested Time**

and:

**Student scheduling intent**
≠
**Scheduling authority**

## Why this distinction is useful
A future Student self-service experience does not necessarily require TROLOVA to expose only two extremes:

- Student cannot request anything
- Student can directly book anything
There may be a third model:

Student can express scheduling intent without having authority to create an otherwise invalid Lesson.

## Critical TROLOVA boundary
A request must never be interpreted as permission to bypass:

- Enrollment eligibility
- Student consistency
- Instructor eligibility
- Branch rules
- capability compatibility
- Vehicle requirements
- conflict prevention
- authorization
Do NOT introduce:

- SchedulingRequest entity
- approval workflow
- Student booking authority
- exception scheduling
- override permissions
from this research.

Those require separate Product decisions.

## Research significance
USEFUL SCHEDULING DISTINCTION.

## Research importance
HIGH

---

### Finding 2 — Lesson Duration ≠ Scheduling Occupancy
SetTime supports buffer time around appointments so additional operational time can be protected without representing that time as part of the customer-facing appointment itself.

This reinforces a signal also observed in Fahrstundenplaner.

## Why this may matter for TROLOVA
A Lesson may have a defined training duration while the Instructor may require additional protected time before another Lesson can begin.

Conceptually:

Lesson:
10:00 → 11:00

Operational buffer:
11:00 → 11:15

Next feasible Instructor start:
11:15

Therefore:

**Lesson Duration**
≠
**Scheduling Occupancy**

This distinction becomes even more interesting when combined with geographic Scheduling research.

Potential future reasoning:

Lesson duration
+
operational buffer
+
travel requirement
→ next feasible start time

## Important distinction
Buffer time should not automatically become part of the Lesson itself.

If a Student receives 60 minutes of training, a 15-minute operational buffer does not necessarily mean the Lesson lasted 75 minutes.

Therefore:

Training duration
≠
resource occupancy duration

## Critical TROLOVA boundary
Do NOT introduce:

- Lesson buffer fields
- global buffer rules
- Instructor-specific buffers
- before/after buffers
- travel buffers
- automatic occupancy expansion
from this research.

Exact advanced Scheduling rules remain Deferred.

## Research significance
STRONGER REPEATED SCHEDULING SIGNAL.

## Research importance
HIGH

---

### Finding 3 — Free Time ≠ Currently Bookable Time
SetTime supports booking constraints such as minimum lead time and a future scheduling window.

This creates another important distinction.

An Instructor may technically have no conflicting Lesson at a particular time while that time is still not available for booking.

Conceptually:

Instructor calendar is free
≠
slot satisfies booking policy
≠
slot is currently bookable

Examples include:

- booking must occur a minimum amount of time before the appointment
- booking may only occur within a defined future horizon
Therefore:

**Temporal Freedom**
≠
**Operational Availability**
≠
**Bookability**

## Example
Suppose an Instructor is free today at 14:00.

If the Training Center requires bookings at least 4 hours in advance and the current time is 12:00:

The Instructor may be technically free.

But the slot may no longer be bookable.

Likewise, an Instructor may have free time six months from now while the Training Center only allows booking 30 days ahead.

The time exists.

The Instructor may eventually be available.

But the slot is not currently bookable.

## Why this matters for TROLOVA
This strengthens the idea that advanced Scheduling cannot necessarily reduce availability to:

"No conflicting Lesson exists."

Potential future reasoning could distinguish:

Instructor eligibility
→ working availability
→ absence/time-off
→ existing conflicts
→ Student availability
→ Vehicle constraints
→ geographic feasibility
→ booking policy
→ currently bookable opportunity

No such engine is approved.

## Critical TROLOVA boundary
Do NOT introduce:

- minimum lead-time configuration
- maximum booking horizon
- Scheduling Window entity
- automatic slot-generation policy
from this research.

These remain Deferred advanced Scheduling questions.

## Research significance
USEFUL ADVANCED SCHEDULING DISTINCTION.

## Research importance
MEDIUM-HIGH

---

### Combined Scheduling Distinctions After SetTime
SetTime strengthens the research conclusion that several concepts commonly described as "availability" may actually be different operational truths.

The research pool now suggests preserving distinctions between:

**Teaching Eligibility**
≠
**Instructor Working Availability**
≠
**Instructor Absence / Time-Off**
≠
**Student Availability**
≠
**Existing Conflict**
≠
**Vehicle Availability**
≠
**Lesson Duration**
≠
**Scheduling Occupancy / Buffer**
≠
**Geographic Feasibility**
≠
**Booking Policy**
≠
**Currently Bookable Slot**
≠
**Requested Time**

These distinctions are RESEARCH ONLY.

They do NOT mean TROLOVA needs separate entities or configuration for every concept.

---

### Important Product Principle Reinforced
SetTime provides another useful example of why TROLOVA should avoid treating:

`AVAILABLE = true/false`

as sufficient Product reasoning for advanced Scheduling.

A Lesson opportunity may need to satisfy several independent operational constraints before becoming bookable.

Likewise, Student self-service does not necessarily require giving Students direct scheduling authority.

A future model could potentially distinguish:

**Student expresses intent**
from
**system validates constraints**
from
**authorized actor/system confirms scheduling**

No such workflow is approved.

---

### SetTime Supplement Conclusion
SetTime does not justify a standalone Research Entry because most of its broader capabilities repeat existing market signals.

Its value is in sharpening three Scheduling distinctions:

1. **Bookable Slot ≠ Requested Time**
2. **Lesson Duration ≠ Scheduling Occupancy / Buffer**
3. **Free Time ≠ Currently Bookable Time**
The buffer concept also independently reinforces earlier research from Fahrstundenplaner.

The source therefore strengthens TROLOVA's emerging advanced Scheduling research without introducing a new approved Product model.

Nothing in this supplement is an approved TROLOVA Product requirement.

---

## Operational Recovery & Geographic Boundary Supplement — Drivofy

## Source Context
Drivofy is a Driving School management platform covering many capabilities already observed across previous TROLOVA research.

Official website:
[https://www.drivofy.com/](https://www.drivofy.com/)

Official features page:
[https://www.drivofy.com/features](https://www.drivofy.com/features)

Research date:
September 2026

Those repeated capabilities are not duplicated here.

The useful contribution of this source is limited to three operational signals:

- recovery after a missed Lesson
- automated follow-up around inactive Students
- a clearer boundary between geographic Scheduling and fleet/telematics capabilities
Nothing in this supplement is an approved TROLOVA Product requirement.

---

### Finding 1 — Missed Lesson Outcome ≠ Recovery Workflow
Drivofy exposes a workflow around missed classes where the Student can be moved toward booking a makeup/replacement session.

The important research signal is not the competitor's exact automation.

The useful distinction is:

**What happened to the original Lesson**
≠
**What operational action happens afterward**

Conceptually:

Lesson is missed / Student does not attend
→ original Lesson retains its historical outcome
→ recovery may be needed
→ Student may be prompted toward another Lesson
→ any replacement scheduling occurs separately

## Why this matters for TROLOVA
TROLOVA already defines `NO_SHOW` as a terminal Lesson lifecycle state.

Therefore a future recovery workflow must not rewrite the original Lesson as if it never happened.

Conceptually:

Original Lesson
→ `NO_SHOW`
→ historical truth preserved

Potential recovery:
→ new scheduling intent/process
→ potentially another Lesson

Therefore:

**NO_SHOW**
≠
**Rescheduled original Lesson**
≠
**Makeup Lesson**
≠
**Recovery workflow**

The exact relationship between these concepts is NOT defined here.

## Relationship to previous research
Previous sources introduced:

Cancellation
→ open capacity
→ possible replacement demand

Drivofy introduces the opposite operational perspective:

Student misses required training
→ training demand may still remain
→ recovery action may be needed

Therefore two different recovery problems may exist:

**Capacity Recovery**
and
**Training Recovery**

Capacity Recovery asks:

"How can newly available Instructor capacity be reused?"

Training Recovery asks:

"How does a Student recover training that was not completed?"

These should not automatically be modeled as the same workflow.

## Critical TROLOVA boundary
Do NOT introduce:

- Makeup Lesson entity
- automatic replacement Lesson
- automatic rescheduling after `NO_SHOW`
- automatic Lesson creation
- makeup entitlement
- penalty rules
- automatic financial consequences
- automatic package/credit consumption or restoration
from this research.

TROLOVA's existing rule remains authoritative:

Connected domains do not imply automatic cross-domain mutation.

## Research significance
NEW/USEFUL OPERATIONAL DISTINCTION.

## Research importance
HIGH

---

### Finding 2 — Behavioral Inactivity ≠ Student Lifecycle State
Drivofy exposes automated follow-up intended to re-engage Students who have become inactive in an operational/engagement sense.

The useful research signal is the distinction between:

**A Student who has not recently engaged with training**
and
**the Student's formal TROLOVA lifecycle state**

## Why this matters for TROLOVA
TROLOVA currently defines Student lifecycle as:

`ACTIVE <-> ARCHIVED`

A Student may still be formally `ACTIVE` while showing behavior such as:

- no recent Lesson activity
- no future Lesson scheduled
- interrupted training activity
- lack of response or engagement
Therefore:

**Behavioral inactivity**
≠
**Student `ARCHIVED`**

Likewise:

No recent Lesson
≠
Student lifecycle mutation

No future booking
≠
Student lifecycle mutation

Automated follow-up
≠
CRM lifecycle

## Potential operational question
A future system could theoretically identify an operational condition such as:

Active Student
→ expected training activity is absent
→ follow-up opportunity detected
→ communication/task may be triggered

But the exact definition of "inactive" is NOT established.

## Critical TROLOVA boundary
Do NOT introduce:

- `INACTIVE` Student status
- automatic Student archiving
- lead-management lifecycle
- CRM pipeline
- automated retention campaigns
- engagement scoring
- Student churn scoring
- automatic messaging sequences
from this research.

Notifications/Communications remain Deferred.

TROLOVA is not currently a generic CRM.

## Research significance
USEFUL OPERATIONAL DISTINCTION.

## Research importance
MEDIUM-HIGH

---

### Finding 3 — Geographic Scheduling ≠ Route Optimization ≠ Real-Time Vehicle Tracking
Drivofy exposes route optimization and real-time Vehicle tracking capabilities.

These concepts relate to geography but should not be collapsed into the geographic Scheduling research already preserved for TROLOVA.

## Existing TROLOVA research
Previous research established questions such as:

**Can the Instructor physically execute the next Lesson given travel requirements?**

and:

**Which Instructor may be geographically appropriate for a Student/location?**

These are Scheduling questions.

Drivofy exposes additional concepts:

**Route Optimization**

and:

**Real-Time Vehicle Tracking**

These are materially different.

## Distinction to preserve

### Geographic Scheduling Feasibility
Answers:

"Can this Lesson be scheduled realistically given time and location?"

### Route Optimization
Answers:

"What movement/order/route would be operationally more efficient?"

### Real-Time Vehicle Tracking
Answers:

"Where is the Vehicle currently located or moving?"

Therefore:

**Geographic Scheduling Feasibility**
≠
**Route Optimization**
≠
**Real-Time Vehicle Tracking**

They may share geographic data while solving different Product problems.

## Why this matters for TROLOVA
TROLOVA may eventually evaluate geographic constraints as part of advanced Scheduling.

That does NOT mean TROLOVA should automatically become a fleet tracking or telematics platform.

A possible future boundary remains:

Scheduling may consume geographic information
without
owning real-time Vehicle telemetry.

## Current TROLOVA boundary
TROLOVA explicitly does NOT currently position itself as:

- telematics software
- fleet-management software
Vehicle maintenance and advanced Vehicle operations are Deferred.

Therefore real-time Vehicle tracking should be treated as boundary evidence, not as a missing feature.

## Critical TROLOVA constraint
Do NOT introduce:

- GPS tracking
- Vehicle location history
- telematics devices
- real-time Vehicle coordinates
- route optimization engine
- driver tracking
- trip tracking
- fleet dispatch
- Vehicle movement history
from this research.

## Research significance
PRODUCT BOUNDARY REINFORCEMENT.

## Research importance
MEDIUM-HIGH

---

### Combined Recovery Distinction
Drivofy helps sharpen the growing Scheduling research around what happens after operational disruption.

The research pool now suggests several different problems:

### Cancellation
Lesson cancelled
→ original historical outcome preserved
→ capacity may become available

### Capacity Recovery
Available Instructor capacity
→ potentially eligible/interested Student demand
→ possible replacement booking

### No-Show / Missed Training
Lesson missed
→ original Lesson outcome preserved
→ Student may still need training

### Training Recovery
Uncompleted training need
→ potential makeup/replacement scheduling process

These should not automatically be collapsed into one generic "reschedule" behavior.

In particular:

**Reschedule**
≠
**Cancellation**
≠
**No-Show**
≠
**Capacity Recovery**
≠
**Training Recovery**

This is RESEARCH ONLY.

---

### Product Principles Reinforced
Drivofy reinforces several existing TROLOVA principles.

### Historical truth
A recovery workflow should not rewrite what happened to the original Lesson.

### Consistency without automatic mutation
A `NO_SHOW` may create an operational need for follow-up without automatically creating another Lesson.

### Lifecycle truth vs behavioral signals
Student engagement/activity signals should not silently mutate Student lifecycle.

### Product boundary discipline
A competitor offering Vehicle tracking does not automatically make telematics a TROLOVA requirement.

---

### Drivofy Supplement Conclusion
Drivofy does not justify Research Entry 006 because most of its capabilities repeat existing research.

Its useful contribution is concentrated in three distinctions:

1. **Missed Lesson Outcome ≠ Recovery Workflow**
2. **Behavioral Inactivity ≠ Student Lifecycle State**
3. **Geographic Scheduling ≠ Route Optimization ≠ Real-Time Vehicle Tracking**
The strongest new operational question is the first:

A missed Lesson may create a future training-recovery need while the original Lesson remains immutable historical truth.

This extends the existing capacity-recovery research without introducing automatic rescheduling or cross-domain mutation.

Nothing in this supplement is an approved TROLOVA Product requirement.

---

# Research Entry 006 — Operational Capacity & Readiness Constraints

## Sources

### Misha Infotech — Driving School Management System
[https://www.mishainfotech.com/driving-school-management-system](https://www.mishainfotech.com/driving-school-management-system)

### Nexivo — Driving School Tools
[https://nexivo.co/ar/business-automation/driving-school-tools](https://nexivo.co/ar/business-automation/driving-school-tools)

Research date:
September 2026

## Research Question
Previous TROLOVA research has increasingly shown that successful Lesson Scheduling cannot necessarily be reduced to:

`Instructor is free + Student is free`

Several independent operational conditions may determine whether a Lesson can actually be executed.

This research entry examines two additional questions:

1. Can physical training capacity extend beyond Instructor and Vehicle?
2. Can something appear free or available while still being operationally unusable or ineligible?
The combined market evidence suggests that:

**Availability**
≠
**Eligibility**
≠
**Operational Readiness**
≠
**Physical Capacity**

These distinctions are RESEARCH ONLY.

They do NOT establish new TROLOVA entities or Scheduling rules.

---

# Finding 1 — Lesson Execution May Depend on Facility Capacity
Misha Infotech describes Driving Track organization/management as part of Driving School operations.

This provides a useful market signal that some training environments may depend on physical training capacity beyond the Instructor and Vehicle.

Previous research from Autofox also exposed training/classroom-space concepts.

Together these sources suggest a broader operational question.

A Lesson may potentially require:

Student
+
eligible Instructor
+
optional/required Vehicle
+
appropriate time
+
appropriate location/facility capacity

depending on the type of training being delivered.

## Important distinction
**Branch**
≠
**Instructor**
≠
**Vehicle**
≠
**Training Facility Capacity**

A Branch describes operational context/location.

That does not necessarily mean every physical training facility inside that Branch has unlimited capacity.

Likewise, a Vehicle being available does not imply that any required training area is available.

## Example research scenario
Suppose a Training Center has:

- 10 available Instructors
- 10 available Vehicles
- one controlled training track capable of supporting only a limited number of simultaneous sessions
Instructor and Vehicle availability alone may not describe true training capacity.

Conceptually:

Instructor available
+
Vehicle available
+
Student eligible
+
time conflict-free

may still not imply:

Lesson operationally executable

if required facility capacity is unavailable.

## Relationship to current TROLOVA Lesson model
Current TROLOVA Scheduling truth remains authoritative.

Do NOT alter the accepted Lesson definition from this research.

The current model includes:

# Enrollment eligibility
+
Student consistency
+
planned date/time
+
Branch
+
Instructor eligibility
+
capability compatibility
+
optional Vehicle
+
conflict prevention
schedulable Lesson

The facility signal raises a future research question only:

Should some training types eventually require additional physical capacity constraints?

That question is NOT answered here.

## Critical TROLOVA boundary
Do NOT introduce:

- `Resource` entity
- generic Resource abstraction
- `DrivingTrack` entity
- `TrainingFacility` entity
- Classroom entity
- facility calendar
- facility conflict rules
- facility capacity rules
- facility booking
- automatic Branch capacity calculations
from this research.

A competitor exposing Driving Track management does NOT prove TROLOVA needs a new domain object.

## Research significance
NEW/USEFUL CAPACITY QUESTION.

## Research importance
HIGH

---

# Finding 2 — Vehicle Free ≠ Vehicle Operationally Usable
Nexivo distinguishes Vehicle scheduling/availability from operational concerns such as maintenance, inspection, and Vehicle condition.

This strongly reinforces an existing TROLOVA distinction:

**Vehicle operational status/usability**
≠
**Vehicle Scheduling availability**

## Why this matters
A Vehicle may have no overlapping Lesson and still be unusable.

Conceptually:

No Lesson conflict
≠
Vehicle can be assigned

Examples could include:

- Vehicle unavailable for operational reasons
- required inspection issue
- maintenance condition
- other operational restriction
The exact reasons are not defined by this research.

Likewise:

Vehicle operationally usable
≠
Vehicle currently free

A perfectly usable Vehicle may already be assigned to another Lesson.

Therefore at least two independent questions exist:

1. Is this Vehicle operationally usable?
2. Is this Vehicle available for this time interval?
Only when relevant constraints are satisfied could it potentially participate in Scheduling.

## Important existing TROLOVA decision reinforced
TROLOVA already rejects `BUSY` as Vehicle lifecycle truth.

This research strengthens that decision.

`BUSY` describes temporary scheduling occupancy.

It should not automatically represent durable Vehicle operational state.

Therefore:

**BUSY**
≠
**Vehicle lifecycle/status truth**

and:

**FREE**
≠
**operationally usable**

## Critical TROLOVA boundary
Do NOT introduce:

- maintenance module
- maintenance schedules
- inspection workflows
- insurance workflows
- Vehicle maintenance statuses
- maintenance alerts
- service history
- Vehicle readiness engine
from this research.

Vehicle maintenance remains Deferred.

## Research significance
STRONG REINFORCEMENT OF EXISTING TROLOVA DISTINCTION.

## Research importance
HIGH

---

# Finding 3 — Instructor Qualification ≠ Working Availability ≠ Scheduling Availability
Nexivo discusses Instructor certifications/licensing together with availability and working-hour concerns.

This independently reinforces a distinction already emerging strongly across previous research.

An Instructor can satisfy one operational condition without satisfying another.

Conceptually:

**Instructor identity**
≠
**Teaching eligibility / qualification**
≠
**Working availability**
≠
**Absence / time-off**
≠
**Existing booked time**
≠
**Software access**

## Example
An Instructor may be qualified to teach a certain training type but not working that day.

Another Instructor may be working that day but already booked.

Another may have open calendar time but lack the required teaching capability.

Another may be operationally eligible to teach while having no software access.

These conditions must not be collapsed.

## Existing TROLOVA truth reinforced
TROLOVA already establishes:

**Teaching Eligibility**
≠
**Scheduling Availability**
≠
**Software Access**

Previous research further suggested:

working availability
≠
absence/time-off
≠
booked time

Nexivo provides another independent market signal supporting this separation.

## Critical TROLOVA boundary
Do NOT introduce:

- certification taxonomy
- license taxonomy
- Instructor credential management
- qualification expiration workflows
- Instructor working-hours model
- Instructor absence model
- Instructor availability entity
- automated Instructor eligibility engine
from this research.

Exact Instructor teaching capabilities and advanced Scheduling remain Deferred.

## Research significance
STRONGER REPEATED SIGNAL.

## Research importance
HIGH

---

# Finding 4 — Progress / Readiness Signal ≠ Enrollment Readiness Decision
Nexivo describes tracking Student progress/milestones and using operational information around readiness for testing.

This should NOT be interpreted as evidence that TROLOVA should automatically determine `READY_FOR_TEST`.

Instead, it reinforces an important distinction already identified in previous research.

Conceptually:

Student progress information
→ may inform human/system decision-making

but:

Student progress information
≠
automatic Enrollment lifecycle transition

Therefore:

**Progress signal**
≠
**Readiness assessment**
≠
**Enrollment `READY_FOR_TEST` state**

## Why this matters
A future TROLOVA progress model could potentially expose information such as:

- training history
- Instructor evaluations
- Student reflection
- skill/progress indicators
- completed training activity
Such information could help an authorized actor understand Student readiness.

That does NOT establish an automatic lifecycle rule.

## Existing TROLOVA truth remains authoritative
Exact readiness criteria are Deferred.

Passing/failing or progress calculations must not silently mutate unrelated lifecycle state unless explicitly accepted.

Therefore:

Progress improves
≠
automatic `READY_FOR_TEST`

Progress score reaches threshold
≠
automatic `READY_FOR_TEST`

Instructor evaluation changes
≠
automatic `READY_FOR_TEST`

Student self-reflection changes
≠
automatic `READY_FOR_TEST`

## Relationship to previous research
DriveSchool Pro already exposed automated test-readiness behavior as competitor behavior.

TROLOVA explicitly preserved the distinction:

`Progress score ≠ automatic READY_FOR_TEST`

Nexivo provides additional independent market evidence that progress/readiness information is operationally useful.

It does NOT change TROLOVA's decision.

## Critical TROLOVA boundary
Do NOT introduce:

- readiness score
- automatic readiness calculation
- progress threshold
- automatic Enrollment lifecycle transition
- test eligibility engine
- readiness algorithm
from this research.

## Research significance
STRONGER REPEATED SIGNAL / PRODUCT-TRUTH REINFORCEMENT.

## Research importance
HIGH

---

# Finding 5 — Shared Operational Truth Can Span Different Constraint Types
Nexivo's broader business-automation framing connects information across areas such as:

- Students
- Instructors
- Vehicles
- Scheduling
- training progress
- financial operations
The individual capabilities are mostly repeated market signals.

The useful observation is architectural/product-level:

Operational decisions may need information owned by different domains without collapsing those domains into one object.

For example:

Scheduling may need to know whether:

- Enrollment is eligible
- Instructor is eligible
- Instructor is available
- Vehicle is usable
- Vehicle is available
- Student is available
- physical capacity exists
- geographic constraints are satisfied
These facts may come from different operational areas.

That does NOT mean Scheduling owns all of those truths.

## TROLOVA principle reinforced
**Shared Operational Truth**
does not mean
**Shared Domain Ownership**

Likewise:

**Connected Domains**
does not mean
**Automatic Cross-Domain Mutation**

A Scheduling decision may consume facts from another domain while that domain remains authoritative for its own truth.

## Research significance
ARCHITECTURAL / PRODUCT PRINCIPLE REINFORCEMENT.

## Research importance
MEDIUM-HIGH

---

# Emerging Constraint Model
Across the research collected so far, a future advanced Scheduling question is becoming more precise.

A conceptual research model could eventually ask:

Student needs Lesson
→ Enrollment eligible?
→ Student operationally eligible?
→ Instructor teaching-eligible?
→ Instructor working?
→ Instructor absent?
→ Instructor already booked?
→ Student available?
→ Vehicle required?
→ Vehicle compatible?
→ Vehicle operationally usable?
→ Vehicle already booked?
→ facility capacity required?
→ facility capacity available?
→ geographic execution feasible?
→ booking-policy constraints satisfied?
→ valid Lesson opportunity

This is NOT an approved TROLOVA Scheduling engine.

It is a research synthesis showing that:

**No time conflict**
is only one possible Scheduling constraint.

---

# Critical Distinctions Preserved by Entry 006
This entry adds/reinforces the following distinctions:

**Branch**
≠
**Training Facility Capacity**

**Instructor Availability**
≠
**Vehicle Availability**
≠
**Facility Capacity**

**Vehicle Free**
≠
**Vehicle Operationally Usable**

**Instructor Qualified**
≠
**Instructor Working**
≠
**Instructor Available**
≠
**Instructor Software Access**

**Student Progress**
≠
**Readiness Decision**
≠
**Enrollment `READY_FOR_TEST`**

**Shared Operational Truth**
≠
**Shared Domain Ownership**

**Constraint consumption**
≠
**Domain ownership**

---

# What Is New vs Reinforced

## New / useful research question

### Physical Training Facility Capacity
Misha Infotech, supported conceptually by earlier Autofox evidence, raises the possibility that some Lesson types may depend on physical training-space capacity beyond Instructor and Vehicle.

This is the primary new question introduced by Entry 006.

It is NOT an approved domain model.

---

## Strongly reinforced

### Vehicle operational readiness vs availability
Independent evidence strengthens TROLOVA's existing distinction.

### Instructor eligibility/qualification vs availability
Independent evidence strengthens an already strong recurring market signal.

### Progress/readiness information vs lifecycle state
Independent evidence strengthens TROLOVA's deliberate rejection of automatic readiness inference.

### Shared Operational Truth
The market continues to support connected operational information while TROLOVA preserves clear domain ownership.

---

# What NOT to Infer
Do NOT infer that TROLOVA now requires:

- generic Resources
- Driving Track management
- Classroom management
- facility booking
- facility capacity engine
- Vehicle maintenance
- Vehicle inspection management
- Instructor certification management
- Instructor license management
- working-hours engine
- absence management
- Student progress scoring
- readiness scoring
- automatic `READY_FOR_TEST`
- CRM
- LMS
- accounting
- government/licensing workflows
Do NOT modify canonical Product or Domain decisions.

Do NOT convert any Deferred capability into CURRENT or ACCEPTED scope.

---

# Research Conclusion — Entry 006
Misha Infotech and Nexivo together strengthen an important direction in TROLOVA's Scheduling research:

**Schedulability is potentially the result of multiple independent operational truths, not merely an empty calendar slot.**

The strongest new research question is whether some forms of training require physical facility capacity beyond Instructor and Vehicle.

The strongest reinforced distinctions are:

**Vehicle free ≠ Vehicle operationally usable**

**Instructor qualified ≠ Instructor working ≠ Instructor available**

**Progress/readiness signal ≠ automatic Enrollment readiness**

These findings strengthen TROLOVA's existing discipline around separating:

- lifecycle truth
- eligibility
- operational readiness
- availability
- capacity
- scheduling occupancy
while preserving Shared Operational Truth across domains.

Nothing in Entry 006 changes TROLOVA Product Truth.

All implementation implications remain subject to explicit Product/Domain review.

---

# Research Entry 007 — Training Activity, Progress, Training Structure & Scheduling Cadence

## Sources

### Primary sources

- Driving GradeBook — [https://drivinggradebook.com/](https://drivinggradebook.com/)
- Drivers Ed Solutions — [https://www.driversedsolutions.com/features.phtml](https://www.driversedsolutions.com/features.phtml)
- ZoomScheduler — [https://www.zoomscheduler.com/features.html](https://www.zoomscheduler.com/features.html)
- WorkDo Driving School — [https://workdo.io/product/dash-saas-add-ons/driving-school-dash-saas-add-on/](https://workdo.io/product/dash-saas-add-ons/driving-school-dash-saas-add-on/)
- Driveato — [https://www.driveato.com/](https://www.driveato.com/)

### Supporting sources

DriveTrak, Total Drive, BookingTimes, Drive Scout, Zutobi, Oases, AutoviaTest, and NetMaxims / DSS.

Research date:
September 2026

## Research Question
Previous TROLOVA research concentrated on whether a Lesson can be scheduled and operationally executed. The latest research exposes a different layer: what counts as training activity, how training is structured, who contributes information about development, what progress represents, and whether an otherwise free slot is valid within a Student's training cadence.

The strongest distinctions are:

**Training Activity** ≠ **Lesson**

**Training Structure / Plan** ≠ **Individual Lesson**

**Instructor Evaluation** ≠ **Student Reflection / Feedback** ≠ **Student Practice**

**Progress** ≠ **Lesson Count**

**Availability** ≠ **Valid Training Cadence**

These are research distinctions only. They do not establish TROLOVA entities, lifecycle rules, calculations, or Scheduling constraints.

---

# Finding 1 — Training Activity ≠ Lesson
Driving GradeBook and supporting DriveTrak evidence suggest that Student training history may include practice outside formal Instructor-led Driving School Lessons.

TROLOVA's authoritative definition remains:

**Lesson = one scheduled training session inside an Enrollment.**

Formal Training Center Lesson execution and external/private practice may both contribute to a Student's development without being the same operational fact.

Therefore:

**Training Activity** ≠ **Lesson**

and:

**Student-reported practice** ≠ **Instructor-recorded Lesson execution**

Do NOT introduce a `TrainingActivity` or `PracticeSession` entity, private-practice domain, practice verification, regulatory practice ledger, or external training approval from this research.

## Research significance
NEW / STRONGLY REINFORCED DOMAIN DISTINCTION.

## Research importance
HIGH

---

# Finding 2 — Training Structure / Plan ≠ Individual Lesson
WorkDo exposes a broader Class-like planning structure containing dates, Instructor, Vehicle, Students, location, recurrence, and Lessons generated from that structure.

The competitor's exact model and terminology must not be copied. The useful distinction is:

**Planning a body or sequence of training** ≠ **Executing one individual Lesson**

and:

**Recurring Scheduling Definition** ≠ **Individual scheduled occurrence**

If a future planning layer exists, individual Lesson identity and historical attribution must remain meaningful. Plan changes must not imply historical Lesson rewrites.

Do NOT introduce `Class`, `TrainingPlan`, recurring-series entities, bulk Lesson creation, recurrence rules, automatic Lesson generation, group Lessons, or classroom models from this research. Recurring and bulk Scheduling remain Deferred.

## Research significance
NEW STRUCTURAL SCHEDULING QUESTION.

## Research importance
HIGH

---

# Finding 3 — Instructor Evaluation ≠ Student Reflection / Feedback ≠ Student Practice
Driving GradeBook, ZoomScheduler, and Driveato reinforce Instructor-created evaluation and progress information. Total Drive established Student self-reflection. Driveato also exposes Student feedback or reviews, while Driving GradeBook and DriveTrak expose Student-reported practice.

These may answer different questions:

- Instructor Evaluation: what the Instructor observed about performance and training.
- Student Reflection: how the Student understands their own experience, achievements, and development areas.
- Student Feedback / Review: what the Student reports about the Lesson or Instructor experience.
- Student Practice: what training activity occurred outside formal Lesson execution.

Therefore:

**Instructor Evaluation** ≠ **Student Self-Reflection** ≠ **Student Feedback / Review** ≠ **Student-Reported Practice**

Different authorship, authority, verification, visibility, and operational meaning must remain distinguishable. Shared training context does not mean all information has equal authority.

Do NOT introduce Student rating systems, public Instructor ratings, marketplace reviews, reflection entities, self-assessment scoring, practice verification, automatic skill mutation, progress weighting, or source-confidence scoring from this research.

## Research significance
STRONG MULTI-SOURCE SYNTHESIS.

## Research importance
HIGH

---

# Finding 4 — Lesson History ≠ Progress Assessment
WorkDo exposes Progress Reports separately from Lesson records, while Driving GradeBook focuses on skills, grades, and recommendations.

A Lesson can record scheduling, occurrence, execution, timing, location, notes, and outcomes. A progress assessment may describe observed skills, development areas, assessed level, or recommended next training.

Therefore:

**Lesson History** ≠ **Progress Assessment**

A Lesson may provide evidence used by a progress model without being identical to that model.

Do NOT introduce a `ProgressReport` entity, progress-assessment lifecycle, skills taxonomy, competency matrix, rating scale, or mandatory post-Lesson assessment from this research. Exact progress and evaluation structure remains Deferred.

## Research significance
STRONG REINFORCEMENT.

## Research importance
HIGH

---

# Finding 5 — Progress ≠ Lesson Count
ZoomScheduler provides evidence of tracking classroom, inspection, off-road, and on-road activity, while Driving GradeBook emphasizes skills, grades, and practice.

This strengthens:

**Completed Lesson Count** ≠ **Training Quantity** ≠ **Training Composition** ≠ **Student Progress**

Two Students may have the same completed Lesson count but different durations, activity types, skill observations, Instructor evaluations, reflections, or external practice. Equal Lesson counts therefore do not imply equal progress, and equal training hours do not necessarily imply equal readiness.

This remains separate from Enrollment lifecycle:

More Lessons ≠ automatic `READY_FOR_TEST`

More hours ≠ automatic `READY_FOR_TEST`

More private practice ≠ automatic `READY_FOR_TEST`

Higher Instructor evaluation ≠ automatic `READY_FOR_TEST`

Positive Student reflection ≠ automatic `READY_FOR_TEST`

Do NOT introduce progress percentages, scores, training-hour requirements, activity-category requirements, curriculum completion, competency scores, readiness scores, automatic progress calculation, or automatic `READY_FOR_TEST`.

## Research significance
HIGH-VALUE PROGRESS DISTINCTION.

## Research importance
HIGH

---

# Finding 6 — Availability ≠ Valid Training Cadence
Drivers Ed Solutions exposes limits on the number of drives a Student may schedule, booking volume across periods, minimum spacing between drives, and waiting lists.

Even when Enrollment, Student, Instructor, Vehicle, conflict, and geographic constraints are satisfied, a slot may still be inappropriate if training cadence or Student booking policy is not satisfied.

Therefore:

**Free Slot** ≠ **Bookable Slot** ≠ **Valid Training Cadence**

This differs from Entry 006. Entry 006 asks whether a Lesson can operationally happen; Entry 007 asks whether its timing is valid within the Student's training journey or Scheduling policy.

Do NOT introduce minimum days between Lessons, maximum Lessons per week/month, training-frequency rules, cadence engines, automatic cadence validation, Student booking quotas, capacity ledgers, demand-allocation engines, fairness rules, or capacity rationing.

## Research significance
NEW / STRONGLY REINFORCED SCHEDULING DISTINCTION.

## Research importance
HIGH

---

# Supporting Reinforcement

## Offline Instructor Execution
Driveato adds an independent signal to the repeated evidence from DriveSchool Pro, Total Drive, and YOU-DRIVE that Instructor work may need to function without continuous connectivity. This remains research only; do not infer offline-first architecture, synchronization engines, local databases, conflict-resolution models, or offline mutation policy.

## Geographic / Service-Area Scheduling
Driveato, BookingTimes, and Drive Scout reinforce that general Instructor availability may differ from geographic or service-area relevance, and temporal conflict freedom differs from geographic feasibility. Preserve the distinctions between Student profile address, Lesson pickup/dropoff, and Instructor service area. Do not introduce Zone, ServiceArea, PickupLocation, DropoffLocation, geographic matching, route, or territory entities from this research.

## Parent / Guardian Stakeholder
Zutobi, DriveTrak, Oases, AutoviaTest, NetMaxims / DSS, Drive Scout, Driving GradeBook, and Driveato provide a strong repeated market signal for Parent/Guardian visibility, payments, communication, signatures, or access. This is a future Product-review candidate, not current TROLOVA Product Truth. Do not introduce Parent or Guardian domains, portals, logins, permissions, consent workflows, or payment ownership.

## Student Scheduling Intent
AutoviaTest, NetMaxims/DSS, and SetTime reinforce that Student intent or a requested time may be distinct from actual Lesson creation:

Student wants training
→ desired time may be expressed
→ constraints and authority may be evaluated
→ Scheduling outcome may follow

**Scheduling Intent** ≠ **Lesson**

**Requested Time** ≠ **Bookable Slot**

**Request** ≠ **Reschedule existing Lesson**

Do not introduce a LessonRequest entity, approval workflow, direct-booking authority, or automatic request acceptance.

---

# Emerging Training Structure
The research pool suggests a conceptual context broader than Lesson history alone:

Possible planning context
→ individual formal Lessons
→ Lesson execution
→ Instructor evaluation
→ Student reflection/feedback
→ external/private practice
→ broader progress context

This is not a proposed TROLOVA data model. Planning ≠ execution, execution ≠ evaluation, evaluation ≠ progress, and progress ≠ readiness.

---

# Emerging Scheduling Research Model
Combining Entries 006 and 007 produces this research-only sequence:

Student needs training
→ Enrollment eligible?
→ required training type/context?
→ Student scheduling intent/request?
→ Instructor teaching-eligible?
→ Instructor working/available?
→ Instructor geographically relevant?
→ Student available?
→ Vehicle required and compatible?
→ Vehicle operationally usable and available?
→ facility capacity required/available?
→ temporal conflicts?
→ geographic execution feasible?
→ booking window/lead time?
→ Student booking capacity?
→ training cadence valid?
→ possible Lesson opportunity
→ authorized/valid Scheduling outcome

This is not an approved TROLOVA Scheduling engine.

---

# Critical Distinctions Preserved by Entry 007

**Training Activity** ≠ **Lesson**

**External / Private Practice** ≠ **Formal Training Center Lesson**

**Training Structure / Plan** ≠ **Individual Lesson**

**Recurring Definition** ≠ **Individual Occurrence**

**Instructor Evaluation** ≠ **Student Reflection** ≠ **Student Feedback** ≠ **Student Practice**

**Lesson History** ≠ **Progress Assessment**

**Lesson Count** ≠ **Training Quantity** ≠ **Training Composition** ≠ **Progress**

**Progress** ≠ **Readiness Decision**

**Free Slot** ≠ **Bookable Slot** ≠ **Valid Training Cadence**

**Operational Capacity** ≠ **Student Booking Capacity**

**Operational Scheduling Feasibility** ≠ **Training-Journey Scheduling Validity**

**Student** ≠ **Parent / Guardian stakeholder**

---

# What Is New vs Reinforced

## New / strongly clarified

- Training Activity ≠ Lesson
- Training Structure / Plan ≠ Individual Lesson
- Progress ≠ Lesson Count
- Training cadence as a distinct Scheduling question

## Strongly reinforced

- Multiple sources of training context must retain provenance.
- Offline Instructor operations remain a repeated market signal.
- Parent / Guardian participation is a strong future Product-review candidate.
- Geographic/service-area Scheduling remains distinct from time feasibility.
- Student Scheduling intent remains distinct from actual Lesson creation.

---

# What NOT to Infer
Do NOT infer that TROLOVA now requires:

- TrainingActivity, PracticeSession, Class, TrainingPlan, or recurring-series entities
- ProgressReport, practice tracking, ratings, reviews, training-hour ledgers, progress scores, competency matrices, curricula, or readiness scores
- automatic `READY_FOR_TEST`
- minimum Lesson spacing, Student booking quotas, or a cadence engine
- Parent/Guardian domain, portal, or permissions
- PickupLocation, DropoffLocation, ServiceArea, Zone, geographic matching, route, or territory entities
- offline-first architecture
- LMS or theory-training platform

Do NOT modify canonical Product or Domain decisions or convert Deferred capabilities into CURRENT or ACCEPTED scope.

---

# Relationship to Existing TROLOVA Truth
Entry 007 does not change:

**Lesson = one scheduled training session inside an Enrollment.**

It does not change Lesson, Enrollment, Student, Instructor, Vehicle, Driving Test, Payment, Financial Operations, conflict, `READY_FOR_TEST`, or authority rules. It does not approve Student self-booking, recurring Scheduling, Parent/Guardian as a Domain Actor, or exact progress/evaluation rules. Existing Product and Domain Truth remains authoritative.

---

# Research Conclusion — Entry 007
The latest research expands TROLOVA's research beyond “Can this Lesson be scheduled?” into:

- What counts as Student training activity?
- Can Lessons belong to a broader training structure?
- Who contributes information about Student development?
- What does progress represent?
- Is timing valid within the Student's training journey?

The strongest conclusions are:

**Training Activity ≠ Lesson**

**Training Structure / Plan ≠ Individual Lesson**

**Instructor Evaluation ≠ Student Reflection / Feedback ≠ Student Practice**

**Progress ≠ Lesson Count**

**Availability ≠ Valid Training Cadence**

These findings provide evidence for future Product and Domain review only. Nothing in Entry 007 changes TROLOVA Product Truth.

---

# Integrated Evidence Synthesis

## Scheduling and Capacity
Across Entries 001–007, market evidence repeatedly treats Scheduling as more than an empty calendar slot. Relevant conditions include teaching eligibility, Instructor working availability and absence, Student availability, Vehicle usability and availability, facility capacity, conflicts, geographic feasibility, booking policy, occupancy/buffers, requested times, and valid training cadence. These are research distinctions, not an approved TROLOVA engine.

## Training Activity and Structure
Formal Lesson execution, external/private practice, broader training structures, recurring definitions, and individual Lesson occurrences are distinct research concepts. TROLOVA's existing Lesson meaning remains authoritative; no training-activity, practice, plan, class, or recurrence model is approved by this research.

## Progress, Evaluation, Reflection, Feedback, and Practice
The sources distinguish Instructor Evaluation, Student Reflection, Student Feedback, and Student Practice by provenance and authority. Lesson History can inform Progress Assessment, but Progress is not Lesson Count and readiness information is not an automatic Enrollment lifecycle decision.

## Geographic Constraints
The research separates temporal feasibility, travel feasibility, Instructor service-area relevance, Student/Lesson pickup and dropoff context, Instructor discovery/matching, route optimization, and real-time telematics. Geographic evidence may inform future questions without establishing marketplace discovery, routing, or tracking requirements.

## Financial and Entitlement Distinctions
Sources repeatedly distinguish Payment, Package, Entitlement, Lesson consumption, Recorder, Collector/Receiver, destination, settlement responsibility, and visibility. These are research questions only; no financial model is added here.

## Recovery and Disruption
Cancellation and open capacity, capacity recovery, `NO_SHOW`, training recovery, waiting mechanisms, and preserved Lesson history are related but distinct. A missed Lesson does not authorize rewriting the original outcome or automatic replacement creation.

## Actors and Access
The research distinguishes Instructor operational work from software access, Student participation from Parent/Guardian stakeholder participation, and shared operational information from shared domain ownership. Role-specific surfaces are market signals, not approved actor or permission models.

# Strong Repeated Market Signals

- Scheduling as a multi-constraint operational engine: Booknetic, DrivingSchoolSoftware.com, EKRA, DriveSchool Pro, Total Drive, SetTime, Drivofy, and later synthesis entries.
- Instructor execution experience: Booknetic, DrivingSchoolSoftware.com, DriveSchool Pro, Total Drive, Driveato, and Entry 007 sources.
- Offline Instructor operations: DriveSchool Pro, Total Drive, Driveato, and supporting research.
- Student progress beyond raw Lesson count: Booknetic, DriveSchool Pro, Driving GradeBook, ZoomScheduler, WorkDo, and Nexivo.
- Student scheduling intent and self-service: Booknetic, EKRA, SetTime, AutoviaTest, and NetMaxims/DSS.
- Parent/Guardian participation: DrivingSchoolSoftware.com, Zutobi, DriveTrak, Oases, AutoviaTest, NetMaxims/DSS, Drive Scout, Driving GradeBook, and Driveato.
- Geographic/service-area scheduling: DriveSchool Pro, IJRASET, Total Drive, Driveato, BookingTimes, and Drive Scout.
- Package/entitlement questions: EKRA, DriveSchool Pro, and related financial research.

These are repeated market signals only, not accepted TROLOVA scope.

# Open Product-Review Questions

- Should advanced Scheduling distinguish Student requests from directly bookable Lesson opportunities?
- Should future Scheduling distinguish working availability, absence, conflicts, bookability, occupancy, geography, and training cadence?
- Should some training types require physical facility capacity beyond Instructor and Vehicle?
- Should TROLOVA define a training structure above individual Lessons, including recurring or bulk planning?
- How should Instructor Evaluation, Student Reflection, Student Feedback, and Student Practice remain distinct if they are surfaced together?
- Should progress represent richer training composition than Lesson count, without automatically determining `READY_FOR_TEST`?
- Should packages or entitlements be evaluated separately from Payment and Lesson consumption?
- How should cancellation, capacity recovery, `NO_SHOW`, and training recovery remain distinct?
- Should Parent/Guardian participation, offline Instructor work, or geographic/service-area context receive separate Product review?

These are questions, not roadmap commitments or implementation requirements.

# Explicit Non-Decisions and Research Boundaries

This document does not approve or require:

- new entities, lifecycle states, or cross-domain mutations
- Student self-booking, LessonRequest, or automatic scheduling approval
- Parent/Guardian domain, portal, permissions, or payment ownership
- TrainingActivity, PracticeSession, TrainingPlan, Class, or recurring/bulk Scheduling
- advanced availability, cadence, booking, readiness, or progress engines
- progress scoring, readiness scoring, or automatic `READY_FOR_TEST`
- geographic matching, route optimization, telematics, GPS, or public Instructor discovery
- public Instructor ratings, marketplace behavior, or independent Instructor listings
- packages, entitlements, automatic Lesson consumption, accounting, payroll/HR, or settlement architecture
- facility, maintenance, inspection, LMS, or theory-training platforms

`CONSISTENCY != AUTOMATIC MUTATION` remains a research boundary.

`CONNECTED DOMAINS != AUTOMATIC CROSS-DOMAIN LIFECYCLE CHANGES` remains a research boundary.

Research findings remain market evidence only. Canonical Product and Domain documents remain authoritative. Research != Product Truth.

