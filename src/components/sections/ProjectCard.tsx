import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import type { ProjectItem } from "../../data/types";
import { useLanguage } from "../../context/LanguageContext";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

function ProjectMockup({ project }: { project: ProjectItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center gap-1.5 border-b border-border bg-bg px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-soft/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-soft/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-soft/30" />
        <span className="ml-3 truncate rounded-full bg-surface px-3 py-0.5 text-[11px] text-ink-soft">
          {project.domain}
        </span>
      </div>
      <div className="aspect-video overflow-hidden bg-bg">
        <motion.img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { t, lang } = useLanguage();

  const facts: { label: string; text: string }[] = [
    { label: t.projects.performance, text: project.performance[lang] },
    { label: t.projects.responsive, text: project.responsive[lang] },
    { label: t.projects.apiIntegration, text: project.apiIntegration[lang] },
  ];

  return (
    <Reveal delay={index * 0.1}>
      <Card hoverLift={false} className="overflow-hidden p-0">
        <div className="p-4 sm:p-6">
          <ProjectMockup project={project} />
        </div>

        <div className="px-6 pb-8 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
            <Badge className="border-gold/40 text-gold">{project.role[lang]}</Badge>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.overview[lang]}</p>

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              {t.projects.responsibilities}
            </span>
            <ul className="mt-2 space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item[lang]} className="flex items-start gap-2 text-sm text-ink-soft">
                  <FiCheck size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              {t.projects.techStack}
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {fact.label}
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{fact.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
              {t.projects.liveWebsite} <FiArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
