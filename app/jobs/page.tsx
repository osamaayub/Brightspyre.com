import { JobFilters } from "@/components/job/job-filters"
import { JobList } from "@/components/job/job-list"
import { JobSearchBar } from "@/components/job/job-search-bar"
import { Suspense } from "react"
import { JobListSkeleton } from "@/components/skeletons/job-list-skeleton"

export const metadata = {
  title: "Browse Jobs | Brightspyre",
  description: "Find your next career opportunity from our curated job listings",
}

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>
      <JobSearchBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-1">
          <JobFilters />
        </div>
        <div className="lg:col-span-3">
          <Suspense fallback={<JobListSkeleton />}>
            <JobList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
