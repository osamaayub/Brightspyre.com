import { type NextRequest, NextResponse } from "next/server"
import { getJobById } from "@/lib/jobs"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const job = await getJobById(params.id)

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 })
  }

  return NextResponse.json(job)
}
