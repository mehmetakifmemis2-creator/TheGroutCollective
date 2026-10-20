import { imageUrl, imageIsPlaceholder, type ImageName } from "@/content/images";
type PhotographProps = {
  name: ImageName;
  alt: string;
  className?: string;
  priority?: boolean;
};
export function Photograph({
  name,
  alt,
  className = "",
  priority = false,
}: PhotographProps) {
  return (
    <img
      className={"photograph " + className}
      src={imageUrl(name)}
      srcSet={
        imageIsPlaceholder(name)
          ? [640, 1200, 2000]
              .map((width) => imageUrl(name, width) + " " + width + "w")
              .join(", ")
          : undefined
      }
      sizes={
        priority ? "100vw" : "(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 60vw"
      }
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
