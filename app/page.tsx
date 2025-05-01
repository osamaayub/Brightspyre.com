import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search, MapPin, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job with Brightspyre</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with top employers across Pakistan and discover opportunities that match your skills and aspirations.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Job title, keywords, or company" className="pl-10 h-12" />
          </div>
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="City or location" className="pl-10 h-12" />
          </div>
          <Button size="lg" className="h-12 px-8">
            Search Jobs
          </Button>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Link href="/jobs" className="text-primary hover:underline">
            View all jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                <p className="mb-4 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="bg-muted px-2 py-1 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/jobs?category=${category.slug}`} key={category.name}>
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{category.count} jobs available</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 rounded-xl my-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Are you an employer?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Post your job openings and find the perfect candidates for your company.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default">
            Post a Job
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredJobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Example Company",
    location: "Islamabad",
    description:
      "We are looking for a skilled Software Engineer to join our team and help us build innovative solutions.",
    tags: ["Full-time", "React", "Node.js"],
  },
  {
    id: "2",
    title: "Project Manager",
    company: "Tech Solutions",
    location: "Lahore",
    description:
      "Experienced Project Manager needed to lead our development teams and ensure successful project delivery.",
    tags: ["Full-time", "Agile", "Scrum"],
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "Data Insights",
    location: "Islamabad",
    description: "Join our analytics team to help extract valuable insights from complex datasets.",
    tags: ["Full-time", "SQL", "Python"],
  },
]

const categories = [
  { name: "Software Development", count: 120, slug: "software-development", icon: Briefcase },
  { name: "Data Science", count: 85, slug: "data-science", icon: Briefcase },
  { name: "Design", count: 64, slug: "design", icon: Briefcase },
  { name: "Marketing", count: 53, slug: "marketing", icon: Briefcase },
  { name: "Finance", count: 42, slug: "finance", icon: Briefcase },
  { name: "Customer Service", count: 38, slug: "customer-service", icon: Briefcase },
  { name: "Human Resources", count: 31, slug: "human-resources", icon: Briefcase },
  { name: "Sales", count: 29, slug: "sales", icon: Briefcase },
]
