import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { MapPin, Users, Globe } from "lucide-react"
import type { Company } from "@/types/job"

interface JobCompanyInfoProps {
  company: Company
}

export function JobCompanyInfo({ company }: JobCompanyInfoProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">About the company</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-3">
            <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
            <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <Link href={`/companies/${company.id}`} className="font-medium hover:underline">
              {company.name}
            </Link>
          </div>
        </div>

        {company.description && <p className="text-sm text-gray-600 mb-4">{company.description}</p>}

        <div className="space-y-2 text-sm">
          {company.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
              <span>{company.location}</span>
            </div>
          )}
          {company.size && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-gray-400" />
              <span>{company.size} employees</span>
            </div>
          )}
          {company.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-gray-400" />
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Company website
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
