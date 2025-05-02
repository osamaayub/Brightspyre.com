"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, MapPin, Users, Globe, ArrowLeft, Briefcase } from "lucide-react"

// Mock data for companies
const companiesData = [
  {
    id: "techcorp",
    name: "TechCorp",
    industry: "Software Development",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    description:
      "TechCorp is a leading technology company specializing in web and mobile applications. We work with clients across various industries to deliver cutting-edge solutions that drive business growth.",
    about: `
      <p>Founded in 2010, TechCorp has grown from a small startup to a major player in the tech industry. Our mission is to create innovative software solutions that solve real-world problems.</p>
      
      <p>We believe in a collaborative approach to software development, working closely with our clients to understand their needs and deliver solutions that exceed their expectations.</p>
      
      <h3>Our Values:</h3>
      <ul>
        <li>Innovation: We constantly push the boundaries of what's possible</li>
        <li>Quality: We are committed to delivering high-quality software</li>
        <li>Collaboration: We work together to achieve common goals</li>
        <li>Integrity: We act with honesty and transparency in all we do</li>
      </ul>
    `,
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "401(k) with company match",
      "Remote work options",
      "Professional development budget",
      "Gym membership",
      "Free lunch and snacks",
    ],
    website: "https://techcorp.example.com",
    openPositions: [
      {
        id: "job1",
        title: "Senior Frontend Developer",
        type: "Full-time",
        location: "San Francisco, CA",
      },
      {
        id: "job3",
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Remote",
      },
      {
        id: "job6",
        title: "Backend Developer",
        type: "Full-time",
        location: "Seattle, WA",
      },
    ],
  },
  {
    id: "innovatetech",
    name: "InnovateTech",
    industry: "SaaS",
    location: "New York, NY",
    size: "100-500 employees",
    description:
      "InnovateTech is a fast-growing SaaS company that provides innovative solutions to businesses of all sizes. Our mission is to simplify complex processes and help our customers achieve their goals.",
    about: `
      <p>InnovateTech was founded in 2015 with a simple mission: to make powerful software accessible to businesses of all sizes. Since then, we've helped thousands of companies streamline their operations and grow their business.</p>
      
      <p>Our team of passionate engineers, designers, and product managers work together to create intuitive, powerful software that solves real business problems.</p>
      
      <h3>Our Values:</h3>
      <ul>
        <li>Customer Focus: We put our customers at the center of everything we do</li>
        <li>Simplicity: We believe in making complex things simple</li>
        <li>Continuous Improvement: We're always looking for ways to get better</li>
        <li>Teamwork: We achieve more when we work together</li>
      </ul>
    `,
    benefits: [
      "Competitive salary and bonus",
      "Health, dental, and vision insurance",
      "Flexible work hours",
      "401(k) with company match",
      "Professional development opportunities",
      "Parental leave",
      "Company retreats",
    ],
    website: "https://innovatetech.example.com",
    openPositions: [
      {
        id: "job2",
        title: "Product Manager",
        type: "Full-time",
        location: "New York, NY",
      },
      {
        id: "job7",
        title: "Marketing Manager",
        type: "Full-time",
        location: "Chicago, IL",
      },
    ],
  },
]

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const [company, setCompany] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch company details
    const fetchCompany = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        const foundCompany = companiesData.find((c) => c.id === params.id)
        setCompany(foundCompany || null)
      } catch (error) {
        console.error("Error fetching company:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCompany()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading company details...</p>
        </div>
      </div>
    )
  }

  if (!company) {
    return (
      <div className="container py-10">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-2">Company Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The company you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/companies">
            <Button>Browse All Companies</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/companies" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to companies
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-6">
              <div className="grid h-20 w-20 place-items-center rounded-full border bg-muted">
                <Building className="h-10 w-10" />
              </div>
              <div>
                <CardTitle className="text-2xl">{company.name}</CardTitle>
                <CardDescription className="flex items-center mt-2">{company.industry}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {company.location}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  {company.size}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Globe className="mr-1 h-3 w-3" />
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Website
                  </a>
                </Badge>
              </div>

              <p className="text-muted-foreground">{company.description}</p>

              <Separator className="my-4" />

              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="jobs">Open Positions</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-4">
                  <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: company.about }} />
                </TabsContent>
                <TabsContent value="benefits" className="mt-4">
                  <h3 className="text-lg font-medium mb-4">Employee Benefits</h3>
                  <ul className="grid gap-2">
                    {company.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="jobs" className="mt-4">
                  <h3 className="text-lg font-medium mb-4">Open Positions ({company.openPositions.length})</h3>
                  <div className="space-y-4">
                    {company.openPositions.map((job: any) => (
                      <Card key={job.id}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{job.title}</h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="mr-1 h-3 w-3" />
                                {job.type}
                              </div>
                            </div>
                          </div>
                          <Link href={`/jobs/${job.id}`}>
                            <Button variant="outline" size="sm">
                              View Job
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Industry</p>
                  <p className="font-medium">{company.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company Size</p>
                  <p className="font-medium">{company.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{company.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Open Positions</p>
                  <p className="font-medium">{company.openPositions.length}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Companies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {companiesData
                .filter((c) => c.id !== company.id)
                .slice(0, 3)
                .map((similarCompany) => (
                  <div key={similarCompany.id} className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Building className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <Link href={`/companies/${similarCompany.id}`} className="font-medium hover:underline">
                        {similarCompany.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">{similarCompany.industry}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <MapPin className="mr-1 h-3 w-3" />
                        {similarCompany.location}
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
