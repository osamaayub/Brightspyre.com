import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedJobs() {
  // Mock featured jobs data
  const featuredJobs = [
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
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredJobs.map((job) => (
        <Card key={job.id} className="flex flex-col">
          <CardContent className="flex-1 pt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Badge>{job.type}</Badge>
                <span className="text-xs text-muted-foreground">{job.posted}</span>
              </div>
              <Link href={`/jobs/${job.id}`} className="block">
                <h3 className="font-semibold hover:underline">{job.title}</h3>
              </Link>
              <div className="text-sm text-muted-foreground">
                <div>{job.company}</div>
                <div>{job.location}</div>
              </div>
              <div className="text-sm font-medium">{job.salary}</div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Link href={`/jobs/${job.id}`} className="text-sm font-medium hover:underline">
              View Job →
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
