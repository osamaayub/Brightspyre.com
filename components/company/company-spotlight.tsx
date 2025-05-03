"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Company {
  id: string
  name: string
  logo: string
  description: string
  industry: string
  location: string
  size: string
  jobCount: number
}

export function CompanySpotlight() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching featured companies
    const fetchFeaturedCompanies = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 700))

      // Mock data
      const featuredCompanies = Array.from({ length: 3 }, (_, i) => ({
        id: `spotlight-company-${i + 1}`,
        name: `Spotlight Company ${i + 1}`,
        logo: `/placeholder.svg?height=60&width=60&text=SC${i + 1}`,
        description:
          "A leading technology company focused on innovation and creating cutting-edge solutions for businesses worldwide.",
        industry: i % 3 === 0 ? "Technology" : i % 3 === 1 ? "Healthcare" : "Finance",
        location: i % 2 === 0 ? "San Francisco, CA" : "New York, NY",
        size: i % 3 === 0 ? "201-500" : i % 3 === 1 ? "501-1000" : "1000+",
        jobCount: 5 + i * 3,
      }))

      setCompanies(featuredCompanies)
      setIsLoading(false)
    }

    fetchFeaturedCompanies()
  }, [])

  if (isLoading) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-lg bg-gray-100 animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Companies</h2>
        <Link href="/companies">
          <Button variant="ghost">View all companies</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </div>
  )
}
