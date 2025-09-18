"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false} // ← отключаем системную тему
      storageKey="autocovers-theme" // ← добавляем ключ для localStorage
    >
      {children}
    </ThemeProvider>
  );
}