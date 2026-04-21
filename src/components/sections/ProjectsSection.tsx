"use client"

import dynamic from "next/dynamic"

import { useLanguage } from "@/i18n/LanguageContext"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { SectionWrapper } from "@/components/shared/SectionWrapper"

const FootballBall3D = dynamic(() => import("@/components/shared/FootballBall3D"), {
  ssr: false,
})

interface ProjectsSectionProps {
  className?: string
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  const { t } = useLanguage()
  const sportsProjects = projects.filter((project) => project.category === "sports-analytics")
  const otherProjects = projects.filter((project) => project.category === "other")

  return (
    <SectionWrapper
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      fullHeight={false}
      className={className}
    >
      <div className="space-y-14">
        <section>
          <header className="mb-6">
            <div className="flex items-center gap-4">
              <FootballBall3D />
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.projects.sports_title}
              </h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              {t.projects.sports_subtitle}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sportsProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} seeMoreLabel={t.projects.see_more} />
            ))}
          </div>
        </section>

        <section>
          <header className="mb-6 max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.projects.other_title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              {t.projects.other_subtitle}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} seeMoreLabel={t.projects.see_more} />
            ))}
          </div>
        </section>
      </div>
    </SectionWrapper>
  )
}