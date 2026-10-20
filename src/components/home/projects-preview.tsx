import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsPreview() {
  const featured = projects.items[0];
  if (!featured) return null;

  return (
    <section className="projects section-shell" id="projeler">
      <div className="project-heading">
        <div>
          <p className="eyebrow">{projects.eyebrow}</p>
          <h2>{projects.title}</h2>
        </div>
        <p>{projects.description}</p>
      </div>
      <ProjectCard project={featured} preview />
      <Link className="text-link" href="/projeler/">
        Tüm projeleri incele <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
