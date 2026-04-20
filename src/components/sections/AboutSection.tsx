import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/shared/SectionWrapper"

const skills = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "UI Systems",
  "Performance",
  "Accessibility",
]

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Profile overview with a strong focus on product thinking and clean UI engineering."
      className={className}
    >
      <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
        <div className="flex justify-center md:justify-start">
          <Avatar className="size-44 border-2 border-border/90 bg-muted">
            <AvatarFallback className="text-4xl">DP</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-6">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            ipsum vel nulla porta sagittis. Donec posuere, nibh in egestas
            vehicula, libero felis facilisis augue, non faucibus libero magna
            ut est.
          </p>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Curabitur gravida nibh in dolor rhoncus, vel vestibulum turpis
            iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec congue lorem et lacus tempus,
            et egestas nibh bibendum.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}