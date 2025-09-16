"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex gap-2">
      <Button
        variant={lang === "ru" ? "default" : "outline"}
        onClick={() => setLang("ru")}
      >
        RU
      </Button>
      <Button
        variant={lang === "kz" ? "default" : "outline"}
        onClick={() => setLang("kz")}
      >
        KZ
      </Button>
    </div>
  );
}
