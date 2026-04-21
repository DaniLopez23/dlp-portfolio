"use client"

import { useLanguage } from "@/i18n/LanguageContext"
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
  const { t } = useLanguage()

  return (
    <SectionWrapper
      id="about"
      title={t.about.title}
      subtitle={t.about.subtitle}
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
            {t.about.bio}
          </p>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {t.about.bio_secondary}
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