import Image from "next/image";
import variantsManifest from "@/data/blog-image-variants.json";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

const manifest: Record<string, number[]> = variantsManifest;

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  loading = "lazy",
  fetchPriority,
}: Readonly<ResponsiveImageProps>) {
  const blogMatch = src.match(/^\/images\/blog\/(.+)\.webp$/);
  const widths = blogMatch ? manifest[blogMatch[1]] ?? [] : [];

  if (widths.length === 0) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        sizes={sizes}
        fetchPriority={fetchPriority}
      />
    );
  }

  const baseName = blogMatch![1];
  const srcset = (format: "webp" | "avif") =>
    widths.map((w) => `/images/blog/responsive/${baseName}-${w}w.${format} ${w}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
