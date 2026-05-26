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
import { Fade } from "@/components/Fade";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Fade><Catalogo /></Fade>
        <Fade><Espacos /></Fade>
        <Fade><Galeria /></Fade>
        <Fade><Depoimentos /></Fade>
        <Fade><Sobre /></Fade>
        <Fade><Visite /></Fade>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
