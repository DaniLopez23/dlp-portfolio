import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ExternalLinkIcon, GitBranchIcon } from "lucide-react"

import { getProjectBySlug, projectSlugs } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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

  return (
    <article className="mx-auto w-full max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/#projects">
          <ArrowLeftIcon />
          Back to projects
        </Link>
      </Button>

      <div className="mb-8 flex h-64 items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 sm:h-80">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Project Preview
        </p>
      </div>

      <header className="mb-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>{project.category}</Badge>
          <Badge variant="secondary">{project.year}</Badge>
        </div>
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
      </header>

      <p className="mb-8 max-w-4xl text-base leading-8 text-muted-foreground">
        {project.description}
      </p>

      <Separator className="my-8" />

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href={project.githubUrl} target="_blank" rel="noreferrer">
            <GitBranchIcon />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
            Live Demo
          </Link>
        </Button>
      </section>
    </article>
  )
}