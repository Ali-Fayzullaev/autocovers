// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const cspParts = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' " + (isProd ? "" : "'unsafe-eval' ") +
    "https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://www.googletagservices.com https://www.google.com https://www.gstatic.com https://mc.yandex.ru",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://www.gstatic.com https://stats.g.doubleclick.net https://mc.yandex.ru https://www.google.kz https://google.kz",
  "img-src 'self' data: https://mc.yandex.ru https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.kz https://google.kz",
  "frame-src https://www.googletagmanager.com https://mc.yandex.ru https://www.google.com https://www.youtube.com https://pagead2.googlesyndication.com https://www.google.kz",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "object-src 'none'"
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspParts.join("; ") },
        ],
      },
    ];
  },
};

export default nextConfig;
