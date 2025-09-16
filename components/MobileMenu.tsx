"use client"

import { MessageCircle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { LangToggle } from "@/components/LangToggle"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useLanguage } from "@/lib/LanguageContext"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import { WHATSAPP_LINK, HOURS } from "@/lib/config"

export function MobileMenu() {
  const { lang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  return (
    <Sheet>
      {/* бургер */}
      <SheetTrigger asChild>
        <button
          aria-label="Открыть меню"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/10"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      {/* drawer справа; НЕ полноэкранный; фон панельки — ОПАК */}
      <SheetContent
        side="right"
        className="
          z-[100] w-[88vw] max-w-[420px]
          border-l border-white/10
          p-5 flex flex-col gap-0
          bg-white dark:bg-[#0B0F16] text-[var(--fg)]
          shadow-2xl
        "
      >
        <SheetHeader className="mb-2">
          <SheetTitle className="text-[var(--gold)]">Autocovers.kz</SheetTitle>
        </SheetHeader>

        <nav className="mt-2 flex flex-col text-base">
          <SheetClose asChild><a href="#services" className="py-3"> {t.nav.services} </a></SheetClose>
          <SheetClose asChild><a href="#works"    className="py-3"> {t.nav.works}    </a></SheetClose>
          <SheetClose asChild><a href="#reviews"  className="py-3"> {t.nav.reviews}  </a></SheetClose>
          <SheetClose asChild><a href="#contacts" className="py-3"> {t.nav.contacts} </a></SheetClose>
        </nav>

        <div className="my-4 h-px bg-white/10" />

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>

        <SheetClose asChild>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 btn-gold w-full justify-center py-3 rounded-xl shadow-gold inline-flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </SheetClose>

        <div className="mt-auto text-sm muted">
          <p>{HOURS}</p>
          <p>MEGA Silk Way, паркинг, бутик 18</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
