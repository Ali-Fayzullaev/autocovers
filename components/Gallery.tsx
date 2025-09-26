"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

// Файлы картинок положи в public/work/*
const IMAGES = [
  "/work/work1.png",
  "/work/work2.png",
  "/work/work3.png",
  "/work/work4.png",
  "/work/work5.png",
];

export function Gallery() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="works" className="section">
      <h2 className="h2 mb-6">{t.works.title}</h2>

      {/* Главный слайдер */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="relative rounded-2xl border border-white/10 overflow-hidden">
          <CarouselContent>
            {IMAGES.map((src, i) => (
              <CarouselItem key={i}>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={src}
                    alt={`work-${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* стрелки */}
          <CarouselPrevious className="left-3 border-white/20 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20" />
          <CarouselNext className="right-3 border-white/20 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20" />
        </div>

        {/* точки */}
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
      </Carousel>

      {/* Превью (thumbnails) */}
      <div className="mx-auto mt-5 w-full max-w-5xl">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={[
                "relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl border transition",
                i === current
                  ? "border-[var(--gold)] ring-2 ring-[var(--gold)]/30"
                  : "border-white/10 hover:border-white/20",
              ].join(" ")}
              aria-label={`Открыть слайд ${i + 1}`}
            >
              <Image
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                src={src}
                alt={`thumb-${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
