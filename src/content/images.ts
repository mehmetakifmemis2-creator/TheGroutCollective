import { publicAsset } from "@/config/paths";

// FOTOĞRAF DEĞİŞTİRME: src değerine public içindeki dosyanın yolunu yazın.
// Örnek: hero.src = '/images/site/ana-sayfa.jpg'
// Dosya adı aynı kalırsa fotoğrafı klasörde değiştirmek yeterlidir.
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    suggestedFile: "/images/site/ana-sayfa.jpg",
  },
  coffee: {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    suggestedFile: "/images/site/kahve.jpg",
  },
  interior: {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    suggestedFile: "/images/site/mimari.jpg",
  },
  cake: {
    src: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
    suggestedFile: "/images/site/pasta.jpg",
  },
  chair: {
    src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    suggestedFile: "/images/site/koltuk.jpg",
  },
  living: {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    suggestedFile: "/images/site/yasam-alani.jpg",
  },
  detail: {
    src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
    suggestedFile: "/images/site/detay.jpg",
  },
  showroom: {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    suggestedFile: "/images/site/showroom.jpg",
  },
  project: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    suggestedFile: "/images/site/proje.jpg",
  },
};
export type ImageName = keyof typeof images;
export function imageIsPlaceholder(name: ImageName) {
  return images[name].src.startsWith("https://images.unsplash.com/");
}
export function imageUrl(name: ImageName, width = 1200) {
  const source = images[name].src;
  return imageIsPlaceholder(name)
    ? source + "?auto=format&fit=crop&w=" + width + "&q=85"
    : publicAsset(source);
}
