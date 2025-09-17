"use client";

import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, PHONES, ADDRESS_MSW } from "@/lib/config";

export function Footer() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  return (
    <footer className="mt-20 relative">
      {/* Основной контент футера */}
      <div className="relative overflow-hidden rounded-t-3xl border-t border-[var(--gold)]/20 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        {/* Декоративные элементы */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212,175,55,.25), rgba(212,175,55,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212,175,55,.15), rgba(212,175,55,0) 70%)",
          }}
        />

        {/* Золотая линия сверху */}
        <div
          aria-hidden
          className="absolute left-1/2 -top-px h-px w-[94%] max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent"
        />

        {/* Основной контент */}
        <div className="section py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Лого и описание */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-[var(--gold)] rounded-full"></div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gold)] to-amber-400 bg-clip-text text-transparent">
                  Autocovers.kz
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t.footer.items ||
                  "Премиальные аксессуары для вашего автомобиля. Качество и стиль в каждой детали."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[var(--gold)]/50"></div>
                <span className="text-xs text-gray-500">Премиум качество</span>
              </div>
            </motion.div>

            {/* Контакты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-5 text-[var(--gold)]">
                Контакты
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[var(--gold)]" />
                  <div className="flex flex-col">
                    {PHONES.slice(0, 2).map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span className="text-sm text-gray-300">{ADDRESS_MSW}</span>
                </div>
              </div>
            </motion.div>

            {/* Быстрые ссылки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-5 text-[var(--gold)]">
                Навигация
              </h3>
              <nav className="space-y-2">
                <a
                  href="#services"
                  className="block text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#works"
                  className="block text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  {t.nav.works}
                </a>
                <a
                  href="#reviews"
                  className="block text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  {t.nav.reviews}
                </a>
                <a
                  href="#contacts"
                  className="block text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  {t.nav.reviews}
                </a>
              </nav>
            </motion.div>

            {/* Социальные сети и WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-5 text-[var(--gold)]">
                Свяжитесь с нами
              </h3>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--gold)] to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в WhatsApp
              </a>

              <div className="mt-6 p-3 bg-slate-800/50 rounded-xl border border-[var(--gold)]/20">
                <p className="text-xs text-gray-400 text-center">
                  Работаем ежедневно
                  <br />с 10:00 до 20:00
                </p>
              </div>
            </motion.div>
          </div>

          {/* Нижняя часть футера */}
          <motion.div
            className="mt-12 pt-8 border-t border-[var(--gold)]/20 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400">{t.footer.rights}</span>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">Разработано с</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse"></div>
                <span className="font-semibold tracking-wide text-[var(--gold)]">
                  autocovers.kz
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
