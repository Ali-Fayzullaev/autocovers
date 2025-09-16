"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/config";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      className="fixed bottom-6 right-6 z-[40] inline-flex items-center gap-2 px-4 py-3 rounded-full btn-gold shadow-gold"
    >
      <MessageCircle className="h-5 w-5" /> WhatsApp
    </a>
  );
}
