"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  // После монтирования компонента, мы можем безопасно отображать тему
  useEffect(() => {
    setMounted(true);
  }, []);

  // Защита от гидратации - не отображаем до монтирования
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="theme"
        className="bg-white/80 border-[var(--gold)]/30"
      >
        <div className="h-4 w-4"></div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg-white/80 dark:bg-slate-800/80 border-[var(--gold)]/30 hover:border-[var(--gold)]/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-500" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </Button>
  );
}