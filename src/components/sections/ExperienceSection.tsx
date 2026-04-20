import { Experience } from "@/types"
import { SectionWrapper } from "@/components/shared/SectionWrapper"

const experiences: Experience[] = [
  {
    company: "Greenfield Sports Lab",
    role: "Frontend Developer",
    dateRange: "2024 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Vestibulum luctus augue quis neque volutpat, et porta massa maximus.",
      "Aliquam erat volutpat. Duis id dolor in lorem hendrerit tincidunt.",
    ],
  },
  {
    company: "Northline Performance",
    role: "Product Engineer",
    dateRange: "2022 - 2024",
    responsibilities: [
      "Praesent pulvinar magna nec dui tincidunt, at faucibus sem fermentum.",
      "Nunc tristique velit non justo bibendum, at tempor nisi commodo.",
      "Ut suscipit odio sed arcu volutpat varius at vel mauris.",
    ],
  },
  {
    company: "Playmaker Studio",
    role: "UI Developer",
    dateRange: "2020 - 2022",
    responsibilities: [
      "Morbi sodales est non odio suscipit, in pretium massa lacinia.",
      "Integer malesuada risus sed mi bibendum, et porta orci finibus.",
      "Phasellus sed nisl vel massa vulputate faucibus sit amet non massa.",
    ],
  },
]

interface ExperienceSectionProps {
  className?: string
}

export function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="A timeline of roles and responsibilities across product and engineering teams."
      className={className}
    >
      <div className="relative space-y-10 before:absolute before:top-2 before:left-3 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.role}`} className="relative pl-10">
            <span className="absolute top-1.5 left-0 size-6 rounded-full border border-border bg-card" />
            <header className="mb-3">
              <h3 className="font-heading text-xl font-semibold tracking-tight">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.company} • {item.dateRange}
              </p>
            </header>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}