import { type NextRequest, NextResponse } from "next/server"
import { getJobs } from "@/lib/jobs"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query") || ""
  const location = searchParams.get("location") || ""
  const category = searchParams.get("category") || ""
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  const jobs = await getJobs({ query, location, category, page, limit })

  return NextResponse.json(jobs)
}
