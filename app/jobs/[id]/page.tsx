import { JobHeader } from "@/components/job/job-header"
import { JobDescription } from "@/components/job/job-description"
import { JobCompanyInfo } from "@/components/job/job-company-info"
import { JobActions } from "@/components/job/job-actions"
import { SimilarJobs } from "@/components/job/similar-jobs"
import { getJobById } from "@/lib/jobs"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id)

  if (!job) {
    return {
      title: "Job Not Found | Brightspyre",
    }
  }

  return {
    title: `${job.title} at ${job.company} | Brightspyre`,
    description: job.summary,
  }
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <JobHeader job={job} />
          <JobDescription job={job} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <JobCompanyInfo company={job.company} />
            <JobActions job={job} />
            <SimilarJobs currentJobId={job.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
