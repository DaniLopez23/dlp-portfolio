export type Locale = "es" | "en"

export interface Project {
  slug: string
  title: string
  excerpt: string
  description: string
  stack: string[]
  category: "sports-analytics" | "other"
  year: string
  githubUrl: string
  demoUrl: string
}

export interface Experience {
  company: string
  role: string
  dateRange: string
  responsibilities: string[]
}

export interface Education {
  institution: string
  degree: string
  year: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  verified: boolean
}