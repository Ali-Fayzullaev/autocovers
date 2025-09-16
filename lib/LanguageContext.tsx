"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Lang = "ru" | "kz";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LanguageContext = createContext<LangCtx | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("lang")) as Lang | null;
    if (saved) setLang(saved);
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  if (!mounted) return null;
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
