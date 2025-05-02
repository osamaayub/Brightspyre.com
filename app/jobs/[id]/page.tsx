"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building, Calendar, Clock, MapPin, Share2, Bookmark, ArrowLeft } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

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
    description: `
      <p>TechCorp is looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining our web applications, working closely with our design and backend teams.</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop new user-facing features using React.js</li>
        <li>Build reusable components and front-end libraries for future use</li>
        <li>Translate designs and wireframes into high-quality code</li>
        <li>Optimize components for maximum performance across a vast array of web-capable devices and browsers</li>
        <li>Collaborate with the design team to implement and improve the user interface</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in frontend development</li>
        <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
        <li>Thorough understanding of React.js and its core principles</li>
        <li>Experience with popular React.js workflows (such as Flux or Redux)</li>
        <li>Familiarity with newer specifications of ECMAScript</li>
        <li>Experience with data structure libraries (e.g., Immutable.js)</li>
        <li>Knowledge of isomorphic React is a plus</li>
        <li>Understanding of server-side rendering</li>
      </ul>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Competitive salary and equity</li>
        <li>Health, dental, and vision insurance</li>
        <li>Unlimited PTO</li>
        <li>401(k) with company match</li>
        <li>Remote work options</li>
        <li>Professional development budget</li>
      </ul>
    `,
    companyDescription:
      "TechCorp is a leading technology company specializing in web and mobile applications. We work with clients across various industries to deliver cutting-edge solutions that drive business growth.",
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
    description: `
      <p>InnovateTech is seeking a Product Manager to lead our product development efforts. You will be responsible for defining product strategy, roadmap, and features.</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Define the product vision, strategy, and roadmap</li>
        <li>Gather and prioritize product and customer requirements</li>
        <li>Work closely with engineering, design, and marketing teams</li>
        <li>Define product features and requirements</li>
        <li>Ensure revenue and customer satisfaction goals are met</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of product management experience</li>
        <li>Strong problem-solving abilities</li>
        <li>Excellent communication and presentation skills</li>
        <li>Experience with Agile development methodologies</li>
        <li>Technical background or experience working with technical teams</li>
      </ul>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Competitive salary and bonus</li>
        <li>Health, dental, and vision insurance</li>
        <li>Flexible work hours</li>
        <li>401(k) with company match</li>
        <li>Professional development opportunities</li>
      </ul>
    `,
    companyDescription:
      "InnovateTech is a fast-growing SaaS company that provides innovative solutions to businesses of all sizes. Our mission is to simplify complex processes and help our customers achieve their goals.",
  },
]

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Simulate API call to fetch job details
    const fetchJob = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        const foundJob = jobsData.find((j) => j.id === params.id)
        setJob(foundJob || null)
      } catch (error) {
        console.error("Error fetching job:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJob()
  }, [params.id])

  const handleApply = () => {
    if (!user) {
      router.push("/login?redirect=/jobs/" + params.id)
      return
    }

    // In a real app, this would submit an application
    alert("Your application has been submitted!")
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="container py-10">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-2">Job Not Found</h2>
          <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/jobs" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to jobs
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <Building className="mr-1 h-4 w-4" />
                  {job.company}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {job.location}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {job.type}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  Posted {job.posted}
                </Badge>
                <Badge variant="outline">{job.salary}</Badge>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {job.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
            </CardContent>
            <CardFooter>
              <Button onClick={handleApply} className="w-full">
                Apply Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About {job.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <Building className="h-10 w-10 text-muted-foreground" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{job.companyDescription}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobsData
                .filter((j) => j.id !== job.id)
                .slice(0, 3)
                .map((similarJob) => (
                  <div key={similarJob.id} className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Building className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <Link href={`/jobs/${similarJob.id}`} className="font-medium hover:underline">
                        {similarJob.title}
                      </Link>
                      <p className="text-xs text-muted-foreground">{similarJob.company}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        {similarJob.location}
                      </div>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
