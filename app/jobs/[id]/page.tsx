import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ApplyButton } from "@/components/apply-button"
import { SaveJobButton } from "@/components/save-job-button"

export default function JobPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job data based on the ID
  const jobId = params.id

  // Mock job data
  const job = {
    id: jobId,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyId: "techcorp",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We are looking for an experienced Frontend Developer to join our team...",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with Next.js",
      "Understanding of UI/UX principles",
    ],
    benefits: ["Competitive salary", "Remote work", "Health insurance", "401(k) matching", "Unlimited PTO"],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/jobs">
          <Button variant="ghost" size="sm">
            ← Back to Jobs
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{job.title}</CardTitle>
                  <CardDescription className="text-lg mt-1">
                    <Link href={`/companies/${job.companyId}`} className="hover:underline">
                      {job.company}
                    </Link>{" "}
                    • {job.location}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge>{job.type}</Badge>
                  <Badge variant="outline">{job.posted}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Salary</h3>
                <p>{job.salary}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                <p className="text-muted-foreground">{job.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <ApplyButton jobId={job.id} jobTitle={job.title} company={job.company} />
              <SaveJobButton jobId={job.id} jobTitle={job.title} />
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold">
                  {job.company.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                TechCorp is a leading technology company specializing in innovative solutions...
              </p>
              <Link href={`/companies/${job.companyId}`}>
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link href="/jobs/2" className="text-sm font-medium hover:underline">
                    Frontend Developer at DevInc
                  </Link>
                </li>
                <li>
                  <Link href="/jobs/3" className="text-sm font-medium hover:underline">
                    React Developer at WebSolutions
                  </Link>
                </li>
                <li>
                  <Link href="/jobs/4" className="text-sm font-medium hover:underline">
                    UI Engineer at DesignCo
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
