import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Numeric target value. */
  end: number;
  /** Duration in ms. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Number of decimal places. */
  decimals?: number;
  /** Use thousands separator (pt-BR). */
  separator?: boolean;
  className?: string;
}

/**
 * Lightweight count-up that starts when the element scrolls into view.
 * Uses IntersectionObserver + requestAnimationFrame — no external deps.
 * Respects prefers-reduced-motion.
 */
export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = false,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setValue(end);
      return;
    }

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - t, 4);
        setValue(end * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const formatted = separator
    ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : value.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
