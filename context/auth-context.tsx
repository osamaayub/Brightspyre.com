"use client"


import { AuthContextType } from "@/types/auth"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"



const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  const login = () => {
    localStorage.setItem("isLoggedIn", "true")
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
