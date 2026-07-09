"use client";

import { useEffect, useState } from "react";

/**
 * Types out `text` character-by-character once `start` becomes true.
 * The parent controls `start` so multiple Typewriters can fire in sync.
 */
export default function Typewriter({
  text,
  start,
  startDelay = 0,
  speed = 45,
  className = "",
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) {
      setN(0); // reset so it retypes next time it scrolls into view
      return;
    }
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [start, text, speed, startDelay]);

  const done = n >= text.length;

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, n)}</span>
      <span
        aria-hidden
        className={`ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[1px] bg-ink align-middle ${
          start && !done ? "animate-pulse" : "opacity-0"
        }`}
      />
    </span>
  );
}
