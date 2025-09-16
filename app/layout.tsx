import "./globals.css"
import { Providers } from "./providers"
import { LanguageProvider } from "@/lib/LanguageContext"

export const metadata = {
  title: "Autocovers.kz",
  description: "Авточехлы и аксессуары в Астане",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}
