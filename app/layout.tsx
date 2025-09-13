import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

// Задай домен у .env як NEXT_PUBLIC_SITE_URL="https://твій-домен"
// У деві спрацює fallback на localhost
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Universal Demo Site",
    template: "%s · Universal Demo Site",
  },
  description:
    "Лендінги, блоги, каталоги — швидко, акуратно, адаптивно. Замовляйте сайт під ключ.",
  openGraph: {
    title: "Universal Demo Site",
    description:
      "Лендінги, блоги, каталоги — швидко, акуратно, адаптивно.",
    url: "/",
    siteName: "Universal Demo Site",
    images: [
      {
        url: "/opengraph-image", // генеруємо у файлі app/opengraph-image.tsx
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Demo Site",
    description:
      "Лендінги, блоги, каталоги — швидко, акуратно, адаптивно.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <header className="border-b">
          <nav className="container py-3 flex items-center gap-6">
            <Link href="/" className="font-semibold">UDS</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/blog">Блог</Link>
              <Link href="/shop">Каталог</Link>
              <Link href="/contact">Контакти</Link>
              <Link href="/hire" className="btn btn-ghost">Hire me</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t">
          <div className="container py-8 text-sm opacity-70">
            © {new Date().getFullYear()} Universal Demo Site
          </div>
        </footer>
      </body>
    </html>
  );
}
