import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brechó Balonê — Fê Bassi | Porto Alegre",
  description:
    "Brechó Balonê por Fê Bassi. Curadoria premium de marcas nacionais e importadas desde 2010, no Ipanema Sports — Zona Sul de Porto Alegre. Compre também pelo catálogo online.",
  keywords: [
    "brechó Porto Alegre",
    "brechó premium",
    "brechó Ipanema Porto Alegre",
    "Fê Bassi",
    "brechó feminino",
    "roupas de marca brechó",
    "moda circular Porto Alegre",
    "brechó Zona Sul",
  ],
  openGraph: {
    title: "Brechó Balonê — Fê Bassi",
    description:
      "Curadoria premium de marcas nacionais e importadas desde 2010. Visite o container amarelo no Ipanema Sports ou compre pelo catálogo online.",
    url: "https://brechobalone.com.br",
    siteName: "Brechó Balonê",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://brechobalone.com.br/images/fachada-vitrine.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada do Brechó Balonê — Fê Bassi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brechó Balonê — Fê Bassi",
    description:
      "Curadoria premium de marcas nacionais e importadas desde 2010, em Porto Alegre.",
    images: ["https://brechobalone.com.br/images/fachada-vitrine.jpg"],
  },
  metadataBase: new URL("https://brechobalone.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-balone-cream text-balone-text">
        {children}
      </body>
    </html>
  );
}
