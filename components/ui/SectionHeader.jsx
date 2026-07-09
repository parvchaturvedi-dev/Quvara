import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-6 bg-line-strong" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
