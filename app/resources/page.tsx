import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, BookOpen, Video, Download, ArrowRight } from "lucide-react"

// Mock data for resources
const resources = {
  guides: [
    {
      id: "guide1",
      title: "How to Write a Winning Resume",
      description: "Learn how to create a resume that stands out to recruiters and hiring managers.",
      category: "Resume",
      readTime: "10 min read",
      date: "May 15, 2023",
    },
    {
      id: "guide2",
      title: "Mastering the Job Interview",
      description: "Tips and strategies to help you ace your next job interview.",
      category: "Interview",
      readTime: "15 min read",
      date: "June 2, 2023",
    },
    {
      id: "guide3",
      title: "Negotiating Your Salary",
      description: "How to negotiate the best possible compensation package.",
      category: "Career",
      readTime: "12 min read",
      date: "July 10, 2023",
    },
    {
      id: "guide4",
      title: "Building Your Professional Network",
      description: "Strategies for expanding your professional connections.",
      category: "Networking",
      readTime: "8 min read",
      date: "August 5, 2023",
    },
  ],
  templates: [
    {
      id: "template1",
      title: "Professional Resume Template",
      description: "A clean, modern resume template suitable for most industries.",
      category: "Resume",
      format: "DOCX, PDF",
    },
    {
      id: "template2",
      title: "Cover Letter Template",
      description: "A matching cover letter template to accompany your resume.",
      category: "Cover Letter",
      format: "DOCX, PDF",
    },
    {
      id: "template3",
      title: "Thank You Email Template",
      description: "A template for sending a post-interview thank you email.",
      category: "Email",
      format: "TXT, HTML",
    },
    {
      id: "template4",
      title: "Resignation Letter Template",
      description: "A professional template for submitting your resignation.",
      category: "Letter",
      format: "DOCX, PDF",
    },
  ],
  videos: [
    {
      id: "video1",
      title: "Resume Writing Workshop",
      description: "A comprehensive workshop on creating an effective resume.",
      category: "Resume",
      duration: "45 min",
      date: "April 20, 2023",
    },
    {
      id: "video2",
      title: "Mock Interview Session",
      description: "Watch a mock interview with feedback from recruiters.",
      category: "Interview",
      duration: "30 min",
      date: "May 12, 2023",
    },
    {
      id: "video3",
      title: "LinkedIn Profile Optimization",
      description: "Learn how to optimize your LinkedIn profile for job searching.",
      category: "Social Media",
      duration: "25 min",
      date: "June 8, 2023",
    },
    {
      id: "video4",
      title: "Career Change Strategies",
      description: "Tips for successfully transitioning to a new career path.",
      category: "Career",
      duration: "35 min",
      date: "July 15, 2023",
    },
  ],
}

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Career Resources</h1>
          <p className="text-muted-foreground">Tools, templates, and guides to help you succeed in your job search</p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="guides">Guides & Articles</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="videos">Video Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {resources.guides.map((guide) => (
                <Card key={guide.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{guide.category}</Badge>
                      <span className="text-sm text-muted-foreground">{guide.date}</span>
                    </div>
                    <CardTitle className="mt-2">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="mr-2 h-4 w-4" />
                      {guide.readTime}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/resources/guides/${guide.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/resources/guides">
                <Button variant="outline">
                  View All Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {resources.templates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{template.category}</Badge>
                      <span className="text-sm text-muted-foreground">{template.format}</span>
                    </div>
                    <CardTitle className="mt-2">{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={`/resources/templates/${template.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/resources/templates">
                <Button variant="outline">
                  View All Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {resources.videos.map((video) => (
                <Card key={video.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{video.category}</Badge>
                      <span className="text-sm text-muted-foreground">{video.date}</span>
                    </div>
                    <CardTitle className="mt-2">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Video className="mr-2 h-4 w-4" />
                      {video.duration}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/resources/videos/${video.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Watch Video
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/resources/videos">
                <Button variant="outline">
                  View All Videos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Resource */}
        <div className="mt-12">
          <Card className="bg-muted">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <Badge className="mb-2">Featured Resource</Badge>
                  <h2 className="text-2xl font-bold mb-2">Ultimate Job Search Guide</h2>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive guide to finding and landing your dream job. From resume writing to salary
                    negotiation, we cover everything you need to know.
                  </p>
                  <Button>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Get the Guide
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[3/4] bg-background rounded-lg shadow-lg flex items-center justify-center">
                    <FileText className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
