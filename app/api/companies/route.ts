import { type NextRequest, NextResponse } from "next/server"
import { getCompanies } from "@/lib/companies"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query") || ""
  const industry = searchParams.get("industry") || ""
  const size = searchParams.get("size") || ""
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  const companies = await getCompanies({ query, industry, size, page, limit })

  return NextResponse.json(companies)
}
