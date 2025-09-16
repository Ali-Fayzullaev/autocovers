"use client";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { ShieldCheck, Gem, Palette, Gift } from "lucide-react";

const icons = [ShieldCheck, Palette, Gem, Gift];

export function Features() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <section id="services" className="section">
      <h2 className="h2 mb-6">{t.features.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.features.items.map((text, i) => {
          const Icon = icons[i] || ShieldCheck;
          return (
            <div
              key={i}
              className="rounded-2xl border border-white/10 p-5 bg-white/5 dark:bg-white/5"
            >
              <Icon className="h-6 w-6 text-brand-gold" />
              <p className="mt-3 font-medium">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
