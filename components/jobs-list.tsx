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

export function JobsList() {
  // Mock jobs data
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "DevInc",
      location: "New York, NY",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: "3",
      title: "UX Designer",
      company: "DesignCo",
      location: "Remote",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      posted: "3 days ago",
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "WebSolutions",
      location: "Seattle, WA",
      salary: "$110,000 - $140,000",
      type: "Full-time",
      posted: "5 days ago",
    },
    {
      id: "5",
      title: "Product Manager",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: "6",
      title: "Data Scientist",
      company: "DataCo",
      location: "Remote",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "4 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-muted-foreground">Showing 1-6 of 120 jobs</span>
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
        {jobs.map((job) => (
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
                  <div className="text-sm text-muted-foreground">
                    <span>{job.company}</span> • <span>{job.location}</span>
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
