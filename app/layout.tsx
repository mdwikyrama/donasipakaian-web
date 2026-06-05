import type { Metadata, Viewport } from "next";
import { FloatingWhatsApp } from "./floating-wa";
import "./globals.css";

const SITE_URL = "https://donasipakaian.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DonasiPakaian.co — Berikan Pakaian, Lanjutkan Kebaikan",
    template: "%s | DonasiPakaian.co",
  },
  description:
    "Salurkan pakaian layak pakai dari rumahmu ke saudara yang membutuhkan. Mudah, terpercaya, dan ramah lingkungan. Berlokasi di Klender, Jakarta Timur.",
  keywords: [
    "donasi pakaian",
    "donasi baju",
    "pakaian layak pakai",
    "donasi jakarta",
    "donasipakaian.co",
    "siklus kebaikan",
    "klender jakarta timur",
  ],
  authors: [{ name: "DonasiPakaian.co" }],
  creator: "DonasiPakaian.co",
  icons: {
    icon: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "DonasiPakaian.co",
    title: "DonasiPakaian.co — Berikan Pakaian, Lanjutkan Kebaikan",
    description:
      "Salurkan pakaian layak pakai dari rumahmu ke saudara yang membutuhkan. Mudah, terpercaya, dan ramah lingkungan.",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "DonasiPakaian.co — Siklus Kebaikan Berlanjut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DonasiPakaian.co — Berikan Pakaian, Lanjutkan Kebaikan",
    description:
      "Salurkan pakaian layak pakai dari rumahmu ke saudara yang membutuhkan.",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="id">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
