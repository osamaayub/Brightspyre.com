import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, Briefcase, Building, Users } from "lucide-react"
import FeaturedJobs from "@/components/featured-jobs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Dream Job Today
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Brightspyre connects talented professionals with top companies. Browse thousands of job listings and
                  take the next step in your career.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/jobs">
                  <Button size="lg" className="gap-1">
                    Browse Jobs
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" variant="outline">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Job search illustration"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                src="/placeholder.svg?height=550&width=750"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            <Card className="text-center">
              <CardHeader>
                <Briefcase className="w-12 h-12 mx-auto text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-muted-foreground">Active Job Listings</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Building className="w-12 h-12 mx-auto text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">1,200+</h3>
                <p className="text-muted-foreground">Partner Companies</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">250,000+</h3>
                <p className="text-muted-foreground">Registered Job Seekers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Jobs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our handpicked selection of top job opportunities from leading companies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <FeaturedJobs />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/jobs">
              <Button size="lg">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Companies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover top employers who are actively hiring on our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                  <Building className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/companies">
              <Button size="lg" variant="outline">
                View All Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Next Opportunity?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create an account today and start applying to thousands of jobs from top companies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="gap-1">
                  Sign Up Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
