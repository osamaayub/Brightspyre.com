export async function getCurrentUser() {
  // In a real app, this would be an API call or server-side auth check
  // For now, we'll simulate a delay and return mock data
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Check if user is logged in (would use cookies/session in a real app)
  const isLoggedIn = Math.random() > 0.5 // Randomly return logged in or not for demo

  if (!isLoggedIn) {
    return null
  }

  return {
    id: "user-1",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/placeholder.svg?height=40&width=40&text=JD",
  }
}
