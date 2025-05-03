"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { JobCard } from "@/components/job/job-card"
import { Button } from "@/components/ui/button"
import type { Job } from "@/types/job"

export function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching featured jobs
    const fetchFeaturedJobs = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock data
      const featuredJobs = Array.from({ length: 4 }, (_, i) => ({
        id: `job-${100 + i}`, // Using job-{id} format for consistency
        title: `${i % 2 === 0 ? "Senior" : "Lead"} ${
          i % 3 === 0 ? "Frontend" : i % 3 === 1 ? "Backend" : "Full Stack"
        } Developer`,
        company: {
          id: `company-${(i % 4) + 1}`,
          name: `Featured Company ${(i % 4) + 1}`,
          logo: `/placeholder.svg?height=40&width=40&text=FC${(i % 4) + 1}`,
        },
        location: i % 2 === 0 ? "New York, NY" : "Remote",
        remote: i % 2 === 0 ? false : true,
        type: "Full-time",
        salary: `$${100 + i * 10}k - $${150 + i * 10}k`,
        summary: "Join our team and work on exciting projects with cutting-edge technologies.",
        postedAt: new Date(Date.now() - i * 86400000 * 2).toISOString(),
      }))

      setJobs(featuredJobs)
      setIsLoading(false)
    }

    fetchFeaturedJobs()
  }, [])

  if (isLoading) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 rounded-lg bg-gray-100 animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Jobs</h2>
        <Link href="/jobs">
          <Button variant="ghost">View all jobs</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
