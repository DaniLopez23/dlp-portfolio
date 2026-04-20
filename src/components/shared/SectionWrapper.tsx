import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  className?: string
  contentClassName?: string
  fullHeight?: boolean
  children: ReactNode
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  className,
  contentClassName,
  fullHeight = true,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-4 py-20 sm:px-6 lg:px-8",
        fullHeight && "min-h-screen scroll-mt-24",
        className
      )}
    >
      <div className={cn("mx-auto flex w-full max-w-6xl flex-col", contentClassName)}>
        {(title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {title ? (
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}