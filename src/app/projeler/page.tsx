import type { Metadata } from "next";
import { Navigation } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

// /projeler adresi. Projeleri src/content/projects.ts dosyasından düzenleyin.
export const metadata: Metadata = {
  title: "Projeler | THE GROUT",
  description: projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#proje-listesi">
        Projelere geç
      </a>
      <Navigation />
      <main id="proje-listesi" className="projects section-shell">
        <div className="project-heading">
          <div>
            <p className="eyebrow">THE GROUT PROJECT / PROJELER</p>
            <h1 className="projects-title">{projects.title}</h1>
          </div>
          <p>{projects.description}</p>
        </div>
        <div className="project-list">
          {projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
