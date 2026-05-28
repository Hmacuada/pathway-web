import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pathway — Gestiona, planifica y liquida en una sola plataforma",
  description: "Plataforma logística para operadores 3PL. Planificación de rutas, liquidación de conductores, gestión de flota y más.",
  keywords: "logística, 3PL, planificación rutas, liquidación conductores, gestión flota, Chile",
  openGraph: {
    title: "Pathway — Plataforma Logística 3PL",
    description: "Gestiona, planifica y liquida en una sola plataforma.",
    url: "https://www.pathway.cl",
    siteName: "Pathway",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
