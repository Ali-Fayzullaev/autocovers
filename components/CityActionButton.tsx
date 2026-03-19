"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ASTANA_PHONE = "+77785228800";
const ASTANA_WHATSAPP = "https://wa.me/77785228800";

interface CityActionButtonProps {
  type: "call" | "whatsapp";
  label?: string;
  className?: string;
}

export function CityActionButton({ type, label, className }: CityActionButtonProps) {
  const { lang } = useLanguage();

  const href = type === "call" ? `tel:${ASTANA_PHONE}` : ASTANA_WHATSAPP;
  const target = type === "whatsapp" ? "_blank" : undefined;

  const icon =
    type === "call" ? (
      <Phone className="h-4 w-4 flex-shrink-0" />
    ) : (
      <MessageCircle className="h-4 w-4 flex-shrink-0" />
    );

  const text =
    label ||
    (type === "call"
      ? lang === "ru"
        ? "Позвонить"
        : "Қоңырау шалу"
      : "WhatsApp");

  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className={`
        ${className || "btn-gold"}
        inline-flex items-center justify-center gap-2
        cursor-pointer select-none
        active:scale-95
        transition-all duration-200
      `}
      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}