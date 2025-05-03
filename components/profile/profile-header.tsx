import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  image?: string
  title?: string
  location?: string
  bio?: string
}

interface ProfileHeaderProps {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                <Pencil className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            {user.title && <p className="text-gray-600 mb-2">{user.title}</p>}
            {user.location && <p className="text-gray-500 text-sm mb-4">{user.location}</p>}
            {user.bio && <p className="text-gray-700">{user.bio}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
