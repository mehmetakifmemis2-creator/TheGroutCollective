import { imageUrl } from "@/content/images";
export function Photograph({ name, alt, className = "", priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  return <img className={`photograph ${className}`} src={imageUrl(name)} srcSet={`${imageUrl(name, 640)} 640w, ${imageUrl(name, 1200)} 1200w, ${imageUrl(name, 2000)} 2000w`} sizes={priority ? "100vw" : "(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 60vw"} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />;
}
