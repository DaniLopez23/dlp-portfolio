"use client"

import { GlobeIcon } from "lucide-react"

import { useLanguage } from "@/i18n/LanguageContext"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, toggleLanguage } = useLanguage()

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={className}
      aria-label="Cambiar idioma / Change language"
      onClick={toggleLanguage}
    >
      <GlobeIcon />
      {locale.toUpperCase()}
    </Button>
  )
}
