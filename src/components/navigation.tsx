"use client";
import { useEffect, useState } from "react";
import { tr } from "@/content/tr";
export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="The Grout — Ana Sayfa">the grout.</a><button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? tr.ui.close : tr.ui.menu} onClick={() => setOpen(!open)}>{open ? "Kapat −" : "Menü +"}</button><nav id="main-navigation" aria-label="Ana navigasyon" className={open ? "navigation is-open" : "navigation"}>{tr.nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><span className="language" aria-label="Dil: Türkçe">TR</span></header>;
}
