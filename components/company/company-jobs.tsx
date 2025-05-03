"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JobCard } from "@/components/job/job-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Job } from "@/types/job"

interface CompanyJobsProps {
  companyId: string
}

export function CompanyJobs({ companyId }: CompanyJobsProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 600))

      // Mock data
      const companyJobs = Array.from({ length: 3 }, (_, i) => ({
        id: `job-${300 + i}`, // Using job-{id} format for consistency
        title: `${i % 2 === 0 ? "Senior" : ""} ${
          i % 3 === 0 ? "Frontend" : i % 3 === 1 ? "Backend" : "Full Stack"
        } Developer`,
        company: {
          id: companyId,
          name: `Company ${companyId.replace("company-", "")}`,
          logo: `/placeholder.svg?height=40&width=40&text=C${companyId.replace("company-", "")}`,
        },
        location: i % 2 === 0 ? "San Francisco, CA" : "Remote",
        remote: i % 2 === 0 ? false : true,
        type: "Full-time",
        salary: `$${100 + i * 10}k - $${150 + i * 10}k`,
        summary: "Join our team and work on exciting projects with cutting-edge technologies.",
        postedAt: new Date(Date.now() - i * 86400000 * 2).toISOString(),
      }))

      setJobs(companyJobs)
      setIsLoading(false)
    }

    fetchCompanyJobs()
  }, [companyId])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Open Positions</CardTitle>
        <Button variant="ghost" asChild>
          <Link href={`/companies/${companyId}/jobs`}>View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 rounded-lg bg-gray-100 animate-pulse"></div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-gray-500">No open positions at this time.</p>
        )}
      </CardContent>
    </Card>
  )
}
