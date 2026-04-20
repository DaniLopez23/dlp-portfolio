"use client"

import { useEffect, useState } from "react"

interface UseMediaQueryOptions {
  defaultValue?: boolean
}

export function useMediaQuery(
  query: string,
  options: UseMediaQueryOptions = {}
): boolean {
  const { defaultValue = false } = options
  const [matches, setMatches] = useState(defaultValue)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const updateMatch = () => {
      setMatches(mediaQueryList.matches)
    }

    updateMatch()
    mediaQueryList.addEventListener("change", updateMatch)

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch)
    }
  }, [query])

  return matches
}