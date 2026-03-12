interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border-t-2 border-transparent bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
