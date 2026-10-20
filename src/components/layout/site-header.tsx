"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation, ui } from "@/content/shared";
export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="The Grout — Ana Sayfa">
        the grout.
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? ui.close : ui.menu}
        onClick={() => setOpen(!open)}
      >
        {open ? "Kapat −" : "Menü +"}
      </button>
      <nav
        id="main-navigation"
        aria-label="Ana navigasyon"
        className={open ? "navigation is-open" : "navigation"}
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <span className="language" aria-label="Dil: Türkçe">
        TR
      </span>
    </header>
  );
}
