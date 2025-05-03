import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="py-12 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Job</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover thousands of job opportunities with top employers to find your perfect match.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/jobs">Browse Jobs</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/companies">Explore Companies</Link>
        </Button>
      </div>
    </div>
  )
}
