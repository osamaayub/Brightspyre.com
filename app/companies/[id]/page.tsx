import { CompanyHeader } from "@/components/company/company-header"
import { CompanyAbout } from "@/components/company/company-about"
import { CompanyJobs } from "@/components/company/company-jobs"
import { CompanyDetails } from "@/components/company/company-details"
import { getCompanyById } from "@/lib/companies"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const company = await getCompanyById(params.id)

  if (!company) {
    return {
      title: "Company Not Found | Brightspyre",
    }
  }

  return {
    title: `${company.name} | Brightspyre`,
    description: company.description,
  }
}

export default async function CompanyPage({ params }: { params: { id: string } }) {
  const company = await getCompanyById(params.id)

  if (!company) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CompanyHeader company={company} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <CompanyAbout company={company} />
          <CompanyJobs companyId={company.id} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CompanyDetails company={company} />
          </div>
        </div>
      </div>
    </div>
  )
}
