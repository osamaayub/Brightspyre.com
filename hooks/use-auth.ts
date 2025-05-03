"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  image?: string
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (name: string, email: string, password: string) => Promise<boolean>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // In a real app, this would be an API call
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication
    if (email && password) {
      const user = {
        id: "1",
        name: "John Doe",
        email,
        image: "/placeholder.svg?height=40&width=40&text=JD",
      }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signUp = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock registration
    if (name && email && password) {
      const user = {
        id: "1",
        name,
        email,
        image: `/placeholder.svg?height=40&width=40&text=${name.charAt(0)}${name.split(" ")[1]?.charAt(0) || ""}`,
      }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
