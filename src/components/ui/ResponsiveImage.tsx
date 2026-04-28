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

const WIDTHS = [400, 800, 1200];

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
  if (!blogMatch) {
    return (
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
    );
  }

  const baseName = blogMatch[1];
  const srcset = (format: "webp" | "avif") =>
    WIDTHS.map((w) => `/images/blog/responsive/${baseName}-${w}w.${format} ${w}w`).join(", ");

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
