import type { MenuItem } from "./types";

// Tatlılar: fiyatlar TL, fotoğraf yolları public klasörüne göredir.
// image: null olan ürüne fotoğraf eklemek için '/images/menu/dosya-adi.jpg' yazın.
export const desserts: MenuItem[] = [
  {
    name: "San Sebastian",
    description:
      "Üzerinde Belçika çikolatasıyla servis ettiğimiz yumuşak dokulu San Sebastian",
    price: 350,
    group: "Tatlılar",
    id: "san-sebastian",
    image: "/images/menu/san-sebastian.jpg",
  },
  {
    name: "Lotus Cheesecake",
    description: "Üzerinde erimiş lotus kremasıyla servis edilir.",
    price: 320,
    group: "Tatlılar",
    id: "lotus-cheesecake",
    image: "/images/menu/lotus-cheesecake.jpg",
  },
  {
    name: "Brownie",
    description:
      "Yoğun çikolatalı klasik Brownie üzeri Belçika çikolatası (Sıcak servis edilir.)",
    price: 330,
    group: "Tatlılar",
    id: "brownie",
    image: "/images/menu/brownie.jpg",
  },
  {
    name: "Pate â choux",
    description:
      "2 adet içi pastacı krema dolgulu çıtır toplar. Belçika çikolatasıyla servis edilir.",
    price: 340,
    group: "Tatlılar",
    id: "pate-a-choux",
    image: "/images/menu/pate-a-choux.jpg",
  },
  {
    name: "Spoonfull",
    description: "Altı ıslak kek, ortası pastacı kreması, üzeri Belçika çikolatası.",
    price: 340,
    group: "Tatlılar",
    id: "spoonfull",
    image: "/images/menu/spoonfull.jpg",
  },
  {
    name: "Klasik Cup",
    description: "Çilek, muz ve Belçika çikolatası",
    price: 350,
    group: "Tatlılar",
    id: "klasik-cup",
    image: "/images/menu/klasik-cup.jpg",
  },
  {
    name: "Tiramisu",
    description:
      "Espressoyla ıslatılmış kedi dili bisküvi, özel tiramisu kreması ve kakao",
    price: 330,
    group: "Tatlılar",
    id: "tiramisu",
    image: null,
  },
  {
    name: "Napolyon Tatlısı",
    description:
      "İsteğe göre çilekli ya da muzlu, özel kreması ve çıtır milföy katlarıyla Napolyon tatlısı.",
    price: 320,
    group: "Tatlılar",
    id: "napolyon-tatlisi",
    image: null,
  },
  {
    name: "Cream Cup",
    description:
      "Altı ıslak kek, ortası çilek ve pastacı kreması, üzeri Belçika çikolatası.",
    price: 350,
    group: "Tatlılar",
    id: "cream-cup",
    image: "/images/menu/cream-cup.jpg",
  },
  {
    name: "Profiterol",
    description: "3 adet içi krema dolgulu profetirol top ve özel profiterol sosu",
    price: 320,
    group: "Tatlılar",
    id: "profiterol",
    image: "/images/menu/profiterol.jpg",
  },
  {
    name: "Çikolatalı Cheesecake",
    description: "Sade cheesecake üzerine Belçika çikolatasıyla servis edilir.",
    price: 340,
    group: "Tatlılar",
    id: "cikolatali-cheesecake",
    image: "/images/menu/cikolatali-cheesecake.jpg",
  },
  {
    name: "Frambuazlı Cheesecake",
    description: "İsteğe göre çilekli ya da muzlu magnolia",
    price: 320,
    group: "Tatlılar",
    note: "Kaynak menüdeki açıklama bu şekilde; ürün açıklaması teyit bekliyor.",
    id: "frambuazli-cheesecake",
    image: "/images/menu/frambuazli-cheesecake.jpg",
  },
  {
    name: "Klasik Churros",
    description:
      "Porsiyonda 2 adet bulunmaktadır. Klasik churros şeklinde yanında çikolatayla servis edilir.",
    price: 200,
    group: "Tatlılar",
    id: "klasik-churros",
    image: "/images/menu/klasik-churros.jpg",
  },
  {
    name: "Meyveli Churros",
    description:
      "Ortasında çilek ve muz bulunan 2 adet churros çubuğu. Üzerinde çikolatayla servis edilir.",
    price: 210,
    group: "Tatlılar",
    id: "meyveli-churros",
    image: "/images/menu/meyveli-churros.jpg",
  },
  {
    name: "Dolgulu Churros",
    description:
      "İçinde krema dolgusu, çilek ve muz bulunan 2 adet churros çubuğu. Üzerinde çikolatayla servis edilir.",
    price: 220,
    group: "Tatlılar",
    id: "dolgulu-churros",
    image: "/images/menu/dolgulu-churros.jpg",
  },
];
