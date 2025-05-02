"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, MapPin, Search } from "lucide-react"

// Mock data for jobs
const jobsData = [
  {
    id: "job1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    tags: ["React", "TypeScript", "Next.js"],
    posted: "2 days ago",
  },
  {
    id: "job2",
    title: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130K - $160K",
    tags: ["Product", "Agile", "SaaS"],
    posted: "1 week ago",
  },
  {
    id: "job3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Remote",
    type: "Full-time",
    salary: "$110K - $140K",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    posted: "3 days ago",
  },
  {
    id: "job4",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90K - $120K",
    tags: ["Figma", "User Research", "Prototyping"],
    posted: "Just now",
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Remote",
    type: "Full-time",
    salary: "$125K - $155K",
    tags: ["Python", "Machine Learning", "SQL"],
    posted: "2 weeks ago",
  },
  {
    id: "job6",
    title: "Backend Developer",
    company: "ServerStack",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$115K - $145K",
    tags: ["Node.js", "PostgreSQL", "API Design"],
    posted: "5 days ago",
  },
  {
    id: "job7",
    title: "Marketing Manager",
    company: "GrowthBoost",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85K - $110K",
    tags: ["Digital Marketing", "SEO", "Content Strategy"],
    posted: "1 day ago",
  },
  {
    id: "job8",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Los Angeles, CA",
    type: "Contract",
    salary: "$70 - $90 per hour",
    tags: ["React Native", "iOS", "Android"],
    posted: "3 days ago",
  },
  {
    id: "job9",
    title: "Technical Writer",
    company: "DocuTech",
    location: "Remote",
    type: "Part-time",
    salary: "$40 - $60 per hour",
    tags: ["Documentation", "API", "Technical Communication"],
    posted: "1 week ago",
  },
  {
    id: "job10",
    title: "Sales Representative",
    company: "SalesForce",
    location: "Miami, FL",
    type: "Full-time",
    salary: "$60K - $80K + Commission",
    tags: ["B2B Sales", "CRM", "Lead Generation"],
    posted: "4 days ago",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [jobType, setJobType] = useState<string | undefined>(undefined)
  const [location, setLocation] = useState<string | undefined>(undefined)

  // Filter jobs based on search term, job type, and location
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesJobType = !jobType || job.type === jobType
    const matchesLocation = !location || job.location.includes(location)

    return matchesSearch && matchesJobType && matchesLocation
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Jobs</h1>
          <p className="text-muted-foreground">Find your perfect role from our curated job listings</p>
        </div>

        {/* Search and Filters */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, companies, or keywords..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Select onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Seattle">Seattle</SelectItem>
                <SelectItem value="Austin">Austin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
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
                  <p className="text-xs text-muted-foreground mt-2">Posted {job.posted}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-2">
                  <Link href={`/jobs/${job.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Job
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <h3 className="text-lg font-medium">No jobs found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
