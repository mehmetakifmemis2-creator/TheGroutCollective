// ANA SAYFA: Aşağıdaki bölümler ekranda bu sırayla gösterilir.
import { Navigation } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HomeHero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/intro";
import { OurWorldSection } from "@/components/home/world";
import { CollectionsSection } from "@/components/home/collections-section";
import { ShowroomSection } from "@/components/home/showroom";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { ui } from "@/content/shared";
export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <Navigation />
      <main id="main">
        <HomeHero />
        <AboutSection />
        <OurWorldSection />
        <CollectionsSection />
        <ShowroomSection />
        <ProjectsPreview />
      </main>
      <SiteFooter />
    </>
  );
}
