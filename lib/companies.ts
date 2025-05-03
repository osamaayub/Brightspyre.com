interface Company {
  id: string
  name: string
  logo: string
  description: string
  industry: string
  location: string
  size: string
  jobCount: number
  website?: string
  founded?: string
  benefits?: string[]
}

interface GetCompaniesParams {
  query?: string
  industry?: string
  size?: string
  page?: number
  limit?: number
}

export async function getCompanies({ query = "", industry = "", size = "", page = 1, limit = 10 }: GetCompaniesParams) {
  // In a real app, this would be an API call
  // For now, we'll simulate a delay and return mock data
  await new Promise((resolve) => setTimeout(resolve, 500))

  // This would be filtered based on the params
  const companies = Array.from({ length: 20 }, (_, i) => ({
    id: `company-${i + 1}`,
    name: `Company ${i + 1}`,
    logo: `/placeholder.svg?height=60&width=60&text=C${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    industry: i % 3 === 0 ? "Technology" : i % 3 === 1 ? "Healthcare" : "Finance",
    location: i % 2 === 0 ? "San Francisco, CA" : "New York, NY",
    size: i % 3 === 0 ? "201-500" : i % 3 === 1 ? "501-1000" : "1000+",
    jobCount: 5 + i * 2,
  }))

  const totalCompanies = 100
  const totalPages = Math.ceil(totalCompanies / limit)

  return {
    companies: companies.slice(0, limit),
    totalCompanies,
    totalPages,
  }
}

export async function getCompanyById(id: string): Promise<Company | null> {
  // In a real app, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Return null if company not found
  if (!id.startsWith("company-")) {
    return null
  }

  const companyNumber = Number.parseInt(id.replace("company-", ""))

  return {
    id,
    name: `Company ${companyNumber}`,
    logo: `/placeholder.svg?height=80&width=80&text=C${companyNumber}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    industry: companyNumber % 3 === 0 ? "Technology" : companyNumber % 3 === 1 ? "Healthcare" : "Finance",
    location: companyNumber % 2 === 0 ? "San Francisco, CA" : "New York, NY",
    size: companyNumber % 3 === 0 ? "201-500" : companyNumber % 3 === 1 ? "501-1000" : "1000+",
    jobCount: 5 + companyNumber * 2,
    website: "https://example.com",
    founded: `${2000 + companyNumber}`,
    benefits: [
      "Health Insurance",
      "401(k) Plan",
      "Flexible Work Hours",
      "Remote Work Options",
      "Professional Development",
    ],
  }
}
