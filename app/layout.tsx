import "./globals.css";
import { Providers } from "./providers";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Autocovers.kz — Авточехлы | Полики | Астана",
  description:
    "Индивидуальный пошив авточехлов и аксессуаров в Астане. Рассрочка Kaspi Red. Подарочные сертификаты.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>
          <LanguageProvider>
            <Navbar />
            {children}
            <WhatsAppFloat />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
