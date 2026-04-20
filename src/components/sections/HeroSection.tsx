import Link from "next/link"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={[
        "relative flex min-h-screen w-full scroll-mt-24 items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-[-10%] h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] bottom-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 animate-rise-up">
        <p className="inline-flex w-fit rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur-sm">
          Personal Portfolio
        </p>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Daniel Lopez Perez
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Frontend-focused developer building data-rich, accessible and polished
          digital experiences for sports and performance products.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Download CV</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}