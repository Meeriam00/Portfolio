import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../data/site";
import { projects } from "../../data/projects";
import { techStack } from "../../data/techStack";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { StatCounter } from "../ui/StatCounter";

const projectCount = projects.length;
const techCount = techStack.length;

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "2+", label: t.about.statLabels.experience },
    { value: `${projectCount}+`, label: t.about.statLabels.projects },
    { value: `${techCount}+`, label: t.about.statLabels.technologies },
  ];

  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] border border-gold/30"
              />
              <img
                src={site.portrait}
                alt={site.name}
                width={480}
                height={560}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-xl"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t.about.kicker}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {t.about.title}
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4">
              {t.about.body.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal>
          <h3 className="mt-20 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
            {t.about.philosophyTitle}
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {t.about.philosophy.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <Card className="h-full">
                <h4 className="text-lg font-semibold text-ink">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-border pt-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
