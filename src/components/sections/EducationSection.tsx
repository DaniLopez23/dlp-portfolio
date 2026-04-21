"use client"

import { useLanguage } from "@/i18n/LanguageContext"
import { Education } from "@/types"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const educationList: Education[] = [
  {
    institution: "Universidad de Innovacion Digital",
    degree: "B.Sc. in Software Engineering",
    year: "2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus neque nec est sagittis, vel tempus velit iaculis.",
  },
  {
    institution: "Instituto Superior de Tecnologia Aplicada",
    degree: "Diploma in UX & Product Design",
    year: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies nisi in turpis lacinia, vel tristique est bibendum.",
  },
]

interface EducationSectionProps {
  className?: string
}

export function EducationSection({ className }: EducationSectionProps) {
  const { t } = useLanguage()

  return (
    <SectionWrapper
      id="education"
      title={t.education.title}
      subtitle={t.education.subtitle}
      className={className}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {educationList.map((item) => (
          <Card key={`${item.institution}-${item.degree}`} className="border border-border/80">
            <CardHeader>
              <CardTitle>{item.degree}</CardTitle>
              <CardDescription>{item.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
                {item.year}
              </p>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}