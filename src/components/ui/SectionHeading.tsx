import { Reveal } from "./Reveal";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ kicker, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl", align === "center" ? "text-center" : "text-left")}>
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {kicker}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
