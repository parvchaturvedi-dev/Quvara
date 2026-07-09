// InvoiceIQ — on-premise AI legal contract analyzer.
// User-facing capabilities for /modules/invoiceiq.

export const invoiceiq = {
  name: "InvoiceIQ",
  industry: "Invoicing & Legal AI",
  tags: ["On-premise", "AI legal analysis", "RAG-grounded"],
  tagline: "Every contract, read against the law — clause by clause.",
  intro:
    "InvoiceIQ is an on-premise AI legal contract analyzer. Upload a contract and it reads the document, splits it into clauses, and analyses each one against that country's statutory laws — retrieved live via RAG — streaming grounded findings for you to approve or reject, then exporting an annotated PDF. A built-in knowledge base keeps every jurisdiction's laws current.",
  stats: [
    { value: "On-prem", label: "Runs on your servers" },
    { value: "Clause-level", label: "Analysis depth" },
    { value: "RAG", label: "Grounded to statute" },
    { value: "Live", label: "Streaming findings" },
  ],
};

export const pipeline = [
  "Contract PDF",
  "OCR",
  "Clauses",
  "RAG + LLM",
  "Findings",
  "Approve / Reject",
  "Annotated PDF",
];

export const knowledgeBaseNote =
  "A knowledge base holds each country's statutory laws, ingested via upload, scrape or crawl — it feeds the per-clause analysis so every finding is grounded in real law.";

export const invoiceiqCategories = [
  {
    name: "Contract Analysis",
    count: 5,
    summary:
      "The core workflow — from a raw contract PDF to a reviewed, annotated report, with you in control of every finding.",
    modules: [
      {
        name: "Document upload & reading",
        desc: "Drop in any contract PDF — digital or scanned — and get clean, structured text.",
        points: [
          "Digital pages read instantly",
          "Scanned pages handled by accurate OCR",
          "Text grouped into individual clauses",
        ],
      },
      {
        name: "Clause-by-clause review",
        desc: "Every clause is analysed on its own, not skimmed as a whole document.",
        points: [
          "Real clauses separated from tables, totals & signatures",
          "Each clause checked against the applicable law",
          "Nothing important gets glossed over",
        ],
      },
      {
        name: "Live findings",
        desc: "Findings stream in as the contract is read — no waiting for a final report.",
        points: [
          "Each finding appears the moment it's found",
          "Problem, plain-English explanation, severity & confidence",
          "Watch the analysis progress in real time",
        ],
      },
      {
        name: "Approve or reject",
        desc: "You decide on every finding — the tool assists, you sign off.",
        points: [
          "One-click accept or dismiss",
          "Approved findings sharpen future analysis",
          "Full human control over the outcome",
        ],
      },
      {
        name: "Annotated report",
        desc: "Export a clean, annotated PDF you can share, file or send to counsel.",
        points: [
          "A remark and suggested-fix box under each clause",
          "Print-ready, professional report",
          "A complete record of the review",
        ],
      },
    ],
  },
  {
    name: "Legal Intelligence",
    count: 6,
    summary:
      "What makes the findings trustworthy — grounded in real statutes, jurisdiction-aware, and checked for gaps and currency.",
    modules: [
      {
        name: "Jurisdiction awareness",
        desc: "Detects which country's law governs the contract and flags mismatches.",
        points: [
          "Reads the parties and governing-law clause",
          "Flags jurisdiction mismatches",
          "Applies the right country's statutes",
        ],
      },
      {
        name: "Grounded to statute",
        desc: "Every serious finding is backed by the actual law section, retrieved live.",
        points: [
          "RAG pulls the relevant statute for each clause",
          "Findings cite the law they rest on",
          "No invented or hallucinated legal claims",
        ],
      },
      {
        name: "Missing-clause detection",
        desc: "Flags the clauses that should be there but aren't.",
        points: [
          "Checks for governing law, indemnity, termination & more by document type",
          "Highlights gaps that expose you to risk",
        ],
      },
      {
        name: "Draft & placeholder checks",
        desc: "Catches unfilled blanks and documents that were never finalised.",
        points: [
          "Finds [INSERT], ____, [DATE] and similar placeholders",
          "Flags incomplete or draft contracts",
        ],
      },
      {
        name: "Law-currency check",
        desc: "Confirms the cited law is current — or warns of a pending amendment.",
        points: [
          "Cross-checks statutes against recent amendments",
          "Marks findings as current or amendment-pending",
        ],
      },
      {
        name: "Company-policy overrides",
        desc: "Your own internal policies can layer on top of the statutory baseline.",
        points: [
          "Policy notebooks sit above the law",
          "Findings respect your organisation's rules",
        ],
      },
    ],
  },
  {
    name: "Knowledge Base",
    count: 5,
    summary:
      "The living law library behind every finding — ingested, acquired automatically, versioned and kept current.",
    modules: [
      {
        name: "Law ingestion",
        desc: "Bring in any jurisdiction's laws — searchable in seconds.",
        points: [
          "Law PDFs turned into searchable sections",
          "Company policies ingested the same way",
        ],
      },
      {
        name: "Automatic acquisition",
        desc: "Laws are gathered for you from official sources.",
        points: [
          "Government sites scraped for law PDFs",
          "Deep-crawls for corporate acts",
          "Everything staged for your approval before use",
        ],
      },
      {
        name: "Versioned & current",
        desc: "When a law is amended, the old version is superseded automatically.",
        points: [
          "Active vs superseded law sections tracked",
          "Amendments never silently break analysis",
        ],
      },
      {
        name: "Daily law watch",
        desc: "New notifications are fetched every day, so coverage stays fresh.",
        points: [
          "Official gazette monitoring",
          "New laws filtered and queued for approval",
        ],
      },
      {
        name: "Verified sources",
        desc: "Only authentic government sources make it into the knowledge base.",
        points: [
          "Source authenticity and country-match checks",
          "Coverage reports per jurisdiction",
        ],
      },
    ],
  },
  {
    name: "Security & Deployment",
    count: 4,
    summary:
      "Built for sensitive documents — fully on-premise, access-controlled, fully audited, and configurable without code.",
    modules: [
      {
        name: "Fully on-premise",
        desc: "Runs entirely on your infrastructure — contracts never leave your servers.",
        points: [
          "Self-hosted model, OCR and vector store",
          "Complete control over your data",
        ],
      },
      {
        name: "Role-based access",
        desc: "Secure, authenticated access for every user.",
        points: ["Token-based authentication", "Extra verification on sensitive actions"],
      },
      {
        name: "Full audit trail",
        desc: "Every request and analysis step is recorded end to end.",
        points: [
          "Request-level audit log",
          "Step-by-step trace of every analysis",
        ],
      },
      {
        name: "Configurable at runtime",
        desc: "Swap models and endpoints from the interface — no code changes.",
        points: [
          "Change the AI model or OCR service live",
          "Adapt without redeploying",
        ],
      },
    ],
  },
];

export const closingLine =
  "InvoiceIQ — an on-premise AI legal contract analyzer that reads every clause against the law.";
