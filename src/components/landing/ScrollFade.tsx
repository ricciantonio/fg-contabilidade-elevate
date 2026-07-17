import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Wraps a section and fades it based on scroll direction:
 * - Scrolling DOWN (or at rest) while in view: opacity 1
 * - Scrolling UP: opacity fades toward 0 (ghost effect)
 * Respects prefers-reduced-motion.
 */
export function ScrollFade({
  children,
  as,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(true);
  const [direction, setDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) > 2) {
          setDirection(y > lastY ? "down" : "up");
          lastY = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const visible = inView && direction === "down";

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0.4,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
