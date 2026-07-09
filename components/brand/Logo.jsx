/**
 * Quvara logo — "node-mark" (Concept A).
 * A ring + node forming a "Q", echoing an AI/network node.
 *
 * Props:
 *   - showWordmark: render the "Quvara" wordmark next to the mark (default true)
 *   - className: wrapper classes
 *   - markClassName: size the square mark (default h-9 w-9)
 */
export default function Logo({
  showWordmark = true,
  className = "",
  markClassName = "h-9 w-9",
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className={markClassName}
        role="img"
        aria-label="Quvara"
      >
        <rect width="64" height="64" rx="16" fill="#0a0a0a" />
        <circle
          cx="29"
          cy="28"
          r="12.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
        />
        <circle cx="41" cy="40" r="5.5" fill="#ffffff" />
      </svg>
      {showWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-ink">
          Quvara
        </span>
      )}
    </span>
  );
}
