import Link from "next/link";
import { ArrowLeft, ArrowRight, Database, Check } from "lucide-react";
import ZoomReveal from "@/components/sections/ZoomReveal";
import {
  invoiceiq,
  pipeline,
  knowledgeBaseNote,
  invoiceiqCategories,
  closingLine,
} from "@/lib/invoiceiq";

export const metadata = {
  title: "InvoiceIQ",
  description: invoiceiq.intro,
  alternates: { canonical: "/modules/invoiceiq" },
};

function ModuleCard({ module }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-5">
      <h4 className="font-display text-base font-semibold text-ink">
        {module.name}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{module.desc}</p>
      <ul className="mt-4 space-y-2">
        {module.points.map((p) => (
          <li
            key={p}
            className="flex items-start gap-2 text-[13px] leading-relaxed text-ink"
          >
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InvoiceIqPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
        <Link
          href="/modules"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to modules
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {invoiceiq.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {invoiceiq.name}
        </h1>
        <p className="mt-2 font-display text-xl font-medium text-faint sm:text-2xl">
          {invoiceiq.industry}
        </p>
        <p className="mt-6 max-w-2xl font-display text-lg font-medium text-ink sm:text-xl">
          {invoiceiq.tagline}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {invoiceiq.intro}
        </p>

        {/* Pipeline overview */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-[680px] items-center gap-2">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium ${
                    step === "RAG + LLM"
                      ? "border-ink bg-ink text-paper"
                      : "border-line-strong text-ink"
                  }`}
                >
                  {step}
                </span>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-faint" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex max-w-2xl items-start gap-3 rounded-xl border border-dashed border-line-strong bg-mist p-4">
          <Database className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
          <p className="text-sm leading-relaxed text-muted">{knowledgeBaseNote}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {invoiceiq.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-mist p-5">
              <p className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capability categories — each zooms in on scroll */}
      {invoiceiqCategories.map((cat) => (
        <section key={cat.name} className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <ZoomReveal>
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {cat.name}
                </h2>
                <span className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-muted">
                  {cat.count} features
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {cat.summary}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.modules.map((m) => (
                  <ModuleCard key={m.name} module={m} />
                ))}
              </div>
            </ZoomReveal>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="max-w-3xl font-display text-lg font-medium text-ink">
            {closingLine}
          </p>
        </div>
      </section>
    </>
  );
}
