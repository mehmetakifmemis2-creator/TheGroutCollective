import { menuSettings } from "@/content/menu/settings";

export function MenuIntro() {
  const { intro, preview } = menuSettings;

  return (
    <>
      <section className="gm-hero">
        <div className="gm-intro">
          <p className="gm-kicker">{intro.eyebrow}</p>
          <h1>
            {intro.title}
            <br />
            <em>{intro.titleEmphasis}</em>
          </h1>
          <p className="gm-lede preserve-lines">{intro.description}</p>
          <a className="gm-explore" href="#menu-list">
            {intro.action}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      {preview.visible && (
        <div className="gm-preview">
          {preview.label}
          <span>{preview.description}</span>
        </div>
      )}
    </>
  );
}
