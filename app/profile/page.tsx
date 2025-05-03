import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import { ProfileApplications } from "@/components/profile/profile-applications"
import { ProfileSavedJobs } from "@/components/profile/profile-saved-jobs"
import { ProfileSettings } from "@/components/profile/profile-settings"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Your Profile | Brightspyre",
  description: "Manage your profile, applications, and saved jobs",
}

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader user={user} />
      <ProfileTabs defaultTab="applications">
        <ProfileApplications />
        <ProfileSavedJobs />
        <ProfileSettings />
      </ProfileTabs>
    </div>
  )
}
