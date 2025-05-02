import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, MapPin } from "lucide-react"

const featuredJobs = [
  {
    id: "job1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "job2",
    title: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130K - $160K",
    tags: ["Product", "Agile", "SaaS"],
  },
  {
    id: "job3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Remote",
    type: "Full-time",
    salary: "$110K - $140K",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
  {
    id: "job4",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90K - $120K",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Remote",
    type: "Full-time",
    salary: "$125K - $155K",
    tags: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: "job6",
    title: "Backend Developer",
    company: "ServerStack",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$115K - $145K",
    tags: ["Node.js", "PostgreSQL", "API Design"],
  },
]

export default function FeaturedJobs() {
  // Display only the first 6 jobs
  const displayJobs = featuredJobs.slice(0, 6)

  return (
    <>
      {displayJobs.map((job) => (
        <Card key={job.id} className="flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="grid h-12 w-12 place-items-center rounded-full border bg-muted">
              <Building className="h-6 w-6" />
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2 pb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{job.type}</Badge>
              <Badge variant="outline">{job.salary}</Badge>
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-primary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto pt-2">
            <Link href={`/jobs/${job.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Job
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
