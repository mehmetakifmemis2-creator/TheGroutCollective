import { home } from "@/content/home";
import { Photograph } from "@/components/shared/photograph";
import { Arrow } from "@/components/shared/arrow";
import { imageIsPlaceholder, type ImageName } from "@/content/images";

export function ShowroomSection() {
  return (
    <section className="showroom" id="showroom">
      <div className="showroom-photo">
        <Photograph name={home.showroom.image as ImageName} alt={home.showroom.alt} />
        <div className="showroom-caption">
          <span>{home.showroom.caption}</span>
          {imageIsPlaceholder(home.showroom.image as ImageName) && (
            <span>{home.showroom.imageNote}</span>
          )}
        </div>
      </div>
      <div className="showroom-copy">
        <span className="showroom-symbol" aria-hidden="true">
          g.
        </span>
        <p className="eyebrow">{home.showroom.eyebrow}</p>
        <h2 className="preserve-lines">{home.showroom.title}</h2>
        <p>{home.showroom.body}</p>
        <a className="text-link" href="#iletisim">
          {home.showroom.action}
          <Arrow />
        </a>
      </div>
    </section>
  );
}
