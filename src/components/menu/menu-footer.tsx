import { menuSettings } from "@/content/menu/settings";

export function MenuFooter() {
  return (
    <footer className="gm-footer">
      <div className="gm-logo">{menuSettings.header.brand}</div>
      <p>{menuSettings.footer.tagline}</p>
      <a href="#menu-top">{menuSettings.footer.top}</a>
      <small>{menuSettings.footer.copyright}</small>
    </footer>
  );
}
