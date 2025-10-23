"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { KaspiRedLogo } from "@/components/KaspiRedLogo";

// Константы с номерами
const CITIES = [
  {
    id: "astana",
    name: { ru: "Астана", kz: "Астана" },
    phone: "+77785228800",
    whatsapp: "https://wa.me/77785228800",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    id: "almaty", 
    name: { ru: "Алматы", kz: "Алматы" },
    phone: "+77067088225",
    whatsapp: "https://wa.me/77067088225",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700", 
  }
] as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  const handleWhatsApp = (whatsappUrl: string, cityName: string) => {
    console.log(`Opening WhatsApp for ${cityName}`);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFF6D8] via-white to-white dark:from-[#0B0F16] dark:via-[#0B0F16] dark:to-[#0B0F16]">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-24 -right-20 h-[26rem] w-[26rem] rounded-full bg-amber-200/20 blur-[60px]" />
        <div className="absolute -bottom-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-amber-200/10 blur-[70px]" />
      </div>

      <div className="section pt-16 pb-14 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Бейджи */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm"
        >
          {["Авточехлы", "3D/5D полики", "Подушки Майбах", "Сертификаты"].map(
            (label) => (
              <div
                key={label}
                className="rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300"
              >
                {label}
              </div>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
        >
          <p className="text-sm sm:text-base text-amber-600 dark:text-amber-400 text-center">
            {t.hero.note}
          </p>
          <KaspiRedLogo className="inline-block" />
        </motion.div>

        {/* Альтернативный вариант - еще более компактный */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row gap-2 justify-center items-stretch max-w-sm mx-auto"
        >
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => handleWhatsApp(city.whatsapp, city.name[lang as keyof typeof city.name])}
              className={`
                flex-1
                bg-gradient-to-r ${city.color} ${city.hoverColor}
                text-white
                px-3 py-2 text-xs font-medium rounded-lg
                flex items-center justify-center gap-1
                transition-all duration-200
                active:scale-95
                shadow-md hover:shadow-lg
                border-0
                min-h-[45px]
                relative
                group
                sm:px-4 sm:py-3 sm:text-sm sm:rounded-xl
              `}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold">WhatsApp</span>
              <span className="opacity-90">•</span>
              <span className="opacity-90">{city.name[lang as keyof typeof city.name]}</span>
            </button>
          ))}
        </motion.div>
        
      </div>

      {/* Декоративная линия */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[92%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
    </section>
  );
}