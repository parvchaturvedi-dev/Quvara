/**
 * Consistent section shell: id anchor, max width, vertical rhythm.
 * `bg` picks the surface: "paper" (white) or "mist" (faint gray).
 */
export default function Section({ id, children, bg = "paper", className = "" }) {
  const surface = bg === "mist" ? "bg-mist" : "bg-paper";
  return (
    <section id={id} className={`${surface} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {children}
      </div>
    </section>
  );
}
