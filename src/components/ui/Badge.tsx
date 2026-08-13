import { cn } from "../../utils/cn";

export function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
