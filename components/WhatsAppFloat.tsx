"use client";
import { CityActionButton } from "@/components/CityActionButton";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[40]">
      <CityActionButton
        type="whatsapp"
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full btn-gold shadow-gold"
      />
    </div>
  );
}
