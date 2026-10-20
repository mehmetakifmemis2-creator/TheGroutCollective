import Link from "next/link";
import { footer, navigation } from "@/content/shared";
import { site } from "@/config/site";
import { Arrow } from "@/components/shared/arrow";
export function SiteFooter() {
  return (
    <footer className="site-footer" id="iletisim">
      <div className="footer-top">
        <div>
          <p className="eyebrow">{footer.eyebrow}</p>
          <h2 className="preserve-lines">{footer.title}</h2>
        </div>
        <a
          href={
            site.contact.email ? `mailto:${site.contact.email}` : site.instagram[1].url
          }
          {...(!site.contact.email ? { target: "_blank", rel: "noreferrer" } : {})}
          className="contact-circle"
          aria-label={
            site.contact.email
              ? "E-posta ile iletişim kurun"
              : "Instagram üzerinden The Grout Project ile iletişim kurun"
          }
        >
          <Arrow />
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <Link href="/#home" className="footer-logo">
            the grout.
          </Link>
          <p>COFFEE · PROJECT · CAKE</p>
        </div>
        <div>
          <h3>{footer.nav}</h3>
          {navigation
            .filter((item) => item.href !== "/#home")
            .map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
        </div>
        <div>
          <h3>{footer.socials}</h3>
          {site.instagram.map((item) => (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
              {item.label} ↗
            </a>
          ))}
        </div>
        <div>
          <h3>{footer.contact}</h3>
          <p>{site.contact.address || footer.location}</p>
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          )}
          {site.contact.phone && (
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
              {site.contact.phone}
            </a>
          )}
          {!site.contact.email && !site.contact.phone && (
            <p className="contact-pending">{footer.pending}</p>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {footer.copyright}
        </span>
        <Link href="/#home">{footer.top} ↑</Link>
      </div>
      <p className="footer-note">{footer.note}</p>
    </footer>
  );
}
