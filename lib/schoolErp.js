// Quvara EAS — Educational Automate System (school ERP).
// Full content for /modules/school-erp.

export const eas = {
  name: "Quvara EAS",
  full: "Educational Automate System",
  tags: ["Web Portal", "Android / iOS App", "Realtime Sync"],
  tagline: "Every operation of a school, run from one connected system.",
  intro:
    "Quvara Educational Automate System (ERP) is a complete school-management platform — a web portal and a native mobile app sharing the same live data. Admissions, attendance, examinations, fees, payroll, communication and records are handled end-to-end, with role-based access that adapts to how your institution is organised.",
  stats: [
    { value: "40+", label: "Modules" },
    { value: "4", label: "Default portals" },
    { value: "∞", label: "Custom roles" },
    { value: "2", label: "Platforms · web & mobile" },
  ],
};

export const roles = ["A", "O", "T", "S"];

export const portals = [
  {
    key: "A",
    name: "Administrator",
    desc: "Full control across academics, people, finance and system settings.",
  },
  {
    key: "O",
    name: "Office / Clerk",
    desc: "Day-to-day operations — admissions, records, documents, academics (finance stays admin-only).",
  },
  {
    key: "T",
    name: "Teacher",
    desc: "Class, attendance, marks entry, assignments, meetings and personal salary view.",
  },
  {
    key: "S",
    name: "Student / Parent",
    desc: "Timetable, attendance, results, fees, documents and school communication.",
  },
];

export const rolesIntro = {
  eyebrow: "Roles & Access",
  title: "Four portals by default — and fully dynamic beyond them",
  paras: [
    "Quvara ships with four ready-made portals — Administrator, Office (Clerk), Teacher and Student/Parent — each with a tailored dashboard, navigation and permissions out of the box.",
    "But the role system is dynamic. Administrators can create additional roles (for example Principal, Accountant, Librarian, Transport In-charge or Coordinator) and grant each role granular access to exactly the modules and actions it needs. The four portals are the starting point, not the limit.",
  ],
  callout:
    "Dynamic multi-role access — add as many roles as your institution needs and assign module-level permissions to each. Every user sees only what their role allows; the four standard portals remain available by default.",
};

