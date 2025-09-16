"use client";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { useLanguage } from "@/lib/LanguageContext";
import { ShieldCheck, Gem, Palette, Gift } from "lucide-react";
import { motion } from "framer-motion";

const icons = [ShieldCheck, Palette, Gem, Gift];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Features() {
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;
  
  return (
    <section id="services" className="section py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="h2 mb-4 text-center text-[var(--fg)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.features.title}
        </motion.h2>
        
        <motion.p 
          className="text-center muted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.features.subtitle || "Премиальное качество и исключительный сервис для вашего автомобиля"}
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {t.features.items.map((text, i) => {
            const Icon = icons[i] || ShieldCheck;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-white/5 p-6 border border-gray-200 dark:border-white/10 hover:border-[var(--gold)] transition-all duration-500 hover:-translate-y-2 shadow-md dark:shadow-none"
              >
                {/* Декоративный элемент */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--gold)]/10 rounded-bl-full transition-all duration-500 group-hover:bg-[var(--gold)]/20"></div>
                
                {/* Иконка в круге */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 dark:bg-white/10 border border-[var(--gold)]/30 mb-5 group-hover:bg-[var(--gold)]/10 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[var(--gold)]" />
                </div>
                
                <p className="relative z-10 font-semibold text-lg text-[var(--fg)] mb-3 leading-tight">
                  {text}
                </p>
                
                <div className="relative z-10 h-1 w-10 bg-gradient-to-r from-[var(--gold)] to-transparent mb-4 rounded-full"></div>
                
                <p className="relative z-10 text-sm muted mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t.features.items?.[i] || "Подробное описание преимущества"}
                </p>
                
                {/* Эффект при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Декоративные элементы */}
        <div className="absolute left-10 top-20 w-40 h-40 bg-[var(--gold)]/5 rounded-full blur-xl opacity-30"></div>
        <div className="absolute right-10 bottom-20 w-40 h-40 bg-[var(--gold)]/5 rounded-full blur-xl opacity-30"></div>
      </div>
    </section>
  );
}