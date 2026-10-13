import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://pathway.cl";
const TITLE = "Pathway — Software para transporte y bodega";
const DESCRIPTION =
  "Pathway reúne en un solo lugar la liquidación de transportistas y el control de inventario: prefacturas, flota, stock central y portal para distribuidores. Hecho en Chile.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Pathway" },
  description: DESCRIPTION,
  keywords:
    "software logístico, 3PL, liquidación de conductores, prefacturas, gestión de flota, control de inventario, portal mayorista, Chile",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pathway",
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
