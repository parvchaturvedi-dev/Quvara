import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { founders } from "@/lib/siteData";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title="Built by operators, for operators"
        subtitle="Quvara pairs deep ERP and Oracle APEX craft with a conviction that AI should do the busywork — so your team does the work that matters."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {founders.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xl font-bold text-paper">
                  {initials(f.name)}
                </span>
                <div>
                  <p className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {f.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{f.role}</p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted">{f.bio}</p>

              <div className="mt-auto pt-6">
                <p className="border-t border-line pt-5 text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  Focus · <span className="text-ink">{f.focus}</span>
                </p>
                <a
                  href={`mailto:${f.email}`}
                  className="mt-3 inline-block text-sm font-medium text-ink underline underline-offset-4 hover:text-muted"
                >
                  {f.email}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
