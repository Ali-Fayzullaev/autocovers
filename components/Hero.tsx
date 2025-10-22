"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CityActionButton } from "@/components/CityActionButton";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { KaspiRedLogo } from "@/components/KaspiRedLogo";

export default function Hero() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  return (
    <section className="relative isolate overflow-hidden">
      {/* цветная подложка секции — заметно отделяет hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FFF6D8] via-white to-white dark:from-[#0B0F16] dark:via-[#0B0F16] dark:to-[#0B0F16]" />

      {/* нежные золотые подсветки */}
      <div
        className="pointer-events-none absolute -top-24 -right-20 h-[26rem] w-[26rem] -z-10 rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,.18), rgba(212,175,55,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[30rem] w-[30rem] -z-10 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,.14), rgba(212,175,55,0) 70%)",
        }}
      />

      {/* лёгкая сетка для глубины (тонкая и почти незаметная) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0 23px, currentColor 24px),linear-gradient(90deg,transparent 0 23px,currentColor 24px)",
          backgroundSize: "24px 24px",
          color: "rgba(0,0,0,.55)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="section pt-16 pb-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h1"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg muted"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* бейджи */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm"
        >
          {["Авточехлы", "3D/5D полики", "Подушки Майбах", "Сертификаты"].map(
            (label) => (
              <li
                key={label}
                className="rounded-full border border-white/15 px-3 py-1.5 bg-white/70 dark:bg-white/5 backdrop-blur-sm"
              >
                {label}
              </li>
            )
          )}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
        >
          <p className="text-sm sm:text-base text-[var(--gold)] text-center sm:text-left">
            {t.hero.note}
          </p>
          <KaspiRedLogo className="inline-block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8"
        >
          <CityActionButton
            type="whatsapp"
            label={t.hero.cta}
            className="btn-gold px-6 py-6 text-base rounded-2xl"
          />
        </motion.div>
      </div>

      {/* тонкая золотая линия снизу секции */}
      <div
        aria-hidden
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[92%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent"
      />
    </section>
  );
}
