export type CategoryName =
  "Sıcak Kahveler" | "Soğuk Kahveler" | "İçecekler" | "Tatlılar" | "Yemekler";
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  /** TL fiyatı. Henüz belirlenmediyse null bırakın. */
  price: number | null;
  group: CategoryName;
  /** public klasörüne göre yol. Fotoğraf yoksa null bırakın. */
  image: string | null;
  draft?: boolean;
  note?: string;
};
