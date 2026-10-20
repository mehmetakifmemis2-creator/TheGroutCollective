import type { MenuItem } from "@/content/menu";
import { menuSettings } from "@/content/menu/settings";
import { publicAsset } from "@/config/paths";

export function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article className={item.image ? "gm-item" : "gm-item gm-text-item"}>
      {item.image && (
        <div className="gm-image">
          <img
            className="gm-photo"
            src={publicAsset(item.image)}
            alt={item.name}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="gm-item-body">
        <p className="gm-item-label">
          {item.draft ? menuSettings.draftLabel : item.group}
          <span>{String(index + 1).padStart(2, "0")}</span>
        </p>
        <div className="gm-title-price">
          <h3>{item.name}</h3>
          <span className="gm-price">{item.price === null ? "—" : `${item.price}₺`}</span>
        </div>
        <p className="gm-description">{item.description}</p>
        {item.draft && <p className="gm-note">{menuSettings.pendingPrice}</p>}
        {item.note && <p className="gm-note">{item.note}</p>}
      </div>
    </article>
  );
}
