interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="mx-auto max-w-xs text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white md:h-14 md:w-14 md:text-xl">
        {number}
      </div>
      <h3 className="mt-5 text-xl font-bold leading-snug text-dark md:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-gray">{description}</p>
    </div>
  );
}
