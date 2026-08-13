import { useLanguage } from "../../context/LanguageContext";
import { techStack } from "../../data/techStack";
import { SectionHeading } from "../ui/SectionHeading";
import { InfiniteCarousel } from "../ui/InfiniteCarousel";
import { Reveal } from "../ui/Reveal";
import type { TechItem } from "../../data/types";

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.techStack.kicker}
          title={t.techStack.title}
          subtitle={t.techStack.subtitle}
        />
      </div>

      <Reveal delay={0.15} className="mt-16">
        <InfiniteCarousel
          items={techStack}
          keyOf={(item, index) => `${item.name}-${index}`}
          renderItem={(item: TechItem) => {
            const Icon = item.icon;
            return (
              <div className="flex select-none items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 transition-colors duration-300 hover:border-gold/40">
                <Icon size={26} className="text-gold" />
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  {item.name}
                </span>
              </div>
            );
          }}
        />
      </Reveal>
    </section>
  );
}
