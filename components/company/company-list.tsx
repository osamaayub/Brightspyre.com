"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/ui/pagination"
import { getCompanies } from "@/lib/companies"
import { useSearchParams } from "next/navigation"

export async function CompanyList() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const industry = searchParams.get("industry") || ""
  const size = searchParams.get("size") || ""
  const page = Number.parseInt(searchParams.get("page") || "1")

  const { companies, totalCompanies, totalPages } = await getCompanies({ query, industry, size, page })

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500">{totalCompanies} companies found</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companies.map((company) => (
          <Card key={company.id}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
                  <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/companies/${company.id}`} className="hover:underline">
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500">{company.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{company.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{company.industry}</Badge>
                <Badge variant="outline">{company.size} employees</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{company.jobCount} open positions</span>
                <Link href={`/companies/${company.id}`}>
                  <Button size="sm">View Company</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} baseUrl="/companies" />}
    </div>
  )
}
