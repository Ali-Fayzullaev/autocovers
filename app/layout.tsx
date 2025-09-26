// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileCallBar } from "@/components/MobileCallBar";
import Script from "next/script";

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
      <head>
        {/* Google Ads (gtag.js) */}
        <Script
          id="gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17463892692"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-17463892692');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KX9PLQ4N');
          `}
        </Script>

        {/* Yandex.Metrika */}
        <Script id="ym-init" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104212063', 'ym');

            ym(104212063, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>

        <Script id="gtag-conversion-fn" strategy="afterInteractive">
          {`
          window.sendGtagConversion = function() {
            try {
              console.log('[gtag] sendGtagConversion called');

              if (typeof gtag === 'function') {
                gtag('event', 'conversion', { 'send_to': 'AW-17463892692/1sfzCOawhJ4bENS1t4dB' });
                console.log('[gtag] gtag() called for conversion');
              } else {
                console.warn('[gtag] gtag is not defined yet, retrying in 500ms');
                setTimeout(function(){
                  if (typeof gtag === 'function') {
                    gtag('event', 'conversion', { 'send_to': 'AW-17463892692/1sfzCOawhJ4bENS1t4dB' });
                    console.log('[gtag] gtag() called for conversion (retry)');
                  } else {
                    console.warn('[gtag] still not available — sending image fallback');
                    // fallback: image pixel to googleadservices (may vary by region)
                    var img = new Image();
                    img.src = 'https://www.googleadservices.com/pagead/conversion/17463892692/?label=1sfzCOawhJ4bENS1t4dB&guid=ON&script=0';
                    img.onload = function(){ console.log('[gtag] image fallback loaded'); };
                    img.onerror = function(){ console.warn('[gtag] image fallback failed'); };
                  }
                }, 500);
              }
            } catch (err) {
              console.error('[gtag] sendGtagConversion error:', err);
            }
          };
        `}
        </Script>
      </head>
      <body>
        {/* GTM (noscript) — строго сразу после <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KX9PLQ4N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Yandex.Metrika (noscript) */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104212063"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <Providers>
          <LanguageProvider>
            <Navbar />
            {children}
            <WhatsAppFloat />
            <MobileCallBar />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
