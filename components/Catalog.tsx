"use client"

import { ru } from "@/lib/translations/ru"
import { kz } from "@/lib/translations/kz"
import { useLanguage } from "@/lib/LanguageContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CarFront,
  Grid3X3,
  Layers,
  PanelsTopLeft,
  Feather,
  Gift,
  ArrowRight,
} from "lucide-react"

const ICONS = [CarFront, Grid3X3, Layers, PanelsTopLeft, Feather, Gift] as const

export function Catalog() {
  const { lang } = useLanguage()
  const t = lang === "ru" ? ru : kz

  return (
    <section className="section">
      <h2 className="h2 mb-6">{t.catalog.title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.catalog.items.map((it, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          return (
            <Card
              key={idx}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* тонкая золотая линия сверху при hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-4 right-4 -top-px h-px
                           bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent
                           opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <CardHeader className="flex flex-row items-center gap-4 pb-3">
                <div
                  className="
                    inline-flex h-12 w-12 items-center justify-center rounded-full
                    border border-white/10 bg-white/70 dark:bg-white/5
                  "
                >
                  <Icon className="h-6 w-6 text-[var(--gold)]" />
                </div>
                <CardTitle className="text-base sm:text-lg font-semibold">
                  {it.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="muted">{it.desc}</p>

                <a
                  href="https://wa.me/77785228800"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-4 inline-flex items-center gap-2 text-sm font-medium
                    text-[var(--gold)] hover:opacity-90
                  "
                >
                  Узнать подробнее <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>

              {/* мягкое золотистое свечение в правом верхнем углу */}
              <span
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(212,175,55,.18), rgba(212,175,55,0) 70%)",
                }}
              />
            </Card>
          )
        })}
      </div>
    </section>
  )
}
