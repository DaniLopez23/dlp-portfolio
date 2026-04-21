"use client"

import Link from "next/link"

import { useLanguage } from "@/i18n/LanguageContext"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className={className}>
      <div className="mx-auto w-full max-w-6xl border-t border-border/80 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © 2026 DLP Portfolio. {t.footer.rights}. {t.footer.built_with}
        </p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          <Link href="/#hero" className="hover:text-foreground">
            {t.footer.back_to_top}
          </Link>
        </p>
      </div>
    </footer>
  )
}