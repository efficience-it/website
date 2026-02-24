interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-primary pl-8 pb-8 last:pb-0">
      <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-2 border-primary bg-white" />
      <span className="text-sm font-bold text-primary">{year}</span>
      <h3 className="mt-1 font-display text-lg font-bold text-dark">
        {title}
      </h3>
      <p className="mt-1 text-gray">{description}</p>
    </div>
  );
}
