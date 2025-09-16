"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Lang = "ru" | "kz"

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LangContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // пробуем взять язык из localStorage
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved) setLang(saved)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang)
  }, [lang, mounted])

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
