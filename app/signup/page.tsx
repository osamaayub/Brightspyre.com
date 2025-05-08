"use client"

import type React from "react"
import {useForm} from "react-hook-form";
import { useState } from "react"
import { SignUpFormSchema } from "@/schemas/page";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { SignUpForm } from "@/types/type";

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
     resolver: zodResolver(SignUpFormSchema),
   });
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
 

  const onSubmit = async (data:SignUpForm) => {
    setIsLoading(true)

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)

    // Show success message
    toast({
      title: "Account created",
      description: "Your account has been created successfully.",
    })

    // Redirect to home page
    router.push("/login");
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="firstname" required 
                {...register("firstName")}
                 />
                 {errors.firstName && (
                <p className="text-sm text-red-600">{errors.firstName.message}</p>
              )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="last name" required 
                {...register("lastName")}
                />
                {errors.lastName && (
                <p className="text-sm text-red-600">{errors.lastName.message}</p>
              )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter the Email" 
              required
              {...register("email")}
               />
               {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required 
              {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" 
              {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="relative w-full mb-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="outline" type="button">
              Google
            </Button>
            <Button variant="outline" type="button">
              GitHub
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
