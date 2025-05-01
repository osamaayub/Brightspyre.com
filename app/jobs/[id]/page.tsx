import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Building, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job details based on the ID
  const job = {
    id: params.id,
    title: "Software Engineer",
    company: "Example Company",
    location: "Islamabad",
    postedDate: "2 days ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    responsibilities: [
      "Provide dissemination preferred ressibgs",
      "Provide relevant systeming tasks",
      "Provide feedback, on a titers fesms",
      "Provide other molirtagement ations",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js",
      "Experience with database design and management",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Professional development opportunities",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/jobs" className="flex items-center text-primary mb-6 hover:underline">
        <ArrowLeft size={16} className="mr-2" />
        Back to jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Building size={18} className="mr-1" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin size={18} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar size={18} className="mr-1" />
              <span>Posted {job.postedDate}</span>
            </div>
          </div>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="mb-6">{job.description}</p>

            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-4">Requirements</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-4">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Apply for this job</h2>
            <p className="mb-6">Submit your application now and take the next step in your career journey.</p>
            <Button className="w-full" size="lg">
              Apply Now
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Company Information</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Example Company</h3>
              <p className="text-muted-foreground">Technology</p>
            </div>
            <Separator className="my-4" />
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Company Size</h3>
              <p className="text-muted-foreground">51-200 employees</p>
            </div>
            <Separator className="my-4" />
            <div>
              <h3 className="font-semibold mb-1">Founded</h3>
              <p className="text-muted-foreground">2015</p>
            </div>
            <Separator className="my-4" />
            <Link href="#" className="text-primary hover:underline">
              View company profile
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
