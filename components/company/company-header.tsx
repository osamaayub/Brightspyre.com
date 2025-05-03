import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Globe, Calendar } from "lucide-react"
import Link from "next/link"

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
}

interface CompanyHeaderProps {
  company: Company
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
          <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{company.industry}</Badge>
            <Badge variant="outline">{company.size} employees</Badge>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{company.location}</span>
            </div>
            {company.founded && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Founded {company.founded}</span>
              </div>
            )}
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{company.jobCount} open positions</span>
            </div>
            {company.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Website
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 self-start">
          <Button asChild>
            <Link href={`/companies/${company.id}/jobs`}>View Jobs</Link>
          </Button>
          <Button variant="outline">Follow</Button>
        </div>
      </div>
    </div>
  )
}
