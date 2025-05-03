export interface Company {
  id: string
  name: string
  logo: string
  description?: string
}

export interface Job {
  id: string
  title: string
  company: Company
  location: string
  remote: boolean
  type: string
  salary: string
  summary: string
  description?: string
  postedAt: string
  skills?: string[]
}
