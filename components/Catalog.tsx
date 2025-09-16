"use client";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Catalog() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  return (
    <section className="section">
      <h2 className="h2 mb-6">{t.catalog.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.catalog.items.map((it, idx) => (
          <Card key={idx} className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-brand-gold">{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="muted">{it.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
