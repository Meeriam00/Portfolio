import { useLanguage } from "../../context/LanguageContext";
import { education } from "../../data/education";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker={t.education.kicker}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <Card className="h-full">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {item.type[lang]}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {item.institution}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {item.field[lang]}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-ink-soft/70">
                  {item.from[lang]} — {item.to[lang]}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
