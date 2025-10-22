"use client";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Car, Layers, Shield, Sun, Pill, Gift } from "lucide-react";
import { CityActionButton } from "@/components/CityActionButton";

const catalogIcons = [Car, Layers, Shield, Sun, Pill, Gift];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function Catalog() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  
  return (
    <section className="section py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="h2 mb-4 text-center text-[var(--fg)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.catalog.title}
        </motion.h2>
        
        <motion.p 
          className="text-center muted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Широкий выбор качественных аксессуаров для вашего автомобиля
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {t.catalog.items.map((it, idx) => {
            const Icon = catalogIcons[idx] || Car;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10 hover:border-[var(--gold)] transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl dark:shadow-none"
              >
                {/* Декоративный уголок */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--gold)]/10 rounded-bl-full transition-all duration-500 group-hover:bg-[var(--gold)]/20"></div>
                
                {/* Иконка */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/10 border border-[var(--gold)]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-[var(--gold)]" />
                </div>
                
                {/* Заголовок */}
                <h3 className="relative z-10 font-bold text-xl text-[var(--fg)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {it.title}
                </h3>
                
                {/* Разделитель */}
                <div className="relative z-10 h-0.5 w-8 bg-gradient-to-r from-[var(--gold)] to-transparent mb-4 rounded-full"></div>
                
                {/* Описание */}
                <p className="relative z-10 muted leading-relaxed">
                  {it.desc}
                </p>
                
                {/* Эффект при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Кнопка "Подробнее" */}
                <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CityActionButton
                    type="whatsapp"
                    label={t.catalog.also}
                    className="text-sm font-medium text-[var(--gold)] hover:underline bg-transparent p-0 shadow-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Декоративные элементы */}
        <div className="absolute left-10 top-1/4 w-32 h-32 bg-[var(--gold)]/5 rounded-full blur-xl opacity-20"></div>
        <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-[var(--gold)]/5 rounded-full blur-xl opacity-20"></div>
      </div>
    </section>
  );
}