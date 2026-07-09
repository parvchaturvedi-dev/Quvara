import ModulePanel from "@/components/sections/ModulePanel";
import { modules, site } from "@/lib/siteData";

export const metadata = {
  title: "Modules",
  description:
    "Purpose-built ERP modules by Quvara — School ERP, InvoiceIQ, and vertical solutions for cafes, restaurants, bars, takeaways, and corporate sales.",
  alternates: { canonical: "/modules" },
};

export default function ModulesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
          <span className="h-px w-6 bg-line-strong" aria-hidden />
          Modules
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Purpose-built ERP for every vertical
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          One AI-native platform, shaped to how each business runs. Scroll to
          explore — {site.name} ships two live products today, with more on the
          way.
        </p>
      </section>

      <div className="relative">
        {modules.map((module, index) => (
          <ModulePanel key={module.slug} module={module} index={index} />
        ))}
      </div>
    </>
  );
}
