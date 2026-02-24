interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray">{subtitle}</p>
      )}
    </div>
  );
}
