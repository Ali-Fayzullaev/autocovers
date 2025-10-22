"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, MapPin, Phone, MessageCircle } from "lucide-react";
import { useCity } from "@/lib/CityContext";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import { motion, AnimatePresence } from "framer-motion";

interface CityAction {
  type: "call" | "whatsapp";
  label?: string;
}

interface CityPickerProps {
  action: CityAction;
  children?: React.ReactNode;
  className?: string;
}

export function CityPicker({ action, children, className }: CityPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { selectedCity, setSelectedCity, getCityPhone, getCityWhatsApp } = useCity();
  const { lang } = useLanguage();
  const t = lang === "ru" ? ru : kz;

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonRect(rect);
    }
  }, [isOpen]);

  const cities = [
    { id: "astana" as const, name: lang === "ru" ? "Астана" : "Астана" },
    { id: "almaty" as const, name: lang === "ru" ? "Алматы" : "Алматы" },
  ];

  const currentCity = cities.find(city => city.id === selectedCity);

  const handleCitySelect = (cityId: typeof selectedCity) => {
    setSelectedCity(cityId);
    setIsOpen(false);
    
    // Выполняем действие после выбора города
    setTimeout(() => {
      if (action.type === "call") {
        window.location.href = `tel:${getCityPhone()}`;
      } else if (action.type === "whatsapp") {
        window.open(getCityWhatsApp(), "_blank");
      }
    }, 100);
  };

  const getActionIcon = () => {
    switch (action.type) {
      case "call":
        return <Phone className="h-4 w-4" />;
      case "whatsapp":
        return <MessageCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getActionLabel = () => {
    if (action.label) return action.label;
    
    switch (action.type) {
      case "call":
        return lang === "ru" ? "Позвонить" : "Қоңырау шалу";
      case "whatsapp":
        return lang === "ru" ? "WhatsApp" : "WhatsApp";
      default:
        return "";
    }
  };

  return (
    <div className="relative" style={{ zIndex: 50 }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${className || "btn-gold"}
          flex items-center gap-2 relative
        `}
      >
        {getActionIcon()}
        {children || getActionLabel()}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay - Desktop only */}
            <div
              className="fixed inset-0 z-[99998] bg-transparent hidden sm:block"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Overlay */}
            <div
              className="fixed inset-0 z-[99998] bg-black/20 backdrop-blur-sm block sm:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-2xl min-w-[200px] hidden sm:block"
              style={{ zIndex: 999999 }}
            >
              <div className="p-2">
                <div className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2 font-medium">
                  {lang === "ru" ? "Выберите город:" : "Қаланы таңдаңыз:"}
                </div>
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city.id)}
                    className={`
                      w-full text-left px-3 py-2.5 rounded-lg transition-colors duration-200 flex items-center gap-3
                      ${selectedCity === city.id 
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" 
                        : "hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100"
                      }
                    `}
                  >
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{city.name}</span>
                    {selectedCity === city.id && (
                      <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Mobile Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 bottom-4 z-[99999] bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden block sm:hidden"
            >
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="text-base font-semibold text-[var(--fg)] mb-1">
                    {lang === "ru" ? "Выберите город" : "Қаланы таңдаңыз"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {action.type === "call" ? 
                      (lang === "ru" ? "Для звонка" : "Қоңырау үшін") : 
                      (lang === "ru" ? "Для WhatsApp" : "WhatsApp үшін")
                    }
                  </div>
                </div>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleCitySelect(city.id)}
                      className={`
                        w-full text-left px-4 py-3.5 rounded-xl transition-colors duration-200 flex items-center gap-3
                        ${selectedCity === city.id 
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-2 border-amber-500/20" 
                          : "hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 border-2 border-gray-200 dark:border-slate-600"
                        }
                      `}
                    >
                      <MapPin className="h-5 w-5" />
                      <span className="font-medium text-base">{city.name}</span>
                      {selectedCity === city.id && (
                        <div className="ml-auto w-3 h-3 bg-amber-500 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-4 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-[var(--fg)] transition-colors"
                >
                  {lang === "ru" ? "Отмена" : "Болдырмау"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}