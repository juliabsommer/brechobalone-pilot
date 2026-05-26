import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogo from "@/components/Catalogo";
import Espacos from "@/components/Espacos";
import Sobre from "@/components/Sobre";
import Visite from "@/components/Visite";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Catalogo />
        <Espacos />
        <Sobre />
        <Visite />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
