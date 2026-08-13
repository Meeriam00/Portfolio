import { useEffect, useRef, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glowRef.current?.style.setProperty("--x", `${event.clientX}px`);
        glowRef.current?.style.setProperty("--y", `${event.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={
        {
          "--x": "50%",
          "--y": "50%",
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(200,169,106,0.05), transparent 70%)",
        } as CSSProperties
      }
    />
  );
}
