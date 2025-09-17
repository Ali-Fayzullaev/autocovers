"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type Review = { name: string; text: string; rating?: number };

const REVIEWS: Review[] = [
  {
    name: "Ержан Ширяев",
    text: "Заказывал. Сели идеально, отдельное спасибо установщику «Мастер своего дела». В общем рекомендую 👌",
    rating: 5,
  },
  {
    name: "Лязат Амиргалиева",
    text: "Заказ сделали за два дня, сиденья подошли идеально! Материалы отличные, салон как новый ❤",
    rating: 5,
  },
  {
    name: "Антон Орлов",
    text: "Сроки впечатляют, чехлы сидят плотно и аккуратно! Гарантия на швы и бесплатная установка — отличный сервис!",
    rating: 5,
  },
  {
    name: "Нурсулу Кудекова",
    text: "Пошив отличный, сидят плотно, установка бесплатная — рекомендую всем!",
    rating: 5,
  },
  {
    name: "Назира Будайханы",
    text: "Всё сделали аккуратно и быстро, теперь наслаждаюсь новым видом своего авто!",
    rating: 5,
  },
  {
    name: "Райкуль Махмутова",
    text: "Заказывала чехлы — подошли идеально, как будто сделаны специально для моего авто. Материал плотный, я довольна!",
    rating: 5,
  },
];

function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const { bg, fg } = getAvatarColors(name);

  return (
    <div
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-semibold"
      style={{ backgroundColor: bg, color: fg }}
      title={name}
      aria-label={name}
    >
      {letters}
    </div>
  );
}

/** ===== helpers ===== **/

// Вкусная палитра (Tailwind 500-шки), выглядит ярко в обеих темах
const PALETTE = [
  "#0ea5e9", // sky-500
  "#22c55e", // green-500
  "#eab308", // yellow-500
  "#ef4444", // red-500
  "#a855f7", // violet-500
  "#14b8a6", // teal-500
  "#f97316", // orange-500
  "#06b6d4", // cyan-500
  "#84cc16", // lime-500
  "#f43f5e", // rose-500
] as const;

function getAvatarColors(seed: string) {
  const idx = Math.abs(hash(seed)) % PALETTE.length;
  const bg = PALETTE[idx];
  const fg = pickTextColor(bg); // #000 или #fff по контрасту
  return { bg, fg };
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return h | 0;
}

function pickTextColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const lum = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b); // WCAG-луминанс
  return lum > 0.6 ? "#111111" : "#ffffff";
}

function hexToRgb(hex: string) {
  const v = hex.replace("#", "");
  const n = parseInt(v, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function toLin(c: number) {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-[var(--gold)] text-[var(--gold)]"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return
  
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
  
    const handleSelect = (inst?: CarouselApi) => {
      const ref = inst ?? api
      if (!ref) return
      setCurrent(ref.selectedScrollSnap())
    }
  
    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])
  

  return (
    <section id="reviews" className="section">
      <div className="mx-auto max-w-5xl">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="h2">{t.reviews.title}</h2>
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-sm backdrop-blur-sm dark:bg-white/10">
            <Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
            <span className="font-medium">5.0</span>
            <span className="opacity-70">на 2GIS</span>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {REVIEWS.map((r, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/3 p-2"
              >
                <article className="group relative h-full rounded-2xl border border-white/10 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/[0.04]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-4 right-4 -top-px h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Initials name={r.name} />
                      <div className="leading-tight">
                        <p className="font-semibold">{r.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400/80">
                          2GIS · ★★★★★
                        </p>
                      </div>
                    </div>
                    <Stars count={r.rating ?? 5} />
                  </header>
                  <p className="mt-3 text-[15px] leading-relaxed">{r.text}</p>
                  <footer className="mt-4 text-xs text-gray-500 dark:text-gray-400/80">
                    Проверенный отзыв
                  </footer>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 border-white/20 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20" />
          <CarouselNext className="right-3 border-white/20 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20" />
        </Carousel>

        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Перейти к слайду ${i + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === current
                  ? "bg-[var(--gold)] scale-110"
                  : "bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-sm backdrop-blur-sm dark:bg-white/10 sm:hidden">
          <Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
          <span className="font-medium">5.0</span>
          <span className="opacity-70">на 2GIS</span>
        </div>
      </div>
    </section>
  );
}
