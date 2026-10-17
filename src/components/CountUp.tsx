"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Number to count up to. */
  to: number;
  /** Appended straight after the number, e.g. "+" or "%". */
  suffix?: string;
  /** Seconds the count takes to finish. */
  duration?: number;
  /** Seconds to wait after entering the viewport before counting starts. */
  delay?: number;
  className?: string;
};

/**
 * Counts up to `to` the first time it scrolls into the viewport.
 *
 * The animated digits are `aria-hidden`; the final value is always present in a
 * screen-reader-only span, so assistive tech and crawlers never see the `0`.
 * Honours `prefers-reduced-motion` by jumping straight to the final value.
 */
export default function CountUp({
  to,
  suffix = "",
  duration = 2,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, to, duration, delay]);

  return (
    <span className="relative inline-block">
      {/* Invisible final value: reserves the width so the row never shifts
          while the digits are still counting up. */}
      <span
        aria-hidden="true"
        className={`invisible tabular-nums ${className ?? ""}`}
      >
        {to}
        {suffix}
      </span>
      <span
        ref={ref}
        aria-hidden="true"
        className={`absolute inset-0 tabular-nums ${className ?? ""}`}
      >
        {value}
        {suffix}
      </span>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}
