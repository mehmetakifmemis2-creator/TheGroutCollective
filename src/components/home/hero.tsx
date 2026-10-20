import { home } from "@/content/home";
import { ui } from "@/content/shared";
import { Photograph } from "@/components/shared/photograph";
import { imageIsPlaceholder, type ImageName } from "@/content/images";
import { Arrow } from "@/components/shared/arrow";

export function HomeHero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Photograph name={home.hero.image as ImageName} alt={home.hero.alt} priority />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{home.hero.eyebrow}</p>
        <h1 id="hero-title">{home.hero.title}</h1>
        <p className="hero-subtitle">{home.hero.subtitle}</p>
        <a className="hero-link" href="#dunyamiz">
          {home.hero.action}
          <Arrow />
        </a>
      </div>
      <div className="hero-bottom">
        <span>{home.hero.bottom}</span>
        <a href="#hakkimizda">
          {home.hero.scroll} <span aria-hidden="true">↓</span>
        </a>
      </div>
      {imageIsPlaceholder(home.hero.image as ImageName) && (
        <span className="hero-placeholder">{ui.imageLabel}</span>
      )}
    </section>
  );
}
