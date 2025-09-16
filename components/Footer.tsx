//components/Footer.tsx
"use client";

import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  return (
    <footer className="section pt-6">
      <div className="border-t border-white/10 pt-6 text-sm flex items-center justify-between">
        <span className="muted">{t.footer.rights}</span>
        <span className="text-[var(--gold)]">autocovers.kz</span>
      </div>
    </footer>
  );
}
