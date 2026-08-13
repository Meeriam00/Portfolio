import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function Card({ children, className, hoverLift = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-colors duration-300",
        className
      )}
      whileHover={hoverLift ? { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.35)", borderColor: "rgba(200,169,106,0.3)" } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
