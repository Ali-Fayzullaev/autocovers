"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";

export function Navbar() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur">
      <div className="section py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <a href="#services" className="hover:accent">
            {t.nav.services}
          </a>
          <a href="#works" className="hover:accent">
            {t.nav.works}
          </a>
          <a href="#reviews" className="hover:accent">
            {t.nav.reviews}
          </a>
          <a href="#contacts" className="hover:accent">
            {t.nav.contacts}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          <a
            href="https://wa.me/77785228800"
            target="_blank"
            className="hidden sm:inline-flex btn-gold px-3 py-2 rounded-xl font-semibold shadow-gold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
