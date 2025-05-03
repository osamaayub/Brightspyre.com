import type { Job } from "@/types/job"

interface GetJobsParams {
  query?: string
  location?: string
  category?: string
  page?: number
  limit?: number
}

export async function getJobs({ query = "", location = "", category = "", page = 1, limit = 10 }: GetJobsParams) {
  // In a real app, this would be an API call
  // For now, we'll simulate a delay and return mock data
  await new Promise((resolve) => setTimeout(resolve, 500))

  // This would be filtered based on the params
  const jobs = Array.from({ length: 20 }, (_, i) => ({
    id: `job-${i + 1}`,
    title: `Software Engineer ${i % 3 === 0 ? "II" : i % 3 === 1 ? "III" : "Lead"}`,
    company: {
      id: `company-${(i % 5) + 1}`,
      name: `Tech Company ${(i % 5) + 1}`,
      logo: `/placeholder.svg?height=40&width=40&text=TC${(i % 5) + 1}`,
    },
    location: i % 2 === 0 ? "San Francisco, CA" : "Remote",
    remote: i % 2 === 0 ? false : true,
    type: i % 4 === 0 ? "Full-time" : i % 4 === 1 ? "Part-time" : i % 4 === 2 ? "Contract" : "Internship",
    salary: `$${80 + i * 5}k - $${120 + i * 5}k`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedAt: new Date(Date.now() - i * 86400000).toISOString(),
  }))

  const totalJobs = 100
  const totalPages = Math.ceil(totalJobs / limit)

  return {
    jobs: jobs.slice(0, limit),
    totalJobs,
    totalPages,
  }
}

export async function getJobById(id: string): Promise<Job | null> {
  // In a real app, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Handle different job ID formats
  const isRegularJob = id.startsWith("job-")
  const isFeaturedJob = id.startsWith("featured-job-")
  const isCompanyJob = id.startsWith("company-job-")
  const isSimilarJob = id.startsWith("similar-job-")

  if (!isRegularJob && !isFeaturedJob && !isCompanyJob && !isSimilarJob) {
    return null
  }

  // Extract the job number from the ID
  let jobNumber: number

  if (isRegularJob) {
    jobNumber = Number.parseInt(id.replace("job-", ""))
  } else if (isFeaturedJob) {
    jobNumber = Number.parseInt(id.replace("featured-job-", ""))
  } else if (isCompanyJob) {
    jobNumber = Number.parseInt(id.replace("company-job-", ""))
  } else {
    jobNumber = Number.parseInt(id.replace("similar-job-", ""))
  }

  // Create a company ID based on the job number
  const companyId = `company-${(jobNumber % 5) + 1}`

  return {
    id,
    title: `${jobNumber % 2 === 0 ? "Senior" : ""} ${
      jobNumber % 3 === 0 ? "Frontend" : jobNumber % 3 === 1 ? "Backend" : "Full Stack"
    } Developer`,
    company: {
      id: companyId,
      name: `Tech Company ${companyId.replace("company-", "")}`,
      logo: `/placeholder.svg?height=80&width=80&text=TC${companyId.replace("company-", "")}`,
      description: "A leading technology company focused on innovation.",
    },
    location: jobNumber % 2 === 0 ? "San Francisco, CA" : "Remote",
    remote: jobNumber % 2 === 0 ? false : true,
    type:
      jobNumber % 4 === 0
        ? "Full-time"
        : jobNumber % 4 === 1
          ? "Part-time"
          : jobNumber % 4 === 2
            ? "Contract"
            : "Internship",
    salary: `$${100 + jobNumber * 5}k - $${150 + jobNumber * 5}k`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: `
      <h3>About the Role</h3>
      <p>We are looking for a talented Software Engineer to join our team. You will be responsible for developing and maintaining high-quality software solutions.</p>
      
      <h3>Responsibilities</h3>
      <ul>
        <li>Design, develop, and maintain software applications</li>
        <li>Collaborate with cross-functional teams to define and implement new features</li>
        <li>Write clean, maintainable, and efficient code</li>
        <li>Perform code reviews and provide constructive feedback</li>
        <li>Troubleshoot and debug applications</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Bachelor's degree in Computer Science or related field</li>
        <li>3+ years of experience in software development</li>
        <li>Proficiency in one or more programming languages</li>
        <li>Experience with web technologies and frameworks</li>
        <li>Strong problem-solving skills</li>
      </ul>
    `,
    postedAt: new Date(Date.now() - jobNumber * 86400000).toISOString(),
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "SQL"],
  }
}
