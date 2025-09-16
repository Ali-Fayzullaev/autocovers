"use client";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";

const REVIEWS = [
  {
    name: "Алмас",
    text: "Супер качество! Чехлы сели идеально, ребята помогли подобрать материал.",
  },
  {
    name: "Алия",
    text: "Брала чехлы и EVA коврики. Быстро, аккуратно, подарок к покупке — приятно!",
  },
  {
    name: "Руслан",
    text: "Устанавливал у них на KIA K5 — выглядит лучше, чем с завода.",
  },
];

export function Reviews() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <section id="reviews" className="section">
      <h2 className="h2 mb-6">{t.reviews.title}</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 p-5 bg-white/5"
          >
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="h-4 w-4 fill-brand-gold text-brand-gold"
                />
              ))}
            </div>
            <p className="mt-3">{r.text}</p>
            <p className="mt-2 text-sm muted">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
