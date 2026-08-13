import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import ServiceWorkerCleanup from "@/components/ServiceWorkerCleanup";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agpr.vercel.app";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AGPR — Agir Pour Réussir | Association Cergy",
    template: "%s | AGPR Cergy",
  },
  description:
    "La Croix Petit – Agir Pour Réussir (AGPR) promeut la citoyenneté, le lien social et la réussite des jeunes à Cergy, quartier des Linandes.",
  keywords: [
    "AGPR",
    "Agir Pour Réussir",
    "Cergy",
    "Linandes",
    "association",
    "jeunesse",
    "bénévolat",
    "Val-d'Oise",
    "Maison de quartier",
  ],
  authors: [{ name: "AGPR — Agir Pour Réussir" }],
  creator: "AGPR",
  publisher: "AGPR",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AGPR — Agir Pour Réussir",
    description:
      "Association loi 1901 à Cergy — citoyenneté, jeunesse, lien social, quartier des Linandes.",
    locale: "fr_FR",
    type: "website",
    url: siteUrl,
    siteName: "AGPR — Agir Pour Réussir",
    images: [
      {
        url: "/logo-agpr.png",
        width: 1024,
        height: 1024,
        alt: "Logo AGPR — Agir Pour Réussir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGPR — Agir Pour Réussir",
    description: "Association à Cergy — jeunesse, citoyenneté, lien social",
    images: ["/logo-agpr.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bebas.variable} ${nunito.variable} antialiased`}>
        <JsonLd />
        <ServiceWorkerCleanup />
        {children}
      </body>
    </html>
  );
}
