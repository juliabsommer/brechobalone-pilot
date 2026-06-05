import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogo from "@/components/Catalogo";
import Espacos from "@/components/Espacos";
import Galeria from "@/components/Galeria";
import Depoimentos from "@/components/Depoimentos";
import Sobre from "@/components/Sobre";
import Visite from "@/components/Visite";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Quote from "@/components/Quote";
import { Fade } from "@/components/Fade";
import { Marquee } from "@/components/Marquee";

const keywords = [
  "Curadoria Premium",
  "Fê Bassi",
  "Porto Alegre",
  "Desde 2010",
  "Moda Circular",
  "Ipanema Sports",
  "Brechó Chique",
  "Zona Sul",
];

const marcas = [
  "Gucci",
  "Zara",
  "Farm",
  "Animale",
  "Ellus",
  "Shoulder",
  "Reserva",
  "Colcci",
  "Schutz",
  "Melissa",
  "Le Lis Blanc",
  "Lacoste",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />

        {/* Faixa editorial de keywords */}
        <Marquee
          items={keywords}
          speed="slow"
          className="border-y border-balone-sand bg-balone-soft py-3.5"
          itemClassName="text-xs uppercase tracking-[0.28em] text-balone-muted"
        />

        <Fade><Catalogo /></Fade>

        {/* Faixa de marcas do acervo */}
        <Marquee
          items={marcas}
          direction="right"
          speed="slow"
          separator="·"
          className="border-y border-balone-sand bg-white py-4"
          itemClassName="font-display text-base italic text-balone-black/60"
        />

        <Fade><Espacos /></Fade>
        <Fade><Galeria /></Fade>

        {/* Quote manifesto */}
        <Quote />

        <Fade><Depoimentos /></Fade>
        <Fade><Sobre /></Fade>
        <Fade><Visite /></Fade>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
