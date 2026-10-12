// Curated stock placeholders, never represented as THE GROUT's own work.
export const images: Record<string, string> = {
  hero: "photo-1600210492486-724fe5c67fb0",
  coffee: "photo-1501339847302-ac426a4a7cbb",
  interior: "photo-1600607687920-4e2a09cf159d",
  cake: "photo-1464305795204-6f5bbfc7fb81",
  chair: "photo-1567538096630-e0c55bd6374c",
  living: "photo-1616486338812-3dadae4b4ace",
  detail: "photo-1600210491892-03d54c0aaf87",
  showroom: "photo-1442512595331-e89e73853f31",
  project: "photo-1600607687939-ce8a6c25118c"
};
export function imageUrl(key: string, width = 1200) {
  return `https://images.unsplash.com/${images[key]}?auto=format&fit=crop&w=${width}&q=85`;
}
