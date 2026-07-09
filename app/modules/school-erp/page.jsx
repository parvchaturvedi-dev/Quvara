import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import ZoomReveal from "@/components/sections/ZoomReveal";
import {
  eas,
  portals,
  roles,
  rolesIntro,
  categories,
  platform,
  closingLine,
} from "@/lib/schoolErp";

export const metadata = {
  title: "Quvara EAS — School ERP",
  description: eas.intro,
  alternates: { canonical: "/modules/school-erp" },
};

function RoleDots() {
  return (
    <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
      <span className="text-[11px] font-medium uppercase tracking-wider text-faint">
        Roles
      </span>
      <div className="flex gap-1.5">
        {roles.map((r) => (
          <span
            key={r}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-[10px] font-medium text-muted"
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

function ModuleCard({ module }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-5">
      <h4 className="font-display text-base font-semibold text-ink">
        {module.name}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{module.desc}</p>
      <ul className="mt-4 space-y-2">
        {module.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <RoleDots />
      </div>
    </div>
  );
}

export default function SchoolErpPage() {
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
          {eas.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {eas.name}
        </h1>
        <p className="mt-2 font-display text-xl font-medium text-faint sm:text-2xl">
          {eas.full}
        </p>
        <p className="mt-6 max-w-2xl font-display text-lg font-medium text-ink sm:text-xl">
          {eas.tagline}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {eas.intro}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {eas.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-mist p-5">
              <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles & Access */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
            <span className="h-px w-6 bg-line-strong" aria-hidden />
            {rolesIntro.eyebrow}
          </span>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {rolesIntro.title}
          </h2>
          <div className="mt-5 max-w-3xl space-y-4">
            {rolesIntro.paras.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-ink bg-paper p-5 text-sm leading-relaxed text-ink">
            {rolesIntro.callout}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {portals.map((p) => (
              <div key={p.key} className="rounded-2xl border border-line bg-paper p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink font-display text-lg font-bold text-paper">
                  {p.key}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-faint">
            …plus any custom role you grant access to.
          </p>
        </div>
      </section>

      {/* Category sections — each zooms in on scroll */}
      {categories.map((cat) => (
        <section key={cat.name} className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <ZoomReveal>
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {cat.name}
                </h2>
                <span className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-muted">
                  {cat.count} modules
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

      {/* Platform */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One platform, two experiences, shared data
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platform.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-base font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl border-t border-line pt-8 font-display text-lg font-medium text-ink">
            {closingLine}
          </p>
        </div>
      </section>
    </>
  );
}
