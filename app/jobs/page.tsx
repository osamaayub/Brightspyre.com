import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import JobCard from "@/components/job-card"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Current Jobs</h1>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search jobs" className="pl-10" />
          </div>
          <Button className="md:w-auto">Search</Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Location
          </Button>
          <Button variant="outline" size="sm">
            Job Type
          </Button>
          <Button variant="outline" size="sm">
            Experience
          </Button>
          <Button variant="outline" size="sm">
            Salary
          </Button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

// Sample data
const jobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Example Company",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Full-time", "React", "Node.js"],
    postedDate: "2 days ago",
  },
  {
    id: "2",
    title: "Project Manager",
    company: "Tech Solutions",
    location: "Lahore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Full-time", "Agile", "Scrum"],
    postedDate: "3 days ago",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "Data Insights",
    location: "Islamabad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Full-time", "SQL", "Python"],
    postedDate: "1 week ago",
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Lahore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Full-time", "SQL", "Tableau"],
    postedDate: "1 week ago",
  },
]
