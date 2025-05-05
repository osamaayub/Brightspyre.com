import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import { HeaderButtons } from "@/components/header-buttons"
import "./globals.css"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Brightspyre - Find Your Dream Job",
  description: "Discover thousands of job opportunities from top companies around the world.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                      Brightspyre
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                      <Link href="/jobs" className="text-sm font-medium hover:underline">
                        Jobs
                      </Link>
                      <Link href="/companies" className="text-sm font-medium hover:underline">
                        Companies
                      </Link>
                      <Link href="/contact" className="text-sm font-medium hover:underline">
                        Contact
                      </Link>
                      <Link href="/faq" className="text-sm font-medium hover:underline">
                        FAQ
                      </Link>
                    </nav>
                    <HeaderButtons />
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
