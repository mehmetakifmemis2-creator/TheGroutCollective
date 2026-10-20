import Link from "next/link";
import { menuSettings } from "@/content/menu/settings";

export function MenuHeader() {
  const { brand, tagline, homeLink } = menuSettings.header;

  return (
    <header className="gm-header">
      <Link className="gm-logo" href="/">
        {brand}
      </Link>
      <span>{tagline}</span>
      <Link href="/">{homeLink}</Link>
    </header>
  );
}
