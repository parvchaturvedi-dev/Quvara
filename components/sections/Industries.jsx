import Link from "next/link";
import {
  GraduationCap,
  Coffee,
  UtensilsCrossed,
  Wine,
  ShoppingBag,
  Building2,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/lib/siteData";

const iconMap = {
  GraduationCap,
  Coffee,
  UtensilsCrossed,
  Wine,
  ShoppingBag,
  Building2,
};

export default function Industries() {
  return (
    <Section id="industries" bg="mist">
      <SectionHeader
        eyebrow="Industries"
        title="Tailored for the way you operate"
        subtitle="From classrooms to counters to corporate floors — one platform, adapted to every sector we serve."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => {
          const Icon = iconMap[ind.icon] ?? Building2;
          return (
            <Reveal key={ind.id} delay={i * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.25)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {ind.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {ind.blurb}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
          >
            See more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
