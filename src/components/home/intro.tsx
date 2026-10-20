import { home } from "@/content/home";

export function AboutSection() {
  return (
    <section className="intro section-shell" id="hakkimizda">
      <div>
        <p className="eyebrow">{home.intro.eyebrow}</p>
        <h2 className="preserve-lines">{home.intro.title}</h2>
      </div>
      <div className="intro-copy">
        <p>{home.intro.body}</p>
        <span className="signature">{home.intro.foot}</span>
      </div>
    </section>
  );
}