export const categories = [
  {
    name: "Academics & Teaching",
    count: 9,
    summary:
      "The teaching core — how classes, subjects, timetables, attendance, examinations and coursework are planned, delivered and recorded across the session.",
    modules: [
      {
        name: "Attendance Desk",
        desc: "A single desk with role-aware sub-sections for student, staff and session attendance.",
        points: [
          "Student & class attendance with mark-all and bulk actions",
          "Staff clock-in / clock-out with GPS geofence & breach alerts",
          "Monthly staff reports, present/half-day/absent %, CSV export",
          "Session dates, weekly off-days & holidays; auto-absent on missed working days",
        ],
      },
      {
        name: "Examinations",
        desc: "End-to-end exam lifecycle from creation to published report cards.",
        points: [
          "Exam & paper creation with schedules",
          "Paper approval workflow (draft → pending → approved)",
          "Marks entry, report-card generation & paper analysis",
          "Board result & timetable PDF uploads",
        ],
      },
      {
        name: "Timetable",
        desc: "Period-by-period class schedules built once and read everywhere.",
        points: [
          "Visual builder — periods, subjects, teachers, rooms",
          "Multi-class templates with date ranges",
          "Read-only viewer for teachers, students & parents",
        ],
      },
      {
        name: "Class Management",
        desc: "The structure of the school — classes, sections and session progression.",
        points: [
          "Create classes, assign class teachers & subjects",
          "Session promotion carrying fee ledgers forward",
          "Retention (repeat) handling & alumni bucketing",
        ],
      },
      {
        name: "Subject Management",
        desc: "The catalogue of subjects and how they map to each class.",
        points: [
          "Global subject library",
          "Per-class subject mapping",
          "Feeds timetable, marks & report cards",
        ],
      },
      {
        name: "Assignments",
        desc: "Homework and coursework set to classes, with attachments.",
        points: [
          "Create & target assignments to specific classes",
          "File attachments (PDF / image)",
          "Students receive and view on web & app",
        ],
      },
      {
        name: "My Class",
        desc: "A teacher's or student's own class at a glance.",
        points: [
          "Roster, subjects & assigned teachers",
          "Derived live from class & timetable data",
        ],
      },
      {
        name: "Academic Calendar",
        desc: "The school's official calendar of holidays and events.",
        points: [
          "Admin / office upload of the calendar PDF",
          "Holidays feed attendance off-days",
          "Visible to every portal",
        ],
      },
      {
        name: "Report Cards & Marks",
        desc: "Marks captured per exam, compiled into printable report cards.",
        points: [
          "Subject-wise marks & remarks entry",
          "Automatic report-card compilation",
          "Paper analysis for performance trends",
        ],
      },
    ],
  },
  {
    name: "People & Roles",
    count: 9,
    summary:
      "Everyone the school manages — students, families and staff — from admission and profile through class placement and account credentials.",
    modules: [
      {
        name: "Student Management",
        desc: "The full student lifecycle from admission onward.",
        points: [
          "Admission form, editable profile, photo & documents",
          "Bulk admissions via Excel import",
          "Feeds every academic & finance module",
        ],
      },
      {
        name: "Student Assigning",
        desc: "Placing students into their classes and sections.",
        points: [
          "Assign / move students between classes",
          "Duplicate-admission safeguards",
        ],
      },
      {
        name: "Sibling / Family Linking",
        desc: "Connecting brothers and sisters under one family.",
        points: [
          "Group siblings into a family account",
          "Family-wide fee collection & one parent login",
        ],
      },
      {
        name: "Teacher Management",
        desc: "Teaching staff records and profiles.",
        points: [
          "Onboard teachers with profile, photo & documents",
          "Central directory across the school",
        ],
      },
      {
        name: "Teacher Assignment",
        desc: "Allotting classes and subjects to each teacher.",
        points: [
          "Assign classes & subjects per teacher",
          "Drives marks, attendance & timetable access",
        ],
      },
      {
        name: "Office / Clerk Management",
        desc: "Managing office staff accounts and their scope.",
        points: ["Onboard clerks with role-scoped access", "Profiles & directory"],
      },
      {
        name: "Admin & Custom Roles",
        desc: "Administrators and any additional roles you define.",
        points: [
          "Manage administrator accounts",
          "Create custom roles & grant module access",
          "Four default portals always available",
        ],
      },
      {
        name: "Users & Credentials",
        desc: "Login accounts for every person in the system.",
        points: [
          "Reveal / reset credentials, send login details",
          "OTP-secured sensitive actions",
          "Per-role account control",
        ],
      },
      {
        name: "Profiles",
        desc: "A detailed record for each student, teacher and clerk.",
        points: [
          "Academic, contact & document tabs",
          "Finance tab restricted to administrators",
          "Self-service profile & photo for every user",
        ],
      },
    ],
  },
  {
    name: "Finance & Payroll",
    count: 7,
    summary:
      "Money in and money out — class-wise fee structures, collection, receipts and ledgers on one side; staff salaries, slips and settlements on the other. Finance stays administrator-only by default.",
    modules: [
      {
        name: "Finance (Fee Collection)",
        desc: "The administrator's command centre for all fee operations.",
        points: [
          "Class-wise fee assignment & concessions",
          "Waterfall collection (oldest dues first)",
          "Family & individual payments with instant receipts",
          "Collected vs pending analytics",
        ],
      },
      {
        name: "Fees (Student / Parent)",
        desc: "A family's own fee picture, always up to date.",
        points: [
          "Term-wise installments, dues & due dates",
          "Payment history & current status",
          "Transport & other heads included",
        ],
      },
      {
        name: "Fees Receipt",
        desc: "Formal receipts for every payment taken.",
        points: [
          "Auto-numbered, printable receipts",
          "Records the exact allocated amount per head",
        ],
      },
      {
        name: "Student Ledger",
        desc: "A complete class-wise financial history per student.",
        points: [
          "Assigned, paid & pending across classes",
          "Full payment trail for audit",
        ],
      },
      {
        name: "Class Finance List",
        desc: "Collection health, class by class.",
        points: [
          "Per-class collected vs outstanding",
          "Quick drill-down into any class",
        ],
      },
      {
        name: "Payroll",
        desc: "Staff salary management for teachers and office staff.",
        points: [
          "Set salaries effective from a chosen month",
          "Record payments & settle outstanding (waterfall)",
          "Generate salary slips & summaries",
        ],
      },
      {
        name: "My Salary",
        desc: "Each staff member's own salary view.",
        points: [
          "Read-only salary history & slips",
          "Outstanding & paid at a glance",
        ],
      },
    ],
  },
  {
    name: "Communication & Engagement",
    count: 7,
    summary:
      "How the school stays in touch — notices, live notifications, video meetings, events, leave and application workflows, and an AI assistant, reaching every portal in real time.",
    modules: [
      {
        name: "Notices",
        desc: "Official announcements broadcast to the right audience.",
        points: [
          "Target notices by role or class",
          "Delivered instantly across web & app",
        ],
      },
      {
        name: "Notifications",
        desc: "A live activity feed plus mobile push alerts.",
        points: [
          "In-app inbox with read tracking",
          "Push notifications on assignments, fees, results & more",
          "Realtime updates while the app is open",
        ],
      },
      {
        name: "Meetings",
        desc: "Built-in video meetings for staff and classes.",
        points: [
          "Host & join secure video rooms",
          "Class-scoped visibility",
          "One-tap join on mobile",
        ],
      },
      {
        name: "Events",
        desc: "School events with images and participation.",
        points: ["Create events with poster images", "Student participation & voting"],
      },
      {
        name: "Leave Requests",
        desc: "Applying for and approving leave.",
        points: [
          "Students & staff raise leave requests",
          "Class-teacher / admin approval flow",
        ],
      },
      {
        name: "Applications",
        desc: "Structured requests routed for decision.",
        points: [
          "Submit & track applications",
          "In-class consensus voting where relevant",
        ],
      },
      {
        name: "AI Assistant (Iris)",
        desc: "A built-in assistant for admins, with voice.",
        points: ["Natural-language help & lookups", "Voice-enabled interaction"],
      },
    ],
  },
  {
    name: "Documents & Records",
    count: 4,
    summary:
      "Secure handling of files and identity documents — from a verification console to encrypted personal storage and printable ID cards.",
    modules: [
      {
        name: "Documents Management",
        desc: "A verification console for student & staff documents.",
        points: [
          "Per-document upload, review & replace",
          "Approve / reject / lock workflow with notes",
          "Locked documents freeze user re-uploads",
        ],
      },
      {
        name: "Vault",
        desc: "Private, end-to-end encrypted personal storage.",
        points: [
          "Notes, PDFs & images secured with a passphrase",
          "AES-256-GCM encryption on device",
          "Available to every portal",
        ],
      },
      {
        name: "ID Cards",
        desc: "Generated identity cards for students and staff.",
        points: [
          "Auto-designed cards from profile data",
          "Export / share as PDF (single or bulk)",
        ],
      },
      {
        name: "Certification",
        desc: "School-issued certificates and records.",
        points: [
          "Generate certificates from records",
          "Shared certification view across portals",
        ],
      },
    ],
  },
  {
    name: "Platform & System",
    count: 5,
    summary:
      "The system layer every portal stands on — dashboards, search, settings and the controls that keep data safe and consistent.",
    modules: [
      {
        name: "Dashboards",
        desc: "A role-specific home screen with live numbers.",
        points: [
          "Tailored tiles per portal",
          "Real data — headcounts, fees, attendance, pending items",
        ],
      },
      {
        name: "Global Search",
        desc: "Find anything you're allowed to see, instantly.",
        points: [
          "Role-scoped results — students, staff, classes, pages",
          "Jump straight to the record",
        ],
      },
      {
        name: "Settings",
        desc: "Personal preferences and account security.",
        points: ["Light / dark appearance", "Change password & profile"],
      },
      {
        name: "Factory Reset",
        desc: "Controlled, scoped clearing of school data.",
        points: [
          "Reset students / teachers / clerks selectively",
          "Type-to-confirm safeguards; admins preserved",
        ],
      },
      {
        name: "Secure File Storage",
        desc: "Cloud-backed storage for every document & photo.",
        points: [
          "Files offloaded to secure cloud storage",
          "Authenticated, private delivery",
          "Scales far beyond the database alone",
        ],
      },
    ],
  },
];

export const platform = [
  { name: "Web portal", desc: "Full-featured browser application for staff and families." },
  { name: "Mobile app", desc: "Native Android & iOS app with full parity to the web." },
  { name: "Realtime sync", desc: "Changes appear live across every open session." },
  { name: "Push notifications", desc: "Instant alerts on the events that matter." },
  { name: "Role-based security", desc: "Every user sees only what their role permits." },
  { name: "Dynamic roles", desc: "Four default portals, plus any custom role you create." },
];

export const closingLine =
  "Quvara Educational Automate System — complete school ERP for web & mobile. 40+ modules · 4 default portals · unlimited custom roles.";
