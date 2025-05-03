import { CompanyFilters } from "@/components/company/company-filters"
import { CompanyList } from "@/components/company/company-list"
import { CompanySearchBar } from "@/components/company/company-search-bar"
import { Suspense } from "react"
import { CompanyListSkeleton } from "@/components/skeletons/company-list-skeleton"

export const metadata = {
  title: "Browse Companies | Brightspyre",
  description: "Discover top companies hiring on Brightspyre",
}

export default function CompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Companies</h1>
      <CompanySearchBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-1">
          <CompanyFilters />
        </div>
        <div className="lg:col-span-3">
          <Suspense fallback={<CompanyListSkeleton />}>
            <CompanyList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
