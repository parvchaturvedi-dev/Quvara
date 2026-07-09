/* ------------------------------------------------------------------
   Central content source for the Quvara site.
   Edit copy here — components read from this file.
------------------------------------------------------------------ */

export const site = {
  name: "Quvara",
  tagline: "AI-native ERP, tailored to every business",
  description:
    "Quvara implements modern ERP systems supercharged with agentic AI and Oracle APEX expertise — for schools, cafes, restaurants, bars, takeaways, and corporate sales.",
  url: "https://quvara.vercel.app",
  email: "parvchaturvediofficial@gmail.com",
};

export const founders = [
  {
    name: "Parv Chaturvedi",
    role: "Co-founder · Delivery & Systems",
    email: "parvchaturvediofficial@gmail.com",
    bio: "Parv owns how the software works. He leads architecture, implementation, and the day-to-day management of every system Quvara ships — designing how each solution is built, keeping the engineering disciplined, and making sure what we deliver runs cleanly and keeps running long after launch.",
    focus: "Build, deliver & manage",
  },
  {
    name: "Raghav Vijayvargiya",
    role: "Co-founder · Client Solutions",
    email: "raghavvijayvargeeya@gmail.com",
    bio: "Raghav owns the client relationship. He leads discovery — sitting with each business to understand how it actually operates — and turns that into precise, buildable requirements, matching every client to the right solution and scope before a single line of code is written.",
    focus: "Listen, match & scope",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Modules", href: "/modules" },
  { label: "Product", href: "/#product" },
  { label: "About", href: "/#about" },
];

export const services = [
  {
    id: "erp",
    title: "ERP Implementation",
    summary:
      "End-to-end ERP rollouts tailored to how your business actually runs — not a one-size template.",
    points: ["Discovery & mapping", "Custom modules", "Migration & training"],
  },
  {
    id: "ai",
    title: "Agentic AI Integration",
    summary:
      "We embed autonomous AI agents into your ERP so routine work runs itself — approvals, analysis, follow-ups.",
    points: ["Document intelligence", "Workflow automation", "Decision support"],
  },
  {
    id: "apex",
    title: "Oracle APEX Expertise",
    summary:
      "Full support in Oracle Application Express to build fast, secure, low-code apps on top of your data.",
    points: ["APEX app development", "Integrations", "Ongoing support"],
  },
];

export const industries = [
  {
    id: "schools",
    label: "Schools",
    icon: "GraduationCap",
    blurb: "Admissions, fees, attendance, and staff in one place — with AI handling the paperwork and parent comms.",
  },
  {
    id: "cafes",
    label: "Cafes",
    icon: "Coffee",
    blurb: "Orders, stock, and billing in sync, with agentic AI forecasting demand and quietly cutting waste.",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: "UtensilsCrossed",
    blurb: "Tables, kitchen, and books connected — from reservations to supplier invoicing, automated end to end.",
  },
  {
    id: "bars",
    label: "Bars",
    icon: "Wine",
    blurb: "Real-time pours, stock, and shifts, with AI flagging shrinkage and reordering before you run dry.",
  },
  {
    id: "takeaways",
    label: "Takeaways",
    icon: "ShoppingBag",
    blurb: "Every order channel on one dashboard — payments and delivery reconciled without the manual matching.",
  },
  {
    id: "corporate",
    label: "Corporate Sales",
    icon: "Building2",
    blurb: "Quotes, invoices, and pipeline on autopilot, with AI agents chasing approvals so your team just sells.",
  },
];

export const product = {
  name: "InvoiceIQ",
  kicker: "Recently Built by Quvara",
  summary:
    "Our flagship AI ERP: automated invoice processing and legal document intelligence in one clean workspace.",
  features: [
    "Invoice automation — upload, approval, payment, audit",
    "Legal document AI — analysis, jurisdictions, policy",
    "Live dashboards with processed-value insights",
  ],
};

export const processSteps = [
  { step: "01", title: "Discover", desc: "Understand your workflows, data, and goals." },
  { step: "02", title: "Implement", desc: "Configure and build your tailored ERP." },
  { step: "03", title: "Integrate AI", desc: "Deploy agentic automation where it counts." },
  { step: "04", title: "Support", desc: "Ongoing APEX support and optimization." },
];

// Three interrelated tracks that run in parallel from input to output.
export const processTracks = [
  { label: "Process", stages: ["Discover", "Implement", "Integrate AI", "Support"] },
  { label: "Data", stages: ["Ingest", "Model", "Automate", "Optimize"] },
  { label: "Platform", stages: ["Design", "Build", "Deploy", "Scale"] },
];

// Product modules shown on /modules as a sticky-stacking scroll.
// status: "live" → links to its own page; "soon" → Coming soon.
export const modules = [
  {
    slug: "school-erp",
    name: "School ERP",
    industry: "Schools",
    icon: "GraduationCap",
    blurb:
      "A complete school operating system — admissions, attendance, fees, timetables, and staff, unified. Agentic AI drafts parent communications, reconciles fees, and surfaces at-risk students before they fall behind.",
    status: "live",
    href: "/modules/school-erp",
  },
  {
    slug: "invoiceiq",
    name: "InvoiceIQ",
    industry: "Invoicing & Legal AI",
    icon: "FileText",
    blurb:
      "Automated invoice processing and legal-document intelligence in one clean workspace — upload, approval, payment, and audit. AI reads, routes, and reconciles every document so nothing slips.",
    status: "live",
    href: "/modules/invoiceiq",
  },
  {
    slug: "cafe",
    name: "Cafe ERP",
    industry: "Cafes",
    icon: "Coffee",
    blurb:
      "Orders, inventory, and billing in perfect sync. AI forecasts stock, trims waste, and keeps your busiest hours running smooth.",
    status: "soon",
  },
  {
    slug: "restaurant",
    name: "Restaurant Suite",
    industry: "Restaurants",
    icon: "UtensilsCrossed",
    blurb:
      "From table to kitchen to books — reservations, billing, and supplier invoicing automated end to end, with AI watching the margins.",
    status: "soon",
  },
  {
    slug: "bar",
    name: "Bar Manager",
    industry: "Bars",
    icon: "Wine",
    blurb:
      "Track pours, stock, and shifts in real time. AI flags shrinkage and reorders before you ever run dry.",
    status: "soon",
  },
  {
    slug: "takeaway",
    name: "Takeaway Hub",
    industry: "Takeaways",
    icon: "ShoppingBag",
    blurb:
      "Every channel on one dashboard — orders, payments, and delivery reconciled automatically, no manual matching.",
    status: "soon",
  },
  {
    slug: "corporate",
    name: "Corporate Sales Cloud",
    industry: "Corporate Sales",
    icon: "Building2",
    blurb:
      "Quotes, invoices, and pipeline on autopilot. AI agents chase approvals and close the loop so your team can sell.",
    status: "soon",
  },
];
