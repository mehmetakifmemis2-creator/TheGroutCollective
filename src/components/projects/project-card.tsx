import Link from "next/link";
import { Photograph } from "@/components/shared/photograph";
import { Arrow } from "@/components/shared/arrow";
import { imageIsPlaceholder, type ImageName } from "@/content/images";
import { projects } from "@/content/projects";
import { ui } from "@/content/shared";

type ProjectCardProps = {
  project: (typeof projects.items)[number];
  preview?: boolean;
};

export function ProjectCard({ project, preview = false }: ProjectCardProps) {
  return (
    <article id={project.id} className="project-card">
      <Link
        className="project-photo"
        href={preview ? `/projeler/#${project.id}` : "/#iletisim"}
        aria-label={preview ? `${project.name} — projeyi incele` : projects.action}
      >
        <Photograph name={project.image as ImageName} alt={project.alt} />
        {imageIsPlaceholder(project.image as ImageName) && (
          <span className="image-badge">{ui.imageLabel}</span>
        )}
        <span className="project-cta">
          {preview ? "Projeyi incele" : projects.action}
          <Arrow />
        </span>
      </Link>
      <div className="project-meta">
        <h3>{project.name}</h3>
        <p className="eyebrow">{project.type}</p>
      </div>
      {!preview && <p className="project-description">{project.description}</p>}
      {project.note && <p className="content-note">{project.note}</p>}
    </article>
  );
}
