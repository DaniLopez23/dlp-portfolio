import Link from "next/link"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="mx-auto w-full max-w-6xl border-t border-border/80 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © 2026 DLP Portfolio. Built with Next.js and shadcn/ui.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          <Link href="/#hero" className="hover:text-foreground">
            Back to top
          </Link>
        </p>
      </div>
    </footer>
  )
}