// components/MobileCallBar.tsx
"use client";

export function MobileCallBar() {
  return (
    <div
      className="
      fixed inset-x-0 bottom-0 z-40 md:hidden
      border-t border-white/10 bg-[var(--bg)]/80 backdrop-blur
    "
    >
      <div className="container-px mx-auto max-w-5xl py-3 flex items-center gap-2">
        <a
          href="tel:+77785228800"
          className="flex-1 btn-outline-gold py-3 rounded-xl text-center"
          aria-label="Позвонить"
        >
          Позвонить
        </a>
        <a
          href="https://wa.me/77785228800"
          className="flex-1 btn-gold py-3 rounded-xl text-center"
          aria-label="Написать в WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
