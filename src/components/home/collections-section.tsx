import { collections } from "@/content/collections";
import { Collections } from "@/components/collections/collection-gallery";

export function CollectionsSection() {
  return (
    <section className="collections section-shell" id="koleksiyonlar">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">{collections.eyebrow}</p>
          <h2 className="preserve-lines">{collections.title}</h2>
        </div>
        <p>{collections.description}</p>
      </div>
      <Collections />
      <p className="content-note">{collections.note}</p>
    </section>
  );
}
