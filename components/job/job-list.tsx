"use client"

import { JobCard } from "@/components/job/job-card"
import { Pagination } from "@/components/ui/pagination"
import { getJobs } from "@/lib/jobs"
import { useSearchParams } from "next/navigation"

export async function JobList() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const location = searchParams.get("location") || ""
  const category = searchParams.get("category") || ""
  const page = Number.parseInt(searchParams.get("page") || "1")

  const { jobs, totalJobs, totalPages } = await getJobs({ query, location, category, page })

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500">{totalJobs} jobs found</div>

      <div className="grid grid-cols-1 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} baseUrl="/jobs" />}
    </div>
  )
}
