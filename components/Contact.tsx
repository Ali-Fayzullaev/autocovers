"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import {
  ADDRESSES,
  HOURS,
  PHONE_MAIN,
  PHONE_ALT,
  WHATSAPP_LINK,
} from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";

export function Contact() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <section id="contacts" className="section">
      <h2 className="h2 mb-8">{t.contacts.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-brand-gold" />
            <h3 className="font-semibold">{t.contacts.addrTitle}</h3>
          </div>
          <ul className="space-y-2">
            {ADDRESSES.map((a, i) => (
              <li key={i} className="muted">
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Phone className="h-5 w-5 text-brand-gold" />
            <h3 className="font-semibold">{t.contacts.phoneTitle}</h3>
          </div>
          <div className="space-y-1">
            <a
              href={`tel:${PHONE_MAIN.replace(/\s/g, "")}`}
              className="font-medium hover:underline"
            >
              {PHONE_MAIN}
            </a>
            <br />
            <a
              href={`tel:${PHONE_ALT.replace(/\s/g, "")}`}
              className="font-medium hover:underline"
            >
              {PHONE_ALT}
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-5 w-5 text-brand-gold" />
            <h3 className="font-semibold">{t.contacts.hoursTitle}</h3>
          </div>
          <p className="muted">{HOURS}</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="mt-4 inline-flex btn-gold px-4 py-2 rounded-xl font-semibold"
          >
            {t.contacts.mapCta}
          </a>
        </div>
      </div>
    </section>
  );
}
