import { SignupForm } from "@/components/auth/signup-form"
import { SocialLogin } from "@/components/auth/social-login"
import Link from "next/link"

export const metadata = {
  title: "Sign Up | Brightspyre",
  description: "Create your Brightspyre account",
}

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
        <SignupForm />
        <div className="mt-6">
          <SocialLogin />
        </div>
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
