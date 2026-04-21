"use client"

import { AwardIcon, FileBadge2Icon, ShieldCheckIcon, TrophyIcon } from "lucide-react"

import { useLanguage } from "@/i18n/LanguageContext"
import { Certification } from "@/types"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CertificationItem extends Certification {
  icon: typeof AwardIcon
}

const certifications: CertificationItem[] = [
  {
    name: "Advanced Frontend Architecture",
    issuer: "Tech Academy",
    year: "2024",
    verified: true,
    icon: AwardIcon,
  },
  {
    name: "Performance Optimization Specialist",
    issuer: "Web Skills Institute",
    year: "2025",
    verified: true,
    icon: TrophyIcon,
  },
  {
    name: "Product Design Foundations",
    issuer: "Design Guild",
    year: "2023",
    verified: true,
    icon: FileBadge2Icon,
  },
  {
    name: "Cloud Delivery Practitioner",
    issuer: "Open Cloud School",
    year: "2026",
    verified: true,
    icon: ShieldCheckIcon,
  },
]

interface CertificationsSectionProps {
  className?: string
}

export function CertificationsSection({ className }: CertificationsSectionProps) {
  const { t } = useLanguage()

  return (
    <SectionWrapper
      id="certifications"
      title={t.certifications.title}
      subtitle={t.certifications.subtitle}
      className={className}
    >
      <div className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
        {certifications.map((item) => {
          const Icon = item.icon

          return (
            <Card
              key={`${item.name}-${item.year}`}
              className="min-w-[260px] snap-start border border-border/80 md:min-w-0"
            >
              <CardHeader>
                <div className="mb-2 inline-flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base leading-6">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {item.year}
                </p>
                {item.verified ? (
                  <Badge>{t.certifications.verified}</Badge>
                ) : (
                  <Badge variant="outline">{t.certifications.pending}</Badge>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionWrapper>
  )
}