"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LangToggle } from "@/components/LangToggle"
import { MobileMenu } from "@/components/MobileMenu"
import { useLanguage } from "@/lib/LanguageContext"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function Navbar() {
  const { lang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gold)]/10 bg-[var(--bg)]/90 backdrop-blur-xl">
      <div className="container-px mx-auto max-w-6xl h-16 flex items-center justify-between">
        {/* Логотип */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center group">
            <div className="p-1.5 bg-gradient-to-r from-[var(--gold)] to-amber-500 rounded-lg mr-2 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
              <Logo className="h-7 text-white" />
            </div>
          </Link>
        </motion.div>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {[
            { href: "#services", label: t.nav.services },
            { href: "#works", label: t.nav.works },
            { href: "#reviews", label: t.nav.reviews },
            { href: "#contacts", label: t.nav.contacts }
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative py-2 transition-all duration-300 hover:text-[var(--gold)] group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Правая часть: переключатели и кнопка */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Переключатель языка */}
            <div className="bg-white/10 dark:bg-white/10 p-1.5 rounded-xl border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors duration-300">
              <LangToggle />
            </div>
            
            {/* Переключатель темы */}
            <div className="bg-white/10 dark:bg-white/10 p-1.5 rounded-xl border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors duration-300">
              <ThemeToggle />
            </div>
            
            {/* Кнопка WhatsApp */}
            <motion.a
              href="https://wa.me/77785228800"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[var(--gold)] to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </motion.a>
          </motion.div>
          
          {/* Мобильное меню */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MobileMenu />
          </motion.div>
        </div>
      </div>

      {/* Декоративная золотая линия */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"></div>
    </header>
  )
}