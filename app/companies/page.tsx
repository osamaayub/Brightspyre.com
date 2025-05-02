"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Search, Users } from "lucide-react"

// Mock data for companies
const companiesData = [
  {
    id: "techcorp",
    name: "TechCorp",
    industry: "Software Development",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    description: "Leading technology company specializing in web and mobile applications.",
    openPositions: 12,
  },
  {
    id: "innovatetech",
    name: "InnovateTech",
    industry: "SaaS",
    location: "New York, NY",
    size: "100-500 employees",
    description: "Fast-growing SaaS company providing innovative solutions to businesses.",
    openPositions: 8,
  },
  {
    id: "cloudsystems",
    name: "CloudSystems",
    industry: "Cloud Computing",
    location: "Seattle, WA",
    size: "1000+ employees",
    description: "Cloud infrastructure and services provider for enterprises.",
    openPositions: 15,
  },
  {
    id: "designhub",
    name: "DesignHub",
    industry: "Design & Creative",
    location: "Austin, TX",
    size: "50-100 employees",
    description: "Creative agency focused on UX/UI design and branding.",
    openPositions: 5,
  },
  {
    id: "datainsights",
    name: "DataInsights",
    industry: "Data Analytics",
    location: "Boston, MA",
    size: "100-500 employees",
    description: "Data analytics and machine learning solutions for businesses.",
    openPositions: 10,
  },
  {
    id: "serverstack",
    name: "ServerStack",
    industry: "Infrastructure",
    location: "Seattle, WA",
    size: "100-500 employees",
    description: "Backend infrastructure and API development services.",
    openPositions: 7,
  },
  {
    id: "growthboost",
    name: "GrowthBoost",
    industry: "Marketing",
    location: "Chicago, IL",
    size: "50-100 employees",
    description: "Digital marketing agency specializing in growth strategies.",
    openPositions: 4,
  },
  {
    id: "appworks",
    name: "AppWorks",
    industry: "Mobile Development",
    location: "Los Angeles, CA",
    size: "50-100 employees",
    description: "Mobile app development studio for iOS and Android.",
    openPositions: 6,
  },
  {
    id: "docutech",
    name: "DocuTech",
    industry: "Documentation",
    location: "Portland, OR",
    size: "10-50 employees",
    description: "Technical documentation and content creation services.",
    openPositions: 3,
  },
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter companies based on search term
  const filteredCompanies = companiesData.filter((company) => {
    return (
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Companies</h1>
          <p className="text-muted-foreground">Discover top employers who are actively hiring</p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search companies, industries, or locations..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Company Listings */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <Card key={company.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="grid h-12 w-12 place-items-center rounded-full border bg-muted">
                    <Building className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.industry}</p>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-2 pb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{company.size}</span>
                  </div>
                  <p className="text-sm mt-2">{company.description}</p>
                  <Badge className="w-fit mt-2">{company.openPositions} open positions</Badge>
                </CardContent>
                <CardFooter className="mt-auto pt-2">
                  <Link href={`/companies/${company.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Company
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <h3 className="text-lg font-medium">No companies found</h3>
              <p className="text-muted-foreground">Try adjusting your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
