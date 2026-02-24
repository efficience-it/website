import { Job } from "@/../data/jobs";
import Button from "@/components/ui/Button";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <span className="text-xs font-medium uppercase text-primary">
        {job.category}
      </span>
      <h3 className="mt-2 font-display text-lg font-bold text-dark">
        {job.title}
      </h3>
      <p className="mt-2 text-sm text-gray">{job.description}</p>
      <Button href="/contact" variant="outline" size="sm" className="mt-4">
        Postuler
      </Button>
    </div>
  );
}
