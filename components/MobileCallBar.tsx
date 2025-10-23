// components/MobileCallBar.tsx
"use client";

import { CityActionButton } from "@/components/CityActionButton";

export function MobileCallBar() {
  return (
    <div
      className="
      fixed inset-x-0 bottom-0 z-40 md:hidden
      border-t border-gray-200 dark:border-gray-700 
      bg-white dark:bg-gray-900 backdrop-blur-md
    "
    >
      <div className="container-px mx-auto max-w-5xl py-3 flex items-center gap-3 justify-between">
        <CityActionButton
          type="call"
          className="flex-1 btn-outline-gold py-3.5 rounded-xl text-center justify-center font-medium"
        />
        <CityActionButton
          type="whatsapp"
          className="flex-1 btn-gold py-3.5 rounded-xl text-center justify-center font-medium "
        />
      </div>
    </div>
  );
}