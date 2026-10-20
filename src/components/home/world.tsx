import { home } from "@/content/home";
import { ui } from "@/content/shared";
import { Photograph } from "@/components/shared/photograph";
import { imageIsPlaceholder, type ImageName } from "@/content/images";

export function OurWorldSection() {
  return (
    <section className="world section-shell" id="dunyamiz">
      <div className="section-heading">
        <p className="eyebrow">{home.world.eyebrow}</p>
        <h2>{home.world.title}</h2>
      </div>
      <div className="world-grid">
        {home.world.items.map((item, i) => (
          <article className={`world-item world-${item.id}`} key={item.id}>
            <a
              className="world-image"
              href={item.href}
              {...(item.href.startsWith("https")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <Photograph name={item.image as ImageName} alt={item.alt} />
              {imageIsPlaceholder(item.image as ImageName) && (
                <span className="image-badge">{ui.imageLabel}</span>
              )}
              <div className="world-overlay">
                <span className="world-index">0{i + 1}</span>
                <h3>
                  <small>the grout.</small>
                  {item.name}
                </h3>
                <span className="world-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="sr-only">{item.action}</span>
            </a>
            <p className="eyebrow world-category">{item.category}</p>
            <p className="world-description">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
