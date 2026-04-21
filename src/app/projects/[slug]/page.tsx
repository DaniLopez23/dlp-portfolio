import { notFound } from "next/navigation"

import { getProjectBySlug, projectSlugs } from "@/data/projects"
import { ProjectDetail } from "@/components/sections/ProjectDetail"

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}