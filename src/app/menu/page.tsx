import type { Metadata } from "next";
import { CafeMenu } from "@/components/menu/menu-page";
import { menuSettings } from "@/content/menu/settings";
import "@/styles/menu.css";

// /menu adresi. Ürünler: src/content/menu/ — Fotoğraflar: public/images/menu/
export const metadata: Metadata = {
  title: menuSettings.title,
  description: menuSettings.description,
  robots: { index: false, follow: false },
};

export default function MenuPage() {
  return <CafeMenu />;
}
