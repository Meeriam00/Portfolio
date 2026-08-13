import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
