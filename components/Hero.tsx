"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/config";

export default function Hero() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  return (
    <section className="section pt-16 text-center">
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-1 text-sm text-brand-gold"
      >
        {t.hero.note}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8"
      >
        <Button asChild className="btn-gold px-6 py-6 text-base rounded-2xl">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            {t.hero.cta}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
