import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(shouldReduceMotion ? target.toString() : "0");

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(target.toString());
      return;
    }
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.round(v).toString());
      },
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, target]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
      >
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-ink-soft">{label}</p>
    </div>
  );
}
