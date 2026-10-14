import type { Metadata } from "next";
import Menu from "./menu";
export const metadata: Metadata = { title: "Menü | THE GROUT", description: "The Grout kahve, tatlı ve yemek menüsü.", robots: { index: false, follow: false } };
export default function MenuPage() { return <Menu />; }
