import Link from "next/link"
import { ArrowRight, FileText, Video, BookOpen, Users, Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployerResourcesPage() {
  const guides = [
    {
      title: "Writing Effective Job Descriptions",
      description: "Learn how to craft compelling job descriptions that attract top talent.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Optimizing Your Hiring Process",
      description: "Streamline your recruitment workflow to hire faster and more efficiently.",
      icon: Users,
      link: "#",
    },
    {
      title: "Remote Hiring Best Practices",
      description: "Tips and strategies for finding and onboarding remote employees.",
      icon: Video,
      link: "#",
    },
    {
      title: "Diversity and Inclusion in Hiring",
      description: "Build a more diverse and inclusive workplace through better hiring practices.",
      icon: BookOpen,
      link: "#",
    },
  ]

  const templates = [
    {
      title: "Job Description Templates",
      description: "Ready-to-use templates for common job positions across various industries.",
      icon: Download,
      link: "#",
    },
    {
      title: "Interview Question Bank",
      description: "Curated questions to help you assess candidates effectively.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Candidate Evaluation Forms",
      description: "Standardized forms to compare candidates objectively.",
      icon: FileText,
      link: "#",
    },
    {
      title: "Offer Letter Templates",
      description: "Professional templates to formalize your job offers.",
      icon: Download,
      link: "#",
    },
  ]

  const events = [
    {
      title: "Recruiting in a Competitive Market",
      date: "June 15, 2023",
      type: "Webinar",
      description: "Strategies for attracting top talent in today's competitive job market.",
      link: "#",
    },
    {
      title: "AI in Recruitment: Opportunities and Challenges",
      date: "July 8, 2023",
      type: "Virtual Conference",
      description: "Explore how AI is transforming the recruitment landscape.",
      link: "#",
    },
    {
      title: "Building an Employer Brand That Attracts Talent",
      date: "July 22, 2023",
      type: "Workshop",
      description: "Practical steps to strengthen your employer brand and attract better candidates.",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Employer Resources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Access guides, templates, and tools to optimize your hiring process and find the best talent for your team.
        </p>
      </div>

      <Tabs defaultValue="guides" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="guides">Hiring Guides</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <guide.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={guide.link} className="text-primary font-medium text-sm flex items-center">
                    Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <template.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{template.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={template.link} className="text-primary font-medium text-sm flex items-center">
                    Download <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">{event.type}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <Link href={event.link}>
                      <Button>Register</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need personalized recruiting advice?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our team of recruiting experts is available to help you optimize your hiring strategy and find the best talent
          for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg">Contact Our Team</Button>
          </Link>
          <Link href="/employers/pricing">
            <Button variant="outline" size="lg">
              View Pricing Plans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
