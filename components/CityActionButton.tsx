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
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className={`
          ${className || "btn-gold"}
          flex items-center gap-2 relative group
        `}
      >
        {getActionIcon()}
        <span>{getActionLabel()}</span>
        <div className="flex items-center gap-1 ml-1">
          <span className="text-xs opacity-75">({currentCityName})</span>
          <ChevronDown className="h-3 w-3 transition-transform duration-200" />
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 rounded-2xl">
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
                  w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group hover:shadow-md
                  ${selectedCity === city.id 
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-500/10 shadow-amber-100 dark:shadow-amber-500/20" 
                    : "border-gray-200 dark:border-slate-600 hover:border-amber-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  }
                `}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedCity === city.id 
                    ? "border-amber-500 bg-amber-500" 
                    : "border-gray-300 dark:border-gray-600 group-hover:border-amber-400"
                }`}>
                  {selectedCity === city.id && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 text-base mb-1">
                    {city.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {CITY_DATA[city.id].phone.replace("+7", "+7 ").replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4")}
                  </div>
                </div>
                
                <div className="text-2xl opacity-60 group-hover:opacity-80 transition-opacity">
                  {type === "call" ? "📞" : "💬"}
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 py-3 px-4 text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            {lang === "ru" ? "Отмена" : "Болдырмау"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}