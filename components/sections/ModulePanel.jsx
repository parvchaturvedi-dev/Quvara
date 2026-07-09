import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InvoiceMockup from "./InvoiceMockup";
import ModuleMock from "./ModuleMock";

function Visual({ module }) {
  const mock =
    module.slug === "invoiceiq" ? (
      <InvoiceMockup />
    ) : (
      <ModuleMock slug={module.slug} />
    );

  return (
    <div className="relative">
      {mock}
      {module.status === "soon" && (
        <span className="absolute -top-3 right-5 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted shadow-[0_6px_16px_-8px_rgba(0,0,0,0.3)]">
          Coming soon
        </span>
      )}
    </div>
  );
}

export default function ModulePanel({ module, index }) {
  const imageLeft = index % 2 === 0;
  const surface = index % 2 === 0 ? "bg-paper" : "bg-mist";

  return (
    <section
      className={`sticky top-0 flex min-h-screen items-center rounded-t-[2.5rem] border-t border-line ${surface} shadow-[0_-24px_60px_-32px_rgba(0,0,0,0.3)]`}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
          <Visual module={module} />
        </div>

        <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
            <span className="h-px w-6 bg-line-strong" aria-hidden />
            {module.industry}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {module.name}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {module.blurb}
          </p>

          <div className="mt-8">
            {module.status === "live" ? (
              <Link
                href={module.href}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                See more
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-muted">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
