"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LangToggle } from "@/components/LangToggle"
import { MobileMenu } from "@/components/MobileMenu"   // <-- добавили
import { useLanguage } from "@/lib/LanguageContext"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"

export function Navbar() {
  const { lang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur">
      <div className="container-px mx-auto max-w-5xl h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-7" />
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-[15px]">
          <a href="#services" className="transition-colors hover:text-[var(--gold)]">{t.nav.services}</a>
          <a href="#works" className="transition-colors hover:text-[var(--gold)]">{t.nav.works}</a>
          <a href="#reviews" className="transition-colors hover:text-[var(--gold)]">{t.nav.reviews}</a>
          <a href="#contacts" className="transition-colors hover:text-[var(--gold)]">{t.nav.contacts}</a>
        </nav>

        {/* справа: на десктопе язык/тема/CTA, на мобилке — только бургер */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <a
              href="https://wa.me/77785228800"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex btn-gold px-3 py-2 text-sm rounded-xl shadow-gold"
            >
              WhatsApp
            </a>
          </div>
          <MobileMenu /> {/* md:hidden внутри, так что на десктопе не видно */}
        </div>
      </div>
    </header>
  )
}
