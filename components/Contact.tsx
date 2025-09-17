"use client"

import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"
import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import {
  ADDRESS_MSW,
  ADDRESS_INSTALL,
  HOURS,
  PHONES,
  WHATSAPP_LINK,
  MAP_EMBED_GOOGLE,
  MAP_URL_GOOGLE,
  MAP_URL_2GIS,
} from "@/lib/config"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function Contact() {
  const { lang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  const L = useMemo(
    () =>
      lang === "ru"
        ? {
            title: t.contacts?.title ?? "Контакты",
            addressTitle: "Наш адрес",
            hoursTitle: "Режим работы",
            callTitle: "Телефоны",
            route: "Маршрут",
            openInGoogle: "Открыть в Google Maps",
            openIn2GIS: "Открыть в 2GIS",
            writeWhatsApp: "Написать в WhatsApp",
          }
        : {
            title: t.contacts?.title ?? "Байланыс",
            addressTitle: "Біздің мекенжай",
            hoursTitle: "Жұмыс уақыты",
            callTitle: "Телефондар",
            route: "Маршрут",
            openInGoogle: "Google Maps ашу",
            openIn2GIS: "2GIS ашу",
            writeWhatsApp: "WhatsApp-қа жазу",
          },
    [lang, t]
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Autocovers.kz",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Астана",
      streetAddress: "Mega Silk Way (паркинг, бутик 18)",
      addressCountry: "KZ",
    },
    telephone: PHONES.map((p) => p.tel),
    openingHours: "Mo-Su 10:00-20:00",
    url: "https://wa.me/77785228800",
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contacts" className="section py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <motion.h2 
        className="h2 mb-6 text-center text-[var(--fg)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {L.title}
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Левая колонка — карточки с адресом/часами/телефонами */}
        <div className="space-y-6">
          <motion.div 
            className="rounded-2xl bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-[var(--fg)] mb-2">{L.addressTitle}</h3>
                <p className="text-[var(--fg)] font-medium">{ADDRESS_MSW}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ADDRESS_INSTALL}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={MAP_URL_GOOGLE}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-sm font-medium text-[var(--fg)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-all duration-300"
                  >
                    <Navigation className="h-4 w-4" />
                    {L.openInGoogle}
                  </a>
                  <a
                    href={MAP_URL_2GIS}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-sm font-medium text-[var(--fg)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-all duration-300"
                  >
                    <Navigation className="h-4 w-4" />
                    {L.openIn2GIS}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-2xl bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[var(--fg)] mb-2">{L.hoursTitle}</h3>
                <p className="text-[var(--fg)] font-medium">{HOURS}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-2xl bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-[var(--gold)]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-[var(--fg)] mb-3">{L.callTitle}</h3>
                <ul className="space-y-2">
                  {PHONES.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="text-lg font-semibold text-[var(--fg)] hover:text-[var(--gold)] transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-[var(--gold)] rounded-full"></span>
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button asChild className="w-full bg-gradient-to-r from-[var(--gold)] to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {L.writeWhatsApp}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Правая колонка — карта */}
        <motion.div 
          className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <iframe
              src={MAP_EMBED_GOOGLE}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mega Silk Way — карта"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-sm font-medium text-center text-[var(--fg)]">
                ТД «Mega Silk Way» — паркинг, бутик 18
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute left-10 top-1/4 w-40 h-40 bg-[var(--gold)]/5 rounded-full blur-xl opacity-20"></div>
      <div className="absolute right-10 bottom-1/4 w-40 h-40 bg-[var(--gold)]/5 rounded-full blur-xl opacity-20"></div>
    </section>
  )
}