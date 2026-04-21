"use client"

import Link from "next/link"
import { ArrowLeftIcon, ExternalLinkIcon, GitBranchIcon } from "lucide-react"

import { useLanguage } from "@/i18n/LanguageContext"
import { type Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { t } = useLanguage()

  const projectCategoryLabel =
    project.category === "sports-analytics" ? t.projects.sports_title : t.projects.other_title

  return (
    <article className="mx-auto w-full max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/#projects">
          <ArrowLeftIcon />
          {t.projects.back}
        </Link>
      </Button>

      <div className="mb-8 flex h-64 items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 sm:h-80">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          {t.app.project_preview}
        </p>
      </div>

      <header className="mb-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>{projectCategoryLabel}</Badge>
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
          {t.projects.tech_stack}
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
            {t.projects.view_code}
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
            {t.projects.live_demo}
          </Link>
        </Button>
      </section>
    </article>
  )
}
