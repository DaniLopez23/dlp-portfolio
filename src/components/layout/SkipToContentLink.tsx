"use client"

import { useLanguage } from "@/i18n/LanguageContext"

export function SkipToContentLink() {
  const { t } = useLanguage()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:ring-2 focus:ring-ring"
    >
      {t.app.skip_content}
    </a>
  )
}
