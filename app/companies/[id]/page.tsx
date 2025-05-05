import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CompanyPage({ params }: { params: { id: string } }) {
  const companyId = params.id

  // Mock company data
  const company = {
    id: companyId,
    name: companyId === "techcorp" ? "TechCorp" : "Company Name",
    logo: "/placeholder.svg?height=100&width=100",
    industry: "Software Development",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    founded: "2010",
    website: "https://example.com",
    description:
      "TechCorp is a leading technology company specializing in innovative solutions for businesses of all sizes. We are dedicated to creating cutting-edge software that transforms how companies operate.",
    benefits: [
      "Competitive salary",
      "Remote work options",
      "Health insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Professional development budget",
    ],
    openPositions: [
      { id: "1", title: "Senior Frontend Developer", type: "Full-time", location: "Remote" },
      { id: "2", title: "Backend Engineer", type: "Full-time", location: "San Francisco, CA" },
      { id: "3", title: "UX Designer", type: "Full-time", location: "Remote" },
      { id: "4", title: "DevOps Engineer", type: "Full-time", location: "San Francisco, CA" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/companies">
          <Button variant="ghost" size="sm">
            ← Back to Companies
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                {company.name.charAt(0)}
              </div>
              <div>
                <CardTitle className="text-3xl">{company.name}</CardTitle>
                <CardDescription className="text-lg">
                  {company.industry} • {company.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="jobs">Open Positions</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Company Overview</h3>
                    <p className="text-muted-foreground">{company.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium">Founded</h4>
                      <p className="text-muted-foreground">{company.founded}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Company Size</h4>
                      <p className="text-muted-foreground">{company.size}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <Link
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {company.website.replace("https://", "")}
                      </Link>
                    </div>
                    <div>
                      <h4 className="font-medium">Industry</h4>
                      <p className="text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="jobs" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Open Positions ({company.openPositions.length})</h3>
                  <div className="space-y-4">
                    {company.openPositions.map((job) => (
                      <Card key={job.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <Link href={`/jobs/${job.id}`} className="text-lg font-medium hover:underline">
                                {job.title}
                              </Link>
                              <div className="text-sm text-muted-foreground mt-1">{job.location}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge>{job.type}</Badge>
                              <Link href={`/jobs/${job.id}`}>
                                <Button size="sm">View</Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Employee Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {company.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Headquarters:</span>
                  <span>{company.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded:</span>
                  <span>{company.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company Size:</span>
                  <span>{company.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Open Positions:</span>
                  <Badge>{company.openPositions.length}</Badge>
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full">Follow Company</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Similar Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link href="/companies/devinc" className="text-sm font-medium hover:underline">
                    DevInc
                  </Link>
                </li>
                <li>
                  <Link href="/companies/websolutions" className="text-sm font-medium hover:underline">
                    WebSolutions
                  </Link>
                </li>
                <li>
                  <Link href="/companies/designco" className="text-sm font-medium hover:underline">
                    DesignCo
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
