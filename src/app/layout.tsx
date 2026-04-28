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
  title: "Brechó Balonê — Fê Bassi | Viva essa experiência",
  description:
    "Brechó Balonê, por Fernanda Bassi. Desde 2010 com curadoria premium de marcas nacionais e importadas em Porto Alegre. Viva essa experiência.",
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
