"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";

// Положите ваши фото работ в public/gallery/* (имена ниже можно заменить)
const images = [
  "/work/work1.png",
  "/work/work2.png",
  "/work/work3.png",
  "/work/work4.png",
  "/work/work5.png",
];

export function Gallery() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <section id="works" className="section">
      <h2 className="h2 mb-6">{t.works.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="aspect-[4/3] relative overflow-hidden rounded-2xl border border-white/10"
          >
            <Image src={src} alt={`work-${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
