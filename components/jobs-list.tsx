import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { SaveJobButton } from "@/components/save-job-button"

import { Filters } from "@/types/filter"

export function JobsList({ filters }: { filters: Filters }) {
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      experience:"Entry",
      company: "TechCorp",
      location: "San Francisco, CA (Remote)",
      salary: "$80,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "DevInc",
      location: "onsite",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: "3",
      title: "UX Designer",
      company: "DesignCo",
      location: "remote",
      salary: "$90,000 - $120,000",
      type: "full-time",
      posted: "3 days ago",
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "WebSolutions",
      location: "Onsite",
      salary: "$110,000 - $140,000",
      type: "full-time",
      posted: "5 days ago",
    },
    {
      id: "5",
      title: "Product Manager",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$130,000 - $160,000",
      type: "full-time",
      posted: "1 week ago",
    },
    {
      id: "6",
      title: "Data Scientist",
      company: "DataCo",
      location: "remote",
      salary: "$120,000 - $150,000",
      type: "part-time",
      posted: "4 days ago",
    },
  ]

  // Filter the jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchType = filters.jobType.length === 0 || filters.jobType.includes(job.type)
    const matchLocation = filters.location.length === 0 || filters.location.includes(job.location)
    
    // Assuming salary range is an array where filters.salary[0] is the min and filters.salary[1] is the max salary
    const [minSalary, maxSalary] = filters.salary
    const matchSalary = filters.salary.length === 0 || 
      (parseInt(job.salary.split('-')[0].replace('$', '').replace(',', '').trim()) >= minSalary &&
      parseInt(job.salary.split('-')[1].replace('$', '').replace(',', '').trim()) <= maxSalary)

    return matchType && matchLocation && matchSalary
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-muted-foreground">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </span>
        </div>
        <div>
          <select className="p-2 border rounded-md text-sm">
            <option>Most Recent</option>
            <option>Highest Salary</option>
            <option>Most Relevant</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link href={`/jobs/${job.id}`} className="text-xl font-semibold hover:underline">
                      {job.title}
                    </Link>
                    <Badge>{job.type}</Badge>
                  </div>
                  <div className="text-sm font-medium">{job.salary}</div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                  <div className="flex gap-2">
                    <SaveJobButton jobId={job.id} jobTitle={job.title} size="sm" />
                    <Link href={`/jobs/${job.id}`}>
                      <Button size="sm">View Job</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
