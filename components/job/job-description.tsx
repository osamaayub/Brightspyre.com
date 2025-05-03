import type { Job } from "@/types/job"

interface JobDescriptionProps {
  job: Job
}

export function JobDescription({ job }: JobDescriptionProps) {
  return (
    <div className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: job.description || "" }} />
    </div>
  )
}
