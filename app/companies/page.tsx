import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CompaniesPage() {
  // Mock companies data
  const companies = [
    {
      id: "techcorp",
      name: "TechCorp",
      industry: "Software Development",
      location: "San Francisco, CA",
      size: "500-1000 employees",
      openPositions: 12,
    },
    {
      id: "devinc",
      name: "DevInc",
      industry: "Web Development",
      location: "New York, NY",
      size: "100-500 employees",
      openPositions: 8,
    },
    {
      id: "designco",
      name: "DesignCo",
      industry: "UI/UX Design",
      location: "Austin, TX",
      size: "50-100 employees",
      openPositions: 5,
    },
    {
      id: "websolutions",
      name: "WebSolutions",
      industry: "Web Services",
      location: "Seattle, WA",
      size: "100-500 employees",
      openPositions: 10,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Companies</h1>

      <div className="mb-8">
        <div className="flex gap-4 max-w-xl">
          <Input placeholder="Search companies..." className="flex-1" />
          <Button>Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                  {company.name.charAt(0)}
                </div>
                <div>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>{company.industry}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{company.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company Size:</span>
                  <span>{company.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Open Positions:</span>
                  <Badge>{company.openPositions}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/companies/${company.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
