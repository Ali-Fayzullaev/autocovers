"use client"

import { useCallback } from "react"
import { useLanguage } from "@/lib/LanguageContext"

type Variant = "nav" | "menu"

export function LangToggle({ variant = "nav" }: { variant?: Variant }) {
  const { lang, setLang } = useLanguage()

  const change = useCallback(
    (next: "ru" | "kz") => {
      if (lang !== next) setLang(next)
    },
    [lang, setLang]
  )

  const base =
    "inline-flex items-center justify-center rounded-full border transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
  const size =
    variant === "nav"
      ? "h-8 min-w-[2.5rem] px-3 text-sm"
      : "h-10 min-w-[3rem] px-4 text-base" // для оффканваса/мобилки
  const inactive =
    "border-white/15 text-[color:var(--fg)]/80 hover:border-[var(--gold)]/50 hover:text-[var(--gold)]/90"
  const active =
    "bg-[var(--gold)] text-black border-[var(--gold)] shadow-gold"

  return (
    <div
      role="tablist"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full bg-white/50 p-1 backdrop-blur-sm border border-white/10 dark:bg-white/10`}
    >
      <button
        type="button"
        role="tab"
        aria-selected={lang === "ru"}
        aria-label="Русский"
        className={`${base} ${size} ${lang === "ru" ? active : inactive}`}
        onClick={() => change("ru")}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") change("kz")
        }}
      >
        🇷🇺 RU
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={lang === "kz"}
        aria-label="Қазақша"
        className={`${base} ${size} ${lang === "kz" ? active : inactive}`}
        onClick={() => change("kz")}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") change("ru")
        }}
      >
        🇰🇿 KZ
      </button>
    </div>
  )
}
