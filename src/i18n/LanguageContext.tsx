"use client"

import { createContext, useContext, useMemo, useState } from "react"

import { Locale, translations, type TranslationKeys } from "@/i18n/translations"

interface LanguageContextValue {
  locale: Locale
  toggleLanguage: () => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "es"
    }

    const savedLocale = localStorage.getItem("portfolio-locale")
    return savedLocale === "es" || savedLocale === "en" ? savedLocale : "es"
  })

  const toggleLanguage = () => {
    setLocale((prev) => {
      const nextLocale: Locale = prev === "es" ? "en" : "es"
      localStorage.setItem("portfolio-locale", nextLocale)
      return nextLocale
    })
  }

  const value = useMemo(
    () => ({
      locale,
      toggleLanguage,
      t: translations[locale],
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
