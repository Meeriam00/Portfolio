import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Badge } from "../ui/Badge";

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker={t.experience.kicker}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <ol className="mt-16 space-y-10 border-l border-border pl-8">
          {experience.map((job, index) => (
            <Reveal key={job.id} as="li" delay={index * 0.1} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-bg" />

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-ink">
                  {job.title[lang]}
                </h3>
                {job.current && <Badge className="border-gold text-gold">{t.experience.present}</Badge>}
              </div>
              <p className="mt-1 text-sm font-medium text-ink-soft">
                {job.company} · {job.location}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft/70">
                {job.from[lang]} — {job.to[lang]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {job.description[lang]}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
