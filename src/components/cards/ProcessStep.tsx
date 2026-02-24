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
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {number}
      </div>
      <h3 className="mt-4 text-lg font-bold text-dark">{title}</h3>
      <p className="mt-2 text-sm text-gray">{description}</p>
    </div>
  );
}
