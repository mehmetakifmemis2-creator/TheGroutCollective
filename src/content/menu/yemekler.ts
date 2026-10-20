import type { MenuItem } from "./types";

// Yemekler: fiyatlar TL, fotoğraf yolları public klasörüne göredir.
// image: null olan ürüne fotoğraf eklemek için '/images/menu/dosya-adi.jpg' yazın.
export const foods: MenuItem[] = [
  {
    name: "Köfte Ekmek",
    description:
      "Yarım ekmek içerisinde 120 gram köfte ve özel sosumuzla harmanladığımız marul, domates ve soğan salatası",
    price: 350,
    group: "Yemekler",
    id: "kofte-ekmek",
    image: "/images/menu/kofte-ekmek.jpg",
  },
  {
    name: "Pesto Tost",
    description: "Pesto sos, kaşar, beyaz peynir ve domates",
    price: 230,
    group: "Yemekler",
    id: "pesto-tost",
    image: "/images/menu/pesto-tost.jpg",
  },
  {
    name: "Klasik Karışık",
    description:
      "Sucuk, çift kaşar, salatalık turşusu, ketçap, mayonez, tereyağ ve özel baharat",
    price: 250,
    group: "Yemekler",
    id: "klasik-karisik",
    image: "/images/menu/klasik-karisik.jpg",
  },
  {
    name: "the grout tost",
    description:
      "Sucuk, kırmızı kuru et, çift kaşar, cheddar, salatalık turşusu, ketçap, mayonez, tereyağ ve özel baharat",
    price: 300,
    group: "Yemekler",
    id: "the-grout-tost",
    image: "/images/menu/the-grout-tost.jpg",
  },
  {
    name: "Çıtır Tabağı",
    description:
      "Patates kızartması, 4 adet soğan halkası, 2 adet nugget ve 2 adet peynir çubuğu",
    price: 250,
    group: "Yemekler",
    id: "citir-tabagi",
    image: null,
  },
];
