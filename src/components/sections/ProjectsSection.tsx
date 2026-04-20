import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { SectionWrapper } from "@/components/shared/SectionWrapper"

interface ProjectsSectionProps {
  className?: string
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A curated set of work focused on product quality, data visibility and user-centered interfaces."
      fullHeight={false}
      className={className}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}