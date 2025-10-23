"use client";

import { useState } from "react";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ru } from "@/lib/translations/ru";
import { kz } from "@/lib/translations/kz";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Константы с номерами
const CITY_DATA = {
  astana: {
    name: { ru: "Астана", kz: "Астана" },
    phone: "+77785228800",
    whatsapp: "https://wa.me/77785228800"
  },
  almaty: {
    name: { ru: "Алматы", kz: "Алматы" },
    phone: "+77067088225", 
    whatsapp: "https://wa.me/77067088225"
  }
} as const;

interface CityActionButtonProps {
  type: "call" | "whatsapp";
  label?: string;
  className?: string;
}

export function CityActionButton({ type, label, className }: CityActionButtonProps) {
  const [selectedCity, setSelectedCity] = useState<"astana" | "almaty">("astana");
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  const cities = Object.entries(CITY_DATA).map(([key, data]) => ({
    id: key as keyof typeof CITY_DATA,
    name: data.name[lang as keyof typeof data.name]
  }));

  const currentCity = CITY_DATA[selectedCity];
  const currentCityName = currentCity.name[lang as keyof typeof currentCity.name];

  const handleAction = (cityId: keyof typeof CITY_DATA) => {
    setSelectedCity(cityId);
    setIsOpen(false);
    
    const cityInfo = CITY_DATA[cityId];
    
    setTimeout(() => {
      if (type === "call") {
        window.location.href = `tel:${cityInfo.phone}`;
      } else {
        window.open(cityInfo.whatsapp, "_blank");
      }
    }, 100);
  };

  const getActionIcon = () => {
    return type === "call" ? <Phone className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />;
  };

  const getActionLabel = () => {
    if (label) return label;
    
    if (type === "call") {
      return lang === "ru" ? "Позвонить" : "Қоңырау шалу";
    } else {
      return "WhatsApp";
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`
          ${className || "btn-gold"}
          flex items-center justify-center gap-2 w-full
          min-h-[64px]
          active:scale-[0.98]
          transition-all duration-150
          select-none
          touch-manipulation
          relative
          overflow-hidden
        `}
        style={{
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <div className="flex items-center justify-center gap-2 w-full px-2">
          {getActionIcon()}
          <span className="flex-1 text-center font-medium">{getActionLabel()}</span>
          <ChevronDown className="h-3 w-3 flex-shrink-0" />
        </div>
        
        <div className="absolute inset-0 bg-transparent" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 rounded-2xl w-[calc(100vw-2rem)] max-w-md">
          <DialogHeader className="text-center">
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {lang === "ru" ? "Выберите город" : "Қаланы таңдаңыз"}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
              {type === "call" 
                ? (lang === "ru" ? "Для звонка" : "Қоңырау үшін")
                : (lang === "ru" ? "Для WhatsApp" : "WhatsApp үшін")
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 mt-4">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleAction(city.id)}
                className={`
                  w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group
                  min-h-[70px]
                  active:scale-[0.98]
                  ${selectedCity === city.id 
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-500/10" 
                    : "border-gray-200 dark:border-slate-600 hover:border-amber-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  }
                `}
                style={{
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedCity === city.id 
                    ? "border-amber-500 bg-amber-500" 
                    : "border-gray-300 dark:border-gray-600"
                }`}>
                  {selectedCity === city.id && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 text-base truncate">
                    {city.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {CITY_DATA[city.id].phone}
                  </div>
                </div>
                
                <div className="text-2xl opacity-60 group-hover:opacity-80 transition-opacity flex-shrink-0">
                  {type === "call" ? "📞" : "💬"}
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-6 py-4 text-gray-500 dark:text-gray-400 text-base font-medium hover:text-gray-700 dark:hover:text-gray-200 transition-colors rounded-lg border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 active:scale-[0.98] min-h-[52px]"
            style={{
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {lang === "ru" ? "Отмена" : "Болдырмау"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}