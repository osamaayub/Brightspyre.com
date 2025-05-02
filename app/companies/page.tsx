import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Companies | Brightspyre",
  description: "Learn about the companies using Brightspyre",
}

export default function CompaniesPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Companies</h1>
          <p className="text-xl text-muted-foreground">
            Discover the innovative companies that trust Brightspyre for their projects.
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Featured Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 border rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=80&width=120`}
                    alt={`Company ${i}`}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=600`}
                      alt={`Case study ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Company {i} Case Study</h3>
                    <p className="text-muted-foreground mb-4">
                      How Company {i} achieved remarkable results with Brightspyre's platform.
                    </p>
                    <a href="#" className="text-primary hover:underline">
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Industry Solutions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {["Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing"].map((industry) => (
                <div key={industry} className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">{industry}</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized solutions for the {industry.toLowerCase()} industry.
                  </p>
                  <a href="#" className="text-primary hover:underline">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Join our growing network</h2>
          <p className="mb-6">Become a Brightspyre partner and unlock new opportunities for your business.</p>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Partner with us
          </a>
        </div>
      </div>
    </div>
  )
}
