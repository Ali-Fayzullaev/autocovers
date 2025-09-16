"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import { useLanguage } from "@/lib/LanguageContext"

export default function Hero() {
  const { lang, setLang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold"
      >
        {t.hero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
      >
        {t.hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Button asChild>
          <a href="https://wa.me/77785228800" target="_blank">
            {t.hero.button}
          </a>
        </Button>
      </motion.div>

      <div className="mt-4 flex gap-2">
        <Button variant="outline" onClick={() => setLang("ru")}>RU</Button>
        <Button variant="outline" onClick={() => setLang("kz")}>KZ</Button>
      </div>
    </section>
  )
}
